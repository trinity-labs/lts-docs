# Utilisation d'UnyDesk
`UnyDesk` est utilisée quand l'utilisateur doit initier ou recevoir un accès distant. Le point public important est que l'usage est piloté par la session : l'utilisateur n'ouvre pas seulement un outil, il lance une relation entre un viewer, un host, une route et un ou plusieurs chemins de transport.

Les usages publics typiques incluent :

- Ouvrir la landing page du service d'accès distant
- Identifier le bon package hôte pour un système cible
- Démarrer un bootstrap ou un claim d'hôte
- Ouvrir ou superviser une session distante
- Partager un lien de session autonome
- Réaliser une assistance avec approbation locale côté host
- Continuer avec un fallback écran si la vidéo temps réel directe se dégrade

## Usage 1 - préparer un host
Les utilisateurs commencent souvent par :

- Télécharger le bon paquet host
- Lancer ou installer le runtime host
- Vérifier que le host apparaît en ligne
- Confirmer que le pairage ou le claim est terminé

## Usage 2 - démarrer une session d'assistance
Dans une session d'assistance normale, le viewer :

- Ouvre la page `UnyDesk`
- Sélectionner ou cibler un host
- Crée une session
- Attend l'acceptation côté host
- Voit la session passer par les états offered, accepted puis active

## Usage 3 - travailler dans la session navigateur
Une fois la session active, le viewer navigateur peut généralement :

- Regarder l'écran distant
- Déplacer le pointeur
- Envoyer des frappes clavier
- Échanger le contenu du presse-papiers
- Envoyer des fichiers au host
- Fermer ou surveiller la session

## Usage 4 - travailler en mode autonome
L'accès autonome est utile lorsque :

- Un utilisateur doit rejoindre une session sans passer par tout le portail compte
- Un opérateur support a besoin d'une invitation étroite
- La session doit rester limitée à un seul contexte d'accès

## Usage 5 - survivre à des chemins réseau imparfaits
Quand le média temps réel direct fonctionne, l'utilisateur bénéficie de la meilleure expérience. Quand ce n'est pas le cas, `UnyDesk` peut rester utile en combinant :

- La signalisation broker
- La visibilité sur l'état de session
- Le transport fallback peer-frame
- Des comportements de reprise au lieu d'un abandon immédiat

Quand l’objectif est l'orchestration centrale de la plateforme, l'architecture pertinente est `TRINITY`. Quand l’objectif est le contrôle local des services, l'architecture pertinente est `UnyPort`.
