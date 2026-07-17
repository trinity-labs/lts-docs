# Introduction UnyDesk
`UnyDesk` est l'architecture d'accès distant de la plateforme. Elle donne aux utilisateurs et aux opérateurs un moyen contrôlé d'atteindre une machine depuis une session navigateur, un runtime host et une API broker.

Le produit s'organise autour de trois rôles publics :

- **host** : la machine qui expose l'accès
- **viewer** : l'utilisateur côté navigateur qui ouvre la session
- **broker** : le service `UnyDesk` qui authentifie, route et synchronise la session

`UnyDesk` est volontairement séparé de `TRINITY` et d'`UnyPort`. `TRINITY` gère le cycle client et les points d'entrée service. `UnyPort` gère la supervision locale et l'exploitation. `UnyDesk` gère l'accès distant interactif.

## Ce que résout UnyDesk
`UnyDesk` est utilisé lorsque l'utilisateur doit :

- télécharger ou lancer un package host
- revendiquer ou approuver un host
- créer une session distante
- router le viewer vers le bon host
- échanger la signalisation entre navigateur et host
- continuer la session quand le meilleur chemin temps réel n'est pas disponible

## Architecture publique en une vue
```text
Viewer navigateur
  -> broker UnyDesk
  -> host approuvé ou revendiqué
  -> signalisation de session
  -> WebRTC ou chemin écran de secours
```

Le broker reste le point stable de coordination. Le chemin média peut être direct lorsque c'est possible, mais l'état de session, le routage et le comportement de secours restent visibles dans `UnyDesk`.

## Parcours documentaire
Lire cette section dans cet ordre :

- `Présentation` pour la vue produit
- `Architecture` pour le modèle runtime
- `Mode d'emploi` pour le parcours pratique
- `Distribution des hosts` pour les téléchargements et packages
- `Broker de sessions` pour le cycle de vie et la signalisation
- `Sécurité et exploitation` pour les limites publiques d'exploitation
