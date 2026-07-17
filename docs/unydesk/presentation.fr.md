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

- une page d'entrée pour l'accès distant
- des téléchargements host pour Linux, Windows et macOS
- des checksums pour vérifier les releases
- une entrée session par compte ou en mode autonome
- des flux de revendication et de confiance host
- l'état de session et la visibilité de dispatch
- le contrôle viewer depuis le navigateur
- une livraison écran de secours quand le média direct est dégradé

## Principes de conception
`UnyDesk` suit quelques règles produit :

- le runtime host est un composant de premier niveau
- l'état de session doit rester compréhensible
- la confiance doit être explicite avant que l'accès soit utile
- le transport temps réel direct est préféré, mais pas supposé
- l'API broker est le contrat entre la surface utilisateur et le côté host

## Ce qui reste hors de cette page
Cette documentation publique n'expose pas les chemins privés, les secrets ni les procédures de reprise réservées à l'exploitation. Ces sujets relèvent de la documentation restreinte.
