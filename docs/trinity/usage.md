# Utilisation de TRINITY
`TRINITY` s'utilise comme un portail de cycle de vie. Le même site doit permettre de decouvrir une offre, d'acheter, de payer, de suivre une commande, d'ouvrir une facture, de demander de l'aide et, dans certains cas, d'acceder a une VM ou a une console. Cette page décrit les usages publics les plus importants.

## Usage 1 - decouvrir l'offre et prendre contact
Un utilisateur commence souvent par :

- Lire une page d'offre
- Consulter la documentation publique
- Ouvrir la page support
- Utiliser la page contact

Cette première phase sert a comprendre si le besoin releve du support `TRINITY`, d'une prestation, d'une formation, d'`UnyDesk` ou d'`UnyPort`.

## Usage 2 - creer un compte et commander
`TRINITY` prend en charge le parcours client standard :

- Creation de compte
- Connexion
- Saisie des informations de facturation
- Choix d'un moyen de paiement
- Retour de paiement
- Consultation de la commande et de la facture

Les commandes peuvent concerner du support, des prestations, des formations ou des services associes a l'infrastructure.

## Usage 3 - suivre une commande et son paiement
Apres achat, le client retrouve :

- Son statut de paiement
- Ses references de commande
- Sa facture PDF
- Ses informations de facturation
- Certaines actions de reprise si le paiement reste en attente ou doit être relance

`TRINITY` affiche des états differents selon la situation : paiement reussi, paiement en attente, paiement refuse, annulation ou reprise.

## Usage 4 - consulter une VM ou une console
Quand un service l'autorise, `TRINITY` peut donner accès a une vue de machine virtuelle ou a une console.


Dans ce contexte, l'utilisateur peut :

- Vérifier qu'une VM est joignable
- Lire son état
- Ouvrir une session console
- Travailler en mode de maintenance

## Usage 5 - comprendre le Data Disk Mode
Le **Data Disk Mode** est utile lorsque l'objectif n'est pas d'executer un service applicatif normal, mais d'intervenir sur l'environnement lui-meme. Dans la pratique, ce mode sert a :

- Vérifier le contenu d'un disque
- Inspecter un système de fichiers
- Récupérer un environnement
- Realiser des operations de reprise ou de maintenance

Pour l'utilisateur, cela signifie qu'une VM peut être accessible dans un mode plus technique, centre sur la conservation, l'analyse ou la restauration des donnees.

## Usage 6 - comprendre Alpine Linux et Xen
Dans `TRINITY`, deux briques doivent être comprises publiquement :

- **Alpine Linux** : système léger, rapide et adapte a des environnements de service compacts
- **Xen** : hyperviseur qui porte les machines virtuelles

L'utilisateur n'a pas besoin d'administrer Xen directement pour utiliser `TRINITY`. En revanche, il doit comprendre que ses services s'appuient sur cette logique de virtualisation et sur des environnements Alpine Linux.

## Usage 7 - savoir quand aller vers UnyDesk ou UnyPort
`TRINITY` n'est pas la seule surface de l'ecosysteme.

- Utiliser **`UnyDesk`** quand le besoin releve de l'accès distant ou de la prise en main.
- Utiliser **`UnyPort`** quand le besoin releve de la supervision, du contrôle ou de la lecture de topologie.

