'use client';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProviderClient';
import { siteContent } from '../translations/siteContent';
import MarketChoice from '../components/markets/MarketChoice';
import styles from '../components/markets/markets.module.scss';
export default function HomePageClient(){
 const {language}=useLanguage(); const fr=language!=='en'; const t=siteContent[fr?'fr':'en'];
 return <div className={styles.page}>
  <header className={styles.hero}><span className={styles.eyebrow}>NEYO ANALYTICS · DATA, BI & CLOUD</span><h1>{fr?'Des projets Data et des compétences pour faire avancer votre entreprise.':'Data projects and expertise to move your business forward.'}</h1><p>{fr?'Conseil, réalisation de projets et renfort de consultants Data, BI, IA et Cloud. Découvrez l’accompagnement adapté au marché de votre entreprise.':'Consulting, project delivery and Data, BI, AI and Cloud specialists. Find the offer suited to your company’s market.'}</p></header>
  <MarketChoice />
  <section className={styles.section}><span className={styles.eyebrow}>{fr?'EXPERTISES COMMUNES':'SHARED EXPERTISE'}</span><h2>{fr?'Des compétences qui répondent à vos usages.':'Expertise built around your use cases.'}</h2><div className={styles.grid}>{t.home.expertisesList.map(exp=><article className={styles.card} key={exp.slug}><h3>{exp.title}</h3><p>{exp.desc}</p><Link href={exp.link}>{fr?'Explorer cette expertise':'Explore this expertise'} →</Link></article>)}</div></section>
  <section className={`${styles.section} ${styles.cta}`}><h2>{fr?'Commencer par un besoin concret.':'Start with a concrete need.'}</h2><p>{fr?'Un reporting à fiabiliser, des flux à automatiser, une architecture à faire évoluer ou une compétence à intégrer : décrivons ensemble le périmètre et les prochaines étapes.':'A reporting process to improve, data flows to automate, an architecture to evolve or a specialist to join your team: let’s define the scope and next steps.'}</p><Link className={styles.primary} href="/contact">{fr?'Parler de mon besoin':'Discuss my needs'} →</Link></section>
 </div>;
}
