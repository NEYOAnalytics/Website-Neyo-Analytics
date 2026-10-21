export const immediatePosts = [
{
 slug: 'power-bi-guide-debutant', title: 'Power BI : à quoi sert cet outil et comment démarrer ?', seoTitle: 'Power BI : définition et guide pour démarrer',
 excerpt: 'Comprenez à quoi sert Power BI, comment passer des fichiers aux indicateurs fiables et quel premier projet choisir pour votre entreprise, étape par étape.',
 primaryKeyword: 'power bi', secondaryKeywords: ['c’est quoi Power BI', 'comment utiliser Power BI', 'Power BI Desktop', 'business intelligence'], category: 'Power BI',
 intro: 'Power BI est l’outil de business intelligence de Microsoft pour connecter des données, construire un modèle d’analyse et diffuser des rapports interactifs. Son intérêt apparaît quand une équipe doit suivre les mêmes indicateurs sans refaire les mêmes rapprochements de fichiers à chaque réunion.',
 sections: [
  {title: 'À quel problème Power BI répond-il dans une entreprise ?', paragraphs: [
   'Prenons une direction commerciale qui reçoit un export CRM, un fichier de facturation et un tableau d’objectifs. Le directeur demande le chiffre d’affaires par région. Avant de dessiner un graphique, il faut décider si ce chiffre correspond aux commandes signées, aux factures émises ou aux encaissements. Power BI affichera la définition que vous aurez construite, y compris si elle est mauvaise.',
   'Le premier bénéfice recherché est donc un calcul reproductible. Les données arrivent par un chemin connu, les règles sont explicites et les mêmes filtres s’appliquent aux utilisateurs autorisés. Le graphique vient ensuite. Si votre besoin consiste seulement à ajuster quelques hypothèses dans un budget individuel, un tableur peut rester plus adapté.'
  ]},
  {title: 'Desktop, service, rapport et tableau de bord : les repères utiles', paragraphs: [
   'Power BI Desktop sert notamment à préparer les données et à concevoir les modèles et rapports sur Windows. Le service Power BI permet leur diffusion et la collaboration dans le cloud. Microsoft documente aussi les applications mobiles et l’intégration de Power BI dans Fabric. Ce sont des composants complémentaires.',
   'Dans le vocabulaire Microsoft, un rapport peut comporter plusieurs pages interactives. Un tableau de bord du service est une page de tuiles épinglées. Dans une conversation métier, « tableau de bord » désigne souvent les deux. Précisez le livrable attendu dans votre cahier des charges pour éviter ce malentendu.'
  ], sources: [0, 1]},
  {title: 'Le chemin des données jusqu’à une décision', table: {caption: 'Les livrables à demander à chaque étape', headers: ['Étape', 'Travail concret', 'Preuve attendue'], rows: [
   ['Connexion', 'Identifier les sources et leurs propriétaires', 'Liste des fichiers, tables et accès'],
   ['Préparation', 'Typer les colonnes et traiter les anomalies', 'Règles de transformation documentées'],
   ['Modèle', 'Relier les ventes aux clients, produits et dates', 'Grain et relations vérifiés'],
   ['Indicateurs', 'Définir les calculs et filtres', 'Résultats rapprochés de la source'],
   ['Diffusion', 'Accorder les accès et organiser le suivi', 'Test de lecture et d’actualisation']
  ]}, paragraphs: ['Cette chaîne permet de localiser les erreurs. Un total incohérent peut venir d’une jointure qui duplique les lignes, d’un avoir ignoré ou d’un filtre de date. Modifier la couleur du graphique ne changera rien. Demandez qu’un chiffre affiché puisse être expliqué jusqu’à sa source.']},
  {title: 'Quel premier projet choisir pour apprendre sans se disperser ?', paragraphs: [
   'Choisissez une décision fréquente et un utilisateur qui peut valider le résultat. Par exemple : repérer les ventes en retard sur l’objectif par agence. Délimitez la période, la définition d’une vente et le niveau de détail. Mettez de côté les prévisions sophistiquées tant que le réalisé n’est pas fiable.',
   'Pour un exercice, travaillez avec des données fictives et un fichier stable. Pour une mise en production, ajoutez le propriétaire de la source, les horaires de disponibilité et les règles d’accès. Ce passage de l’exercice au service exploité mérite un budget explicite. Un rapport ouvert une fois ne prouve pas qu’il tiendra dans la durée.'
  ], steps: ['Écrire la question métier et la décision attendue.', 'Préparer un échantillon avec des cas ordinaires, des avoirs et des valeurs manquantes.', 'Construire le modèle et quelques mesures explicites.', 'Comparer les résultats à des calculs de référence.', 'Faire tester le rapport par son utilisateur avant de généraliser.']},
  {title: 'Comment vérifier que les indicateurs sont justes ?', paragraphs: [
   'Conservez un petit jeu de contrôle que vous savez recalculer. Exemple pédagogique : trois factures de 100, 200 et 300 euros hors taxes, puis un avoir de 50 euros. Le chiffre d’affaires net attendu est 550 euros si votre définition soustrait cet avoir sur la même période. Testez ensuite le même calcul par agence et par mois.',
   'Contrôlez également les absences. Une région sans vente doit-elle apparaître avec zéro, rester vide ou être masquée ? Un mois en cours doit-il être comparé à un mois complet ? Ces décisions appartiennent au métier. Notez-les dans un dictionnaire d’indicateurs, avec un responsable qui arbitre les écarts.'
  ], note: 'Les montants de cet exemple servent à expliquer une vérification. Ils ne représentent ni une économie promise ni un résultat de mission.'},
  {title: 'Ce qu’il faut prévoir avant de partager le rapport', paragraphs: [
   'L’accès au service et les droits de partage dépendent des licences utilisateur, de la capacité et du type d’espace de travail. Téléchargeable gratuitement, Desktop ne signifie pas que toute diffusion en entreprise est gratuite. Vérifiez le scénario exact avec l’administrateur et les conditions Microsoft en vigueur.',
   'Prévoyez aussi qui reçoit une alerte si l’actualisation échoue, qui remplace le propriétaire en cas de départ et qui approuve une modification de calcul. La fonctionnalité « Publier sur le web » rend les contenus accessibles publiquement sans authentification : elle ne convient pas à un rapport interne confidentiel.'
  ], sources: [2, 3]},
  {title: 'Le bon point de départ pour votre équipe', paragraphs: [
   'Un premier lot utile comprend la définition des indicateurs, un modèle compréhensible, un rapport limité à la décision retenue et une procédure de reprise. Demandez ces éléments dans le même livrable. Vous pourrez ensuite ajouter d’autres sources sans repartir d’un fichier opaque.',
   'Pour choisir l’outil, commencez par le comparatif [Power BI et Excel](/blog/power-bi-vs-excel). Si le besoin est déjà cadré, notre page [expertise Power BI](/expertises/power-bi) présente le périmètre d’accompagnement à discuter.'
  ]}
 ],
 faq: [
  {question: 'C’est quoi l’outil Power BI ?', answer: 'Power BI regroupe des outils Microsoft pour préparer, modéliser et présenter des données sous forme de rapports interactifs. Il sert à rendre des indicateurs réutilisables et partageables. La qualité du résultat dépend des sources et des définitions métier, pas seulement de la visualisation.'},
  {question: 'Comment utiliser Power BI quand on débute ?', answer: 'Commencez par une question précise et un fichier de données fictives ou autorisées. Importez-le dans Desktop, vérifiez les types de colonnes, construisez un modèle simple et comparez les totaux à un calcul manuel. Le partage et l’actualisation viennent après cette validation.'},
  {question: 'Faut-il savoir coder pour utiliser Power BI ?', answer: 'Les premières connexions et visualisations peuvent se faire avec l’interface. Pour des calculs réutilisables et une modélisation plus avancée, la compréhension de DAX, de Power Query et des relations devient utile. SQL aide aussi à préparer les données en amont.'}
 ],
 related: [{href: '/consultants/power-bi', label: 'Définir le rôle d’un consultant Power BI'}],
 sources: [{label: 'Microsoft : présentation de Power BI', url: 'https://learn.microsoft.com/fr-fr/power-bi/fundamentals/power-bi-overview'}, {label: 'Microsoft : concepts du service Power BI', url: 'https://learn.microsoft.com/fr-fr/power-bi/fundamentals/service-basic-concepts'}, {label: 'Microsoft : fonctionnalités selon la licence', url: 'https://learn.microsoft.com/fr-fr/power-bi/fundamentals/service-features-license-type'}, {label: 'Microsoft : publication publique sur le web', url: 'https://learn.microsoft.com/fr-fr/power-bi/collaborate-share/service-publish-to-web'}]
},
{
 slug: 'power-bi-vs-excel', title: 'Power BI ou Excel : lequel choisir pour votre reporting ?', seoTitle: 'Power BI vs Excel : quel outil pour votre reporting ?',
 excerpt: 'Comparez Power BI et Excel selon vos usages : analyse, saisie, reporting partagé, actualisation et coûts. Une grille concrète pour choisir sans tout remplacer.',
 primaryKeyword: 'power bi vs excel', secondaryKeywords: ['différence Power BI et Excel', 'reporting Excel', 'Excel ou Power BI'], category: 'Comparatifs BI',
 intro: 'Excel convient à l’exploration souple, à la saisie et aux simulations. Power BI devient pertinent quand plusieurs personnes doivent consulter des indicateurs partagés, alimentés par des sources récurrentes. Les deux outils peuvent fonctionner ensemble : votre choix dépend surtout du travail à produire et à maintenir.',
 sections: [
  {title: 'La vraie différence se voit après la première version', paragraphs: [
   'Le premier graphique peut être rapide dans les deux outils. Regardez plutôt ce qui se passe le mois suivant. Quelqu’un doit-il copier de nouvelles lignes, corriger les formules et renvoyer le fichier ? Les responsables utilisent-ils tous la même définition du chiffre d’affaires ? Le rapport peut-il fonctionner en l’absence de son créateur ?',
   'Ces questions ne condamnent pas Excel. Un classeur organisé, documenté et alimenté par Power Query peut rendre un service fiable. À l’inverse, un rapport Power BI construit sur des exports manuels et des règles implicites conserve les mêmes fragilités. Le changement d’outil ne remplace pas le travail sur les données.'
  ]},
  {title: 'Une grille de choix selon le travail réel', table: {caption: 'Comparer les usages avant les fonctionnalités', headers: ['Votre besoin', 'Point de départ conseillé', 'Condition à vérifier'], rows: [
   ['Saisir un budget et tester des hypothèses', 'Excel', 'Contrôle des cellules et versions'],
   ['Explorer ponctuellement un extrait', 'Excel ou outil déjà maîtrisé', 'Taille et confidentialité de l’extrait'],
   ['Diffuser un reporting récurrent', 'Power BI à étudier', 'Modèle, licences et exploitation'],
   ['Partager des indicateurs communs', 'Modèle sémantique et accès gérés', 'Définitions et responsabilités'],
   ['Modifier des données métier depuis un écran', 'Application ou flux de saisie adapté', 'Validation, traçabilité et droits']
  ]}, paragraphs: ['Power BI n’est pas conçu comme un tableur de saisie généraliste. Des architectures peuvent lui adjoindre d’autres composants, mais leur coût et leur maintenance doivent entrer dans la décision. Pour un processus qui modifie des commandes ou des prix, décrivez d’abord le contrôle métier attendu.']},
  {title: 'Quand garder Excel est une bonne décision', paragraphs: [
   'Une personne prépare une estimation, modifie plusieurs hypothèses et discute les scénarios avec son responsable. Le besoin porte sur le raisonnement, les formules et l’ajustement des entrées. Un classeur explicite et partagé dans un emplacement maîtrisé peut suffire. Migrer ce travail vers Power BI ferait perdre de la souplesse sans régler un problème démontré.',
   'Conservez toutefois des règles simples : distinguer les entrées des calculs, éviter les valeurs cachées dans les formules, protéger les données de référence et désigner la version qui fait foi. Si plusieurs collaborateurs modifient le fichier, définissez qui arbitre les changements. Un fichier critique mérite une documentation, même s’il tient sur quelques onglets.'
  ]},
  {title: 'Les signaux qui justifient une étude Power BI', paragraphs: [
   'La piste Power BI devient plus intéressante lorsque les mêmes transformations reviennent, que les destinataires se multiplient ou que les chiffres divergent entre services. Demandez alors une démonstration sur vos règles de calcul, pas seulement sur une galerie de graphiques. Elle doit montrer une actualisation et un rapprochement avec une source connue.',
   'La collaboration nécessite aussi un mode de diffusion adapté. Les droits des auteurs et lecteurs dépendent des licences et capacités. La sécurité des données doit être testée avec des comptes représentatifs. Ne confondez pas un filtre visuel choisi par l’utilisateur avec une restriction d’accès réellement appliquée.'
  ], sources: [0]},
  {title: 'Power Query et le modèle partagé permettent de combiner les deux', paragraphs: [
   'Power Query est présent dans plusieurs produits Microsoft, dont Excel et Power BI. Il permet de décrire des transformations reproductibles. Il ne rend pas automatiquement deux fichiers cohérents : si les règles sont dupliquées puis modifiées séparément, leurs résultats peuvent diverger.',
   'Une autre approche consiste à connecter Excel à un modèle sémantique Power BI autorisé. Les utilisateurs gardent alors leurs tableaux croisés dynamiques tout en interrogeant les mesures du modèle partagé. Les prérequis de droits, de licence et les limitations de connexion sont à vérifier. Cette architecture évite de demander à tous les analystes d’abandonner leur environnement de travail.'
  ], sources: [1, 2]},
  {title: 'Chiffrer le coût complet plutôt que le prix de la licence', paragraphs: [
   'Listez la préparation initiale, les licences, l’hébergement éventuel, l’administration et le temps consacré aux incidents. Ajoutez les modifications de source et les demandes d’évolution. Une solution peu chère à l’achat peut mobiliser une personne chaque semaine. Une plateforme plus complète peut aussi être excessive pour un besoin ponctuel.',
   'Exemple de méthode, sans promesse de gain : notez pendant deux cycles le temps de collecte, de correction et de diffusion. Estimez ensuite la part réellement supprimable par une alimentation automatisée. La validation métier, elle, ne disparaît pas. Comparez les scénarios sur le même périmètre et faites apparaître les hypothèses.'
  ], note: 'Les tarifs évoluent selon le pays, le contrat et les capacités. Utilisez les conditions Microsoft du moment pour votre budget, plutôt qu’un prix isolé trouvé dans un article.'},
  {title: 'Faire un pilote qui permet de décider', steps: [
   'Choisir un rapport récurrent et une période déjà clôturée.',
   'Documenter les définitions, les sources et les corrections manuelles.',
   'Reproduire le calcul dans le scénario étudié et expliquer les écarts.',
   'Tester la mise à jour suivante et l’accès d’un lecteur.',
   'Décider avec le métier selon la fiabilité, le temps de maintenance et le coût complet.'
  ], paragraphs: ['Le pilote doit pouvoir conclure à garder Excel, combiner les outils ou migrer un périmètre limité. Pour situer les composants, consultez le [guide de démarrage Power BI](/blog/power-bi-guide-debutant). Pour cadrer une mission, reportez-vous au [rôle du consultant Power BI](/consultants/power-bi).']}
 ],
 faq: [
  {question: 'Quelle est la différence entre Power BI et Excel ?', answer: 'Excel est un tableur adapté à la saisie, aux calculs et aux simulations. Power BI organise davantage la modélisation et la consultation de rapports interactifs partagés. Leurs usages se recoupent, notamment avec Power Query, et Excel peut aussi interroger un modèle sémantique Power BI autorisé.'},
  {question: 'Power BI remplace-t-il Excel ?', answer: 'Il peut remplacer certains fichiers de reporting, surtout ceux qui diffusent des indicateurs récurrents. Excel reste utile pour des analyses ponctuelles et des simulations. Une migration pertinente identifie ce qui doit être centralisé et ce qui gagne à rester dans un tableur maîtrisé.'},
  {question: 'Faut-il migrer tous ses fichiers Excel vers Power BI ?', answer: 'Commencez par les fichiers dont la maintenance ou les divergences posent un problème mesurable. Vérifiez d’abord les sources et les définitions. Un classeur peu utilisé et simple à maintenir n’a pas la même priorité qu’un reporting partagé entre plusieurs directions.'}
 ],
 related: [{href: '/expertises/power-bi', label: 'Accompagnement NEYO sur Power BI'}],
 sources: [{label: 'Microsoft : partage de rapports et tableaux de bord', url: 'https://learn.microsoft.com/fr-fr/power-bi/collaborate-share/service-share-dashboards'}, {label: 'Microsoft : présentation de Power Query', url: 'https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query'}, {label: 'Microsoft : se connecter à Power BI depuis Excel', url: 'https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-connect-excel-power-bi-datasets'}]
},
{
 slug: 'gcp-google-cloud-guide', title: 'GCP : comprendre Google Cloud pour un projet Data', seoTitle: 'GCP : services Google Cloud pour un projet Data',
 excerpt: 'Découvrez les services GCP utiles à un projet Data : BigQuery, Cloud Storage et IAM. Un exemple d’architecture et les points à cadrer avant de vous lancer.',
 primaryKeyword: 'gcp', secondaryKeywords: ['Google Cloud Platform', 'c’est quoi GCP', 'GCP data', 'Google Cloud BigQuery'], category: 'Google Cloud',
 intro: 'GCP signifie Google Cloud Platform, une appellation courante de la plateforme cloud de Google. Elle propose des services de calcul, de stockage, d’analyse et d’IA. Pour un projet Data, le bon départ consiste à choisir un flux métier précis puis les services nécessaires à son traitement, à sa sécurité et à son exploitation.',
 sections: [
  {title: 'Google Cloud, Google Workspace et BigQuery ne désignent pas la même chose', paragraphs: [
   'Google Workspace regroupe notamment les outils de collaboration comme Gmail et Google Drive. Google Cloud fournit des services techniques pour exécuter des applications et traiter des données. BigQuery est l’un de ces services, spécialisé dans l’analyse. Acheter ou utiliser Workspace ne signifie pas disposer d’une plateforme Data déjà organisée.',
   'Google décrit ses ressources au travers d’une organisation, de dossiers et de projets selon les configurations. Un projet sert de périmètre à des ressources, aux API et à des contrôles d’accès. Avant de créer des services, faites préciser leur propriétaire, leur environnement et leur rattachement à la facturation. Cette organisation évite que le pilote devienne une dépendance inconnue du reste de la DSI.'
  ], sources: [0, 1]},
  {title: 'Les services à connaître sans apprendre tout le catalogue', table: {caption: 'Rôle des principaux composants d’un flux Data', headers: ['Service', 'Usage à examiner', 'Question à poser'], rows: [
   ['Cloud Storage', 'Conserver des fichiers et objets', 'Qui peut lire et combien de temps garder ?'],
   ['BigQuery', 'Analyser des données avec SQL', 'Quelles requêtes et quel modèle de coût ?'],
   ['Pub/Sub', 'Transporter des messages entre composants', 'Le besoin exige-t-il des événements continus ?'],
   ['Dataflow', 'Traiter des flux ou lots avec Apache Beam', 'Quelle complexité et quelle compétence disponible ?'],
   ['Cloud Run', 'Exécuter des services ou traitements conteneurisés', 'Qui surveille les exécutions et les erreurs ?'],
   ['IAM', 'Attribuer des permissions aux identités', 'Quel accès minimal pour chaque acteur ?']
  ]}, paragraphs: ['Cette liste sert à comprendre les rôles, pas à imposer six produits dans chaque architecture. Un chargement périodique simple peut suffire à une première analyse. Ajouter un traitement continu alors que la source change une fois par nuit alourdit l’exploitation sans améliorer la décision.'], sources: [2, 3, 4]},
  {title: 'Exemple : relier ventes et stocks sans tout reconstruire', paragraphs: [
   'Imaginons une équipe qui veut identifier les produits vendus mais bientôt indisponibles. Les ventes proviennent d’un export quotidien et les stocks d’un autre système. Dans une architecture de départ, les fichiers arrivent dans une zone contrôlée, sont chargés puis rapprochés dans BigQuery. Un outil BI lit ensuite une table conçue pour cette question.',
   'La partie délicate est souvent la signification des données. Un code produit désigne-t-il une référence ou une variante ? Le stock inclut-il les réservations ? Les ventes et les stocks portent-ils sur la même heure ? Écrivez ces conventions avant de choisir le nombre de services. Un traitement techniquement réussi peut produire une alerte métier trompeuse.',
   'Conservez les données reçues selon une politique de rétention définie et associez chaque lot à un statut de contrôle. Si un fichier est incomplet, le rapport doit le signaler plutôt que présenter silencieusement un stock partiel comme à jour.'
  ]},
  {title: 'Région, accès et données sensibles : les décisions de départ', paragraphs: [
   'Choisissez les emplacements compatibles avec les services retenus, la latence et vos contraintes contractuelles. Les notions de région, zone et multirégion varient selon le produit. Par exemple, une localisation BigQuery et celle des fichiers utilisés pour certains chargements doivent respecter les règles documentées du service.',
   'Séparez les identités humaines de celles des traitements. Accordez des permissions adaptées au besoin, avec une procédure de retrait. Une région européenne ne démontre pas à elle seule la conformité d’un traitement : les accès, les flux, les contrats et les usages doivent aussi être examinés avec les responsables compétents.'
  ], sources: [5, 6]},
  {title: 'Comment éviter qu’un essai échappe au budget ?', paragraphs: [
   'Identifiez séparément stockage, calcul, transferts et services annexes. Pour BigQuery, distinguez notamment la tarification à la demande et la capacité. Une requête sur des colonnes et partitions inutiles peut coûter davantage qu’une requête ciblée. Il faut relier la consommation à un usage identifié.',
   'Les budgets avec alertes servent à suivre la dépense et à notifier des seuils. Ils ne sont pas, à eux seuls, un plafond bloquant. Google documente aussi des mécanismes de plafonnement pour certains services : vérifiez leur disponibilité et leur périmètre. Confiez à une personne la lecture et le traitement des alertes.'
  ], sources: [7, 8]},
  {title: 'Ce que votre premier lot devrait livrer', steps: [
   'Une source et une décision métier, avec leurs propriétaires.',
   'Un environnement de test distinct de la production et des accès explicités.',
   'Un flux qui peut être rejoué sans doubler les données.',
   'Des contrôles de complétude, de fraîcheur et de cohérence.',
   'Un coût observé sur des exécutions représentatives et une procédure d’incident.'
  ], paragraphs: ['Demandez une démonstration de reprise après une entrée invalide. Elle renseigne davantage sur l’exploitabilité que le seul affichage d’un graphique. Pour relier ces choix au reste de votre système, consultez nos pages [expertise cloud](/expertises/cloud) et [Data Engineering](/expertises/data-engineering).']}
 ],
 faq: [
  {question: 'C’est quoi GCP ?', answer: 'GCP est le sigle couramment utilisé pour Google Cloud Platform. Il désigne des services cloud de Google pour héberger des applications, stocker et analyser des données ou utiliser des composants d’IA. Une entreprise choisit les services selon ses usages plutôt que de déployer toute la plateforme.'},
  {question: 'Quelle différence entre GCP et BigQuery ?', answer: 'Google Cloud est la plateforme qui rassemble de nombreux services. BigQuery est un service d’analyse de données de cette plateforme. Un projet peut utiliser BigQuery avec Cloud Storage, des outils d’intégration et un outil de reporting, selon son architecture et ses contraintes.'},
  {question: 'GCP est-il gratuit ?', answer: 'Certains usages peuvent relever d’essais ou de quotas gratuits sous conditions. Au-delà, la facturation dépend des services, emplacements et consommations. Consultez les conditions Google Cloud en vigueur et configurez des contrôles adaptés avant de charger des données ou de lancer des traitements.'}
 ], related: [{href: '/blog/power-bi-guide-debutant', label: 'Comprendre la couche de reporting avec Power BI'}],
 sources: [
 {label: 'Google Cloud : vue d’ensemble', url: 'https://cloud.google.com/docs/overview'},
 {label: 'Google Cloud : hiérarchie des ressources', url: 'https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy'},
 {label: 'Google Cloud : présentation de Cloud Storage', url: 'https://cloud.google.com/storage/docs/introduction'},
 {label: 'Google Cloud : présentation de Pub/Sub', url: 'https://cloud.google.com/pubsub/docs/overview'},
 {label: 'Google Cloud : présentation de Dataflow', url: 'https://cloud.google.com/dataflow/docs/overview'},
 {label: 'Google Cloud : localisations BigQuery', url: 'https://cloud.google.com/bigquery/docs/locations'},
 {label: 'Google Cloud : présentation d’IAM', url: 'https://cloud.google.com/iam/docs/overview'},
 {label: 'Google Cloud : tarification BigQuery', url: 'https://cloud.google.com/bigquery/pricing'},
 {label: 'Google Cloud : budgets et alertes', url: 'https://cloud.google.com/billing/docs/how-to/budgets'}]
},
{
 slug: 'palantir-foundry-guide', title: 'Palantir Foundry : à quoi sert la plateforme en entreprise ?', seoTitle: 'Palantir Foundry : usages, Ontology et choix',
 excerpt: 'Comprenez Palantir Foundry, son Ontology et son lien avec AIP. Des exemples concrets et une grille pour décider si la plateforme répond à votre besoin métier.',
 primaryKeyword: 'palantir foundry', secondaryKeywords: ['c’est quoi Palantir', 'Palantir Ontology', 'Palantir AIP', 'Foundry entreprise'], category: 'Palantir',
 intro: 'Palantir Foundry est une plateforme pour intégrer des données, les organiser et construire des usages analytiques ou opérationnels. Son Ontology représente des objets métier, leurs relations et les actions associées. Son intérêt se juge sur le processus à améliorer, les systèmes à relier et la capacité de l’équipe à exploiter l’ensemble.',
 sections: [
  {title: 'Foundry, Ontology et AIP : trois notions à distinguer', paragraphs: [
   'Foundry fournit un environnement de travail autour des données et des applications. L’Ontology porte une représentation métier : des objets comme une commande ou un équipement, des liens et des actions définies. AIP apporte des capacités d’utilisation de l’IA dans cet environnement. Comprendre ces rôles évite d’évaluer l’ensemble comme un simple outil de graphique ou comme un assistant conversationnel isolé.',
   'Pour un acheteur, la question utile est plus précise que « que fait Palantir ? ». Demandez quel travail sera réalisé par quel utilisateur, avec quelles données et quels droits. Une démonstration impressionnante mais étrangère à votre processus ne permet pas de choisir.'
  ], sources: [0, 1, 2]},
  {title: 'À quoi ressemble une Ontology dans un cas concret ?', paragraphs: [
   'Prenons un scénario fictif de maintenance industrielle. Un équipement appartient à un site, comporte des pièces et reçoit des interventions. Le modèle doit permettre de relier une anomalie à l’équipement concerné et au stock de pièces disponible. Ces relations rendent la navigation métier plus lisible que des tables indépendantes.',
   'Une action peut représenter une demande d’intervention. Son exécution doit respecter les autorisations et les validations définies. Le fait qu’une action figure dans une interface ne signifie pas que tous les utilisateurs peuvent la lancer ni qu’elle met automatiquement à jour tous les systèmes sources. Ces interactions doivent être conçues et testées.',
   'Avant de développer, écrivez quelques objets et relations avec les responsables métier. Si deux services utilisent des définitions incompatibles du même équipement ou du même client, le chantier commence par cet arbitrage. La plateforme ne peut pas choisir à leur place.'
  ], sources: [1, 3]},
  {title: 'Quand une plateforme intégrée mérite d’être étudiée', table: {caption: 'Des signaux à examiner pendant le cadrage', headers: ['Situation', 'Question pour le pilote', 'Preuve à exiger'], rows: [
   ['Données dispersées dans plusieurs systèmes', 'Peut-on reconstituer le processus utile ?', 'Traçabilité et règles de rapprochement'],
   ['Décision suivie d’une action métier', 'Comment l’action est-elle contrôlée ?', 'Droits, validation et journalisation'],
   ['Plusieurs rôles avec des accès différents', 'Que voit et fait chaque utilisateur ?', 'Tests par rôle sur des données représentatives'],
   ['Besoin d’intégrer de l’IA', 'Quelles erreurs sont acceptables ?', 'Évaluation sur des cas documentés']
  ]}, paragraphs: ['Ces signaux ne suffisent pas à recommander Foundry. Une architecture plus légère peut répondre au besoin avec moins de changement. Faites comparer les options sur le même processus, avec les mêmes critères de reprise, de sécurité et de maintenance.']},
  {title: 'Les cas où il faut regarder une option plus simple', paragraphs: [
   'Si votre besoin se limite à consulter des ventes déjà propres dans un entrepôt, un outil BI et un modèle sémantique peuvent suffire. Si le problème est un flux de chargement défaillant, commencez par la fiabilité de ce flux. La profondeur fonctionnelle d’une plateforme ne justifie pas à elle seule son adoption.',
   'Examinez aussi votre organisation. Qui possède le modèle métier ? Qui approuve une nouvelle action ? Qui maintient les connecteurs et les applications ? Sans responsabilités, le risque est de recréer dans une plateforme intégrée les mêmes dépendances individuelles que dans les outils précédents.'
  ]},
  {title: 'Les questions à poser sur les accès et l’IA', paragraphs: [
   'Palantir documente des contrôles d’accès aux ressources de l’Ontology ainsi qu’aux objets et liens. Lors du pilote, faites vérifier ce qu’un utilisateur peut consulter et ce qu’il peut modifier. Utilisez des comptes correspondant aux futurs rôles, plutôt qu’un seul compte administrateur.',
   'Si un modèle de langage intervient, testez les réponses attendues, les cas ambigus et les demandes qui ne doivent pas aboutir. Une suggestion et une action exécutée n’ont pas les mêmes conséquences. Définissez les validations humaines, les traces à conserver et la procédure de correction. Les droits de la plateforme et les règles de l’application doivent être cohérents.'
  ], sources: [3, 2]},
  {title: 'Évaluer les coûts et la dépendance avant de s’engager', paragraphs: [
   'Demandez une proposition qui distingue abonnement, capacités, intégration, formation, support et évolutions. Le coût d’exploitation comprend aussi la disponibilité des compétences et les changements de vos sources. Sans devis correspondant à votre périmètre, annoncer un prix universel serait trompeur.',
   'Décrivez un scénario de sortie dès le départ : quelles données seront exportées, sous quel format, comment récupérer les règles métier et quelles applications devront être reconstruites. Faites démontrer un export sur le pilote. La réversibilité se vérifie sur un résultat récupérable, pas sur une phrase générale dans une présentation.'
  ]},
  {title: 'Un pilote qui mesure une amélioration métier', steps: [
   'Retenir un processus limité avec un responsable disponible.',
   'Lister objets, sources, actions et contrôles attendus.',
   'Construire un parcours complet, de la donnée à la décision.',
   'Tester les permissions, les erreurs et la reprise.',
   'Comparer au fonctionnement actuel, puis décider de poursuivre ou réduire le périmètre.'
  ], paragraphs: ['Pour discuter du périmètre, consultez notre page [expertise Palantir](/expertises/palantir). Si la difficulté porte surtout sur la propriété des données, la [gouvernance Data](/expertises/data-governance) est un chantier à cadrer en parallèle.']}
 ],
 faq: [
  {question: 'C’est quoi Palantir Foundry ?', answer: 'Foundry est une plateforme Palantir pour travailler sur les données et construire des usages métier. Elle rassemble notamment des fonctions d’intégration, d’analyse et de développement d’applications. Sa pertinence dépend du processus ciblé et des contraintes de l’entreprise, plutôt que du seul volume de données.'},
  {question: 'À quoi sert l’Ontology de Palantir ?', answer: 'L’Ontology organise des objets métier, leurs relations et les actions associées. Par exemple, elle peut relier un équipement, son site et ses interventions. Cette représentation nécessite des définitions partagées et des règles d’accès. Elle ne remplace pas la qualité des sources.'},
  {question: 'Palantir remplace-t-il Power BI ?', answer: 'Certaines fonctions analytiques peuvent se recouper, mais les périmètres diffèrent. Power BI répond notamment à des besoins de reporting et de modèles sémantiques. Foundry peut couvrir un processus opérationnel plus large. Comparez le besoin complet et l’architecture existante avant de décider d’un remplacement.'}
 ], related: [{href: '/expertises/data-engineering', label: 'Fiabiliser l’intégration des données'}],
 sources: [{label: 'Palantir : vue d’ensemble de la plateforme', url: 'https://www.palantir.com/docs/foundry/platform-overview/overview'}, {label: 'Palantir : ressources de l’Ontology', url: 'https://www.palantir.com/docs/foundry/ontologies/ontologies-overview'}, {label: 'Palantir : AIP', url: 'https://www.palantir.com/docs/foundry/aip/overview'}, {label: 'Palantir : permissions sur les objets', url: 'https://www.palantir.com/docs/foundry/object-permissioning/overview'}]
},
{
 slug: 'onshore-offshore-nearshore-differences', title: 'Onshore, offshore, nearshore : les différences pour un projet Data', seoTitle: 'Onshore, offshore, nearshore : différences et choix',
 excerpt: 'Comparez onshore, offshore et nearshore pour un projet Data : localisation, collaboration, coût complet, accès aux données et critères de choix du prestataire.',
 primaryKeyword: 'différence onshore offshore', secondaryKeywords: ['onshore définition', 'offshore définition', 'nearshore', 'types externalisation'], category: 'Externalisation Data',
 intro: 'L’onshore désigne une prestation réalisée dans le pays du client. L’offshore implique une réalisation à l’étranger, souvent dans un pays éloigné ; le nearshore désigne un pays proche. Pour un projet Data, cette localisation compte, mais les compétences, la collaboration et l’accès aux données doivent être évalués séparément.',
 sections: [
  {title: 'Comparer les modèles sans confondre les critères', paragraphs: [
   'Ces termes décrivent d’abord une relation géographique entre le client et l’équipe de réalisation. Les usages du mot offshore varient : il peut désigner largement une activité à l’étranger, tandis que le nearshore précise la proximité. Les travaux sur l’externalisation distinguent aussi la distance temporelle, qui influence les échanges au quotidien.',
   'Une équipe dans le même pays peut travailler à distance. Une équipe dans un pays proche peut participer aux réunions sans difficulté de calendrier majeure. Aucun de ces cas ne prouve la qualité de la livraison. Pour comparer des propositions, séparez localisation, mode contractuel, organisation et compétence technique.'
  ], sources: [0, 1]},
  {title: 'Ce qui change concrètement pour un projet Data', table: {caption: 'Les critères opérationnels à comparer', headers: ['Critère', 'Question à documenter', 'Élément de décision'], rows: [
   ['Localisation', 'Où les personnes réalisent-elles la prestation ?', 'Pays, lieux d’accès et déplacements'],
   ['Collaboration', 'Quelles plages communes sont convenues ?', 'Réunions, incidents et décisions'],
   ['Compétence', 'Qui traite les difficultés de votre stack ?', 'Exercice et références vérifiables'],
   ['Données', 'Quels accès sont nécessaires ?', 'Périmètre minimal et contrôles'],
   ['Continuité', 'Que se passe-t-il lors d’une absence ?', 'Documentation et remplacement'],
   ['Coût complet', 'Qu’inclut le prix proposé ?', 'Pilotage, outils, reprise et sortie']
  ]}, paragraphs: ['Pour les décalages horaires, vérifiez les heures locales sur les dates du projet. Les changements saisonniers peuvent modifier les plages communes. Ne transformez pas une proximité géographique en promesse permanente d’horaires identiques.']},
  {title: 'Quels sont les deux types d’externalisation ?', paragraphs: [
   'Il n’existe pas une liste universelle de deux types qui décrirait tous les projets. Une distinction fréquente porte sur la fonction confiée : externalisation informatique, souvent appelée ITO, et externalisation de processus métier, appelée BPO. Mais d’autres classifications distinguent une partie ou la totalité d’une fonction, ou un renfort de capacité et un service géré.',
   'Onshore, offshore et nearshore répondent à une autre question : où le travail est-il réalisé ? Régie et forfait décrivent encore un autre axe, lié au contrat et à la responsabilité du périmètre. Lors d’une consultation, faites écrire les engagements précis plutôt que vous fier au seul vocabulaire.'
  ], note: 'Le bon critère n’est pas le nombre de catégories. C’est la répartition écrite des responsabilités entre votre équipe et le prestataire.'},
  {title: 'Pourquoi les projets Data demandent un cadrage particulier', paragraphs: [
   'Un ingénieur peut maîtriser SQL sans connaître votre définition du chiffre d’affaires, vos règles d’allocation ou les exceptions de votre ERP. Le démarrage doit rendre ces conventions accessibles. Désignez un interlocuteur métier et une personne responsable des sources. Les arbitrages qui restent en attente ralentissent la réalisation, quel que soit le pays.',
   'Évitez aussi de donner un accès très large « pour aller plus vite ». Préparez un environnement adapté, des données de test et des autorisations limitées au travail demandé. Prévoyez leur retrait à la fin de la mission. Les obligations applicables aux données et transferts doivent être examinées avec vos responsables sécurité et protection des données.',
   'Pour un prestataire situé hors de votre pays, la localisation du stockage ne décrit pas tous les flux : l’accès distant et les sous-traitants comptent également. Cette vérification dépend du cas concret et des règles en vigueur.'
  ], sources: [2]},
  {title: 'Comparer le coût total de deux offres', paragraphs: [
   'Un taux journalier ne suffit pas. Demandez ce qui est compris dans la disponibilité, le pilotage, le matériel, les licences, la documentation et la reprise. Estimez aussi le temps que votre équipe consacrera aux validations. Une prestation moins chère par jour peut devenir plus coûteuse si les livrables nécessitent des corrections répétées.',
   'Utilisez une même fiche de comparaison pour chaque candidat : périmètre, séniorité, livrables, disponibilité, dépendances et conditions de sortie. Si un tarif ou un pourcentage d’économie n’est pas appuyé sur un devis comparable, gardez-le comme hypothèse. Il ne constitue pas un résultat acquis.'
  ]},
  {title: 'Un lot pilote pour tester la collaboration', paragraphs: [
   'Confiez un travail limité qui contient une difficulté réelle. Par exemple, intégrer une source et livrer un indicateur dont les cas particuliers sont connus. Le prestataire doit documenter ses hypothèses, signaler les anomalies et faire valider le résultat. Vous observez ainsi le raisonnement et la communication, au-delà du CV.',
   'Définissez les critères de réception avant le démarrage : rapprochement des totaux, rejeu sans doublon, accès testés et procédure de reprise. Faites ensuite reprendre le travail par une autre personne. Si elle ne peut pas l’expliquer ou l’exécuter, le transfert est incomplet.'
  ], steps: ['Nommer les décideurs métier et techniques.', 'Fixer des plages de collaboration et une voie d’escalade.', 'Décrire un livrable vérifiable et ses critères de réception.', 'Tester la documentation, la reprise et le retrait des accès.']},
  {title: 'Comment situer le nearshore marocain dans cette comparaison ?', paragraphs: [
   'Pour un client européen, le Maroc peut être étudié comme une option de proximité géographique. La langue de travail, les disponibilités et les compétences doivent être confirmées pour les personnes proposées. Le choix doit rester lié à votre projet et à ses contraintes.',
   'Notre page [nearshore Data au Maroc](/nearshore-maroc) présente le positionnement NEYO. Pour transformer une demande générale en mission vérifiable, consultez le [processus de cadrage et de suivi](/notre-process).']}
 ],
 faq: [
  {question: 'Quelle est la différence entre onshore et offshore ?', answer: 'L’onshore situe la réalisation dans le pays du client. L’offshore situe une activité à l’étranger, souvent dans une destination éloignée dans le vocabulaire de l’externalisation. Les deux termes ne précisent ni la qualité, ni le contrat, ni les obligations d’accès aux données.'},
  {question: 'Qu’est-ce que ça veut dire offshore ?', answer: 'Dans l’externalisation, offshore décrit une activité réalisée à l’étranger, souvent à distance du pays client. Le terme ne signifie pas automatiquement bas coût ou absence de contrôle. Le périmètre, les responsabilités, les horaires et les accès doivent être définis dans la prestation.'},
  {question: 'Que signifie le terme onshore ?', answer: 'Onshore signifie que la prestation est réalisée dans le même pays que le client. Cela n’implique pas que l’équipe travaille dans les locaux du client. Le mode de travail sur site, à distance ou hybride doit être précisé séparément lors du cadrage.'},
  {question: 'Le nearshore est-il adapté à tous les projets Data ?', answer: 'Il peut convenir si les compétences, la collaboration et les contrôles attendus sont réunis. Certains projets imposent d’autres contraintes de présence, d’accès ou de contrat. Un pilote limité et des critères de réception explicites permettent d’évaluer la pertinence du modèle pour votre contexte.'}
 ], related: [{href: '/pourquoi-externaliser', label: 'Évaluer les raisons d’externaliser une mission Data'}],
 sources: [{label: 'IBM : formes d’externalisation BPO', url: 'https://www.ibm.com/think/topics/business-process-outsourcing'}, {label: 'Étude : transitions de l’onshore au nearshore', url: 'https://arxiv.org/abs/2103.03383'}, {label: 'CNIL : transferts de données hors de l’UE', url: 'https://www.cnil.fr/fr/les-outils-de-la-conformite/transferer-des-donnees-hors-de-lue'}]
}
];
