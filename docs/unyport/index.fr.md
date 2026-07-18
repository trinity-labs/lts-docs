# UnyPort
`UnyPort` est la surface de supervision orientée opérateur de l'écosystème `TRINITY`. Elle est construite comme une application Go légère pour des environnements Alpine Linux, avec une lecture explicite de Xen, de l'état système en direct, du proxy applicatif contrôle et de la supervision quotidienne des hotes.

Publiquement, `UnyPort` rassemble :

- Un accès opérateur authentifie
- Une visibilité en direct sur l'hôte et les services
- Un contexte Xen explicite pour les environnements Dom0 et DomU
- Un accès contrôle a certaines applications internes comme `ttyd`
- Des pages operationnelles pour la sécurité, le stockage, le réseau et l'état système

`UnyPort` fonctionne avec deux surfaces complementaires :

- `TRINITY` Pour le cycle de vie client, les commandes, la facturation et les points d'entrée de service
- `UnyDesk` Pour l'accès distant et les workflows d'assistance

## Commencer ici
Pour une lecture pratique, l'ordre recommande est :

1. `Introduction`
2. `Architecture`
3. `Mode d'emploi`
4. `Acces et authentification`
5. `Metriques et surfaces`
6. `Deploiement`
7. `Alpine Linux et Xen`
8. `Securite et exploitation`
9. `Exemples`

```text
Connexion operateur
  -> Tableau de bord
  -> Detection du role de l'hote
  -> Metriques et logs
  -> Securite et versions
  -> Proxy applicatif si necessaire
  -> Reglages admin si autorises
```

Cette section décrit donc `UnyPort` comme une vraie surface d'exploitation, pas comme un theme de dashboard generique ni comme un simple depot source.
