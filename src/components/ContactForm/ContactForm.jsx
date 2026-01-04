import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../../hooks/useTranslation';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import './ContactForm.scss';

const ContactForm = () => {
    const t = useTranslation();
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                'service_dbgjmzp',
                'template_93s3zxb',
                formRef.current,
                '3mQXdNIfMwWOgkM9C'
            );

            if (result.text === 'OK') {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section-new">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>{t.contactForm.title}</h2>
                    <p>{t.contactForm.subtitle}</p>
                </div>

                <div className="contact-card">
                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t.contactForm.name} *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t.contactForm.placeholders.name}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t.contactForm.email} *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t.contactForm.placeholders.email}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">{t.contactForm.company}</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder={t.contactForm.placeholders.company}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">{t.contactForm.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={t.contactForm.placeholders.subject}
                                />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="message">{t.contactForm.message} *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t.contactForm.placeholders.message}
                                required
                            ></textarea>
                        </div>

                        <div className="form-footer">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 className="icon spin" />
                                        {t.contactForm.sending}
                                    </>
                                ) : (
                                    <>
                                        <Send className="icon" />
                                        {t.contactForm.send}
                                    </>
                                )}
                            </button>

                            <div className="status-container">
                                {status === 'success' && (
                                    <div className="status-msg success">
                                        <CheckCircle size={20} />
                                        <span>{t.contactForm.success}</span>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="status-msg error">
                                        <AlertCircle size={20} />
                                        <span>{t.contactForm.error}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
