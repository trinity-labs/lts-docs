# Exemples
Cette page donne des exemples concrets de la façon dont `UnyPort` est conçue être utilisée en exploitation.

## Exemple 1 - lire un Xen Dom0 en un coup d'oeil
Un opérateur ouvre le portail sur un Dom0 et vérifie immédiatement :

- Le rôle d'hôte indique `Dom0`
- La version Xen et le scheduler sont présents
- Le nombre de domaines correspond à l'attendu
- L'utilisation mémoire hyperviseur reste cohérente
- Aucun crash de service critique n'apparaît sur la page security

C'est la façon la plus rapide de confirmer que la vue hyperviseur est saine avant d'entrer dans des problèmes invites plus fins.

## Exemple 2 - détecter un état Alpine non committé
Sur un hôte Alpine orienté maintenance, la page storage montre :

- LBU présent
- Un état marque `dirty`
- Le nom de la dernière archive

Cela indique que des changements de configuration existent mais n'ont pas encore été commits dans l'archive de persistance.

## Exemple 3 - comparer les versions courantes aux tags TRINITY boot
Un opérateur ouvre la page hypervisor et compare :

- La version Alpine courante
- Le noyau courant
- Les dernières versions spécifiques au rôle retournées par `/api/versions`

Cela donne un signal léger de mise à jour sans transformer `UnyPort` en gestionnaire de paquets complet.

## Exemple 4 - entrer dans un terminal proxifiée
Si `ttyd` est déclare dans `settings/config.yaml`, l'opérateur peut ouvrir :

```text
/proxy/ttyd/
```

depuis la navigation du portail au lieu d'exposer le terminal sur sa propre URL publique.

## Exemple 5 - onboarder un nouvel opérateur
Un administrateur peut :

- Créer un utilisateur
- Lui assigner le rôle `operator`
- Laisser cet utilisateur stocker un nom d'affichage, un avatar et une clé SSH publique
- Conserver le branding et l'administration des utilisateurs réservés aux admins

Cela rend l'onboarding simple tout en gardant des frontières de rôles lisibles.
