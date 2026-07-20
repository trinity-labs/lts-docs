# Historique
Cette page résumé l'historique visible du projet `UnyPort` à partir du dépôt et des fichiers de release présents dans `docker_unyport`.

## 3 mai 2026 - base dashboard et réseau
Les premiers commits du `2026-05-03` etablissent la base initiale du produit :

- Premier travail de dashboard
- Présentation améliorée
- Premiers ajouts de graphe réseau et de données réseau

Ces commits marquent le passage d'une idee à une vraie surface de monitoring.

## 4 mai 2026 - refactor SSE
Le `2026-05-04`, l'historique montre un refactor SSE. Ce point compte parce que l'experience produit actuelle dépend encore fortement d'une diffusion live des snapshots plutot que d'un simple refresh manuel.

## 9 mai 2026 - cadrage dépôt et README
Les commits du `2026-05-09` ajoutent :

- Le contexte de mirroring du dépôt
- Le travail sur le README public
- Des corrections d'hebergement d'images

C'est le moment ou `UnyPort` devient plus aisable à présenter comme projet public et pas seulement comme experience locale.

## 30 mai 2026 - refactor packaging
Le refactor du `2026-05-30` est l'une des étapes packaging les plus significatives dans l'historique visible :

- Compression UPX pour un paquet plus petit
- Nettoyage runtime plus large
- Positionnement plus fort sur le binaire compact

Cela aligne directement le produit avec la promesse single binary répétée dans le README.

## 6 juin 2026 - UI et historique de redémarrage
Plusieurs commits du `2026-06-06` ajoutent :

- Un menu hamburger
- Une carte de reboot style git
- Un refactor de la carte réseau

Ces changements poussent clairement `UnyPort` vers une UI opérateur plus complet qu'un simple panneau de metriques.

## 7 juin 2026 - release publique v0.1.0
Le `2026-06-07`, l'historique du dépôt montre :

- La préparation de release
- La finition des release notes
- Le tag `v0.1.0`
- Le travail de versioning applicatif

Le `CHANGELOG.md` et le `RELEASE-v0.1.0.md` confirment tous deux que `v0.1.0` est la première release publique.

## Du 18 juin au 10 juillet 2026 - affinage documentaire
Les commits plus tardifs se concentrent sur la documentation :

- `2026-06-18` : Correction de l'URL de démo et de la documentation du bind Docker
- `2026-07-10` : Mise à jour de l'historique

Au 10 juillet 2026, l'histoire visible du dépôt est donc celle d'un portail de contrôle monitoring-first disposant déjà d'une release publique, d'un travail packaging compact et d'une posture documentaire plus claire.
