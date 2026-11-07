# Introduction
`UnyCloud` fournit l'accès web aux fichiers TRINITY. Le service part d'un besoin simple : rendre un espace de fichiers disponible depuis le navigateur, avec une interface claire, un branding cohérent et une exploitation suffisamment légère pour rester maintenable.

## Ce qu'est UnyCloud
`UnyCloud` est :

- Une façade cloud pour fichiers et dossiers
- Un service exposé sous `<cloud-domain>`
- Une continuation maintenue de Filebrowser adaptée à l'infrastructure TRINITY
- Une surface dépendante du reverse proxy, du stockage monté et du branding runtime

## Ce qu'UnyCloud n'est pas
`UnyCloud` n'est pas :

- Le portail commercial `TRINITY`
- Un bureau distant comme `UnyDesk`
- Une console opérateur comme `UnyPort`
- Un système complet de synchronisation poste à poste

## Pourquoi cette documentation existe
Cette section documente `UnyCloud` comme produit visible. Les détails bas niveau Filebrowser restent disponibles dans la documentation admin, mais l'utilisateur doit pouvoir comprendre ici le rôle du service, ses limites, son parcours d'accès et son historique depuis Filebrowser jusqu'au fork UnyCloud.
