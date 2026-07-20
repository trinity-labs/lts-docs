# Utilisation de TRINITY
`TRINITY` s'utilise comme un portail de cycle de vie. Le même site doit permettre de découvrir une offre, d'acheter, de payer, de suivre une commande, d'ouvrir une facture, de demander de l'aide et, dans certains cas, d'accéder à une VM ou à une console. Cette page décrit les usages publics les plus importants.

## Usage 1 - découvrir l'offre et prendre contact
Un utilisateur commence souvent par :

- Lire une page d'offre
- Consulter la documentation publique
- Ouvrir la page support
- Utiliser la page contact

Cette première phase sert à comprendre si le besoin relève du support `TRINITY`, d'une prestation, d'une formation, d'`UnyDesk` ou d'`UnyPort`.

## Usage 2 - créer un compte et commander
`TRINITY` prend en charge le parcours client standard :

- Création de compte
- Connexion
- Saisie des informations de facturation
- Choix d'un moyen de paiement
- Retour de paiement
- Consultation de la commande et de la facture

Les commandes peuvent concerner du support, des prestations, des formations ou des services associés à l'infrastructure.

| Usage | Surface principale | Résultat attendu |
| --- | --- | --- |
| Découverte | Site public et documentation | Comprendre l'offre |
| Commande | Compte, panier, paiement | Finaliser l'achat |
| Suivi | Commandes et factures | Lire l'état et récupérer les documents |
| Technique | VM, console, DDM | Diagnostiquer ou intervenir prudemment |
| Escalade | Support, UnyDesk, UnyPort | Obtenir de l'aide ou de la visibilité infra |

## Usage 3 - suivre une commande et son paiement
Après achat, le client retrouve :

- Son statut de paiement
- Ses références de commande
- Sa facture PDF
- Ses informations de facturation
- Certaines actions de reprise si le paiement reste en attente ou doit être relance

`TRINITY` affiche des états différents selon la situation : paiement réussi, paiement en attente, paiement refusé, annulation ou reprise.

## Usage 4 - consulter une VM ou une console
Quand un service l'autorise, `TRINITY` peut donner accès à une vue de machine virtuelle ou à une console.


Dans ce contexte, l'utilisateur peut :

- Vérifier qu'une VM est joignable
- Lire son état
- Ouvrir une session console
- Travailler en mode de maintenance

| Surface technique | Ce qu'on y fait | Quand l'utiliser |
| --- | --- | --- |
| Vue VM | Lire l'état et identifier la machine | Vérification rapide |
| Console | Lancer des commandes de diagnostic | Support, maintenance, reprise |
| DDM | Inspecter stockage et système de fichiers | Récupération et préservation |

## Usage 5 - comprendre le Data Disk Mode
Le **Data Disk Mode** est utile lorsque l’objectif n'est pas d'exécuter un service applicatif normal, mais d'intervenir sur l'environnement lui-même. Dans la pratique, ce mode sert à :

- Vérifier le contenu d'un disque
- Inspecter un système de fichiers
- Récupérer un environnement
- Réaliser des opérations de reprise ou de maintenance

Pour l'utilisateur, cela signifie qu'une VM peut être accessible dans un mode plus technique, centré sur la conservation, l'analyse ou la restauration des données.

## Usage 6 - comprendre Alpine Linux et Xen
Dans `TRINITY`, deux briques doivent être comprises publiquement :

- **Alpine Linux** : système léger, rapide et adapté à des environnements de service compacts
- **Xen** : hyperviseur qui porte les machines virtuelles

L'utilisateur n'a pas besoin d'administrer Xen directement pour utiliser `TRINITY`. En revanche, il doit comprendre que ses services s'appuient sur cette logique de virtualisation et sur des environnements Alpine Linux.

## Usage 7 - savoir quand aller vers UnyDesk ou UnyPort
`TRINITY` n'est pas la seule surface de l'écosystème.

- Utiliser **`UnyDesk`** quand le besoin relève de l'accès distant ou de la prise en main.
- Utiliser **`UnyPort`** quand le besoin relève de la supervision, du contrôle ou de la lecture de topologie.

| Surface | Rôle public | Cas typique |
| --- | --- | --- |
| `TRINITY` | Portail client et technique | Commande, paiement, VM, facture |
| `UnyDesk` | Assistance distante | Interaction ou prise en main |
| `UnyPort` | Visibilité infra et supervision | Contrôle, état, topologie |
