# Évolution
`UnyDesk` évolue autour du chemin d'accès distant : packaging host, confiance, routage session, qualité transport et visibilité opérateur.

## Direction publique actuelle
La direction actuelle est :

- gestion plus claire des téléchargements host et checksums
- flux d'identité et de confiance host renforcés
- identité navigateur qui survit à la navigation normale
- sessions autonomes pour l'assistance bornée
- état de dispatch session visible
- signalisation WebRTC comme chemin temps réel préféré
- livraison écran de secours quand le média direct est incomplet

## Améliorations attendues
Les prochaines améliorations doivent garder la même frontière produit :

- état host plus riche dans le viewer
- instructions de pairing plus claires pour les utilisateurs non techniques
- meilleurs diagnostics transport
- notes de release plus explicites pour les packages host
- points d'intégration plus forts avec `UnyPort` sans fusionner les produits
- flux support pouvant pointer vers des sessions `UnyDesk` depuis `TRINITY`

## Frontière produit à préserver
`UnyDesk` ne doit pas devenir le portail de facturation ni le tableau de bord général d'exploitation. Son périmètre est l'accès distant.

Le modèle sain de plateforme est :

- `TRINITY` pour le cycle de vie et l'entrée support
- `UnyDesk` pour l'accès interactif
- `UnyPort` pour la supervision et l'exploitation locale

Cette frontière rend la croissance future compréhensible.
