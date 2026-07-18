# Architecture d'UnyPort
`UnyPort` est structuree comme une pile operateur compacte : un backend Go, un frontend statique, une petite surface de configuration et une boucle de telemetrie qui lit directement l'etat de Linux et des interfaces visibles par Xen. L'objectif est la clarte operationnelle, pas la complexite de framework.

## Couche 1 - runtime et assets
La premiere couche est le runtime applicatif lui-meme :

- Un backend Go sous `unyport/backend`
- Un frontend statique sous `unyport/frontend/public`
- Un mode developpement qui sert les assets depuis le disque via `UNYPORT_ASSETS`
- Un mode production qui embarque les assets frontend dans le binaire

Dans le `docker-compose.yml` fourni, le projet est compile dans un conteneur `golang:alpine` et expose l'application sur le port `8800`.

## Couche 2 - transport et routage
La deuxieme couche est la surface de transport operateur :

- HTTP sur `:8800` par defaut
- HTTPS et HTTP/3 en option lorsqu'ils sont configures dans `settings/settings.yaml`
- APIs JSON sous `/api/*`
- Metriques live via `/sse/system`
- Proxies applicatifs sous `/proxy/<app>/`

```text
SPA navigateur
  -> /api/system
  -> /api/security
  -> /api/services
  -> /sse/system
  -> /proxy/ttyd/
```

## Couche 3 - identite et etat persiste
L'identite reste volontairement simple et locale :

- Les utilisateurs locaux sont stockes dans `settings/users.json`
- Le branding est stocke dans `settings/branding.yaml`
- Les reglages runtime vivent dans `settings/settings.yaml`
- Les declarations d'apps proxyfiees et de fournisseurs OAuth vivent dans `settings/config.yaml`
- Les logs sont ecrits dans `logs/`

Le depot peut aussi initialiser automatiquement un premier admin lorsque `users.json` n'existe pas et que `UNYPORT_ADMIN_PASSWORD` est fourni ou que les identifiants par defaut sont acceptes.

## Couche 4 - telemetrie et lecture de l'hote
`UnyPort` lit la plateforme directement au lieu de dependre d'un agent de monitoring separe :

- `/proc` Et `/sys` pour le CPU, la memoire, l'uptime, le reseau et les temperatures
- L'etat OpenRC pour les services
- Les permissions de `settings/users.json` et les sysctls noyau pour les controles de securite
- `xl info` Et `xl list` pour le contexte Xen Dom0
- `startup-history.jsonl` Et `unyport.log` pour l'historique des redemarrages

Le broker SSE echantillonne toutes les `2` secondes, conserve un anneau de `60` snapshots en memoire et calcule les echelles des graphes cote serveur avant d'envoyer les donnees au frontend.

## Couche 5 - UX operateur
L'interface visible est ensuite organisee en pages a but explicite :

- Dashboard pour le statut rapide et l'historique des redemarrages
- Page hypervisor pour le role d'hote, Xen et le contexte de version
- Page resources pour le CPU, la memoire, les processus, les packages, les modules, les services et les logs
- Page network pour l'activite d'interface et la carte reseau
- Page storage pour les disques et l'etat LBU
- Page security pour les controles de durcissement
- Page settings pour le branding et les futurs reglages fournisseurs

Cette architecture doit donc se lire comme un portail de supervision a perimetre precis, pas comme un site web generique ni comme une suite de virtualisation universelle.
