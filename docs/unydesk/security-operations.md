# Sécurité et exploitation
`UnyDesk` est un produit d'accès distant, donc la sécurité fait partie du modèle normal d'exploitation. L'accès n'est utile que lorsque l'identité host, l'identité viewer et le périmètre session sont explicites.

## Socle sécurité
Le modèle public inclut :

- Une authentification par compte pour les utilisateurs normaux
- Une protection CSRF sur les requêtes navigateur qui changent l'état
- Des cookies de session pour l'accès authentifié
- Des tokens autonomes bornés pour les invitations
- Des flux explicites de confiance ou revendication host
- Des canaux websocket pour l'état live et la communication host
- Un comportement no-store pour les téléchargements host

## Confiance host
Un host ne doit pas être considéré comme fiable simplement parce qu'il peut joindre le broker. La confiance dépend de l'identité : install ID, public ID, hostname et contexte de provisioning.

Opérationnellement, un host devient utile lorsqu'il :

- S'enregistré avec une identité stable
- Est associé à l'utilisateur ou au contexte attendu
- Reste visible par heartbeat
- Accuse réception du dispatch session

## Sécurité de session
Une session doit être fermée quand l'accès est terminé. Les opérateurs publics doivent éviter de garder des liens autonomes actifs plus longtemps que nécessaire et ne jamais réutiliser un token de session comme credential générale.

## Limites de diagnostic
Quand `UnyDesk` échoue, séparer d'abord le type d'échec :

- Échec d'authentification
- Host non enregistré ou hors ligne
- Host non approuvé
- Session non dispatchée
- Négociation WebRTC incomplète
- Écran de secours non mis à jour

Cette distinction évite de traiter chaque problème d'accès distant comme une panne réseau.
