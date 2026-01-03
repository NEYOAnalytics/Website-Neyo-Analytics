import PowerBI_ROI from '../assets/PowerBI_ROI.pdf';

export const translations = {
    fr: {
        // Header
        nav: {
            services: "Services",
            secteurs: "Expertises",
            about: "A propos",
            blog: "Blog",
            language: "Français"
        },
        // Hero
        hero: {
            titlePart1: "Des solutions",
            titleHighlight: "DATA",
            titlePart2: "qui évoluent avec vous",
            description: "Chez Neyo Analytics, nous transformons votre data en levier de performance. De l'analyse à l'ingénierie, jusqu'à l'accompagnement sur diverses technologies cloud, nous construisons des solutions qui s'adaptent à vos besoins et à votre croissance.",
            companyName: "Neyo Analytics",
            cta1: "Prendre RDV",
            cta2: "Contactez-nous"
        },
        // Companies Scroll
        companiesScroll: {
            title: "Entreprises avec lesquelles nous avons contribué",
            description: "Nos experts ont acquis une expérience opérationnelle au sein de ces entreprises dans le cadre de missions professionnelles individuelles."
        },
        // Carousel Stats
        carousel: {
            slides: [
                {
                    value: "77%",
                    text: "des entreprises data-driven améliorent leur prise de décision",
                    source: "Source : études McKinsey & Gartner"
                },
                {
                    value: "5x",
                    text: "augmentation de la vitesse d'analyse avec des pipelines optimisés",
                    source: "Retour terrain & benchmarks data"
                },
                {
                    value: "90%",
                    text: "des problèmes data viennent de pipelines mal conçus",
                    source: "Observations projets BI"
                },
                {
                    value: "Multi-Cloud",
                    text: "AWS · Azure · GCP · On-Prem",
                    source: "Expertise Neyo Analytics"
                }
            ]
        },
        // Stats Hero
        statsHero: {
            card1Title: "Des équipes data qualifiées en évolution permanente pour répondre à vos besoins.",
            card1Desc: "Nos consultants spécialisés suivent régulièrement des formations sur les outils qu'ils utilisent, garantissant à nos clients l'accès à une expertise pointue et une veille technologique continue.",
            card2Title: "Des solutions data adaptées à vos besoins.",
            card2Desc: "Audit, mise en place d'ETL et déploiement de rapports Power BI. Nos consultants vous accompagnent dans la construction d'outils data parfaitement adaptés aux besoins de vos équipes.",
            actionButton: "Prendre RDV"
        },
        // Services
        services: {
            title: "Nos Services",
            items: [
                {
                    title: "Data & Analytics",
                    description: "Collecte, analyse et valorisation de vos données pour des décisions éclairées. Tableaux de bord et reporting."
                },
                {
                    title: "Business Intelligence",
                    description: "Transformez vos données en décisions stratégiques grâce à des tableaux de bord interactifs et intuitifs (Power BI, Tableau)."
                },
                {
                    title: "Data Engineering",
                    description: "Structurez et automatisez vos flux de données avec des architectures solides et évolutives. De la collecte à l'intégration, nous bâtissons les fondations de votre écosystème data."
                },
                {
                    title: "Data Science",
                    description: "Exploitez la puissance des algorithmes et du Machine Learning pour révéler tout le potentiel de vos données. Prédictions, optimisation et automatisation des processus."
                },
                {
                    title: "Palantir",
                    description: "Exploitez vos données à grande échelle avec des solutions d'analyse avancées. Maximisez l'impact de votre plateforme Palantir existante. Nos consultants experimentés vous accompagnent dans la configuration, l'optimisation et l'exploitation de vos données sur Palantir pour des analyses précises et des décisions éclairées, sans avoir à repartir de zéro."
                },
                {
                    title: "Data Gouvernance",
                    description: "Garantissez la conformité, la sécurité et la tracabilité de vos données. Nous vous aidons à instaurer une gouvernance solide pour des décisions responsables et durables."
                }
            ],
            toolsTitle: "Notre Écosystème d'Outils"
        },
        // Tools
        tools: {
            categories: {
                analyticsBI: "Analytics & BI",
                dataEngineering: "Data Engineering",
                productionWorkflow: "Production & Workflow Management",
                languagesTools: "Langages & outils"
            },
            items: {
                "Power BI": "L'outils de référence pour le reporting intéractif et la visualisation de données.",
                "Tableau": "Idéal pour les analyses visuelles avancées et les représentations graphiques percutantes.",
                "Palantir_desc": "Conçu pour traiter des volumes massifs de données complexes et hétérogènes.",
                "DataBricks": "Plateforme unifiée pour l'ingénierie, la science et l'analyse des données.",
                "Snowflake": "Solution cloud moderne de gestion et d'analyse des données.",
                "Denodo": "Plateforme de virtualisation de données, permet d'accéder et de gérer vos données en temps réel.",
                "Airflow": "Outil de gestion et d’orchestration de workflows, permet d’automatiser vos pipelines.",
                "MLflow": "Plateforme open-source pour gérer le cycle de vie des modèles de machine learning.",
                "TeamCity": "Outil d’intégration et de déploiement continu.",
                "Python": "Langage de programmation polyvalent et puissant.",
                "SQL": "Langage standard pour interroger et gérer les bases de données relationnelles.",
                "PySpark": "Framework essentiel pour le traitement de données à grande échelle.",
                "TypeScript": "Langage moderne ajoutant typage et robustesse au développement."
            }
        },
        // Expertises
        secteurs: {
            title: "Expertises",
            description: "Nous aidons les entreprises à exploiter pleinement leurs données pour mieux piloter leur activité et prendre des décisions éclairées. De l’analyse et la structuration des données à la création de tableaux de bord interactifs et de solutions analytiques avancées, nous concevons des dispositifs sur mesure, fiables et évolutifs, adaptés aux enjeux métiers et aux environnements existants."
        },
        // About
        about: {
            title: "A propos",
            expertiseTitle: "Une expertise pluridisciplinaire à votre service",
            experts: "Experts passionnés",
            projects: "Projets",
            years: "Années",
            ctaText: "Prêt à collaborer avec des experts data ?",
            ctaButton: "Rencontrons-nous"
        },
        // Join Us
        joinUs: {
            title: "Nous rejoindre",
            description: "Rejoignez une équipe dynamique et participez à des projets innovants qui façonnent l'avenir."
        },
        // Footer
        footer: {
            description: "Des solutions data qui évoluent avec vous. Excellence et innovation au service de vos projets.",
            servicesTitle: "Services",
            resourcesTitle: "Ressources",
            contactTitle: "Nous contacter",
            ServicesTitle: "Services",
            ExpertisesTitle: "Expertises",
            aboutLink: "À propos",
            secteursLink: "Secteurs",
            joinLink: "Nous rejoindre",
            contactLink: "Contact",
            privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation",
            rights: "Tous droits réservés."
        },
        // Blog
        blog: {
            title: "Blog Neyo Analytics",
            intro: "Découvrez nos articles, insights et actualités sur la data, l'intelligence artificielle et les technologies cloud.",
            comingSoon: "Contenu à venir",
            description: "Cette section sera prochainement enrichie avec des articles de blog optimisés pour le SEO, couvrant les sujets suivants :",
            topics: [
                "Meilleures pratiques en Data Engineering",
                "Tendances en Business Intelligence",
                "Cas d'usage Palantir",
                "Optimisation des pipelines de données",
                "Intelligence Artificielle et Machine Learning"
            ]
        },
        // FAQ
        faq: {
            title: "Foire aux questions",
            items: [
                {
                    question: "Comment Neyo Analytics accompagne-t-il la transformation data ?",
                    answer: "Nous réalisons un audit complet de votre infrastructure existante pour identifier les leviers de performance. Ensuite, nous concevons et déployons des pipelines de données sur mesure et des tableaux de bord interactifs pour valoriser vos données."
                },
                {
                    question: "Quelles technologies maîtrisez-vous ?",
                    answer: "Nos experts maîtrisent un large éventail d'outils et de langages, notamment Power BI, Tableau, Palantir, Python, SQL, Azure, AWS, et plus encore, pour répondre à tous vos besoins en data engineering et business intelligence."
                },
                {
                    question: "Proposez-vous des formations pour nos équipes ?",
                    answer: "Oui, le transfert de compétences fait partie intégrante de notre approche. Nous formons vos équipes à l'utilisation des nouveaux outils et aux meilleures pratiques pour garantir leur autonomie sur le long terme."
                },
                {
                    question: "Comment démarrer un projet avec vous ?",
                    answer: "C'est simple ! Contactez-nous via notre formulaire ou prenez rendez-vous directement. Nous organiserons un premier échange pour comprendre vos enjeux et vous proposer une solution adaptée."
                },
                {
                    question: "Comment mesurer le ROI de mon projet ?",
                    answer: "Le ROI se mesure par l'amélioration de la productivité et de la prise de décision. En moyenne, nos solutions BI sont rentabilisées en moins de 6 mois, avec un retour sur investissement constaté de 321% sur 3 ans.",
                    pdf: PowerBI_ROI,
                    pdfLabel: "Voir l'étude complète (PDF)"
                },
                {
                    question: "Quels types d’entreprises peuvent bénéficier de nos services ?",
                    answer: "Nos services s’adressent à toutes les entreprises, qu’elles soient grandes, moyennes ou petites. Que vous souhaitiez optimiser vos processus, exploiter vos données ou automatiser certaines tâches, nous adaptons nos solutions à vos besoins et à votre niveau de maturité data."
                },
            ]
        }
    },
    en: {
        // Header
        nav: {
            services: "Services",
            secteurs: "Expertises",
            about: "About",
            blog: "Blog",
            language: "English"
        },
        // Hero
        hero: {
            titlePart1: "",
            titleHighlight: "DATA",
            titlePart2: "solutions that grow with you",
            description: "At Neyo Analytics, we transform your data into a performance driver. From analysis to engineering, to support on various cloud technologies, we build solutions that adapt to your needs and growth.",
            companyName: "Neyo Analytics",
            cta1: "Book a Meeting",
            cta2: "Contact Us"
        },
        // Companies Scroll
        companiesScroll: {
            title: "Companies we have contributed with",
            description: "Our experts have gained operational experience within these companies through individual professional missions."
        },
        // Carousel Stats
        carousel: {
            slides: [
                {
                    value: "77%",
                    text: "of data-driven companies improve their decision-making",
                    source: "Source: McKinsey & Gartner studies"
                },
                {
                    value: "5x",
                    text: "increase in analysis speed with optimized pipelines",
                    source: "Field feedback & data benchmarks"
                },
                {
                    value: "90%",
                    text: "of data problems come from poorly designed pipelines",
                    source: "BI project observations"
                },
                {
                    value: "Multi-Cloud",
                    text: "AWS · Azure · GCP · On-Prem",
                    source: "Neyo Analytics Expertise"
                }
            ]
        },
        // Stats Hero
        statsHero: {
            card1Title: "Qualified data teams in constant evolution to meet your needs.",
            card1Desc: "Our specialized consultants regularly undergo training on the tools they use, ensuring our clients access to cutting-edge expertise and continuous technological monitoring.",
            card2Title: "Data solutions tailored to your needs.",
            card2Desc: "Audit, ETL implementation, and Power BI report deployment. Our consultants support you in building data tools perfectly adapted to your teams' needs.",
            actionButton: "Book a Meeting"
        },
        // Services
        services: {
            title: "Our Services",
            items: [
                {
                    title: "Data & Analytics",
                    description: "Collection, analysis, and valorization of your data for informed decision-making. Dashboards and reporting."
                },
                {
                    title: "Business Intelligence",
                    description: "Transform your data into strategic decisions with interactive and intuitive dashboards (Power BI, Tableau)."
                },
                {
                    title: "Data Engineering",
                    description: "Structure and automate your data flows with robust and scalable architectures. From collection to integration, we build the foundations of your data ecosystem."
                },
                {
                    title: "Data Science",
                    description: "Leverage the power of algorithms and Machine Learning to reveal the full potential of your data. Predictions, optimization, and process automation."
                },
                {
                    title: "Palantir",
                    description: "Leverage your data at scale with advanced analytics solutions. Maximize the impact of your existing Palantir platform. Our experienced consultants support you in configuring, optimizing, and exploiting your data on Palantir for precise analysis and informed decisions, without having to start from scratch."
                },
                {
                    title: "Data Gouvernance",
                    description: "Ensure compliance, security, and traceability of your data. We help you establish solid governance for responsible and sustainable decisions."
                }
            ],
            toolsTitle: "Our Tools Ecosystem"
        },
        // Tools
        tools: {
            categories: {
                analyticsBI: "Analytics & BI",
                dataEngineering: "Data Engineering",
                productionWorkflow: "Production & Workflow Management",
                languagesTools: "Languages & Tools"
            },
            items: {
                "Power BI": "The reference tool for interactive reporting and data visualization.",
                "Tableau": "Ideal for advanced visual analysis and impactful graphic representations.",
                "Palantir_desc": "Designed to process massive volumes of complex and heterogeneous data.",
                "DataBricks": "Unified platform for data engineering, science, and analytics.",
                "Snowflake": "Modern cloud solution for data management and analysis.",
                "Denodo": "Data virtualization platform, allows access and management of your data in real-time.",
                "Airflow": "Workflow management and orchestration tool, allows automation of your pipelines.",
                "MLflow": "Open-source platform to manage the lifecycle of machine learning models.",
                "TeamCity": "Continuous integration and deployment tool.",
                "Python": "Versatile and powerful programming language.",
                "SQL": "Standard language for querying and managing relational databases.",
                "PySpark": "Essential framework for large-scale data processing.",
                "TypeScript": "Modern language adding typing and robustness to development."
            }
        },
        // Secteurs
        secteurs: {
            title: "Expertises",
            description: "We help organizations fully leverage their data to better manage their operations and make informed decisions. From data analysis and structuring to the design of interactive dashboards and advanced analytics solutions, we deliver tailored, reliable, and scalable approaches aligned with business needs and existing environments."
        },
        // About
        about: {
            title: "About",
            expertiseTitle: "Multidisciplinary expertise at your service",
            experts: "Passionate Experts",
            projects: "Projects",
            years: "Years",
            ctaText: "Ready to collaborate with data experts?",
            ctaButton: "Let's Meet"
        },
        // Join Us
        joinUs: {
            title: "Join Us",
            description: "Join a dynamic team and participate in innovative projects shaping the future."
        },
        // Footer
        footer: {
            description: "Data solutions that grow with you. Excellence and innovation serving your projects.",
            servicesTitle: "Services",
            resourcesTitle: "Resources",
            contactTitle: "Contact Us",
            ServicesTitle: "Services",
            ExpertisesTitle: "Expertises",
            aboutLink: "About",
            aboutLink: "About",
            secteursLink: "Industries",
            joinLink: "Join Us",
            contactLink: "Contact",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            rights: "All rights reserved."
        },
        // Blog
        blog: {
            title: "Neyo Analytics Blog",
            intro: "Discover our articles, insights, and news about data, artificial intelligence, and cloud technologies.",
            comingSoon: "Coming Soon",
            description: "This section will soon be enriched with SEO-optimized blog articles covering the following topics:",
            topics: [
                "Best Practices in Data Engineering",
                "Business Intelligence Trends",
                "Palantir Use Cases",
                "Data Pipeline Optimization",
                "Artificial Intelligence and Machine Learning"
            ]
        },
        // FAQ
        faq: {
            title: "Frequently Asked Questions",
            items: [
                {
                    question: "How does Neyo Analytics support data transformation?",
                    answer: "We conduct a complete audit of your existing infrastructure to identify performance drivers. Then, we design and deploy custom data pipelines and interactive dashboards to leverage your data."
                },
                {
                    question: "What technologies do you master?",
                    answer: "Our experts master a wide range of tools and languages, including Power BI, Tableau, Palantir, Python, SQL, Azure, AWS, and more, to meet all your data engineering and business intelligence needs."
                },
                {
                    question: "Do you offer training for our teams?",
                    answer: "Yes, skills transfer is an integral part of our approach. We train your teams in the use of new tools and best practices to ensure their long-term autonomy."
                },
                {
                    question: "How do we start a project with you?",
                    answer: "It's simple! Contact us via our form or book a meeting directly. We will organize an initial discussion to understand your challenges and propose a tailored solution."
                },
                {
                    question: "How do we measure the ROI of my project?",
                    answer: "The ROI is measured by the improvement of productivity and decision-making. On average, our BI solutions are profitable in less than 6 months, with a return on investment of 321% over 3 years.",
                    pdf: PowerBI_ROI,
                    pdfLabel: "View full report (PDF)"
                },
                {
                    question: "What types of companies can benefit from our services?",
                    answer: "Our services are addressed to all companies, whether they are large, medium or small. Whether you want to optimize your processes, exploit your data or automate certain tasks, we adapt our solutions to your needs and your level of data maturity."
                }
            ]
        }
    }
};
