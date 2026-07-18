# Presentation d'UnyPort
`UnyPort` est l'application de controle et de supervision exposee autour de l'infrastructure `TRINITY`. Elle est orientee operateur, pas parcours commercial grand public. Sa valeur produit repose sur la clarte : un point d'entree, un modele de session, une lecture d'hote et un petit nombre de pages operationnelles ciblees.

![Ecran `UnyPort`](../assets/images/screens/unyport-dashboard.png)

*Exemple d'interface `UnyPort` montrant une composition orientee tableau de bord et une lecture de l'etat hote pensee pour l'operateur.*

## Pages visibles
L'interface actuelle s'organise autour de :

- `Dashboard`
- `Hypervisor`
- `Resources`
- `Network`
- `Storage`
- `Security`
- `Settings`

Ces pages sont alimentees par un melange de faits systeme statiques et de snapshots live pousses en SSE.

## Utilisateurs cibles
`UnyPort` est pensee pour :

- Les administrateurs
- Les operateurs
- Les viewers en lecture seule

L'application distingue explicitement ces roles afin que la meme surface puisse servir a l'observation, aux operations courantes et a l'administration controlee sans exposer toutes les actions d'ecriture a tous les utilisateurs.

## Place dans l'ecosysteme
`UnyPort` doit se lire comme le compagnon de supervision de `TRINITY` :

- `TRINITY` Gere le cycle de vie client
- `UnyDesk` Gere l'acces distant et l'assistance
- `UnyPort` Gere l'etat d'infrastructure, l'acces proxy et le contexte operateur

Ce positionnement est coherent avec le depot lui-meme, le README public et les routes runtime actuelles.
