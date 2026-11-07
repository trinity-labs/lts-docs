# IPv4 et IPv6

Le service `IP` distingue IPv4 et IPv6 avec des hosts dédiés.
Cette approche évite de laisser le navigateur choisir une pile réseau unique pour toute la page.

## Fonctionnement
- le domaine principal affiche l'adresse de référence
- le probe IPv4 confirme la connectivité IPv4
- le probe IPv6 confirme la connectivité IPv6

## Lecture
Si IPv6 n'apparaît pas, cela peut venir du fournisseur d'accès, du réseau local, du système, du navigateur ou d'une politique VPN.
L'absence d'IPv6 n'indique pas nécessairement une panne du service.

