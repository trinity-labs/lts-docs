# Déploiement
Le dépôt `docker_unyport` fournit à la fois l'arbre source et un modèle runtime conteneurise fonctionnel. L'histoire de déploiement reste volontairement simple : une application Go, un port principal d'écoute et un petit répertoire `settings/` à côté du binaire.

## Arborescence utile
Les chemins importants sont :

- `docker-compose.yml`
- `unyport/backend/`
- `unyport/frontend/public/`
- `unyport/backend/settings/settings.yaml`
- `unyport/backend/settings/config.yaml`
- `unyport/backend/settings/users.json`

## Mode développement
Le compose fourni démarre un conteneur `golang:alpine` et compile le projet au lancement.

Caractéristiques développement :

- Les assets frontend sont servis depuis le disque via `UNYPORT_ASSETS`
- Les caches Go module et build sont montés en volumes nommes
- Le port exposé par défaut est `8800:8800`
- Le conteneur résout `host.docker.internal` via `host-gateway`

## Mode production
La même logique compose prépare aussi un binaire de production :

- Les assets frontend sont copies dans `server/assets`
- Le binaire est compilé avec `-tags prod`
- Les symboles sont supprimes
- `upx --lzma` Est applique dans le conteneur

Le README présentée cela comme le chemin de paquet compact, tandis que le développement garde des assets live sur disque.

## Fichiers runtime
Au runtime, `UnyPort` attend :

- `settings/settings.yaml`
- `settings/config.yaml`
- `settings/users.json`

Operationnellement, l'application écrit aussi :

- `logs/unyport.log`
- `logs/startup-history.jsonl`
- `settings/branding.yaml` Lorsqu'un branding personnalise est sauve

## HTTPS et HTTP/3
Par défaut, l'application écoute en HTTP simple sur `:8800`.

Le comportement HTTPS et QUIC optionnel est pilote par `settings/settings.yaml` :

- `security_extra.https`
- `http3.enabled`
- `http3.cert_file`
- `http3.key_file`
- `http3.port`
- `http3.redirect_http`

Lorsque HTTP/3 est active correctement, `UnyPort` peut servir le TLS sur le port configuré et rediriger `:8800` vers ce listener TLS.

## Reverse proxy et premier login
Pour un déploiement exposé à Internet, le schéma habituel est :

- Binder `UnyPort` localement ou sur une adresse hôte contrôlée
- Placer Nginx ou un autre reverse proxy devant
- Activer le comportement secure-cookie avec `security_extra.https: true`
- Remplacer les placeholders OAuth avant toute ouverture publique
- Changer immédiatement les identifiants seed ou de démo

Cela garde le déploiement minimal sans faire semblant qu'une configuration de démo est prête pour la production.
