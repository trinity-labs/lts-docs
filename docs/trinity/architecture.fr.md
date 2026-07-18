# Architecture TRINITY
`TRINITY` est une architecture de service. Cote public, elle assemble plusieurs surfaces qui doivent rester coherentes entre elles : site web, compte client, paiement, support, exploitation VM et documentation. Le but de cette page n'est pas d'expliquer un framework interne, mais de montrer comment la plateforme s'organise du point de vue de l'utilisateur et de l'exploitation.

![Dashboard `TRINITY`](../assets/images/generated/trinity-homepage.png)

*Le site public porte la promesse `TRINITY` et dirige l'utilisateur vers l'offre, le compte, le support et l'exploitation.*

## Couche 1 - site, compte et relation client
La premiere couche est la plus visible :

- Pages publiques
- Offres commerciales
- Pages contact et support
- Creation de compte et authentification
- Commandes, paiements et factures
- Chat et assistance

Cette couche transforme `TRINITY` en portail client. C'est elle qui relie la promesse commerciale a l'usage reel.

## Couche 2 - surfaces de service
Une fois le client identifie, `TRINITY` donne acces a des surfaces de service :

- Suivi de commande
- Telechargement de facture
- Etat des paiements
- Informations de facturation
- Acces a certaines surfaces VM
- Ouverture de flux console

La plateforme doit donc gerer une logique de cycle de vie, pas seulement une logique de navigation.

## Couche 3 - VM, consoles et exploitation
`TRINITY` ne s'arrete pas a la vente. Le site expose aussi des usages d'exploitation :

- Consultation d'une VM
- Relance ou suivi d'etat
- Acces console
- Lecture d'un mode de maintenance

![Console VM en Data Disk Mode](../assets/images/screens/trinity-console.png)

*Capture generee d'une vue VM `TRINITY` en Data Disk Mode, orientee maintenance et recuperation.*

## Data Disk Mode
Le **Data Disk Mode** est un mode d'acces specialement utile pour intervenir sur une VM sans la presenter comme un environnement applicatif normal. Publiquement, on peut l'expliquer comme un mode de maintenance ou de recuperation :

- La VM demarre dans un contexte reduit
- L'objectif principal devient l'acces au disque et au systeme de fichiers
- L'utilisateur peut verifier l'etat, diagnostiquer ou recuperer un environnement
- Ce mode est adapte aux operations de maintenance, d'analyse ou de reprise

Autrement dit, `TRINITY` ne montre pas seulement une machine "allumee" : elle peut aussi exposer un mode de travail specifique pour intervenir proprement sur les donnees et sur le systeme.

## Alpine Linux et Xen dans l'architecture
Deux notions doivent etre claires publiquement :

- **Alpine Linux** designe le systeme d'exploitation leger, utilise pour sa sobriete, sa lisibilite et son adequation aux environnements techniques compacts.
- **Xen** designe la couche d'hyperviseur qui permet d'executer et d'isoler les machines virtuelles.

Dans `TRINITY`, cela signifie qu'un client peut commander, suivre et exploiter des services qui reposent sur une base Alpine Linux et sur une orchestration d'environnements virtualises par Xen.

## Surfaces complementaires
`TRINITY` s'articule avec deux services connexes :

- **`UnyDesk`** pour l'acces distant et certaines operations de prise en main
- **`UnyPort`** pour la supervision, le controle et la lecture d'etat de l'infrastructure

![Dashboard `UnyPort`](../assets/images/generated/unyport-live-dashboard.png)

*Capture generee du dashboard `UnyPort` de demonstration, montrant la lecture d'etat, les ressources hotes et la supervision.*

## Lecture d'ensemble
Du point de vue public, l'architecture `TRINITY` peut donc se lire ainsi :

1. Un site qui presente et vend
2. Un compte client qui suit et facture
3. Une plateforme qui relie paiement, support et services
4. Des environnements Alpine Linux virtualises avec Xen
5. Des surfaces d'exploitation comme la console, le Data Disk Mode, `UnyDesk` et `UnyPort`
