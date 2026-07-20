# Sécurité et exploitation
`UnyPort` combine une surface web durcie avec un jeu volontairement restreint d'actions opérationnelles en écriture. L'objectif est de laisser les opérateurs inspecter, vérifier et ouvrir certains outils sans transformer le portail en porte d'administration incontrôlée.

## Base de sécurité web
La chaîne middleware applique :

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Une `Content-Security-Policy` stricte par défaut
- `Strict-Transport-Security` En option lorsque HTTPS est active

Les requêtes qui modifient l'état passent aussi par la validation CSRF et les trusted origins.

## Durcissement de l'authentification
La protection actuelle comprend :

- Des cookies JWT avec timeout de session configurable
- Une limitation de login par IP cliente
- Des cookies d'état OAuth pour les callbacks fournisseur
- Une séparation nette entre rôles lecture seule et rôles avec écriture

Le modèle reste compact, mais il est cohérent et visible dans les chemins réellement utilisés par le portail.

## Page security
La page security agrège des contrôles autour de :

- L'ASLR
- La restriction des pointeurs noyau
- La restriction `dmesg`
- Le BPF non privilégie
- Le forwarding IPv4 et IPv6
- Les permissions de `settings/users.json`
- Les services OpenRC critiques
- Certains processus surveilles
- Les ports TCP à l'écoute

Elle sert de résumé opérateur, pas de remplacement à un audit complet.

## Périmètre d'exploitation
Operationnellement, `UnyPort` est la plus forte lorsqu'elle sert à :

- La visibilité
- La vérification
- L'entrée contrôlée dans certaines applications
- L'administration des utilisateurs et du branding
- Le dépannage base d'hôte

Ce n'est pas encore le lieu d'un cycle de vie complet de VM ni d'une orchestration de cluster. Le README public présente explicitement le produit actuel comme une `V1`, orientée monitoring d'abord, avec des workflows Xen plus larges attendus plus tard.

## Logs et limites de support
Le portail peut exposer certains fichiers de log, l'état des services et des signaux de sécurité hôte. Lorsque le besoin dépasse ce périmètre :

- Utiliser `TRINITY` pour les actions de cycle de vie client et service
- Utiliser `UnyDesk` pour l'accès distant ou l'assistance
- Utiliser des outils système plus profonds lorsqu'une intervention hôte complète est nécessaire

Cette frontière garde `UnyPort` utile en exploitation sans surpromettre.
