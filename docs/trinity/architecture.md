# Architecture TRINITY
`TRINITY` est une architecture de service. Côté public, elle assemble plusieurs surfaces qui doivent rester cohérentes entre elles : site web, compte client, paiement, support, exploitation VM et documentation. Le but de cette page n'est pas d'expliquer un framework interne, mais de montrer comment la plateforme s'organise du point de vue de l'utilisateur et de l'exploitation.


## Couche 1 - site, compte et relation client
La première couche est la plus visible :

- Pages publiques
- Offres commerciales
- Pages contact et support
- Création de compte et authentification
- Commandes, paiements et factures
- Chat et assistance

Cette couche transforme `TRINITY` en portail client. C'est elle qui relie la promesse commerciale à l'usage réel.

## Couche 2 - surfaces de service
Une fois le client identifié, `TRINITY` donne accès à des surfaces de service :

- Suivi de commande
- Téléchargement de facture
- État des paiements
- Informations de facturation
- Accès à certaines surfaces VM
- Ouverture de flux console

La plateforme doit donc gérer une logique de cycle de vie, pas seulement une logique de navigation.

## Couche 3 - VM, consoles et exploitation
`TRINITY` ne s'arrêté pas à la vente. Le site expose aussi des usages d'exploitation :

- Consultation d'une VM
- Relance ou suivi d'état
- Accès console
- Lecture d'un mode de maintenance


## Data Disk Mode
Le **Data Disk Mode** est un mode d'accès spécialement utile pour intervenir sur une VM sans la présenter comme un environnement applicatif normal. Publiquement, on peut l'expliquer comme un mode de maintenance ou de récupération :

- La VM démarre dans un contexte réduit
- L'objectif principal devient l'accès au disque et au système de fichiers
- L'utilisateur peut vérifier l'état, diagnostiquer ou récupérer un environnement
- Ce mode est adapté aux opérations de maintenance, d'analyse ou de reprise

Autrement dit, `TRINITY` ne montre pas seulement une machine "allumée" : elle peut aussi exposer un mode de travail spécifique pour intervenir proprement sur les données et sur le système.

## Alpine Linux et Xen dans l'architecture
Deux notions doivent être claires publiquement :

- **Alpine Linux** désigne le système d'exploitation léger, utilise pour sa sobriété, sa lisibilité et son adéquation aux environnements techniques compacts.
- **Xen** désigne la couche d'hyperviseur qui permet d'exécuter et d'isoler les machines virtuelles.

Dans `TRINITY`, cela signifie qu'un client peut commander, suivre et exploiter des services qui reposent sur une base Alpine Linux et sur une orchestration d'environnements virtualisés par Xen.

## Surfaces complémentaires
`TRINITY` s'articule avec deux services connexes :

- **`UnyDesk`** pour l'accès distant et certaines opérations de prise en main
- **`UnyPort`** pour la supervision, le contrôle et la lecture d'état de l'infrastructure


## Lecture d'ensemble
Du point de vue public, l'architecture `TRINITY` peut donc se lire ainsi :

1. Un site qui présentée et vend
2. Un compte client qui suit et facture
3. Une plateforme qui relie paiement, support et services
4. Des environnements Alpine Linux virtualisés avec Xen
5. Des surfaces d'exploitation comme la console, le Data Disk Mode, `UnyDesk` et `UnyPort`
