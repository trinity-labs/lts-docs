# Exemples
Cette page donne des exemples concrets de la facon dont `UnyPort` est censee etre utilisee en exploitation.

## Exemple 1 - lire un Xen Dom0 en un coup d'oeil
Un operateur ouvre le portail sur un Dom0 et verifie immediatement :

- le role d'hote indique `Dom0`
- la version Xen et le scheduler sont presents
- le nombre de domaines correspond a l'attendu
- l'utilisation memoire hyperviseur reste coherente
- aucun crash de service critique n'apparait sur la page security

C'est la facon la plus rapide de confirmer que la vue hyperviseur est saine avant d'entrer dans des problemes invites plus fins.

## Exemple 2 - detecter un etat Alpine non committe
Sur un hote Alpine oriente maintenance, la page storage montre :

- LBU present
- un etat marque `dirty`
- le nom de la derniere archive

Cela indique que des changements de configuration existent mais n'ont pas encore ete commits dans l'archive de persistance.

## Exemple 3 - comparer les versions courantes aux tags TRINITY boot
Un operateur ouvre la page hypervisor et compare :

- la version Alpine courante
- le noyau courant
- les dernieres versions specifiques au role retournees par `/api/versions`

Cela donne un signal leger de mise a jour sans transformer `UnyPort` en gestionnaire de paquets complet.

## Exemple 4 - entrer dans un terminal proxyfie
Si `ttyd` est declare dans `settings/config.yaml`, l'operateur peut ouvrir :

```text
/proxy/ttyd/
```

depuis la navigation du portail au lieu d'exposer le terminal sur sa propre URL publique.

## Exemple 5 - onboarder un nouvel operateur
Un administrateur peut :

- creer un utilisateur
- lui assigner le role `operator`
- laisser cet utilisateur stocker un nom d'affichage, un avatar et une cle SSH publique
- conserver le branding et l'administration des utilisateurs reserves aux admins

Cela rend l'onboarding simple tout en gardant des frontieres de roles lisibles.
