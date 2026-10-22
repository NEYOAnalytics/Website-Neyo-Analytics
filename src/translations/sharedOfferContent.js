const expertiseDescriptions={
 powerbi:['Modèles de données, mesures DAX, rapports et diffusion Power BI adaptés à vos indicateurs métier.','Data models, DAX measures, reports and Power BI distribution built around your business metrics.'],
 dataEng:['Intégration des sources, pipelines et transformations pour des données contrôlées et réutilisables.','Source integration, pipelines and transformations for controlled, reusable data.'],
 cloud:['Architecture et exploitation des plateformes Data sur Azure, AWS, Google Cloud et Microsoft Fabric.','Architecture and operation of Data platforms on Azure, AWS, Google Cloud and Microsoft Fabric.'],
 ia:['Évaluation des cas d’usage, préparation des données et développement de solutions d’IA mesurables.','Use-case evaluation, data preparation and development of measurable AI solutions.'],
 palantir:['Intégration de données, modélisation métier et applications autour de Palantir Foundry et de son Ontology.','Data integration, business modelling and applications with Palantir Foundry and its Ontology.'],
 tableau:['Conception de rapports, modèles et migrations entre Tableau, Qlik et Looker selon votre environnement.','Report design, models and migrations across Tableau, Qlik and Looker for your environment.'],
 dataGovernance:['Définitions, responsabilités, qualité et contrôles d’accès pour rendre vos données utilisables par les bonnes personnes.','Definitions, ownership, quality and access controls to make data usable by the right people.']
};
const roleDescriptions={
 dataEngineer:expertiseDescriptions.dataEng,powerBi:expertiseDescriptions.powerbi,biDeveloper:expertiseDescriptions.tableau,
 dataAnalyst:['Analyse métier, définition d’indicateurs et automatisation des reportings pour vos équipes.','Business analysis, metric definitions and reporting automation for your teams.'],
 dataScientist:expertiseDescriptions.ia,dataArchitect:expertiseDescriptions.cloud
};
export function sharedOfferContent(original,key,lang,type){
 const fr=lang==='fr';const desc=(type==='expertise'?expertiseDescriptions:roleDescriptions)[key]?.[fr?0:1]||original.lead;
 return {...original,h1:original.h1.replace(/\s*nearshore\s*/gi,' ').replace(/\s+/g,' ').trim(),lead:desc,
  bodyTitle:fr?'Un périmètre technique et des résultats à vérifier.':'A technical scope with verifiable outcomes.',
  bodyText1:desc,bodyText1b:'',
  bodyText2:type==='expertise'?(fr?'Nous précisons avec vous les sources, les accès, les règles métier et les critères de réception. Les éléments de documentation et de reprise font partie du périmètre à convenir.':'We define sources, access, business rules and acceptance criteria together. Documentation and handover are part of the agreed scope.'):(fr?'Le rôle, la stack, le niveau d’expérience et le pilotage sont définis avec votre équipe. La disponibilité et les modalités de mission sont confirmées après qualification du besoin.':'Responsibilities, stack, experience and management are defined with your team. Availability and assignment arrangements are confirmed after reviewing your needs.'),
  bodyText2Link:false,bodyText2b:'',pricing:null,
  faq:(original.faq||[]).filter(({q,a})=>!/(nearshore|france|€|48h|certifi|garanti|économ|savings|same time)/i.test(q+' '+a)),
  ctaTitle:fr?'Parlons de votre besoin Data, BI ou Cloud.':'Let’s discuss your Data, BI or Cloud needs.',
  ctaDesc:fr?'Choisissez l’offre Maroc ou le parcours international ci-dessous pour préciser le cadre de votre demande.':'Choose the Morocco offer or the international route below to specify your requirements.',
  ctaBtn:fr?'Décrire mon besoin':'Describe my needs'
 };
}
