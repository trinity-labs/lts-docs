# Architecture d'UnyPort
`UnyPort` est structurée comme une pile opérateur compacte : un backend Go, un frontend statique, une petite surface de configuration et une boucle de télémétrie qui lit directement l'état de Linux et des interfaces visibles par Xen. L'objectif est la clarté opérationnelle, pas la complexité de framework.

## Couche 1 - runtime et assets
La première couche est le runtime applicatif lui-même :

- Un backend Go sous `unyport/backend`
- Un frontend statique sous `unyport/frontend/public`
- Un mode développement qui sert les assets depuis le disque via `UNYPORT_ASSETS`
- Un mode production qui embarqué les assets frontend dans le binaire

Dans le `docker-compose.yml` fourni, le projet est compilé dans un conteneur `golang:alpine` et exposé l'application sur le port `8800`.

## Couche 2 - transport et routage
La deuxième couche est la surface de transport opérateur :

- HTTP sur `:8800` par défaut
- HTTPS et HTTP/3 en option lorsqu'ils sont configurés dans `settings/settings.yaml`
- APIs JSON sous `/api/*`
- Métriques live via `/sse/system`
- Proxies applicatifs sous `/proxy/<app>/`

```text
SPA navigateur
  -> /api/system
  -> /api/security
  -> /api/services
  -> /sse/system
  -> /proxy/ttyd/
```

## Couche 3 - identité et état persiste
L'identité reste volontairement simple et locale :

- Les utilisateurs locaux sont stockes dans `settings/users.json`
- Le branding est stocke dans `settings/branding.yaml`
- Les réglages runtime vivent dans `settings/settings.yaml`
- Les déclarations d'apps proxifiées et de fournisseurs OAuth vivent dans `settings/config.yaml`
- Les logs sont écrits dans `logs/`

Le dépôt peut aussi initialiser automatiquement un premier admin lorsque `users.json` n'existe pas et que `UNYPORT_ADMIN_PASSWORD` est fourni ou que les identifiants par défaut sont acceptés.

## Couche 4 - télémétrie et lecture de l'hôte
`UnyPort` lit la plateforme directement au lieu de dépendre d'un agent de monitoring séparé :

- `/proc` Et `/sys` pour le CPU, la mémoire, l'uptime, le réseau et les températures
- L'état OpenRC pour les services
- Les permissions de `settings/users.json` et les sysctls noyau pour les contrôles de sécurité
- `xl info` Et `xl list` pour le contexte Xen Dom0
- `startup-history.jsonl` Et `unyport.log` pour l'historique des redémarrages

Le broker SSE échantillonne toutes les `2` secondes, conserve un anneau de `60` snapshots en mémoire et calcule les échelles des graphes côté serveur avant d'envoyer les données au frontend.

## Couche 5 - UX opérateur
L'interface visible est ensuite organisée en pages à but explicite :

- Dashboard pour le statut rapide et l'historique des redémarrages
- Page hypervisor pour le rôle d'hôte, Xen et le contexte de version
- Page resources pour le CPU, la mémoire, les processus, les packages, les modules, les services et les logs
- Page network pour l'activite d'interface et la carte réseau
- Page storage pour les disques et l'état LBU
- Page security pour les contrôles de durcissement
- Page settings pour le branding et les futurs réglages fournisseurs

Cette architecture doit donc se lire comme un portail de supervision à périmètre précis, pas comme un site web générique ni comme une suite de virtualisation universelle.
