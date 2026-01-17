import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import Template from '../assets/images/B5.png';
import CompaniesScroll from '../components/CompaniesScroll';
import StatsHero from "../components/StatsCarousel/StatsHero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import ExpertiseToggle from "../components/ExpertiseToggle/ExpertiseToggle";
import FAQ from "../components/FAQ/FAQ";
import ContactForm from "../components/ContactForm/ContactForm";
import BackgroundArrow from '../components/BackgroundArrow/BackgroundArrow';

export default function Home() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <BackgroundArrow />
                <div className="content">
                    <div className="hero">
                        <div className="hero-text">
                            <h1>
                                {t.hero.titlePart1}{t.hero.titlePart1 && " "}
                                <span style={{ color: '#Fa9100' }}>{t.hero.titleHighlight}</span> <br />
                                {t.hero.titlePart2}
                            </h1>

                            <p>
                                {language === 'fr' ? 'Chez ' : 'At '}<span style={{ color: '#Fa9100', fontWeight: 'bold' }}>{t.hero.companyName}</span>,
                                {language === 'fr' ? ' nous transformons votre data en levier de performance. De l\'analyse à l\'ingénierie, jusqu\'à l\'accompagnement sur diverses technologies cloud, nous construisons des solutions qui s\'adaptent à vos besoins et à votre croissance.' : ' we transform your data into a performance driver. From analysis to engineering, to support on various cloud technologies, we build solutions that adapt to your needs and growth.'}
                            </p>

                            <div className="hero-buttons">
                                <a href="#contact" aria-label="Contact"><button className="btn-primary">{t.hero.cta1}</button></a>
                                <a href="#contact" aria-label="Contact"><button className="btn-secondary">{t.hero.cta2}</button></a>
                            </div>
                        </div >

                        <div className="template">
                            <img src={Template} alt="Neyo Template" />
                        </div>
                    </div >
                </div >

                <CompaniesScroll />
                <StatsHero />
                <Services />

                <section id="secteurs" className="section secteurs-section">
                    <ExpertiseToggle />
                </section>

                <About />
                <FAQ />
                <ContactForm />

            </div >
        </>
    );
}
