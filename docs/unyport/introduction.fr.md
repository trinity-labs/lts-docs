# Introduction
`UnyPort` est un portail de controle oriente supervision ecrit en Go et pense pour des hotes Alpine Linux, surtout lorsqu'ils vivent dans des environnements Xen. L'application expose une seule surface authentifiee pour l'etat de l'hote, les metriques en direct, les logs, la posture de securite, les outils proxyfies et la gestion de profil operateur.

![Tableau de bord `UnyPort`](../assets/images/generated/unyport-live-dashboard.png)

*Capture generee du tableau de bord live `UnyPort`, centree sur l'etat de l'hote, les ressources et la visibilite operationnelle.*

## Ce qu'est UnyPort
`UnyPort` repose sur quelques contraintes fortes :

- Un runtime Go unique
- Un modele de deploiement minimal
- Des lectures directes du noyau et du systeme de fichiers
- Une detection explicite du role de l'hote
- Aucune dependance a une grosse pile d'agents

Dans ce depot, le frontend est une application monopage servie soit depuis le disque en developpement, soit embarquee dans le binaire de production.

## Ce qu'UnyPort n'est pas
`UnyPort` n'est pas presentee comme :

- Un site marketing public
- Un portail client de commande
- Une suite complete d'orchestration Xen aujourd'hui
- Un outil generique d'acces distant bureau

Ces roles relevent plutot de `TRINITY` et `UnyDesk`, selon le besoin.

## Pourquoi cette documentation existe
Cette documentation explique la surface produit visible d'`UnyPort` du point de vue du deploiement et de l'exploitation :

- Ce que voient les operateurs
- Comment fonctionnent l'authentification et les roles
- Quelles donnees sont collectees
- Comment Alpine Linux et Xen structurent le produit
- Ou se trouvent les limites actuelles et les points d'evolution
