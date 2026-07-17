# Sécurité et exploitation
`UnyDesk` est un produit d'accès distant, donc la sécurité fait partie du modèle normal d'exploitation. L'accès n'est utile que lorsque l'identité host, l'identité viewer et le périmètre session sont explicites.

## Socle sécurité
Le modèle public inclut :

- une authentification par compte pour les utilisateurs normaux
- une protection CSRF sur les requêtes navigateur qui changent l'état
- des cookies de session pour l'accès authentifié
- des tokens autonomes bornés pour les invitations
- des flux explicites de confiance ou revendication host
- des canaux websocket pour l'état live et la communication host
- un comportement no-store pour les téléchargements host

## Confiance host
Un host ne doit pas être considéré comme fiable simplement parce qu'il peut joindre le broker. La confiance dépend de l'identité : install ID, public ID, hostname et contexte de provisioning.

Opérationnellement, un host devient utile lorsqu'il :

- s'enregistre avec une identité stable
- est associé à l'utilisateur ou au contexte attendu
- reste visible par heartbeat
- accuse réception du dispatch session

## Sécurité de session
Une session doit être fermée quand l'accès est terminé. Les opérateurs publics doivent éviter de garder des liens autonomes actifs plus longtemps que nécessaire et ne jamais réutiliser un token de session comme credential générale.

## Limites de diagnostic
Quand `UnyDesk` échoue, séparer d'abord le type d'échec :

- échec d'authentification
- host non enregistré ou hors ligne
- host non approuvé
- session non dispatchée
- négociation WebRTC incomplète
- écran de secours non mis à jour

Cette distinction évite de traiter chaque problème d'accès distant comme une panne réseau.
