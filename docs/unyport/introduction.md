# Introduction
`UnyPort` est un portail de contrôle orienté supervision écrit en Go et pensé pour des hôtes Alpine Linux, surtout lorsqu'ils vivent dans des environnements Xen. L’application expose une seule surface authentifiée pour l'état de l'hôte, les métriques en direct, les logs, la posture de sécurité, les outils proxifiés et la gestion de profil opérateur.


## Ce qu'est UnyPort
`UnyPort` repose sur quelques contraintes fortes :

- Un runtime Go unique
- Un modèle de déploiement minimal
- Des lectures directes du noyau et du système de fichiers
- Une détection explicite du rôle de l'hôte
- Aucune dépendance à une grosse pile d'agents

Dans ce dépôt, le frontend est une application monopage servie soit depuis le disque en développement, soit embarquée dans le binaire de production.

## Ce qu'UnyPort n'est pas
`UnyPort` n'est pas présenté comme :

- Un site marketing public
- Un portail client de commande
- Une suite complète d'orchestration Xen aujourd'hui
- Un outil générique d'accès distant bureau

Ces rôles relèvent plutôt de `TRINITY` et `UnyDesk`, selon le besoin.

## Pourquoi cette documentation existe
Cette documentation explique la surface produit visible d'`UnyPort` du point de vue du déploiement et de l'exploitation :

- Ce que voient les opérateurs
- Comment fonctionnent l'authentification et les rôles
- Quelles données sont collectées
- Comment Alpine Linux et Xen structurent le produit
- Où se trouvent les limites actuelles et les points d'évolution
