'use client';
import React,{useState} from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import {useLanguage} from '../../components/LanguageProviderClient';
import {BreadcrumbJsonLd} from '../../components/JsonLd';
import styles from './contact.module.scss';
const EMAIL_SERVICE='service_doyjbce';
const EMAIL_TEMPLATE='template_ltqpn87';
const EMAIL_PUBLIC_KEY='_6Kn8BYouvEyTC5-0';
const marketLabels={maroc:'Maroc : offre nationale',international:'International : nearshore'};
const needLabels={projet:'Réalisation de projet',consultant:'Renfort de consultant',suivi:'Accompagnement récurrent'};
export default function ContactClient({initialMarket='',initialNeed='',initialProfile=''}){
 const{language}=useLanguage();const fr=language!=='en';
 const [data,setData]=useState({name:'',email:'',company:'',market:initialMarket,need:initialNeed,profile:initialProfile,message:''});
 const [status,setStatus]=useState('idle');
 const field=(name)=>({value:data[name],onChange:e=>setData({...data,[name]:e.target.value})});
 const subject=[data.market?marketLabels[data.market]:'Demande NEYO',needLabels[data.need]||'',data.profile].filter(Boolean).join(' | ');
 const body=`Entreprise : ${data.company}\nMarché : ${marketLabels[data.market]||''}\nBesoin : ${needLabels[data.need]||''}\nProfil / expertise : ${data.profile}\n\n${data.message}`;
 async function submit(e){e.preventDefault();setStatus('sending');try{
  await emailjs.send(EMAIL_SERVICE,EMAIL_TEMPLATE,{user_name:data.name,user_email:data.email,subject,message:body}, {publicKey:EMAIL_PUBLIC_KEY});
  setStatus('success');
 }catch{setStatus('error');}}
 return <div className={styles.container}>
  <BreadcrumbJsonLd items={[{name:'Contact',url:'/contact'}]}/>
  <header className={styles.header}><span className={styles.badge}>{fr?'PARLONS DE VOTRE BESOIN':'LET’S DISCUSS YOUR NEEDS'}</span><h1>{data.market==='maroc'?(fr?'Votre projet ou votre consultant au Maroc.':'Your project or consultant in Morocco.'):data.market==='international'?(fr?'Votre besoin nearshore international.':'Your international nearshore requirements.'):(fr?'Contactez NEYO Analytics.':'Contact NEYO Analytics.')}</h1><p className={styles.lead}>{fr?'Précisez le marché de votre entreprise et votre besoin. Nous pourrons cadrer le périmètre, les compétences et les modalités adaptés.':'Specify your company’s market and requirements so we can define scope, skills and suitable working arrangements.'}</p></header>
  <div className={styles.contactWrapper}>
   <aside className={styles.infoCol}><h2>{fr?'Le bon cadre pour votre demande.':'The right framework for your enquiry.'}</h2><p>{fr?'Entreprises au Maroc : réalisation de projets et renfort de consultants pour votre activité nationale.':'Companies in Morocco: project delivery and consultant support for your domestic operations.'}</p><p>{fr?'Clients internationaux : collaboration nearshore avec des consultants basés au Maroc.':'International clients: nearshore collaboration with Morocco-based consultants.'}</p><p><Link href="/entreprises-maroc">{fr?'Offre Maroc':'Morocco offer'}</Link> · <Link href="/nearshore-maroc">{fr?'Offre internationale':'International offer'}</Link></p><div className={styles.contactDirect}><h3>{fr?'Contact direct':'Direct contact'}</h3><a href="mailto:contact@neyo-analytics.com">contact@neyo-analytics.com</a></div></aside>
   <div className={styles.formCol}>
    {status==='success'?<div className={styles.successState} role="status"><h2>{fr?'Votre demande a été envoyée.':'Your enquiry has been sent.'}</h2><p>{fr?'Merci. Le marché et le type de besoin sont inclus dans votre message.':'Thank you. Your message includes the selected market and type of requirement.'}</p><button className={styles.btnReset} onClick={()=>setStatus('idle')}>{fr?'Revenir au formulaire':'Back to the form'}</button></div>:
    <form className={styles.form} onSubmit={submit}>
     <div className={styles.formRow}><div className={styles.formGroup}><label htmlFor="contact-name">{fr?'Nom':'Name'} *</label><input id="contact-name" autoComplete="name" required {...field('name')}/></div><div className={styles.formGroup}><label htmlFor="contact-email">{fr?'E-mail professionnel':'Business email'} *</label><input id="contact-email" type="email" autoComplete="email" required {...field('email')}/></div></div>
     <div className={styles.formGroup}><label htmlFor="contact-company">{fr?'Entreprise':'Company'} *</label><input id="contact-company" autoComplete="organization" required {...field('company')}/></div>
     <div className={styles.formRow}><div className={styles.formGroup}><label htmlFor="contact-market">{fr?'Votre marché':'Your market'} *</label><select id="contact-market" required {...field('market')}><option value="">{fr?'Choisir le marché':'Choose a market'}</option><option value="maroc">{fr?'Maroc : offre nationale':'Morocco: domestic offer'}</option><option value="international">{fr?'International : nearshore':'International: nearshore'}</option></select></div><div className={styles.formGroup}><label htmlFor="contact-need">{fr?'Votre besoin':'Your need'} *</label><select id="contact-need" required {...field('need')}><option value="">{fr?'Choisir le besoin':'Choose your need'}</option><option value="projet">{fr?'Réalisation de projet':'Project delivery'}</option><option value="consultant">{fr?'Renfort de consultant':'Consultant support'}</option><option value="suivi">{fr?'Accompagnement récurrent':'Ongoing support'}</option></select></div></div>
     <div className={styles.formGroup}><label htmlFor="contact-profile">{fr?'Profil ou expertise recherchée':'Required profile or expertise'}</label><input id="contact-profile" placeholder="Data Analyst, Engineer, Scientist, Power BI, Cloud…" {...field('profile')}/></div>
     <div className={styles.formGroup}><label htmlFor="contact-message">{fr?'Votre contexte':'Your context'} *</label><textarea id="contact-message" rows={5} required {...field('message')} placeholder={fr?'Outils actuels, objectif, rôle attendu et contraintes de la mission…':'Current tools, objectives, responsibilities and assignment constraints…'}/></div>
     {status==='error'&&<p role="alert">{fr?'L’envoi n’a pas abouti. Réessayez ou utilisez le lien e-mail ci-dessous.':'Your message could not be sent. Try again or use the email link below.'}</p>}
     <button className={styles.btnSubmit} type="submit" disabled={status==='sending'}>{status==='sending'?(fr?'Envoi en cours…':'Sending…'):(fr?'Envoyer ma demande':'Send my enquiry')}</button>
     <a href={`mailto:contact@neyo-analytics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>{fr?'Utiliser mon logiciel de messagerie':'Use my email application'}</a>
    </form>}
   </div>
  </div>
 </div>;
}
