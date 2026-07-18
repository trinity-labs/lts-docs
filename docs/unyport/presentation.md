# Presentation d'UnyPort
`UnyPort` est l'application de contrôle et de supervision exposee autour de l'infrastructure `TRINITY`. Elle est orientée opérateur, pas parcours commercial grand public. Sa valeur produit repose sur la clarte : un point d'entrée, un modele de session, une lecture d'hôte et un petit nombre de pages operationnelles ciblees.

![Ecran `UnyPort`](../assets/images/screens/unyport-dashboard.png)

*Exemple d'interface `UnyPort` montrant une composition orientée tableau de bord et une lecture de l'état hôte pensee pour l'operateur.*

## Pages visibles
L'interface actuelle s'organise autour de :

- `Dashboard`
- `Hypervisor`
- `Resources`
- `Network`
- `Storage`
- `Security`
- `Settings`

Ces pages sont alimentees par un melange de faits système statiques et de snapshots live pousses en SSE.

## Utilisateurs cibles
`UnyPort` est pensee pour :

- Les administrateurs
- Les opérateurs
- Les viewers en lecture seule

L'application distingue explicitement ces rôles afin que la même surface puisse servir a l'observation, aux operations courantes et a l'administration contrôlée sans exposer toutes les actions d'écriture a tous les utilisateurs.

## Place dans l'écosystème
`UnyPort` doit se lire comme le compagnon de supervision de `TRINITY` :

- `TRINITY` Gere le cycle de vie client
- `UnyDesk` Gere l'accès distant et l'assistance
- `UnyPort` Gere l'état d'infrastructure, l'accès proxy et le contexte opérateur

Ce positionnement est cohérent avec le depot lui-meme, le README public et les routes runtime actuelles.
