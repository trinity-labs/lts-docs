# Vue d'ensemble d'UnyDesk
`UnyDesk` est le service d'accès distant de la plateforme. C'est le point d'entrée public utilisé lorsqu'un utilisateur doit atteindre une machine, assister une autre personne, exposer un runtime host téléchargeable ou poursuivre une session distante à travers plusieurs modes de transport.

Elle existe pour exposer :

- Les points d'entrée d'accès distant
- Les flux de bootstrap et de claim des hôtes
- La visibilité sur l'inventaire des hôtes
- Les workflows de contrôle distant orientés session
- Les paquets d'hôtes téléchargeables
- L'accès viewer depuis le navigateur
- Un comportement de secours adapté au support lorsque le temps réel direct se dégrade

## Ce que voit l'utilisateur public
D'un point de vue public, `UnyDesk` apparaît généralement comme :

- Une page d'entrée d'accès distant
- Une page de session dans le navigateur
- Des binaires host téléchargeables pour les systèmes supportés
- Des flux d'identité et de confiance côté host
- Une surface d'état de session avec indicateurs de route, de signalisation et de transport

L'utilisateur n'a pas besoin de comprendre les détails internes du broker pour utiliser le service. Ce qui compte publiquement, c'est qu'`UnyDesk` puisse :

- Identifier le host cible
- Demander l'acceptation côté host
- Connecter le viewer et le host
- Préserver le contrôle même lorsque le meilleur chemin média n'est pas immédiatement exploitable

## Rôle dans l'écosystème
`UnyDesk` est une architecture autonome avec son propre runtime et son propre modèle d'interaction public. Ce n'est pas une sous-fonction de `TRINITY`.

Son rôle à côté des autres surfaces est clair :

- **`TRINITY`** gère les comptes, les services, les commandes, les factures et les entrées support
- **`UnyDesk`** gère l'accès distant, l'assistance en direct et les sessions interactives host
- **`UnyPort`** gère le contrôle, la supervision et la visibilité infrastructure

## Principaux concepts publics
Les concepts publics les plus importants dans `UnyDesk` sont :

- **Host** : la machine qui exposé l'accès distant
- **Viewer** : le participant côté navigateur qui ouvre la session
- **Session** : la relation active entre viewer et host
- **Broker** : la couche de signalisation et de routage
- **Claim ou pairing** : l'étape de confiance qui lie un host à un contexte attendu
- **Standalone accès** : un lien de session direct protégé par un jeton spécifique

## Pourquoi c'est important publiquement
L'accès distant ne se résume pas à la vidéo. En pratique, `UnyDesk` doit aussi préserver :

- L'accessibilité du host
- Les règles d'approbation locale
- Les échanges de presse-papiers et de fichiers
- La visibilité support
- Un comportement acceptable quand le média WebRTC direct reste incomplet

C'est pourquoi cette documentation présente `UnyDesk` comme un produit d'accès distant complet, et pas seulement comme une page de téléchargement.
