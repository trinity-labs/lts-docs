# Historique
Cette page resume l'historique visible du projet `UnyPort` a partir du depot et des fichiers de release presents dans `docker_unyport`.

## 3 mai 2026 - base dashboard et reseau
Les premiers commits du `2026-05-03` etablissent la base initiale du produit :

- premier travail de dashboard
- presentation amelioree
- premiers ajouts de graphe reseau et de donnees reseau

Ces commits marquent le passage d'une idee a une vraie surface de monitoring.

## 4 mai 2026 - refactor SSE
Le `2026-05-04`, l'historique montre un refactor SSE. Ce point compte parce que l'experience produit actuelle depend encore fortement d'une diffusion live des snapshots plutot que d'un simple refresh manuel.

## 9 mai 2026 - cadrage depot et README
Les commits du `2026-05-09` ajoutent :

- le contexte de mirroring du depot
- le travail sur le README public
- des corrections d'hebergement d'images

C'est le moment ou `UnyPort` devient plus facile a presenter comme projet public et pas seulement comme experience locale.

## 30 mai 2026 - refactor packaging
Le refactor du `2026-05-30` est l'une des etapes packaging les plus significatives dans l'historique visible :

- compression UPX pour un paquet plus petit
- nettoyage runtime plus large
- positionnement plus fort sur le binaire compact

Cela aligne directement le produit avec la promesse single binary repetee dans le README.

## 6 juin 2026 - UI et historique de redemarrage
Plusieurs commits du `2026-06-06` ajoutent :

- un menu hamburger
- une carte de reboot style git
- un refactor de la carte reseau

Ces changements poussent clairement `UnyPort` vers une UI operateur plus complete qu'un simple panneau de metriques.

## 7 juin 2026 - release publique v0.1.0
Le `2026-06-07`, l'historique du depot montre :

- la preparation de release
- la finition des release notes
- le tag `v0.1.0`
- le travail de versioning applicatif

Le `CHANGELOG.md` et le `RELEASE-v0.1.0.md` confirment tous deux que `v0.1.0` est la premiere release publique.

## Du 18 juin au 10 juillet 2026 - affinage documentaire
Les commits plus tardifs se concentrent sur la documentation :

- `2026-06-18` : correction de l'URL de demo et de la documentation du bind Docker
- `2026-07-10` : mise a jour de l'historique

Au 10 juillet 2026, l'histoire visible du depot est donc celle d'un portail de controle monitoring-first disposant deja d'une release publique, d'un travail packaging compact et d'une posture documentaire plus claire.
