# Introduction UnyDesk
`UnyDesk` est l'architecture d'accès distant de la plateforme. Elle donne aux utilisateurs et aux opérateurs un moyen contrôlé d'atteindre une machine depuis une session navigateur, un runtime host et une API broker.

Le produit s'organise autour de trois rôles publics :

- **Host** : la machine qui exposé l'accès
- **Viewer** : l'utilisateur côté navigateur qui ouvre la session
- **Broker** : le service `UnyDesk` qui authentifié, route et synchronise la session

`UnyDesk` est volontairement séparé de `TRINITY` et d'`UnyPort`. `TRINITY` gère le cycle client et les points d'entrée service. `UnyPort` gère la supervision locale et l'exploitation. `UnyDesk` gère l'accès distant interactif.

## Ce que résout UnyDesk
`UnyDesk` est utilisé lorsque l'utilisateur doit :

- Télécharger ou lancer un package host
- Revendiquer ou approuver un host
- Créer une session distante
- Router le viewer vers le bon host
- Échanger la signalisation entre navigateur et host
- Continuer la session quand le meilleur chemin temps réel n'est pas disponible

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

- `Présentation` Pour la vue produit
- `Architecture` Pour le modèle runtime
- `Mode d'emploi` Pour le parcours pratique
- `Distribution des hosts` Pour les téléchargements et packages
- `Broker de sessions` Pour le cycle de vie et la signalisation
- `Sécurité et exploitation` Pour les limites publiques d'exploitation
