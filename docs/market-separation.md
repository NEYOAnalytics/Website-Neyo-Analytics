# Parcours Maroc et international

Mise à jour du 22 octobre 2026.

- `/` : accueil commun, choix explicite entre les deux offres.
- `/entreprises-maroc` : offre nationale, réalisation de projets et renfort de consultants Data, BI, IA et Cloud.
- `/nearshore-maroc` : offre nearshore pour les clients internationaux, URL historique conservée.
- `/expertises/*` et `/consultants/*` : compétences communes, textes et métadonnées neutres, liens vers les deux offres.
- `/pourquoi-externaliser` et `/notre-process` : parcours international identifié, retour possible vers l’offre nationale.
- `/contact?marche=maroc&besoin=projet` et variantes : marché, besoin et profil préremplis. Choix modifiables et inclus dans l’objet et le corps de l’e-mail.

Le formulaire utilise le service EmailJS déjà configuré dans le site historique. L’état de succès dépend désormais d’une confirmation de l’API ; une erreur laisse le formulaire disponible avec un lien mailto de repli. Aucun e-mail de test n’a été envoyé, aucune réception en boîte n’a été vérifiée.

Les quatre clés d’expertises incohérentes (Power BI, Data Engineering, IA et Tableau/Qlik/Looker) ont été reliées aux contenus existants. Les identifiants des URL de profils utilisés dans les fils d’Ariane sont corrigés.

Aucune promesse nouvelle de disponibilité immédiate, de certification, de tarif ou de délai de réponse sur l’offre nationale. Modalités et disponibilités à préciser selon la mission. Les contenus internationaux historiques ne constituent pas un nouvel audit de leurs affirmations commerciales.

Validation : compilation Next.js, vérifications HTTP par `node scripts/verify-markets.mjs`, intégrité des vingt articles et du calendrier par `node scripts/verify-editorial.mjs`. Navigation vers l’offre Maroc et formulaire prérempli contrôlés dans le navigateur. Aucun changement des articles ni de leurs dates de publication.
