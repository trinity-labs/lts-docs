# Deploiement
Le depot `docker_unyport` fournit a la fois l'arbre source et un modele runtime conteneurise fonctionnel. L'histoire de deploiement reste volontairement simple : une application Go, un port principal d'ecoute et un petit repertoire `settings/` a cote du binaire.

## Arborescence utile
Les chemins importants sont :

- `docker-compose.yml`
- `unyport/backend/`
- `unyport/frontend/public/`
- `unyport/backend/settings/settings.yaml`
- `unyport/backend/settings/config.yaml`
- `unyport/backend/settings/users.json`

## Mode developpement
Le compose fourni demarre un conteneur `golang:alpine` et compile le projet au lancement.

Caracteristiques developpement :

- les assets frontend sont servis depuis le disque via `UNYPORT_ASSETS`
- les caches Go module et build sont montes en volumes nommes
- le port expose par defaut est `8800:8800`
- le conteneur resout `host.docker.internal` via `host-gateway`

## Mode production
La meme logique compose prepare aussi un binaire de production :

- les assets frontend sont copies dans `server/assets`
- le binaire est compile avec `-tags prod`
- les symboles sont supprimes
- `upx --lzma` est applique dans le conteneur

Le README presente cela comme le chemin de paquet compact, tandis que le developpement garde des assets live sur disque.

## Fichiers runtime
Au runtime, `UnyPort` attend :

- `settings/settings.yaml`
- `settings/config.yaml`
- `settings/users.json`

Operationnellement, l'application ecrit aussi :

- `logs/unyport.log`
- `logs/startup-history.jsonl`
- `settings/branding.yaml` lorsqu'un branding personnalise est sauve

## HTTPS et HTTP/3
Par defaut, l'application ecoute en HTTP simple sur `:8800`.

Le comportement HTTPS et QUIC optionnel est pilote par `settings/settings.yaml` :

- `security_extra.https`
- `http3.enabled`
- `http3.cert_file`
- `http3.key_file`
- `http3.port`
- `http3.redirect_http`

Lorsque HTTP/3 est active correctement, `UnyPort` peut servir le TLS sur le port configure et rediriger `:8800` vers ce listener TLS.

## Reverse proxy et premier login
Pour un deploiement expose a Internet, le schema habituel est :

- binder `UnyPort` localement ou sur une adresse hote controlee
- placer Nginx ou un autre reverse proxy devant
- activer le comportement secure-cookie avec `security_extra.https: true`
- remplacer les placeholders OAuth avant toute ouverture publique
- changer immediatement les identifiants seedes ou de demo

Cela garde le deploiement minimal sans faire semblant qu'une configuration de demo est prete pour la production.
