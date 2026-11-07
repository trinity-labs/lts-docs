# Historique
Cette page reprend l'historique utile depuis la documentation admin `Filebrowser`, car `UnyCloud` est la surface produit construite sur ce runtime.

## Base Filebrowser
Le socle initial est un service Filebrowser dédié sur `<cloud-host>`, avec :

- Un projet compose `docker_cloud`
- Une image amont `filebrowser/filebrowser:latest`
- Une base locale persistante
- Un montage de stockage sous `/srv`
- Un arbre de branding monté dans le conteneur

Cette étape établit la capacité principale : exposer une navigation de fichiers web sous une URL TRINITY.

## Lignée Filebrowser et maintenance
L'historique du dépôt UnyCloud conserve la lignée Filebrowser. Les versions Filebrowser `2.63.x` de juin et juillet 2026 apportent de nombreux correctifs importants : contrôles de portée, partages publics, uploads, symlinks, archives, previews et sécurité HTTP.

Le `2026-08-29`, `UnyCloud 0.0.1` établit officiellement le fork maintenu de Filebrowser, avec un contrat conservateur : préserver la base, la CLI, les flags, les variables `FB_*`, les configurations et le modèle d'usage existants.

## Branding UnyCloud
L'historique documenté côté Filebrowser montre ensuite la séparation entre :

- Le branding natif chargé par `custom.css`
- Les assets servis sous `/static/...`
- Les scripts de branding qui ne sont pas forcément exécutés par la page de login

Ce point explique pourquoi `UnyCloud` doit documenter le branding comme partie produit, mais garder le debug comportemental côté admin.

## Stabilisation du login
Un incident d'autofill a clarifié le rôle du reverse proxy. Les champs de login rendus par la SPA Filebrowser ne portaient pas toujours les attributs attendus par les navigateurs.

Le correctif retenu est une injection inline côté `nginx`, dans la configuration `trinity-cloud.conf`, afin de forcer les attributs `name` et `autocomplete` utiles.

## Durcissement UnyCloud
La première ligne UnyCloud ajoute un durcissement applicatif : CSP stricte sans scripts inline, bootstrap déplacé vers du JavaScript statique, cookies d'authentification `HttpOnly`, `SameSite=Strict` et `Secure` en HTTPS, limites de rate-limit, logs `unycloud_security`, endpoints admin de sécurité et intégration fail2ban.

Au `2026-08-30`, le dépôt local indique `UNYCLOUD_VERSION=0.9.15`. L'historique git montre une série rapide de releases `0.6.x`, `0.8.0`, `0.9.0` puis `0.9.15`, centrées sur les correctifs et le durcissement.

## État actuel
Aujourd'hui, `UnyCloud` doit être compris comme :

- Une surface produit cloud
- Un runtime compatible Filebrowser maintenu par UnyCloud
- Un branding TRINITY spécifique
- Un service dont le comportement visible dépend aussi du proxy

L'historique important n'est donc pas seulement l'installation d'un conteneur. C'est la transformation de Filebrowser en service UnyCloud exploitable, brandé et intégré au reste de TRINITY.
