import { image } from 'framer-motion/client';
import PowerBI_ROI from '../assets/PowerBI_ROI.pdf';
import Neyo_GIF from '../assets/images/Neyo_noBackground.gif';
import Tableauimg from '../assets/images/Tableau.png';
import PBIimg from '../assets/images/PowerBIimg.png';
import Palantirimg from '../assets/images/Palantirimg.png';
import dataEngineering from '../assets/images/Dataenginerimg.png';

export const translations = {
    fr: {
        // Header
        nav: {
            services: "Services",
            secteurs: "Expertises",
            about: "A propos",
            contact: "Contactez-nous",
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
                    value: "70%",
                    text: "Des entreprises déclarent qu’elles ont du mal à exploiter efficacement leurs données, ce qui freine leur capacité d’innovation.",
                    source: {
                        text: "Source : Digitalisation World",
                        url: "https://m.digitalisationworld.com/news/63947/70-of-organisations-struggling-to-innovate-due-to-inability-to-use-data-effectively"
                    }
                },
                {
                    value: "8/10",
                    text: "Des dirigeants d’entreprise affirment que les données sont critiques pour la prise de décision au sein de leur organisation aujourd’hui.",
                    source: {
                        text: "Source : Salesforce - Untapped Data Report",
                        url: "https://www.salesforce.com/news/stories/data-skills-research/"
                    }
                },
                {
                    value: "68%",
                    text: "Des données disponibles dans les entreprises ne sont tout simplement jamais exploitées, ce qui signifie qu’à peine un tiers du potentiel data est réellement utilisé aujourd’hui.",
                    source: {
                        text: "Source : Seagate Rethink Data Report – Business Wire",
                        url: "https://www.businesswire.com/news/home/20200715005130/en/Seagates-Rethink-Data-Report-Reveals-That-68-of-Data-Available-to-Businesses-Goes-Unleveraged"
                    }
                },
                {
                    value: "Multi-Cloud",
                    text: "AWS · Azure · GCP · On-Prem",
                    source: "Expertise Neyo Analytics"
                },
                {
                    value: "55%",
                    text: "Des employés n’ont aucune compétence sur des outils d’analyse comme Power BI ou Tableau, alors qu’ils passent pourtant une partie importante de leur temps sur des tâches liées aux données.",
                    source: {
                        text: "Source : TechrSeries",
                        url: "https://techrseries.com/employee-wellness/data-skills-gap-costs-businesses-nearly-a-month-of-productivity-per-employee-annually-multiverse-skills-diagnosis-reveals/"
                    }
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
        // Blog
        blog: {
            title: "BLOG",
            subtitle: "De l'analyse de données à l'intelligence artificielle.",
            readMore: "Lire plus",
            categories: {
                all: "Tous",
                data: "Data Analytics",
                ai: "Intelligence Artificielle",
                bi: "Business Intelligence",
                cloud: "Cloud Computing",
                palantir: "Palantir"
            },
            posts: [
                {
                    id: 1,
                    title: "La puissance de la data visualisation : comment Power BI et Tableau transforment la prise de décision",
                    excerpt: "Découvrez comment transformer vos données brutes en tableaux de bord intuitifs pour prendre des décisions stratégiques plus rapidement.",
                    category: "Data Analytics",
                    date: "15 Jan 2026",
                    author: "Abdelhamid ELMANSOURI",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "Dans un monde où le volume de données explose, la capacité à synthétiser l'information est devenue critique. La Data Visualization n'est pas qu'une affaire d'esthétique, c'est un outil de performance." },
                        { type: 'heading', text: "Quand les données freinent la décision au lieu de l’accélérer" },
                        {
                            type: 'paragraph', text: "Dans de nombreuses PME comme dans les grandes entreprises, la réalité est souvent la même : "
                                + "des fichiers Excel dispersés, des reportings manuels chronophages et des indicateurs mis à jour trop tard. Les équipes passent plus de temps à consolider les données qu’à les analyser, "
                                + "et les décisions stratégiques sont prises avec retard ou sur la base d’intuitions plutôt que de faits. Dans un contexte économique où l’agilité et la rapidité sont devenues des avantages concurrentiels majeurs,"
                                + " cette situation n’est plus tenable. C’est ici que la data visualisation s’impose comme un levier clé de transformation : elle permet de convertir des volumes de données complexes en informations claires, "
                                + "actionnables et directement exploitables par les décideurs."
                        },
                        { type: 'quote', text: "Une image vaut mille mots, mais une bonne visualisation vaut mille lignes de données." },
                        { type: 'heading', text: "Qu’est-ce que la data visualisation ?" },
                        {
                            type: 'paragraph', text: "La data visualisation regroupe l’ensemble des graphiques, tableaux de bord et visualisations interactives qui permettent de représenter visuellement les données."
                                + " L’objectif n’est pas seulement esthétique : il s’agit avant tout de rendre l’information compréhensible, lisible et immédiatement interprétable par les métiers. Un bon visuel permet de :"
                                + "\n\n• Simplifier des jeux de données complexes, \n\n• Mettre en évidence des tendances, corrélations ou anomalies invisibles dans un tableau brut, "
                                + "\n\n• Faciliter la compréhension pour des profils non techniques. \n\nSelon la Syracuse University iSchool, la data visualisation joue un rôle central dans la capacité des organisations à "
                                + "transformer la donnée en connaissance exploitable. Elle agit comme un pont entre la donnée brute et la décision business."
                        },
                        { type: 'heading', text: "Les bénéfices business concrets de la data visualisation" },
                        { type: 'quote', text: "Des décisions plus rapides et mieux informées" },
                        {
                            type: 'paragraph', text: "Plusieurs études montrent que les managers utilisant des outils de data visualisation sont 28 % plus susceptibles d’obtenir l’information à temps pour "
                                + "prendre une décision (All Consulting Firms, Yellowfin BI). Grâce à des tableaux de bord dynamiques, les indicateurs clés sont accessibles en temps réel, sans dépendre de reportings"
                                + " manuels ou de multiples allers-retours entre équipes."
                        },
                        { type: 'quote', text: "Un meilleur alignement et une communication renforcée" },
                        {
                            type: 'paragraph', text: "La data visualisation améliore considérablement la communication interne. Des indicateurs clairs et partagés facilitent l’alignement entre directions, "
                                + "équipes métiers et fonctions support. Selon Lighthouse Analytics, les visuels favorisent une compréhension commune des enjeux et réduisent les interprétations divergentes des chiffres "
                                + "(Lighthouse Analytics)."
                        },
                        { type: 'quote', text: "Des gains mesurables de productivité" },
                        {
                            type: 'paragraph', text: "Les organisations utilisant des outils de data visualisation observent des bénéfices concrets : "
                                + "\n\n- jusqu’à +43 % d’amélioration de la rapidité d’analyse ad hoc, \n\n- +36 % de self-service data pour les utilisateurs métiers, "
                                + "\n\n- 20 % d’économie de temps sur les tâches de reporting et d’analyse (Yellowfin BI, Tristate Technology)."
                        },
                        { type: 'heading', text: "Power BI : la data visualisation au cœur de l’écosystème Microsoft" },
                        { image: PBIimg, size: 'large' },
                        {
                            type: 'paragraph', text: "Power BI est la solution de business intelligence développée par Microsoft. Elle permet de créer des rapports et tableaux de bord interactifs, "
                                + "connectés à des centaines de sources de données : ERP, CRM, bases SQL, fichiers Excel, solutions cloud, etc. Son principal atout réside dans son intégration native avec l’écosystème "
                                + "Microsoft (Excel, Azure, Teams, SharePoint), ce qui en fait un outil particulièrement adapté aux PME comme aux grandes entreprises. En 2025, Power BI est utilisé par environ 8 % des "
                                + "organisations disposant d’un outil de BI, avec un taux d’adoption de 12 % dans les grandes entreprises, confirmant sa position dominante sur le marché (Ramp, ElectroIQ). "
                                + "Power BI est également reconnu pour : \n\n• Son excellent rapport coût / fonctionnalités, \n\n• Sa capacité à démocratiser l’accès à la donnée, \n\n• Ses possibilités avancées de "
                                + "modélisation et de calcul via DAX."
                        },
                        { type: 'heading', text: "Tableau : l’excellence en visualisation analytique" },
                        { image: Tableauimg, size: 'large' },
                        {
                            type: 'paragraph', text: "Tableau est historiquement reconnu pour la richesse et la finesse de ses visualisations. Très apprécié des équipes data, analystes et profils avancés, il permet "
                                + "d’explorer les données de manière très intuitive et visuelle. Selon plusieurs analyses de marché, Tableau détient entre 12,88 % et 16,99 % de part de marché dans la BI, avec plus "
                                + "de 49 000 entreprises utilisatrices dans le monde, ce qui témoigne de sa maturité et de sa large adoption (Ramp, Intuition Labs). Tableau se distingue notamment par "
                                + ": \n\n• La liberté d’exploration des données, \n\n• La qualité visuelle des dashboards, \n\n• Sa capacité à traiter des analyses complexes à grande échelle."
                        },
                        { type: 'heading', text: "Pourquoi investir dans la data visualisation aujourd’hui ?" },
                        { type: 'paragraph', text: "Les entreprises qui exploitent efficacement les données comportementales de leurs clients pour piloter leurs décisions peuvent atteindre jusqu’à 85 % de croissance des ventes supplémentaire par rapport à leurs concurrents moins data-driven (Black Label, Imarticus). Dans un monde où la donnée est omniprésente, la capacité à la comprendre rapidement devient un avantage stratégique durable." },
                        { type: 'heading', text: "Comment Neyo Analytics vous accompagne" },
                        { image: Neyo_GIF },
                        { type: 'paragraph', text: "Chez Neyo Analytics, nous accompagnons les PME et les grandes entreprises à chaque étape de leur transformation data : \n\n• Cadrage des besoins business et des indicateurs clés \n\n• Mise en place de tableaux de bord Power BI et Tableau adaptés aux métiers \n\n• Connexion, modélisation et fiabilisation des données \n\n• Formation des équipes pour plus d’autonomie \n\n• Amélioration continue des reportings et des usages Notre objectif : Transformer vos données en un véritable levier de performance, au service de décisions plus rapides, plus fiables et plus alignées avec vos enjeux business. Vous souhaitez exploiter tout le potentiel de vos données? Contactez Neyo Analytics et passons ensemble de la donnée à la décision." },
                        { type: 'heading', text: "Sources" },
                        { type: 'sources', text: "• Syracuse University iSchool - What is Data Visualization: https://ischool.syracuse.edu/what-is-data-visualization/\n\n• All Consulting Firms - How Data Visualization Improves Decision Making: https://www.allconsultingfirms.com/blog/how-data-visualization-improves-decision-making/\n\n• Yellowfin BI - Benefits of Data Visualization Tools: https://www.yellowfinbi.com/blog/benefits-of-data-visualization-tools\n\n• Lighthouse Analytics - The Importance of Data Visualisation in Decision Making: https://www.lighthouseanalytics.co.za/the-importance-of-data-visualisation-in-decision-making/\n\n• Ramp - Power BI Vendors: https://ramp.com/vendors/power-bi\n\n• ElectroIQ - Power BI Statistics: https://electroiq.com/stats/power-bi-statistics/\n\n• Ramp - Tableau Vendors: https://ramp.com/vendors/tableau\n\n• Intuition Labs - Tableau vs Power BI Market Analysis: https://intuitionlabs.ai/pdfs/tableau-vs-power-bi-bi-platform-market-analysis-comparison.pdf\n\n• Black Label - Data Visualization for Business Growth: https://blacklabel.net/blog/business-insights/when-insight-meets-advantage-data-visualization-for-business-growth/\n\n• Imarticus - The Impact of Data Visualisation in Business Decision Making: https://imarticus.org/blog/the-impact-of-data-visualisation-in-business-decision-making/" }
                    ],
                },
                {
                    id: 2,
                    title: "Pourquoi Palantir Foundry est en train de remplacer le Data Warehouse traditionnel (et pourquoi peu de gens l’ont compris)",
                    excerpt: "Palantir Foundry dépasse le data warehouse traditionnel en transformant rapidement la donnée brute en insights exploitables",
                    category: "Palantir",
                    date: "15 Jan 2026",
                    author: "Fethi BENZITOUNI",
                    image: Palantirimg,
                    content: [
                        { type: 'lead', text: "Les data warehouses traditionnels ne suffisent plus à exploiter la vitesse et la complexité des données modernes. Palantir Foundry s’impose comme l’outil capable de centraliser, intégrer et analyser les données en temps réel, offrant aux entreprises une agilité que peu ont encore comprise." },
                        {
                            type: 'paragraph', text: "Pendant vingt ans, le data warehouse a été le cœur du pilotage des entreprises : Snowflake, Redshift, BigQuery, "
                                + "puis Power BI ou Tableau pour visualiser. Mais ce modèle est en train de se fissurer.\n\n Comme l’explique Lokad dans son analyse de Palantir : \n\n"
                                + "Palantir n’est ni un outil de BI, ni un data warehouse. C’est une plateforme data-to-operations conçue pour piloter des décisions métier réelles. "
                        },
                        { type: 'paragraph', text: "Palantir Foundry ne cherche donc pas à améliorer le reporting. Elle cherche à remplacer la façon dont les entreprises transforment leurs données en décisions." },
                        { type: 'heading', text: "Palantir Foundry n’est pas un data warehouse" },
                        {
                            type: 'paragraph', text: "Un data warehouse est une infrastructure de stockage et d’analyse. Foundry est une plateforme opérationnelle complète. \n\n"
                                + "Palantir décrit officiellement Foundry comme une plateforme qui combine ingestion, transformation, gouvernance, analytique et applications métier dans un même environnement : \n\n"
                                + "« Foundry est une plateforme qui permet aux organisations d’intégrer, gérer et transformer leurs données, puis de construire des applications opérationnelles directement dessus. »"
                        },
                        {
                            type: 'paragraph', text: "L’étude indépendante Total Economic Impact of Palantir Foundry montre même que certaines entreprises ont pu : \n\n"
                                + "« décommissionner 100 % de leurs systèmes data et analytiques historiques en moins de trois ans après l’adoption de Foundry »\n\n"
                                + " Autrement dit : Foundry devient l’architecture data centrale, pas un outil autour du data warehouse."
                        },
                        { type: 'heading', text: "L’Ontology : ce que Snowflake et Power BI n’ont pas" },
                        {
                            type: 'paragraph', text: "La vraie rupture de Foundry est son Ontology.\n\n Palantir la définit ainsi : \n\n« L’Ontology est une couche qui relie les actifs numériques (données, modèles, pipelines) "
                                + "aux objets du monde réel qu’ils représentent : machines, commandes, fournisseurs, clients, etc. » \n\nCela permet de créer un jumeau numérique (digital twin) de l’entreprise. \n\n"
                                + "Un jumeau numérique (digital twin) de l’entreprise signifie que Palantir Foundry crée une représentation vivante et connectée de l’organisation dans le système d’information. "
                                + "Au lieu d’avoir des données isolées dans des tables ou des rapports, Foundry modélise les vrais objets de l’entreprise — usines, machines, commandes, fournisseurs, clients, "
                                + "flux logistiques — ainsi que leurs relations et leur état en temps réel. Cette réplique numérique permet de voir comment l’entreprise fonctionne réellement, de simuler des scénarios "
                                + "(retards, ruptures de stock, hausse de la demande, pannes) et d’anticiper leurs impacts avant qu’ils ne se produisent dans le monde réel. Grâce à ce jumeau numérique, la donnée ne sert "
                                + "plus seulement à analyser le passé, mais à piloter l’entreprise comme un système dynamique.\n\n Un article d’analyse sur l’Ontology explique :\n\n « L’Ontology agit comme une couche sémantique "
                                + "partagée entre les ingénieurs data, les métiers et les systèmes d’IA, permettant de raisonner sur des objets métier plutôt que sur des tables SQL. »\n\n Dans un data warehouse, on "
                                + "manipule des tables. Dans Foundry, on manipule l’entreprise elle-même. "
                        },
                        { type: 'heading', text: "Foundry comme “système de build pour la data”" },
                        {
                            type: 'paragraph', text: "La documentation officielle décrit Foundry comme un véritable système de build pour la donnée : \n\n"
                                + "« Foundry fournit un système d’intégration et de transformation des données capable d’orchestrer SQL, Python, Spark, avec gestion du versioning, de la traçabilité et de la qualité. » \n\n"
                                + "Des intégrateurs comme Aqsone expliquent que Foundry remplace une grande partie de la stack data classique : \n\n« Foundry regroupe data engineering, data lake, machine learning, gouvernance "
                                + "et analytique dans une seule plateforme intégrée. » "
                        },
                        { type: 'heading', text: "Du dashboard à la décision opérationnelle" },
                        {
                            type: 'paragraph', text: "Dans une architecture data classique, les outils comme Power BI ou Tableau servent surtout à observer ce qui s’est déjà produit. Les équipes regardent des indicateurs,"
                                + " exportent des rapports, discutent, puis prennent des décisions manuellement. \n\nLa donnée est un support de réflexion, mais elle n’est pas directement connectée à l’action. \n\nPalantir Foundry "
                                + "change cette logique en intégrant la donnée au cœur même des processus opérationnels. Les décisions ne sont plus prises à côté des systèmes, mais à l’intérieur de la plateforme, à "
                                + "partir du jumeau numérique de l’entreprise. \n\nLokad décrit un cas typique de supply chain : \n\n« Foundry permet de connecter SAP, de modéliser les nomenclatures produits, les stocks et les "
                                + "capacités de production afin de prendre directement des décisions opérationnelles. » \n\nFoundry ne sert donc pas seulement à voir des chiffres, mais à décider quoi produire, où, quand et "
                                + "pour qui. \n\nAvec Palantir AIP, ces capacités sont étendues à l’IA : \n\n« Les agents d’IA peuvent interroger l’Ontology et déclencher des actions dans les systèmes réels. »"
                        },
                        { type: 'heading', text: "Pourquoi cette révolution est sous-estimée" },
                        {
                            type: 'paragraph', text: "Malgré ses capacités uniques, Palantir Foundry reste largement absente des discussions dominantes dans l’écosystème data, dominé par Snowflake, "
                                + "Databricks ou Power BI. Une des raisons est la façon dont Foundry est perçue par de nombreux professionnels de la data. \n\nSur les forums spécialisés, elle est souvent décrite non pas "
                                + "comme une plateforme complète, mais comme une simple couche au-dessus des data warehouses existants : \n\n« Beaucoup la perçoivent comme une couche sémantique ou un “data operating system” "
                                + "au‑dessus des données et systèmes existants, plutôt que comme une plateforme data‑to‑operations à part entière. » \n\nCette perception masque la véritable nature de Foundry comme plateforme "
                                + "data-to-operations, ce qui la rend difficile à comparer aux stacks classiques. \n\nMais le frein le plus important reste économique. Palantir Foundry est connue pour ses coûts très élevés, "
                                + "tant en licences qu’en accompagnement et en déploiement. Contrairement aux solutions cloud comme Snowflake ou Databricks, accessibles en mode self-service et payées à l’usage, Foundry est "
                                + "déployée via des projets structurés, souvent pluri-annuels, qui nécessitent un engagement financier important. \n\nPour beaucoup d’entreprises — en particulier les PME et les ETI — ce ticket "
                                + "d’entrée est simplement trop élevé, même si la plateforme est technologiquement en avance. \n\nÀ cela s’ajoutent d’autres freins majeurs : \n\n•	une dépendance forte à un éditeur américain, "
                                + "\n\n•	des enjeux de souveraineté des données, \n\n•	et une plateforme très intégrée, moins compatible avec une stack ouverte ou multi-fournisseurs. \n\nCes facteurs expliquent pourquoi Snowflake "
                                + "et Databricks dominent la conversation publique, alors que Foundry est surtout adoptée par des organisations très capitalisées, critiques ou souveraines (industrie lourde, défense, "
                                + "énergie, pharma, grandes chaînes logistiques). "
                        },
                        { type: 'heading', text: "Conclusion" },
                        {
                            type: 'paragraph', text: "Comme le résume un data engineer ayant travaillé avec Foundry : \n\n« Foundry ne se contente pas de montrer ce qui s’est passé. Elle permet de faire fonctionner "
                                + "l’entreprise directement sur la donnée. » \n\nC’est pour cela que Palantir Foundry ne concurrence pas simplement les data warehouses. Elle est en train de les rendre structurellement "
                                + "insuffisants. "
                        },
                        { type: 'heading', text: "NEYO Analytics accompagne les entreprises dans leurs projets Palantir Foundry" },
                        { image: Neyo_GIF },
                        {
                            type: 'paragraph', text: "Nous proposons : \n\n- Cadrage stratégique des use cases \n\n- Intégration des sources (ERP, CRM, APIs) \n\n- Modélisation Ontology \n\n- Déploiement d’applications métier "
                                + "\n\n- Mise en place d’IA avec Palantir AIP NEYO Analytics transforme Palantir Foundry en véritable moteur opérationnel pour votre organisation. "
                        },
                        { type: 'heading', text: "Sources" },
                        { type: 'sources', text: "• lokad: https://www.lokad.com/review-of-palantir-com/\n\n• Palantir - Foundry: https://www.palantir.com/platforms/foundry/\n\n• Palantir - The Total Economic Impact of Palantir Foundry: https://www.palantir.com/assets/xrfr7uokpv1b/7h0zi3GZrU3L7AM2HO1Q6O/1ad26eaa42ad949f8e3c80ea22f96b7a/The_Total_Economic_Impact_of_Palantir_Foundry.pdf\n\n• Palantir - Ontology: https://palantir.com/docs/foundry/ontology/overview/\n\n• Palantir - Ontology: https://blog.pvmit.com/pvm-blog/palantir-ontology\n\n• Palantir - Data Integration: https://palantir.com/docs/foundry/data-integration/overview/\n\n• aqsone - Palantir Foundry: https://www.aqsone.com/fr/blog/palantir-foundry-une-solution-au-service-de-la-data\n\n• lokad - Review of Palantir: https://www.lokad.com/review-of-palantir-com/\n\n• The AI Architect - Palantir Foundry: https://theaiarchitects.substack.com/p/palantirs-digital-twin-building-the\n\n• Medium - Palantir Foundry: https://medium.com/better-programming/palantir-foundry-the-data-operating-system-that-is-not-talked-about-enough-9fb1c98a6b3d" }

                    ]
                },
                {
                    id: 3,
                    title: "Power BI vs Tableau : Lequel choisir ?",
                    excerpt: "Comparatif complet des deux leaders du marché de la Business Intelligence pour vous aider à faire le meilleur choix pour votre organisation.",
                    category: "Business Intelligence",
                    date: "05 Jan 2026",
                    author: "Julie Leroux",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "C'est l'éternel débat dans le monde de la BI. Power BI de Microsoft et Tableau de Salesforce dominent le marché. Lequel est fait pour vous ?" },
                        { type: 'heading', text: "Microsoft Power BI" },
                        { type: 'paragraph', text: "Si vous êtes déjà dans l'écosystème Microsoft (Office 365, Azure), Power BI est le choix naturel. Son coût d'entrée est faible et son intégration avec Excel est sans égal." },
                        { type: 'heading', text: "Tableau Software" },
                        { type: 'paragraph', text: "Tableau est souvent considéré comme plus puissant pour l'analytique visuelle pure et la gestion de très grands ensembles de données complexes. C'est le choix des Data Analysts puristes." },
                        { type: 'quote', text: "Le meilleur outil est celui que vos équipes utiliseront réellement." },
                        { type: 'paragraph', text: "Le choix dépend souvent de votre budget et de la maturité data de vos équipes. Neyo Analytics peut vous aider à auditer vos besoins pour faire le bon choix." }
                    ]
                },
                {
                    id: 4,
                    title: "Ingénierie des Données et Décisions Stratégiques",
                    excerpt: "L’ingénierie des données constitue le socle des décisions stratégiques modernes. En structurant, fiabilisant et rendant accessibles les données, elle permet aux organisations de transformer l’information brute en leviers de pilotage, d’anticipation et de création de valeur.",
                    category: "Data Engineering",
                    date: "15 Jan 2026",
                    author: "Salah-Eddine BOUDHAN",
                    image: dataEngineering,
                    content: [
                        { type: 'lead', text: "À l’ère du pilotage par la donnée, les décisions stratégiques ne reposent plus sur l’intuition mais sur des architectures data solides. Derrière chaque tableau de bord, chaque indicateur clé et chaque décision critique se cache un travail d’ingénierie des données indispensable pour transformer le chaos informationnel en avantage compétitif" },
                        {
                            type: 'paragraph', text: "L’ingénierie des données (data engineering) consiste à concevoir et déployer des systèmes permettant d’agréger, stocker et analyser des volumes de données massifs. \n\n"
                                + "En pratique, les data engineers construisent des pipelines de données qui extraient, transforment et chargent (ETL/ELT) les données brutes dans des référentiels centralisés "
                                + "(data warehouse/lake). Ces pipelines garantissent une qualité et une cohérence des données optimales, condition sine qua non pour toute intelligence d’affaires (BI). \n\n"
                                + "IBM souligne ainsi que les ingénieurs des données « transforment d’importantes quantités de données en informations stratégiques ». Grâce à ces plateformes techniques, "
                                + "des responsables métiers peuvent accéder aux données fiables dont ils ont besoin pour éclairer leurs décisions. \n\n• Processus ETL et pipelines – Le processus ETL "
                                + "(extraction, transformation, chargement) consolide des données issues de systèmes divers en un jeu de données unifié. Les pipelines automatisent ces tâches : collecte des données, "
                                + "nettoyage (suppression des doublons, correction d’erreurs) et chargement dans un entrepôt. Un pipeline moderne est généralement orchestré sous forme de graphe acyclique (DAG) de tâches "
                                + "lié. Par exemple, un data engineer peut configurer un DAG Airflow pour ingérer les journaux d’une application, les nettoyer et les charger dans Snowflake. \n\n"
                                + "• Plateformes cloud – Les clouds publics offrent des solutions managées (Glue, Dataflow, Data Factory) pour déployer rapidement ces pipelines à l’échelle. Une étude récente propose un "
                                + "cadre d’évaluation pour comparer AWS et Azure dans ce domainejisem-journal.com. En pratique, l’entreprise choisit la plateforme cloud (AWS, Azure, Google, Snowflake…) qui maximise ses "
                                + "performances analytiques et minimise les coûts. Les technologies de data lakehouse et warehouse permettent de stocker l’historique et de fournir aux BI la possibilité d’exécuter des "
                                + "requêtes instantanées.\n\n Une stratégie de données d’entreprise solide lie ces technologies à la gouvernance et aux objectifs métier. Cela implique de démocratiser les données : rendre les "
                                + "données accessibles à tous les services pour ' prendre des décisions significativement meilleures pour toutes les parties prenantes'.  Sans cela, beaucoup de données restent inutilisées "
                                + "– selon une analyse récente, près de 68 % des données d’entreprise reposeraient dans des silos inexploitables. En déployant un environnement intégré (entrepôts centralisés, gouvernance, qualité "
                                + "des données), les entreprises multiplient l’impact de la BI. Les résultats parlent d’eux-mêmes : des recherches académiques montrent que les organisations basées sur la donnée voient une amélioration "
                                + "de 26 % de leurs performances grâce à l’analytics, et tirent ainsi un avantage concurrentiel notable."
                        },
                        { type: 'heading', text: "Cas Pratique : Uber et Netflix" },
                        {
                            type: 'paragraph', text: "L’architecture concrète d’un pipeline de données a un impact direct sur les résultats. Par exemple, Uber a révisé ses pipelines de données pour passer du traitement "
                                + "par lots au streaming en temps réel. Selon leurs ingénieurs, ce changement a réduit la latence des données de plusieurs heures à quelques minutes, ce qui « accélère directement le "
                                + "déploiement des modèles, la vitesse d’expérimentation et la précision des analyses »uber.com. Concrètement, cela a permis à Uber d’ajuster ses modèles de tarification et de planification "
                                + "de manière plus réactive.\n\n Autre exemple : Netflix. En analysant d’énormes volumes de données sur les habitudes de visionnage, Netflix ajuste en continu ses recommandations de contenus. "
                                + "Une étude rapporte que grâce à cette approche, Netflix peut « prédire et satisfaire les préférences individuelles, menant à une plus grande satisfaction et fidélité des "
                                + "clients ». De même, Walmart utilise des pipelines analytiques pour optimiser l’inventaire et le pricing : ses modèles détectent les tendances de consommation en temps réel, "
                                + "ce qui lui permet d’ajuster stocks et tarifs instantanémentresearchgate.net. Ces exemples illustrent comment un pipeline de données bien conçu se traduit par de meilleurs indicateurs métier : "
                                + "augmentation des ventes, réduction des coûts et prise de décision accélérée."
                        },
                        { type: 'heading', text: "Conclusion" },
                        {
                            type: 'paragraph', text: "L’ingénierie des données est aujourd’hui au cœur de la stratégie des entreprises. Un pipeline performant assure que les données sont traitées et "
                                + "mises à disposition au bon moment. Les dirigeants peuvent alors fonder leurs décisions sur des faits vérifiés. Comme le montrent les études, les entreprises qui exploitent "
                                + "efficacement leurs données obtiennent des bénéfices mesurables (par exemple +26 % de performance globale) et un avantage concurrentiel durable. Que ce soit pour du reporting BI "
                                + "quotidien ou des algorithmes de machine learning, c’est l’infrastructure data – conçue et opérée par des data engineers – qui fait la différence. En faisant appel à des spécialistes de "
                                + "l’ingénierie des données (comme Neyo Analytics), les sociétés peuvent moderniser leur système d’information : intégration ETL, plateformes cloud, et pipelines agiles pour libérer le "
                                + "potentiel de la donnée."
                        },
                        { type: 'heading', text: "Source" },
                        { type: 'sources', text: "Contenu fondé sur des références industrielles et académiques (IBM, Uber Engineering, HBR, KPMG, etc.) et des publications scientifiques récentes: https://www.ibm.com/\n\n  https://www.uber.com/\n\n  https://www.edinburgjournals.org/\n\n  https://www.sets.kpmg.com/\n\n https://www.researchgate.net/" }
                    ]
                },
                {
                    id: 5,
                    title: "L'avenir du Big Data en 2026",
                    excerpt: "Tendances et prédictions sur l'évolution du Big Data et son impact sur les entreprises pour l'année à venir.",
                    category: "Data Analytics",
                    date: "20 Dec 2025",
                    author: "Sophie Moreau",
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "Le Big Data n'est plus, vive le Smart Data. En 2026, la course au volume laisse place à la course à la qualité et à la pertinence." },
                        { type: 'heading', text: "Data Mesh et décentralisation" },
                        { type: 'paragraph', text: "Les architectures monolithiques (Data Lakes géants) montrent leurs limites. L'approche Data Mesh, qui traite la data comme un produit géré par des domaines métier, gagne du terrain." },
                        { type: 'quote', text: "La qualité de la donnée est le plafond de verre de l'IA." },
                        { type: 'heading', text: "Temps réel" },
                        { type: 'paragraph', text: "L'analytique en temps réel devient la norme. Attendre un rapport J+1 n'est plus acceptable pour les industries critiques comme la finance ou la logistique." }
                    ]
                },
                {
                    id: 6,
                    title: "Optimiser vos workflows avec l'automatisation",
                    excerpt: "Comment l'automatisation intelligente peut réduire vos tâches répétitives et libérer du temps pour l'innovation.",
                    category: "Intelligence Artificielle",
                    date: "15 Dec 2025",
                    author: "Lucas Petit",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "40% du temps de travail pourrait être automatisé avec les technologies actuelles. L'automatisation n'est pas une menace, c'est un levier de productivité." },
                        { type: 'heading', text: "Identifier les goulots d'étranglement" },
                        { type: 'paragraph', text: "Tout commence par une analyse des processus. Quelles tâches nécessitent peu de jugement humain mais beaucoup de temps ? Saisie de données, reporting, notifications..." },
                        { type: 'heading', text: "Outils Low-Code / No-Code" },
                        { type: 'paragraph', text: "Des plateformes comme Power Automate ou Zapier permettent aux équipes métier de créer leurs propres automations sans attendre la DSI." },
                        { type: 'paragraph', text: "L'objectif est de libérer la créativité humaine des tâches robotiques." }
                    ]
                }
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
                }
            ]
        },
        // Contact Form
        contactForm: {
            title: "Contactez-nous",
            description: "Vous avez un projet ou une question ? Notre équipe d'experts est à votre écoute pour vous accompagner.",
            name: "Nom",
            email: "Email",
            subject: "Sujet",
            message: "Message",
            send: "Envoyer",
            sending: "Envoi en cours...",
            success: "Message envoyé avec succès !",
            error: "Une erreur est survenue, veuillez réessayer."
        },
        undpChallenge: {
            title: "Le Challenge UNDP",
            desc: "Développé en réponse au 'UNDP Community-Based Damage Assessment challenge', Aid Signal répond à un besoin critique : collecter des données de dommages fiables en temps réel pour coordonner l'aide humanitaire là où elle est le plus nécessaire."
        },
        proDashboard: {
            title: "Aid Signal Pro",
            subtitle: "La tour de contrôle pour les coordinateurs.",
            desc: "Une plateforme d'analyse avancée permettant aux autorités et aux ONG de valider les rapports, d'analyser les zones à risque et de déployer les secours avec une précision chirurgicale.",
            features: [
                "Validation des données terrain en temps réel",
                "Analytique prédictive des zones d'impact",
                "Gestion et déploiement des équipes d'intervention",
                "Cartographie sémantique avancée (Ontology)"
            ]
        },
        aidSignal: {
            title: "Aid Signal",
            subtitle: "La réponse humanitaire à l'ère de la donnée.",
            hero: {
                title: "Optimisez la Réponse d'Urgence",
                desc: "Aid Signal est une plateforme de collecte de données critiques conçue pour les environnements les plus exigeants. Transformez les observations terrain en décisions opérationnelles immédiates."
            },
            features: {
                title: "Fonctionnalités Clés",
                items: [
                    {
                        title: "Collecte Hors-Ligne",
                        desc: "Fonctionne sans connexion internet. Les données sont stockées localement et synchronisées automatiquement dès que le réseau est disponible."
                    },
                    {
                        title: "Cartographie Interactive",
                        desc: "Visualisez les incidents en temps réel sur une carte satellite haute résolution pour une meilleure coordination des secours."
                    },
                    {
                        title: "Preuves Multimédia",
                        desc: "Capturez des photos et vidéos géo-référencées avec évaluation de la sévérité pour un diagnostic précis des dommages."
                    }
                ]
            },
            impact: {
                title: "Notre Impact",
                desc: "En réduisant le temps entre le signalement et l'action, Aid Signal sauve des vies. C'est l'outil indispensable pour les ONG et les organisations gouvernementales en situation de crise."
            },
            howTo: {
                title: "Comment ça marche ?",
                steps: [
                    {
                        title: "Signaler",
                        desc: "Prenez une photo de l'incident et renseignez les détails essentiels."
                    },
                    {
                        title: "Évaluer",
                        desc: "Attribuez un niveau de sévérité pour prioriser les interventions."
                    },
                    {
                        title: "Synchroniser",
                        desc: "Les données remontent instantanément au centre de commandement."
                    }
                ]
            },
            legal: {
                termsNav: "Conditions d'utilisation",
                privacyNav: "Politique de confidentialité",
                termsLabel: "LÉGAL",
                termsTitle: "Conditions d'utilisation",
                privacyLabel: "CONFIDENTIALITÉ",
                privacyTitle: "Politique de confidentialité",
                lastUpdate: "Dernière mise à jour : mai 2025",
                terms: [
                    { title: "1. Acceptation des conditions", text: "En téléchargeant, installant ou utilisant l'application Aid Signal, vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application." },
                    { title: "2. Description du service", text: "Aid Signal est une application mobile de collecte de données développée par Neyo Analytics, conçue pour faciliter la gestion des crises humanitaires. Elle permet aux organisations d'évaluer les dommages, de géolocaliser les incidents et de coordonner les interventions en temps réel." },
                    { title: "3. Utilisation autorisée", text: "L'application est destinée exclusivement à des fins humanitaires, de gestion de crise et de collecte de données terrain. Toute utilisation à des fins illégales, malveillantes ou contraires à l'éthique est strictement interdite." },
                    { title: "4. Responsabilités de l'utilisateur", text: "L'utilisateur est responsable de l'exactitude des données saisies dans l'application, de la sécurité de ses identifiants d'accès, et du respect des lois et réglementations applicables dans les territoires d'opération." },
                    { title: "5. Propriété intellectuelle", text: "L'application Aid Signal, son code source, son interface, ses algorithmes et ses contenus sont la propriété exclusive de Neyo Analytics. Aucune reproduction, modification ou distribution n'est autorisée sans accord préalable écrit." },
                    { title: "6. Disponibilité du service", text: "Neyo Analytics s'engage à maintenir une haute disponibilité de l'application. Aid Signal offre des capacités de fonctionnement hors ligne pour garantir la continuité des opérations terrain même sans connexion réseau." },
                    { title: "7. Modification des conditions", text: "Neyo Analytics se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront notifiés des modifications importantes via l'application." },
                    { title: "8. Droit applicable", text: "Les présentes conditions sont régies par le droit français. Tout litige relève de la compétence exclusive des tribunaux compétents." }
                ],
                privacy: [
                    { title: "1. Responsable du traitement", text: "Neyo Analytics est responsable du traitement des données collectées via Aid Signal. Contact : privacy@neyo-analytics.com" },
                    { title: "2. Données collectées", text: "Nous collectons : coordonnées GPS des incidents, horodatage et type d'incidents, photos et vidéos des évaluations terrain, identifiants d'authentification chiffrés, et données techniques anonymisées." },
                    { title: "3. Finalité du traitement", text: "Les données servent uniquement à coordonner les interventions humanitaires, générer des rapports d'évaluation, alimenter le tableau de bord Aid Signal Pro et améliorer l'application." },
                    { title: "4. Base légale", text: "Le traitement repose sur l'exécution d'une mission d'intérêt public (réponse aux crises humanitaires) et votre consentement explicite. Vous pouvez retirer ce consentement à tout moment." },
                    { title: "5. Partage des données", text: "Les données peuvent être partagées avec les coordinateurs de votre organisation (via Aid Signal Pro) et les organismes partenaires accrédités (UNDP, ONG). Nous ne vendons jamais vos données à des tiers." },
                    { title: "6. Sécurité", text: "Toutes les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Nos serveurs sont hébergés dans des infrastructures certifiées ISO 27001. Des audits de sécurité réguliers garantissent la protection de vos données." },
                    { title: "7. Conservation des données", text: "Les données opérationnelles sont conservées 5 ans. Les données d'authentification sont supprimées dans les 30 jours suivant la fermeture d'un compte." },
                    { title: "8. Vos droits (RGPD)", text: "Vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition. Pour les exercer : privacy@neyo-analytics.com" },
                    { title: "9. Contact & réclamations", text: "DPD : dpo@neyo-analytics.com — CNIL : www.cnil.fr" }
                ]
            }
        },
    },
    en: {
        // Header
        nav: {
            services: "Services",
            secteurs: "Expertises",
            about: "About",
            contact: "Contact Us",
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
                    value: "70%",
                    text: "of organisations are struggling to innovate due to an inability to use data effectively.",
                    source: {
                        text: "Source: digitalisationworld.com",
                        url: "https://m.digitalisationworld.com/news/63947/70-of-organisations-struggling-to-innovate-due-to-inability-to-use-data-effectively"
                    }
                },
                {
                    value: "8/10",
                    text: "businesses leaders say data is critical for decision-making in their organization today.",
                    source: {
                        text: "Source : Salesforce - Untapped Data Report",
                        url: "https://www.salesforce.com/news/stories/data-skills-research/"
                    }
                },
                {
                    value: "68%",
                    text: "of data available to businesses is simply never leveraged, meaning that barely a third of data potential is actually used today.",
                    source: {
                        text: "Source : Seagate Rethink Data Report – Business Wire",
                        url: "https://www.businesswire.com/news/home/20200715005130/en/Seagates-Rethink-Data-Report-Reveals-That-68-of-Data-Available-to-Businesses-Goes-Unleveraged"
                    }
                },
                {
                    value: "Multi-Cloud",
                    text: "AWS · Azure · GCP · On-Prem",
                    source: "Expertise Neyo Analytics"
                },
                {
                    value: "55%",
                    text: "of employees have no skills in analysis tools like Power BI or Tableau, even though they spend a significant part of their time on data-related tasks.",
                    source: {
                        text: "Source : TechrSeries",
                        url: "https://techrseries.com/employee-wellness/data-skills-gap-costs-businesses-nearly-a-month-of-productivity-per-employee-annually-multiverse-skills-diagnosis-reveals/"
                    }
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
        // Blog
        blog: {
            title: "BLOG",
            subtitle: "From data analysis to artificial intelligence.",
            readMore: "Read more",
            categories: {
                all: "All",
                data: "Data Analytics",
                ai: "Artificial Intelligence",
                bi: "Business Intelligence",
                cloud: "Cloud Computing",
                palantir: "Palantir"
            },
            posts: [
                {
                    id: 1,
                    title: "The Importance of Data Visualization in Decision Making",
                    excerpt: "Discover how to transform your raw data into intuitive dashboards to make strategic decisions faster.",
                    category: "Data Analytics",
                    date: "Jan 15, 2026",
                    author: "Abdelhamid ELMANSOURI",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "In a world where data volume is exploding, the ability to synthesize information has become critical. Data Visualization is not just about aesthetics—it's a performance tool." },
                        { type: 'heading', text: "When Data Slows Down Decision-Making Instead of Speeding It Up" },
                        {
                            type: 'paragraph', text: "In many SMEs and large companies alike, the reality is often the same: scattered Excel files, time-consuming manual reporting, and indicators updated too late. Teams spend more time consolidating data than analyzing it, "
                                + "and strategic decisions are made with delays or based on intuition rather than facts. In an economic context where agility and speed have become major competitive advantages, "
                                + "this situation is no longer sustainable. This is where data visualization emerges as a key driver of transformation: it allows the conversion of complex data volumes into clear, "
                                + "actionable information directly usable by decision-makers."
                        },
                        { type: 'quote', text: "A picture is worth a thousand words, but a good visualization is worth a thousand lines of data." },
                        { type: 'heading', text: "What is Data Visualization?" },
                        {
                            type: 'paragraph', text: "Data visualization includes all the charts, dashboards, and interactive visual representations used to visually represent data. "
                                + "The goal is not just aesthetic: it's primarily about making information understandable, readable, and immediately interpretable by business users. A good visual allows you to:"
                                + "\n\n• Simplify complex data sets, \n\n• Highlight trends, correlations, or anomalies invisible in raw tables, "
                                + "\n\n• Facilitate understanding for non-technical profiles. \n\nAccording to Syracuse University iSchool, data visualization plays a central role in an organization's ability to "
                                + "transform data into actionable knowledge. It acts as a bridge between raw data and business decisions."
                        },
                        { type: 'heading', text: "Concrete Business Benefits of Data Visualization" },
                        { type: 'quote', text: "Faster and Better Informed Decisions" },
                        {
                            type: 'paragraph', text: "Several studies show that managers using data visualization tools are 28% more likely to get the information in time to make a decision (All Consulting Firms, Yellowfin BI). "
                                + "Thanks to dynamic dashboards, key indicators are accessible in real-time without depending on manual reporting or multiple back-and-forths between teams."
                        },
                        { type: 'quote', text: "Better Alignment and Strengthened Communication" },
                        {
                            type: 'paragraph', text: "Data visualization significantly improves internal communication. Clear and shared indicators facilitate alignment between management, business teams, and support functions. "
                                + "According to Lighthouse Analytics, visuals favor a common understanding of challenges and reduce divergent interpretations of figures (Lighthouse Analytics)."
                        },
                        { type: 'quote', text: "Measurable Productivity Gains" },
                        {
                            type: 'paragraph', text: "Organizations using data visualization tools observe concrete benefits: "
                                + "\n\n- Up to +43% improvement in ad-hoc analysis speed, \n\n- +36% data self-service for business users, "
                                + "\n\n- 20% time savings on reporting and analysis tasks (Yellowfin BI, Tristate Technology)."
                        },
                        { type: 'heading', text: "Power BI: Data Visualization at the Heart of the Microsoft Ecosystem" },
                        { image: PBIimg, size: 'large' },
                        {
                            type: 'paragraph', text: "Power BI is the business intelligence solution developed by Microsoft. It allows for the creation of interactive reports and dashboards connected to hundreds of data sources: "
                                + "ERP, CRM, SQL databases, Excel files, cloud solutions, etc. Its main asset lies in its native integration with the Microsoft ecosystem (Excel, Azure, Teams, SharePoint), "
                                + "making it particularly suitable for both SMEs and large enterprises. In 2025, Power BI is used by about 8% of organizations with a BI tool, with a 12% adoption rate in large companies, "
                                + "confirming its dominant position in the market (Ramp, ElectroIQ). Power BI is also recognized for: \n\n• Its excellent cost/feature ratio, \n\n• Its ability to democratize access to data, "
                                + "\n\n• Its advanced modeling and calculation possibilities via DAX."
                        },
                        { type: 'heading', text: "Tableau: Excellence in Analytical Visualization" },
                        { image: Tableauimg, size: 'large' },
                        {
                            type: 'paragraph', text: "Tableau is historically recognized for the richness and refinement of its visualizations. Highly appreciated by data teams, analysts, and advanced profiles, it allows "
                                + "for very intuitive and visual data exploration. According to several market analyses, Tableau holds between 12.88% and 16.99% market share in BI, with more than 49,000 user companies world-wide, "
                                + "testifying to its maturity and wide adoption (Ramp, Intuition Labs). Tableau stands out notably for: \n\n• Data exploration freedom, \n\n• The visual quality of dashboards, "
                                + "\n\n• Its capacity to handle complex analyses at scale."
                        },
                        { type: 'heading', text: "Why Invest in Data Visualization Today?" },
                        { type: 'paragraph', text: "Companies that effectively leverage their customers' behavioral data to drive decisions can achieve up to 85% more sales growth than their less data-driven competitors (Black Label, Imarticus). In a world where data is omnipresent, the ability to understand it quickly becomes a sustainable strategic advantage." },
                        { type: 'heading', text: "How Neyo Analytics Supports You" },
                        { image: Neyo_GIF },
                        { type: 'paragraph', text: "At Neyo Analytics, we support SMEs and large companies at every stage of their data transformation: \n\n• Scoping of business needs and key indicators \n\n• Implementation of Power BI and Tableau dashboards tailored to business roles \n\n• Data connection, modeling, and reliability \n\n• Team training for greater autonomy \n\n• Continuous improvement of reporting and usage Our goal: Transform your data into a true performance lever, serving faster, more reliable decisions aligned with your business challenges. Want to unlock the full potential of your data? Contact Neyo Analytics and let's move together from data to decision." },
                        { type: 'heading', text: "Sources" },
                        { type: 'sources', text: "• Syracuse University iSchool - What is Data Visualization: https://ischool.syracuse.edu/what-is-data-visualization/\n\n• All Consulting Firms - How Data Visualization Improves Decision Making: https://www.allconsultingfirms.com/blog/how-data-visualization-improves-decision-making/\n\n• Yellowfin BI - Benefits of Data Visualization Tools: https://www.yellowfinbi.com/blog/benefits-of-data-visualization-tools\n\n• Lighthouse Analytics - The Importance of Data Visualisation in Decision Making: https://www.lighthouseanalytics.co.za/the-importance-of-data-visualisation-in-decision-making/\n\n• Ramp - Power BI Vendors: https://ramp.com/vendors/power-bi\n\n• ElectroIQ - Power BI Statistics: https://electroiq.com/stats/power-bi-statistics/\n\n• Ramp - Tableau Vendors: https://ramp.com/vendors/tableau\n\n• Intuition Labs - Tableau vs Power BI Market Analysis: https://intuitionlabs.ai/pdfs/tableau-vs-power-bi-bi-platform-market-analysis-comparison.pdf\n\n• Black Label - Data Visualization for Business Growth: https://blacklabel.net/blog/business-insights/when-insight-meets-advantage-data-visualization-for-business-growth/\n\n• Imarticus - The Impact of Data Visualisation in Business Decision Making: https://imarticus.org/blog/the-impact-of-data-visualisation-in-business-decision-making/" },
                    ],
                },
                {
                    id: 2,
                    title: "Why Palantir Foundry is Replacing the Traditional Data Warehouse (and Why Few People Have Understood It)",
                    excerpt: "Palantir Foundry surpasses the traditional data warehouse by rapidly transforming raw data into actionable insights",
                    category: "Palantir",
                    date: "Jan 15, 2026",
                    author: "Fethi BENZITOUNI",
                    image: Palantirimg,
                    content: [
                        { type: 'lead', text: "Traditional data warehouses are no longer sufficient to exploit the speed and complexity of modern data. Palantir Foundry emerges as the tool capable of centralizing, integrating, and analyzing data in real-time, offering businesses an agility that few have yet understood." },
                        {
                            type: 'paragraph', text: "For twenty years, the data warehouse has been at the heart of business management: Snowflake, Redshift, BigQuery, "
                                + "then Power BI or Tableau for visualization. But this model is starting to crack.\n\n As Lokad explains in their analysis of Palantir: \n\n"
                                + "Palantir is neither a BI tool nor a data warehouse. It's a data-to-operations platform designed to drive real business decisions. "
                        },
                        { type: 'paragraph', text: "Palantir Foundry therefore does not seek to improve reporting. It seeks to replace how companies transform their data into decisions." },
                        { type: 'heading', text: "Palantir Foundry is Not a Data Warehouse" },
                        {
                            type: 'paragraph', text: "A data warehouse is a storage and analysis infrastructure. Foundry is a complete operational platform. \n\n"
                                + "Palantir officially describes Foundry as a platform that combines ingestion, transformation, governance, analytics, and business applications in a single environment: \n\n"
                                + "« Foundry is a platform that enables organizations to integrate, manage, and transform their data, then build operational applications directly on top of it. »"
                        },
                        {
                            type: 'paragraph', text: "The independent study Total Economic Impact of Palantir Foundry even shows that some companies were able to: \n\n"
                                + "« decommission 100% of their legacy data and analytics systems in less than three years after adopting Foundry »\n\n"
                                + " In other words: Foundry becomes the central data architecture, not a tool around the data warehouse."
                        },
                        { type: 'heading', text: "The Ontology: What Snowflake and Power BI Don't Have" },
                        {
                            type: 'paragraph', text: "The real breakthrough of Foundry is its Ontology.\n\n Palantir defines it as follows: \n\n« The Ontology is a layer that connects digital assets (data, models, pipelines) "
                                + "to the real-world objects they represent: machines, orders, suppliers, customers, etc. » \n\nThis enables the creation of a digital twin of the enterprise. \n\n"
                                + "A digital twin of the enterprise means that Palantir Foundry creates a living, connected representation of the organization in the information system. "
                                + "Instead of having isolated data in tables or reports, Foundry models the real objects of the enterprise — factories, machines, orders, suppliers, customers, "
                                + "logistics flows — as well as their relationships and real-time status. This digital replica allows you to see how the enterprise actually operates, simulate scenarios "
                                + "(delays, stock shortages, demand surges, breakdowns) and anticipate their impacts before they occur in the real world. Thanks to this digital twin, data no longer "
                                + "serves only to analyze the past, but to operate the enterprise as a dynamic system.\n\n An analysis article on the Ontology explains:\n\n « The Ontology acts as a semantic layer "
                                + "shared between data engineers, business users, and AI systems, enabling reasoning about business objects rather than SQL tables. »\n\n In a data warehouse, you "
                                + "manipulate tables. In Foundry, you manipulate the enterprise itself. "
                        },
                        { type: 'heading', text: "Foundry as a 'Build System for Data'" },
                        {
                            type: 'paragraph', text: "The official documentation describes Foundry as a true build system for data: \n\n"
                                + "« Foundry provides a data integration and transformation system capable of orchestrating SQL, Python, Spark, with versioning, traceability, and quality management. » \n\n"
                                + "Integrators like Aqsone explain that Foundry replaces a large part of the classic data stack: \n\n« Foundry combines data engineering, data lake, machine learning, governance "
                                + "and analytics in a single integrated platform. » "
                        },
                        { type: 'heading', text: "From Dashboard to Operational Decision" },
                        {
                            type: 'paragraph', text: "In a classic data architecture, tools like Power BI or Tableau mainly serve to observe what has already happened. Teams look at indicators,"
                                + " export reports, discuss, then make decisions manually. \n\nData is a support for reflection, but it is not directly connected to action. \n\nPalantir Foundry "
                                + "changes this logic by integrating data at the very heart of operational processes. Decisions are no longer made alongside systems, but inside the platform, "
                                + "from the digital twin of the enterprise. \n\nLokad describes a typical supply chain case: \n\n« Foundry allows you to connect SAP, model product nomenclatures, inventory, and "
                                + "production capacities to directly make operational decisions. » \n\nFoundry therefore serves not only to see numbers, but to decide what to produce, where, when, and "
                                + "for whom. \n\nWith Palantir AIP, these capabilities are extended to AI: \n\n« AI agents can query the Ontology and trigger actions in real systems. »"
                        },
                        { type: 'heading', text: "Why This Revolution is Underestimated" },
                        {
                            type: 'paragraph', text: "Despite its unique capabilities, Palantir Foundry remains largely absent from dominant discussions in the data ecosystem, dominated by Snowflake, "
                                + "Databricks, or Power BI. One reason is how Foundry is perceived by many data professionals. \n\nOn specialized forums, it is often described not "
                                + "as a complete platform, but as a simple layer on top of existing data warehouses: \n\n« Many perceive it as a semantic layer or a 'data operating system' "
                                + "on top of existing data and systems, rather than as a full-fledged data-to-operations platform. » \n\nThis perception masks the true nature of Foundry as a "
                                + "data-to-operations platform, making it difficult to compare to classic stacks. \n\nBut the most important barrier remains economic. Palantir Foundry is known for its very high costs, "
                                + "both in licenses and in support and deployment. Unlike cloud solutions like Snowflake or Databricks, accessible in self-service mode and paid by usage, Foundry is "
                                + "deployed through structured projects, often multi-year, requiring significant financial commitment. \n\nFor many companies — particularly SMEs and mid-sized enterprises — this "
                                + "entry ticket is simply too high, even if the platform is technologically advanced. \n\nTo this are added other major barriers: \n\n•\tstrong dependence on an American vendor, "
                                + "\n\n•\tdata sovereignty issues, \n\n•\tand a highly integrated platform, less compatible with an open or multi-vendor stack. \n\nThese factors explain why Snowflake "
                                + "and Databricks dominate the public conversation, while Foundry is mainly adopted by highly capitalized, critical, or sovereign organizations (heavy industry, defense, "
                                + "energy, pharma, large logistics chains). "
                        },
                        { type: 'heading', text: "Conclusion" },
                        {
                            type: 'paragraph', text: "As a data engineer who worked with Foundry summarizes: \n\n« Foundry doesn't just show what happened. It enables running "
                                + "the enterprise directly on data. » \n\nThis is why Palantir Foundry doesn't simply compete with data warehouses. It is making them structurally "
                                + "insufficient. "
                        },
                        { type: 'heading', text: "NEYO Analytics Supports Companies in Their Palantir Foundry Projects" },
                        { image: Neyo_GIF },
                        {
                            type: 'paragraph', text: "We offer: \n\n- Strategic scoping of use cases \n\n- Integration of sources (ERP, CRM, APIs) \n\n- Ontology modeling \n\n- Deployment of business applications "
                                + "\n\n- AI implementation with Palantir AIP NEYO Analytics transforms Palantir Foundry into a true operational engine for your organization. "
                        },
                        { type: 'heading', text: "Sources" },
                        { type: 'sources', text: "• lokad: https://www.lokad.com/review-of-palantir-com/\n\n• Palantir - Foundry: https://www.palantir.com/platforms/foundry/\n\n• Palantir - The Total Economic Impact of Palantir Foundry: https://www.palantir.com/assets/xrfr7uokpv1b/7h0zi3GZrU3L7AM2HO1Q6O/1ad26eaa42ad949f8e3c80ea22f96b7a/The_Total_Economic_Impact_of_Palantir_Foundry.pdf\n\n• Palantir - Ontology: https://palantir.com/docs/foundry/ontology/overview/\n\n• Palantir - Ontology: https://blog.pvmit.com/pvm-blog/palantir-ontology\n\n• Palantir - Data Integration: https://palantir.com/docs/foundry/data-integration/overview/\n\n• aqsone - Palantir Foundry: https://www.aqsone.com/fr/blog/palantir-foundry-une-solution-au-service-de-la-data\n\n• lokad - Review of Palantir: https://www.lokad.com/review-of-palantir-com/\n\n• The AI Architect - Palantir Foundry: https://theaiarchitects.substack.com/p/palantirs-digital-twin-building-the\n\n• Medium - Palantir Foundry: https://medium.com/better-programming/palantir-foundry-the-data-operating-system-that-is-not-talked-about-enough-9fb1c98a6b3d" }
                    ]
                },
                {
                    id: 3,
                    title: "Power BI vs Tableau: Which One to Choose?",
                    excerpt: "Complete comparison of the two market leaders in Business Intelligence to help you make the best choice for your organization.",
                    category: "Business Intelligence",
                    date: "Jan 05, 2026",
                    author: "Julie Leroux",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "It's the eternal debate in the BI world. Microsoft's Power BI and Salesforce's Tableau dominate the market. Which one is right for you?" },
                        { type: 'heading', text: "Microsoft Power BI" },
                        { type: 'paragraph', text: "If you are already in the Microsoft ecosystem (Office 365, Azure), Power BI is the natural choice. Its entry cost is low and its integration with Excel is unrivaled." },
                        { type: 'heading', text: "Tableau Software" },
                        { type: 'paragraph', text: "Tableau is often considered more powerful for pure visual analytics and handling very large, complex datasets. It is the choice of purist Data Analysts." },
                        { type: 'quote', text: "The best tool is the one your teams will actually use." },
                        { type: 'paragraph', text: "The choice often depends on your budget and the data maturity of your teams. Neyo Analytics can help you audit your needs to make the right choice." }
                    ]
                },
                {
                    id: 4,
                    title: "Data Engineering and Strategic Decision-Making",
                    excerpt: "Data engineering forms the foundation of modern strategic decision-making. By structuring, ensuring reliability, and making data accessible, it enables organizations to transform raw information into levers for governance, anticipation, and value creation.",
                    category: "Data Engineering",
                    date: "Jan 15, 2026",
                    author: "Salah-Eddine BOUDHAN",
                    image: dataEngineering,
                    content: [
                        { type: 'lead', text: "In the era of data-driven management, strategic decisions no longer rely on intuition but on robust data architectures. Behind every dashboard, key performance indicator, and critical decision lies essential data engineering work that transforms informational chaos into a competitive advantage." },
                        {
                            type: 'paragraph',
                            text:
                                "Data engineering involves designing and deploying systems that aggregate, store, and analyze massive volumes of data.\n\n" +
                                "In practice, data engineers build data pipelines that extract, transform, and load (ETL/ELT) raw data into centralized repositories " +
                                "(data warehouses or data lakes). These pipelines ensure optimal data quality and consistency, which are essential prerequisites for any business intelligence (BI) initiative.\n\n" +
                                "IBM highlights that data engineers “transform large amounts of data into strategic insights.” Thanks to these technical platforms, " +
                                "business leaders can access reliable data to support informed decision-making.\n\n" +
                                "• ETL processes and pipelines – The ETL process (Extract, Transform, Load) consolidates data from multiple systems into a unified dataset. Pipelines automate these tasks: data collection, " +
                                "data cleansing (duplicate removal, error correction), and loading into a warehouse. A modern pipeline is typically orchestrated as a directed acyclic graph (DAG) of interdependent tasks. " +
                                "For example, a data engineer may configure an Airflow DAG to ingest application logs, clean them, and load them into Snowflake.\n\n" +
                                "• Cloud platforms – Public cloud providers offer managed solutions (Glue, Dataflow, Data Factory) to rapidly deploy scalable pipelines. A recent study proposes an evaluation framework " +
                                "to compare AWS and Azure in this area. In practice, organizations choose the cloud platform (AWS, Azure, Google Cloud, Snowflake, etc.) that maximizes analytical performance while minimizing costs. " +
                                "Lakehouse and data warehouse technologies store historical data and enable BI teams to run near-instant analytical queries.\n\n" +
                                "A strong enterprise data strategy connects these technologies with governance and business objectives. This involves democratizing data: making it accessible across departments to “enable significantly " +
                                "better decisions for all stakeholders.” Without such an approach, much of the data remains unused—recent analyses suggest that nearly 68% of enterprise data sits in unusable silos. " +
                                "By deploying an integrated environment (centralized warehouses, governance frameworks, and data quality processes), organizations amplify the impact of BI. Academic research confirms that " +
                                "data-driven organizations achieve up to a 26% improvement in performance through analytics, resulting in a clear competitive advantage."
                        },
                        {
                            type: 'heading',
                            text: "Use Case: Uber and Netflix"
                        },
                        {
                            type: 'paragraph',
                            text:
                                "The concrete architecture of a data pipeline has a direct impact on business outcomes. For example, Uber redesigned its data pipelines by moving from batch processing to real-time streaming. " +
                                "According to Uber engineers, this shift reduced data latency from several hours to just a few minutes, which “directly accelerates model deployment, experimentation speed, and analytical accuracy.” " +
                                "As a result, Uber can adjust pricing and operational planning models much more dynamically.\n\n" +
                                "Another example is Netflix. By analyzing massive volumes of viewing behavior data, Netflix continuously refines its content recommendations. Studies report that this approach allows Netflix to " +
                                "“predict and satisfy individual preferences, leading to higher customer satisfaction and retention.” Similarly, Walmart uses analytical pipelines to optimize inventory management and pricing: " +
                                "its models detect consumption trends in real time, enabling instant adjustments to stock levels and prices. These examples illustrate how a well-designed data pipeline translates into improved " +
                                "business KPIs: increased revenue, reduced operational costs, and faster decision-making."
                        },
                        {
                            type: 'heading',
                            text: "Conclusion"
                        },
                        {
                            type: 'paragraph',
                            text:
                                "Data engineering is now at the core of corporate strategy. A high-performance pipeline ensures that data is processed and delivered at the right time, allowing executives to base decisions on verified facts. " +
                                "As demonstrated by multiple studies, organizations that effectively leverage their data achieve measurable benefits (such as a +26% overall performance increase) and a sustainable competitive advantage. " +
                                "Whether for daily BI reporting or advanced machine learning algorithms, it is the data infrastructure—designed and operated by data engineers—that makes the difference. By working with data engineering specialists " +
                                "(such as Neyo Analytics), companies can modernize their information systems through ETL integration, cloud platforms, and agile pipelines that unlock the full potential of data."
                        },
                        {
                            type: 'heading',
                            text: "Sources"
                        },
                        {
                            type: 'sources',
                            text:
                                "Content based on industrial and academic references (IBM, Uber Engineering, HBR, KPMG, etc.) and recent scientific publications:\n\n" +
                                "https://www.ibm.com/\n\n" +
                                "https://www.uber.com/\n\n" +
                                "https://www.edinburgjournals.org/\n\n" +
                                "https://www.sets.kpmg.com/\n\n" +
                                "https://www.researchgate.net/"
                        }
                    ]
                },
                {
                    id: 5,
                    title: "The Future of Big Data in 2026",
                    excerpt: "Trends and predictions on the evolution of Big Data and its impact on businesses for the coming year.",
                    category: "Data Analytics",
                    date: "Dec 20, 2025",
                    author: "Sophie Moreau",
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "Big Data is dead, long live Smart Data. In 2026, the race for volume gives way to the race for quality and relevance." },
                        { type: 'heading', text: "Data Mesh and Decentralization" },
                        { type: 'paragraph', text: "Monolithic architectures (Giant Data Lakes) are showing their limits. The Data Mesh approach, which treats data as a product managed by business domains, is gaining ground." },
                        { type: 'quote', text: "Data quality is the glass ceiling of AI." },
                        { type: 'heading', text: "Real Time" },
                        { type: 'paragraph', text: "Real-time analytics is becoming the norm. Waiting for a D+1 report is no longer acceptable for critical industries like finance or logistics." }
                    ]
                },
                {
                    id: 6,
                    title: "Optimizing Your Workflows with Automation",
                    excerpt: "How intelligent automation can reduce your repetitive tasks and free up time for innovation.",
                    category: "Artificial Intelligence",
                    date: "Dec 15, 2025",
                    author: "Lucas Petit",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
                    content: [
                        { type: 'lead', text: "40% of work time could be automated with current technologies. Automation is not a threat, it is a productivity lever." },
                        { type: 'heading', text: "Identify Bottlenecks" },
                        { type: 'paragraph', text: "It all starts with process analysis. Which tasks require little human judgment but a lot of time? Data entry, reporting, notifications..." },
                        { type: 'heading', text: "Low-Code / No-Code Tools" },
                        { type: 'paragraph', text: "Platforms like Power Automate or Zapier allow business teams to create their own automations without waiting for IT." },
                        { type: 'paragraph', text: "The goal is to free human creativity from robotic tasks." }
                    ]
                }
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
        },
        // Contact Form
        contactForm: {
            title: "Contact Us",
            description: "Do you have a project or a question? Our team of experts is here to support you.",
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            send: "Send",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "An error occurred, please try again."
        },
        undpChallenge: {
            title: "The UNDP Challenge",
            desc: "Developed in response to the 'UNDP Community-Based Damage Assessment challenge', Aid Signal addresses a critical need: collecting reliable damage data in real-time to coordinate humanitarian aid where it is most needed."
        },
        proDashboard: {
            title: "Aid Signal Pro",
            subtitle: "The control tower for coordinators.",
            desc: "An advanced analytics platform allowing authorities and NGOs to validate reports, analyze risk zones, and deploy relief with surgical precision.",
            features: [
                "Real-time field data validation",
                "Predictive analytics of impact zones",
                "Response team management and deployment",
                "Advanced semantic mapping (Ontology)"
            ]
        },
        aidSignal: {
            title: "Aid Signal",
            subtitle: "Humanitarian response in the data age.",
            hero: {
                title: "Optimize Emergency Response",
                desc: "Aid Signal is a critical data collection platform designed for the most demanding environments. Transform field observations into immediate operational decisions."
            },
            features: {
                title: "Key Features",
                items: [
                    {
                        title: "Offline Collection",
                        desc: "Works without an internet connection. Data is stored locally and synchronized automatically as soon as the network is available."
                    },
                    {
                        title: "Interactive Mapping",
                        desc: "Visualize incidents in real-time on a high-resolution satellite map for better coordination of relief efforts."
                    },
                    {
                        title: "Multimedia Evidence",
                        desc: "Capture geo-referenced photos and videos with severity assessment for accurate damage diagnosis."
                    }
                ]
            },
            impact: {
                title: "Our Impact",
                desc: "By reducing the time between reporting and action, Aid Signal saves lives. It is the essential tool for NGOs and governmental organizations in crisis situations."
            },
            howTo: {
                title: "How it works?",
                steps: [
                    {
                        title: "Report",
                        desc: "Take a photo of the incident and fill in the essential details."
                    },
                    {
                        title: "Assess",
                        desc: "Assign a severity level to prioritize interventions."
                    },
                    {
                        title: "Synchronize",
                        desc: "Data is instantly sent to the command center."
                    }
                ]
            },
            legal: {
                termsNav: "Terms of Use",
                privacyNav: "Privacy Policy",
                termsLabel: "LEGAL",
                termsTitle: "Terms of Use",
                privacyLabel: "PRIVACY",
                privacyTitle: "Privacy Policy",
                lastUpdate: "Last updated: May 2025",
                terms: [
                    { title: "1. Acceptance of Terms", text: "By downloading, installing or using the Aid Signal application, you agree to be bound by these Terms of Use. If you do not accept these terms, please do not use the application." },
                    { title: "2. Service Description", text: "Aid Signal is a mobile data collection application developed by Neyo Analytics, designed to facilitate humanitarian crisis management. It enables organizations to assess damage, geolocate incidents and coordinate interventions in real time." },
                    { title: "3. Authorized Use", text: "The application is intended exclusively for humanitarian purposes, crisis management and field data collection. Any use for illegal, malicious or unethical purposes is strictly prohibited." },
                    { title: "4. User Responsibilities", text: "The user is responsible for the accuracy of data entered in the application, the security of access credentials, and compliance with applicable laws and regulations in the territories of operation." },
                    { title: "5. Intellectual Property", text: "The Aid Signal application, its source code, interface, algorithms and content are the exclusive property of Neyo Analytics. No reproduction, modification or distribution is authorized without prior written consent." },
                    { title: "6. Service Availability", text: "Neyo Analytics is committed to maintaining high availability of the application. Aid Signal offers offline capabilities to ensure continuity of field operations even without network connectivity." },
                    { title: "7. Modification of Terms", text: "Neyo Analytics reserves the right to modify these terms at any time. Users will be notified of significant changes through the application." },
                    { title: "8. Applicable Law", text: "These terms are governed by French law. Any dispute falls under the exclusive jurisdiction of the competent courts." }
                ],
                privacy: [
                    { title: "1. Data Controller", text: "Neyo Analytics is responsible for processing data collected through Aid Signal. Contact: privacy@neyo-analytics.com" },
                    { title: "2. Data Collected", text: "We collect: GPS coordinates of reported incidents, timestamps and incident types, field assessment photos and videos, encrypted authentication credentials, and anonymized technical data." },
                    { title: "3. Purpose of Processing", text: "Data is used solely to coordinate humanitarian interventions, generate assessment reports, feed the Aid Signal Pro dashboard and improve the application." },
                    { title: "4. Legal Basis", text: "Processing is based on the performance of a public interest mission (humanitarian crisis response) and your explicit consent. You may withdraw this consent at any time." },
                    { title: "5. Data Sharing", text: "Data may be shared with coordinators within your organization (via Aid Signal Pro) and accredited partner organizations (UNDP, NGOs). We never sell your data to third parties." },
                    { title: "6. Security", text: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our servers are hosted in ISO 27001 certified facilities. Regular security audits ensure protection of your data." },
                    { title: "7. Data Retention", text: "Operational data is retained for 5 years. Authentication data is deleted within 30 days of account closure." },
                    { title: "8. Your Rights (GDPR)", text: "You have the rights of access, rectification, erasure, portability and objection. To exercise these rights: privacy@neyo-analytics.com" },
                    { title: "9. Contact & Complaints", text: "DPO: dpo@neyo-analytics.com — ICO/CNIL: www.cnil.fr" }
                ]
            }
        }
    }
};