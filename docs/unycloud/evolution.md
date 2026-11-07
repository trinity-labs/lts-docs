# Évolution
`UnyCloud` évolue par consolidation de trois axes : runtime, branding et comportement d'accès.

## Runtime plus clair
Le runtime UnyCloud garde la compatibilité Filebrowser : le binaire peut rester installé sous le nom `filebrowser`, la base et la configuration restent compatibles, tandis que le build produit aussi un artefact `dist/unycloud`.

## Branding plus produit
Le passage d'un Filebrowser brut à une surface UnyCloud impose :

- Un logo cohérent
- Un CSS dédié
- Des images contrôlées
- Une distinction claire entre apparence et logique de login

## Proxy plus important
L'historique du login a montré que le proxy n'est pas seulement un tunnel. Il peut devenir la couche de correction la plus fiable lorsque la SPA ne donne pas assez de contrôle sur le HTML final.

## Durcissement plus ambitieux
La trajectoire récente pousse UnyCloud au-delà du simple branding : CSP stricte, suppression de chemins frontend incompatibles, previews plus sûres, limites de requêtes, cookies serveur, logs sécurité et intégration fail2ban.

## Direction suivante
Les évolutions naturelles sont :

- Mieux documenter les profils et périmètres d'accès
- Clarifier les workflows de partage
- Rendre les checks de santé plus visibles
- Garder une documentation admin Filebrowser alignée avec la surface publique UnyCloud
