# Utilisation d'UnyDesk
`UnyDesk` est utilisée quand l'utilisateur doit initier ou recevoir un accès distant. Le point public important est que l'usage est piloté par la session : l'utilisateur n'ouvre pas seulement un outil, il lance une relation entre un viewer, un host, une route et un ou plusieurs chemins de transport.

Les usages publics typiques incluent :

- ouvrir la landing page du service d'accès distant
- identifier le bon package hôte pour un système cible
- démarrer un bootstrap ou un claim d'hôte
- ouvrir ou superviser une session distante
- partager un lien de session autonome
- réaliser une assistance avec approbation locale côté host
- continuer avec un fallback écran si la vidéo temps réel directe se dégrade

## Usage 1 - préparer un host
Les utilisateurs commencent souvent par :

- télécharger le bon paquet host
- lancer ou installer le runtime host
- vérifier que le host apparaît en ligne
- confirmer que le pairage ou le claim est terminé

## Usage 2 - démarrer une session d'assistance
Dans une session d'assistance normale, le viewer :

- ouvre la page `UnyDesk`
- sélectionne ou cible un host
- crée une session
- attend l'acceptation côté host
- voit la session passer par les états offered, accepted puis active

## Usage 3 - travailler dans la session navigateur
Une fois la session active, le viewer navigateur peut généralement :

- regarder l'écran distant
- déplacer le pointeur
- envoyer des frappes clavier
- échanger le contenu du presse-papiers
- envoyer des fichiers au host
- fermer ou surveiller la session

## Usage 4 - travailler en mode autonome
L'accès autonome est utile lorsque :

- un utilisateur doit rejoindre une session sans passer par tout le portail compte
- un opérateur support a besoin d'une invitation étroite
- la session doit rester limitée à un seul contexte d'accès

## Usage 5 - survivre à des chemins réseau imparfaits
Quand le média temps réel direct fonctionne, l'utilisateur bénéficie de la meilleure expérience. Quand ce n'est pas le cas, `UnyDesk` peut rester utile en combinant :

- la signalisation broker
- la visibilité sur l'état de session
- le transport fallback peer-frame
- des comportements de reprise au lieu d'un abandon immédiat

Quand l'objectif est l'orchestration centrale de la plateforme, l'architecture pertinente est `TRINITY`. Quand l'objectif est le contrôle local des services, l'architecture pertinente est `UnyPort`.
