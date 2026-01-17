import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import './ContactForm.scss';

const ContactForm = () => {
    const { language } = useLanguage();
    const t = translations[language].contactForm;
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                'service_doyjbce',
                'template_ltqpn87',
                form.current,
                {
                    publicKey: '_6Kn8BYouvEyTC5-0',
                }
            )
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                }
            );
    };

    return (
        <section id="contact" className="contact-form-section">
            <div className="contact-content">
                <div className="contact-text">
                    <h2>{t.title}</h2>
                    <p>{t.description}</p>
                </div>
                <div className="contact-container">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="user_name">{t.name}</label>
                            <input type="text" name="user_name" id="user_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">{t.email}</label>
                            <input type="email" name="user_email" id="user_email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">{t.subject}</label>
                            <input type="text" name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t.message}</label>
                            <textarea name="message" id="message" rows="5" required />
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? t.sending : t.send}
                        </button>
                        {status === 'success' && <p className="status-msg success">{t.success}</p>}
                        {status === 'error' && <p className="status-msg error">{t.error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
