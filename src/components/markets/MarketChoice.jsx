'use client';
import Link from 'next/link';
import { useLanguage } from '../LanguageProviderClient';
import styles from './markets.module.scss';
export default function MarketChoice({ compact = false }) {
 const {language}=useLanguage(); const fr=language!=='en';
 return <section className={`${styles.choice} ${compact?styles.compact:''}`} aria-label={fr?'Choisir votre offre':'Choose your offer'}>
  <div className={styles.choiceHeader}><span className={styles.eyebrow}>{fr?'DEUX OFFRES, UN MÊME SAVOIR-FAIRE':'TWO OFFERS, SHARED EXPERTISE'}</span><h2>{fr?'Votre entreprise est au Maroc ou à l’international ?':'Is your company in Morocco or abroad?'}</h2></div>
  <div className={styles.twoColumns}>
   <Link href="/entreprises-maroc" className={`${styles.marketCard} ${styles.national}`}><span className={styles.kicker}>{fr?'MARCHÉ NATIONAL':'MOROCCAN MARKET'}</span><h3>{fr?'Entreprises au Maroc':'Companies in Morocco'}</h3><p>{fr?'Confiez-nous un projet Data, BI ou Cloud, ou renforcez votre équipe avec un consultant spécialisé.':'Delegate a Data, BI or Cloud project, or strengthen your team with a specialist consultant.'}</p><strong>{fr?'Découvrir l’offre Maroc':'Explore the Morocco offer'} <span aria-hidden="true">↗</span></strong></Link>
   <Link href="/nearshore-maroc" className={`${styles.marketCard} ${styles.international}`}><span className={styles.kicker}>{fr?'CLIENTS INTERNATIONAUX':'INTERNATIONAL CLIENTS'}</span><h3>{fr?'Nearshore international':'International nearshore'}</h3><p>{fr?'Renforcez vos équipes à l’étranger avec des consultants Data & IA basés au Maroc et un cadre de collaboration à distance.':'Strengthen your teams abroad with Morocco-based Data & AI consultants and an agreed remote delivery framework.'}</p><strong>{fr?'Découvrir l’offre nearshore':'Explore nearshore delivery'} <span aria-hidden="true">↗</span></strong></Link>
  </div>
 </section>;
}
