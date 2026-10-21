# Calendrier éditorial NEYO Analytics

Création : 21 octobre 2026. Cinq nouveaux articles sont accessibles dès la mise en ligne ; quinze autres sont rendus disponibles quotidiennement à 09 h, heure de Paris, du 22 octobre au 5 novembre 2026.

| Publication (Paris) | Article | Mot-clé principal |
| --- | --- | --- |
| 21/10/2026 00:00 | [Power BI : à quoi sert cet outil et comment démarrer ?](/blog/power-bi-guide-debutant) | power bi |
| 21/10/2026 00:00 | [Power BI ou Excel : lequel choisir pour votre reporting ?](/blog/power-bi-vs-excel) | power bi vs excel |
| 21/10/2026 00:00 | [GCP : comprendre Google Cloud pour un projet Data](/blog/gcp-google-cloud-guide) | gcp |
| 21/10/2026 00:00 | [Palantir Foundry : à quoi sert la plateforme en entreprise ?](/blog/palantir-foundry-guide) | palantir foundry |
| 21/10/2026 00:00 | [Onshore, offshore, nearshore : les différences pour un projet Data](/blog/onshore-offshore-nearshore-differences) | différence onshore offshore |
| 22/10/2026 09:00 | [Power BI est-il gratuit ? Comprendre les licences et le partage](/blog/power-bi-gratuit-licences) | power bi gratuit |
| 23/10/2026 09:00 | [Créer un tableau de bord Power BI : un exemple de ventes vérifiable](/blog/creer-tableau-bord-power-bi) | créer tableau de bord power bi |
| 24/10/2026 09:00 | [BigQuery : fonctionnement, usages et premiers contrôles de coût](/blog/bigquery-definition-fonctionnement) | bigquery |
| 25/10/2026 09:00 | [Migration cloud Data : la checklist avant de déplacer vos pipelines](/blog/migration-cloud-data-checklist) | migration cloud data |
| 26/10/2026 09:00 | [DAX ou Power Query : où placer vos transformations Power BI ?](/blog/dax-power-query-differences) | dax power query différence |
| 27/10/2026 09:00 | [Modèle en étoile Power BI : concevoir des relations qui donnent les bons totaux](/blog/modele-etoile-power-bi) | modèle en étoile power bi |
| 28/10/2026 09:00 | [ETL ou ELT : choisir où transformer vos données](/blog/etl-vs-elt) | etl vs elt |
| 29/10/2026 09:00 | [Palantir Foundry ou Databricks : comparer le processus, pas seulement les fonctions](/blog/palantir-foundry-vs-databricks) | palantir foundry vs databricks |
| 30/10/2026 09:00 | [Gouvernance des données : démarrer par les décisions qui bloquent](/blog/gouvernance-donnees-plan-action) | gouvernance des données |
| 31/10/2026 09:00 | [FinOps Data : comprendre et réduire les coûts cloud sans casser les usages](/blog/finops-cloud-data-couts) | finops data |
| 01/11/2026 09:00 | [dbt : transformer et tester vos données sans multiplier les scripts isolés](/blog/dbt-transformation-tests-donnees) | dbt data |
| 02/11/2026 09:00 | [Data warehouse, data lake ou lakehouse : choisir selon les usages](/blog/data-warehouse-data-lake-lakehouse) | data warehouse vs data lake |
| 03/11/2026 09:00 | [RAG en entreprise : relier une IA à vos documents avec des réponses évaluables](/blog/rag-ia-generative-entreprise) | rag entreprise |
| 04/11/2026 09:00 | [Qualité des données : quels indicateurs suivre et comment agir ?](/blog/qualite-donnees-indicateurs) | qualité des données |
| 05/11/2026 09:00 | [Cahier des charges Data et BI : le modèle pour obtenir des offres comparables](/blog/cahier-charges-projet-data-bi) | cahier des charges projet data |

## Fonctionnement

La route du blog, les articles et le sitemap sont calculés côté serveur à chaque requête. Une date future renvoie 404 et son texte ne figure pas dans les fichiers JavaScript publics. Aucun cron, redéploiement quotidien ou connexion de l’agent n’est nécessaire. Le premier visiteur après l’horaire obtient la version disponible à cet instant. Le changement d’heure du 25 octobre est inclus.

Les dates sont définies dans src/data/editorialPosts.js. Ne pas remplacer ces routes par un export statique sans ajouter une stratégie de reconstruction. Les anciens articles sont conservés et leurs dates historiques sont normalisées pour les métadonnées.

## Recherche et limites

Intentions choisies pour leur rapport aux pages de services existantes et à la demande utilisateur. Questions fournies par l’utilisateur et recherche web publique ; aucune extraction PAA Google vérifiée. Volumes, difficulté et CPC : inconnus. Aucun achat de données ni suivi payant activé. Documentation technique officielle vérifiée au 21 octobre 2026. Exemples pédagogiques explicites, aucun résultat client inventé.

## Vérifications

node scripts/verify-editorial.mjs : intégrité des 20 articles, limites de publication, changement d’heure, métadonnées et maillage. npm run build -- --webpack : compilation de production. node scripts/verify-http.mjs avec serveur actif : articles visibles, 404 futures, absence dans le sitemap et les bundles client. Avertissement Sass préexistant sur aid-signal/AidSignal.scss.
