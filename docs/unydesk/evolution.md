# Évolution
`UnyDesk` évolue autour du chemin d'accès distant : packaging host, confiance, routage session, qualité transport et visibilité opérateur.

## Direction publique actuelle
La direction actuelle est :

- Gestion plus claire des téléchargements host et checksums
- Flux d'identité et de confiance host renforcés
- Identité navigateur qui survit à la navigation normale
- Sessions autonomes pour l'assistance bornée
- État de dispatch session visible
- Signalisation WebRTC comme chemin temps réel préféré
- Livraison écran de secours quand le média direct est incomplet

## Améliorations attendues
Les prochaines améliorations doivent garder la même frontière produit :

- État host plus riche dans le viewer
- Instructions de pairing plus claires pour les utilisateurs non techniques
- Meilleurs diagnostics transport
- Notes de release plus explicites pour les packages host
- Points d'intégration plus forts avec `UnyPort` sans fusionner les produits
- Flux support pouvant pointer vers des sessions `UnyDesk` depuis `TRINITY`

## Frontière produit à préserver
`UnyDesk` ne doit pas devenir le portail de facturation ni le tableau de bord général d'exploitation. Son périmètre est l'accès distant.

Le modèle sain de plateforme est :

- `TRINITY` Pour le cycle de vie et l'entrée support
- `UnyDesk` Pour l'accès interactif
- `UnyPort` Pour la supervision et l'exploitation locale

Cette frontière rend la croissance future compréhensible.
