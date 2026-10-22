'use client';
import Link from 'next/link';
import {useLanguage} from '../LanguageProviderClient';
import styles from './markets.module.scss';
export default function InternationalNotice(){const{language}=useLanguage();const fr=language!=='en';return <aside className={styles.switch}><strong>{fr?'Parcours international : nearshore depuis le Maroc.':'International route: nearshore from Morocco.'}</strong>{' '}{fr?'Votre entreprise exerce au Maroc ?':'Does your company operate in Morocco?'}{' '}<Link href="/entreprises-maroc">{fr?'Voir l’offre nationale':'View the domestic offer'} →</Link></aside>;}
