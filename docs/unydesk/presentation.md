# Présentation UnyDesk
`UnyDesk` est la surface de bureau distant et d'assistance de la plateforme. Elle n'est pas présentée comme une collection d'outils génériques : c'est l'architecture dédiée à l'accès vivant entre un utilisateur navigateur et une machine enregistrée.

## Position produit
`UnyDesk` se place à côté des deux autres architectures :

- **`TRINITY`** : compte, commandes, services, factures et entrée support
- **`UnyDesk`** : accès distant, packages host, sessions d'assistance et interaction directe
- **`UnyPort`** : exploitation locale, supervision et visibilité contrôlée de l'infrastructure

Cette séparation garde chaque produit lisible. Un utilisateur qui veut gérer la facturation va dans `TRINITY`. Un utilisateur qui veut inspecter un host va dans `UnyPort`. Un utilisateur qui veut contrôler ou assister une machine utilise `UnyDesk`.

## Capacités visibles
La surface publique peut exposer :

- Une page d'entrée pour l'accès distant
- Des téléchargements host pour Linux, Windows et macOS
- Des checksums pour vérifier les releases
- Une entrée session par compte ou en mode autonome
- Des flux de revendication et de confiance host
- L'état de session et la visibilité de dispatch
- Le contrôle viewer depuis le navigateur
- Une livraison écran de secours quand le média direct est dégradé

## Principes de conception
`UnyDesk` suit quelques règles produit :

- Le runtime host est un composant de premier niveau
- L'état de session doit rester compréhensible
- La confiance doit être explicite avant que l'accès soit utile
- Le transport temps réel direct est préféré, mais pas supposé
- L'API broker est le contrat entre la surface utilisateur et le côté host

## Ce qui reste hors de cette page
Cette documentation publique n'exposé pas les chemins privés, les secrets ni les procédures de reprise réservées à l'exploitation. Ces sujets relèvent de la documentation restreinte.
