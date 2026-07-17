# Architecture d'UnyDesk
`UnyDesk` combine une surface broker, une surface de distribution logicielle et une surface de session en direct.

Son architecture publique est centrée sur :

- l'authentification
- les flux de claim et de provision bootstrap
- l'état des hôtes et des sessions
- les mises à jour temps réel via websocket
- la distribution de binaires hôtes pour les cibles supportées
- la signalisation WebRTC directe via l'API broker
- des chemins de secours écran lorsque le média temps réel direct n'est pas exploitable

## Principales couches publiques
La lecture publique de l'architecture peut se séparer en cinq couches.

### 1. Couche de distribution
Cette couche fournit :

- des binaires host téléchargeables
- un packaging host spécifique à chaque plateforme
- des points d'entrée de bootstrap
- un chemin public stable pour récupérer le logiciel host

L'application host n'est pas seulement un binaire d'appoint. C'est le runtime côté machine qui s'enregistre, s'identifie, envoie des heartbeats et accepte ou refuse les sessions.

### 2. Couche identité et confiance
`UnyDesk` utilise plusieurs modes publics de confiance :

- enregistrement de host lié à un compte
- flux de claim ou de pairage qui associent un host à un contexte utilisateur
- liens de session autonomes avec un jeton dédié
- approbation locale optionnelle sur le host avant le début du contrôle

### 3. Couche broker et session
La couche broker gère :

- la création de session
- le routage vers le host
- l'échange d'offer et d'answer
- l'échange de candidats ICE
- la présence du host
- la visibilité sur l'état de dispatch, le nombre d'envois et les accusés host

### 4. Couche transport temps réel
Quand c'est possible, `UnyDesk` privilégie un chemin temps réel direct :

- le viewer navigateur crée une offer WebRTC
- le host publie la WebRTC answer
- les candidats ICE sont échangés via le broker
- la vidéo, l'entrée et les canaux auxiliaires deviennent disponibles

Ce chemin est optimisé pour la basse latence, par exemple pour l'écran en direct, le contrôle clavier et souris, le presse-papiers et la signalisation des transferts de fichiers.

### 5. Couche de secours
L'architecture publique inclut aussi des chemins de secours explicites :

- livraison peer-frame sur le data channel d'écran
- relais peer-frame via un websocket d'écran dédié
- poursuite de la signalisation via le websocket broker
- polling d'état de session en attendant la reprise du transport

## Chemin de session en clair
```text
Page viewer
  -> session créée
  -> routée vers le host
  -> host accepte
  -> broker transporte la signalisation
  -> un chemin WebRTC direct est tenté
  -> un chemin fallback est utilisé si le média direct reste incomplet
```

Cette architecture doit être lue comme un système d'accès distant, pas comme une simple page de téléchargement de fichiers.
