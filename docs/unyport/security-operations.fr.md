# Securite et exploitation
`UnyPort` combine une surface web durcie avec un jeu volontairement restreint d'actions operationnelles en ecriture. L'objectif est de laisser les operateurs inspecter, verifier et ouvrir certains outils sans transformer le portail en porte d'administration incontrolee.

## Base de securite web
La chaine middleware applique :

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- une `Content-Security-Policy` stricte par defaut
- `Strict-Transport-Security` en option lorsque HTTPS est active

Les requetes qui modifient l'etat passent aussi par la validation CSRF et les trusted origins.

## Durcissement de l'authentification
La protection actuelle comprend :

- des cookies JWT avec timeout de session configurable
- une limitation de login par IP cliente
- des cookies d'etat OAuth pour les callbacks fournisseur
- une separation nette entre roles lecture seule et roles avec ecriture

Le modele reste compact, mais il est coherent et visible dans les chemins reellement utilises par le portail.

## Page security
La page security agrege des controles autour de :

- l'ASLR
- la restriction des pointeurs noyau
- la restriction `dmesg`
- le BPF non privilegie
- le forwarding IPv4 et IPv6
- les permissions de `settings/users.json`
- les services OpenRC critiques
- certains processus surveilles
- les ports TCP a l'ecoute

Elle sert de resume operateur, pas de remplacement a un audit complet.

## Perimetre d'exploitation
Operationnellement, `UnyPort` est la plus forte lorsqu'elle sert a :

- la visibilite
- la verification
- l'entree controlee dans certaines applications
- l'administration des utilisateurs et du branding
- le depannage basique d'hote

Ce n'est pas encore le lieu d'un cycle de vie complet de VM ni d'une orchestration de cluster. Le README public presente explicitement le produit actuel comme une `V1`, orientee monitoring d'abord, avec des workflows Xen plus larges attendus plus tard.

## Logs et limites de support
Le portail peut exposer certains fichiers de log, l'etat des services et des signaux de securite hote. Lorsque le besoin depasse ce perimetre :

- utiliser `TRINITY` pour les actions de cycle de vie client et service
- utiliser `UnyDesk` pour l'acces distant ou l'assistance
- utiliser des outils systeme plus profonds lorsqu'une intervention hote complete est necessaire

Cette frontiere garde `UnyPort` utile en exploitation sans surpromettre.
