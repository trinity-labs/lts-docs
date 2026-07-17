# Utilisation de TRINITY
`TRINITY` s'utilise comme un portail de cycle de vie. Le meme site doit permettre de decouvrir une offre, d'acheter, de payer, de suivre une commande, d'ouvrir une facture, de demander de l'aide et, dans certains cas, d'acceder a une VM ou a une console. Cette page decrit les usages publics les plus importants.

## Usage 1 - decouvrir l'offre et prendre contact
Un utilisateur commence souvent par :

- lire une page d'offre
- consulter la documentation publique
- ouvrir la page support
- utiliser la page contact

Cette premiere phase sert a comprendre si le besoin releve du support `TRINITY`, d'une prestation, d'une formation, d'`UnyDesk` ou d'`UnyPort`.

## Usage 2 - creer un compte et commander
`TRINITY` prend en charge le parcours client standard :

- creation de compte
- connexion
- saisie des informations de facturation
- choix d'un moyen de paiement
- retour de paiement
- consultation de la commande et de la facture

Les commandes peuvent concerner du support, des prestations, des formations ou des services associes a l'infrastructure.

## Usage 3 - suivre une commande et son paiement
Apres achat, le client retrouve :

- son statut de paiement
- ses references de commande
- sa facture PDF
- ses informations de facturation
- certaines actions de reprise si le paiement reste en attente ou doit etre relance

`TRINITY` affiche des etats differents selon la situation : paiement reussi, paiement en attente, paiement refuse, annulation ou reprise.

## Usage 4 - consulter une VM ou une console
Quand un service l'autorise, `TRINITY` peut donner acces a une vue de machine virtuelle ou a une console.

![Vue VM et console](../assets/images/screens/trinity-console.png)

*Capture generee d'une vue VM `TRINITY` en mode de maintenance Data Disk Mode.*

Dans ce contexte, l'utilisateur peut :

- verifier qu'une VM est joignable
- lire son etat
- ouvrir une session console
- travailler en mode de maintenance

## Usage 5 - comprendre le Data Disk Mode
Le **Data Disk Mode** est utile lorsque l'objectif n'est pas d'executer un service applicatif normal, mais d'intervenir sur l'environnement lui-meme. Dans la pratique, ce mode sert a :

- verifier le contenu d'un disque
- inspecter un systeme de fichiers
- recuperer un environnement
- realiser des operations de reprise ou de maintenance

Pour l'utilisateur, cela signifie qu'une VM peut etre accessible dans un mode plus technique, centre sur la conservation, l'analyse ou la restauration des donnees.

## Usage 6 - comprendre Alpine Linux et Xen
Dans `TRINITY`, deux briques doivent etre comprises publiquement :

- **Alpine Linux** : systeme leger, rapide et adapte a des environnements de service compacts
- **Xen** : hyperviseur qui porte les machines virtuelles

L'utilisateur n'a pas besoin d'administrer Xen directement pour utiliser `TRINITY`. En revanche, il doit comprendre que ses services s'appuient sur cette logique de virtualisation et sur des environnements Alpine Linux.

## Usage 7 - savoir quand aller vers UnyDesk ou UnyPort
`TRINITY` n'est pas la seule surface de l'ecosysteme.

- Utiliser **`UnyDesk`** quand le besoin releve de l'acces distant ou de la prise en main.
- Utiliser **`UnyPort`** quand le besoin releve de la supervision, du controle ou de la lecture de topologie.

![Vue `UnyPort`](../assets/images/generated/unyport-live-dashboard.png)

*Capture generee du dashboard `UnyPort`, utile pour illustrer la lecture d'etat et la supervision de l'infrastructure.*
