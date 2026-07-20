# Présentation d'UnyPort
`UnyPort` est l'application de contrôle et de supervision exposée autour de l'infrastructure `TRINITY`. Elle est orientée opérateur, pas parcours commercial grand public. Sa valeur produit repose sur la clarté : un point d'entrée, un modèle de session, une lecture d'hôte et un petit nombre de pages opérationnelles ciblées.


## Pages visibles
L'interface actuelle s'organise autour de :

- `Dashboard`
- `Hypervisor`
- `Resources`
- `Network`
- `Storage`
- `Security`
- `Settings`

Ces pages sont alimentées par un mélange de faits système statiques et de snapshots live pousses en SSE.

## Utilisateurs cibles
`UnyPort` est pensée pour :

- Les administrateurs
- Les opérateurs
- Les viewers en lecture seule

L'application distingue explicitement ces rôles afin que la même surface puisse servir à l'observation, aux opérations courantes et à l'administration contrôlée sans exposer toutes les actions d'écriture à tous les utilisateurs.

## Place dans l'écosystème
`UnyPort` doit se lire comme le compagnon de supervision de `TRINITY` :

- `TRINITY` Gère le cycle de vie client
- `UnyDesk` Gère l'accès distant et l'assistance
- `UnyPort` Gère l'état d'infrastructure, l'accès proxy et le contexte opérateur

Ce positionnement est cohérent avec le dépôt lui-même, le README public et les routes runtime actuelles.
