# Configuration EmailJS pour le formulaire de contact

Le formulaire de contact utilise EmailJS pour envoyer des emails. Voici comment le configurer :

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)

### 2. Configurer votre service email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email

1. Allez sur **https://dashboard.emailjs.com/admin/templates**
2. Cliquez sur **Create New Template**
3. Configurez le template avec les paramètres suivants :

**Template Name:** Contact Form Neyo Analytics

**Subject:**
```
Nouveau message de {{name}}{{#if subject}} - {{subject}}{{/if}}
```

**Content (HTML ou Text):**
```
Vous avez reçu un nouveau message depuis le formulaire de contact Neyo Analytics :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 NOUVEAU MESSAGE DE CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nom: {{name}}

📬 Email: {{email}}

🏢 Entreprise: {{company}}

📋 Sujet: {{subject}}

💬 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Répondre directement à: {{email}}
```

4. Dans **Settings** du template :
   - **From Name:** Neyo Analytics Contact Form
   - **From Email:** (votre email configuré)
   - **Reply To:** {{email}} (important pour répondre directement au client)

5. Cliquez sur **Save**
6. Notez le **Template ID** qui apparaît (ex: `template_xyz789`)

### 4. Obtenir votre clé publique

1. Allez dans **Account** > **General**
2. Copiez votre **Public Key** (ex: `public_def456`)

### 5. Mettre à jour le code

Dans le fichier `src/components/ContactForm/ContactForm.jsx`, remplacez les identifiants ligne 36-40 :

```javascript
const result = await emailjs.sendForm(
    'service_abc123',    // Votre Service ID
    'template_xyz789',   // Votre Template ID
    formRef.current,
    'public_def456'      // Votre Public Key
);
```

## Variables disponibles dans le formulaire

Le formulaire envoie automatiquement ces champs :
- `name` - Nom complet
- `email` - Email de contact
- `company` - Entreprise (optionnel)
- `subject` - Sujet du message (optionnel)
- `message` - Message

## Test

1. Lancez l'application avec `npm run dev`
2. Remplissez le formulaire de contact
3. Vérifiez la réception de l'email dans votre boîte mail

## Mode démo

Actuellement, si les clés ne sont pas configurées, le formulaire affichera quand même un message de succès après 1.5 secondes (pour la démo). Ceci est géré dans le code ligne 58-68 du fichier `ContactForm.jsx`.

Pour la production, vous pouvez retirer cette logique de fallback.

## Limites du plan gratuit

- 200 emails/mois
- Historique de 30 jours
- Support basique

Pour plus d'emails, consultez les [plans payants d'EmailJS](https://www.emailjs.com/pricing/).

## Alternative : Backend personnalisé

Si vous préférez utiliser votre propre backend au lieu d'EmailJS :

1. Créez une API endpoint (Node.js/Express, Python/Flask, etc.)
2. Utilisez un service comme Nodemailer, SendGrid, ou AWS SES
3. Modifiez la fonction `handleSubmit` pour appeler votre API au lieu d'EmailJS
