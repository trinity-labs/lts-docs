# Introduction
`UnyPort` est un portail de contrôle orienté supervision écrit en Go et pense pour des hôtes Alpine Linux, surtout lorsqu'ils vivent dans des environnements Xen. L'application expose une seule surface authentifiee pour l'état de l'hôte, les métriques en direct, les logs, la posture de sécurité, les outils proxyfies et la gestion de profil operateur.

![Tableau de bord `UnyPort`](../assets/images/generated/unyport-live-dashboard.png)

*Capture générée du tableau de bord live `UnyPort`, centree sur l'état de l'hôte, les ressources et la visibilité operationnelle.*

## Ce qu'est UnyPort
`UnyPort` repose sur quelques contraintes fortes :

- Un runtime Go unique
- Un modele de deploiement minimal
- Des lectures directes du noyau et du système de fichiers
- Une detection explicite du rôle de l'hôte
- Aucune dependance a une grosse pile d'agents

Dans ce depot, le frontend est une application monopage servie soit depuis le disque en developpement, soit embarquee dans le binaire de production.

## Ce qu'UnyPort n'est pas
`UnyPort` n'est pas presentee comme :

- Un site marketing public
- Un portail client de commande
- Une suite complete d'orchestration Xen aujourd'hui
- Un outil generique d'accès distant bureau

Ces rôles relevent plutot de `TRINITY` et `UnyDesk`, selon le besoin.

## Pourquoi cette documentation existe
Cette documentation explique la surface produit visible d'`UnyPort` du point de vue du deploiement et de l'exploitation :

- Ce que voient les opérateurs
- Comment fonctionnent l'authentification et les rôles
- Quelles données sont collectees
- Comment Alpine Linux et Xen structurent le produit
- Ou se trouvent les limites actuelles et les points d'evolution
