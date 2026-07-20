# Architecture d'UnyDesk
`UnyDesk` combine une surface broker, une surface de distribution logicielle et une surface de session en direct.

Son architecture publique est centrée sur :

- L'authentification
- Les flux de claim et de provision bootstrap
- L'état des hôtes et des sessions
- Les mises à jour temps réel via websocket
- La distribution de binaires hôtes pour les cibles supportées
- La signalisation WebRTC directe via l'API broker
- Des chemins de secours écran lorsque le média temps réel direct n'est pas exploitable

## Principales couches publiques
La lecture publique de l'architecture peut se séparer en cinq couches.

### 1. Couche de distribution
Cette couche fournit :

- Des binaires host téléchargeables
- Un packaging host spécifique à chaque plateforme
- Des points d'entrée de bootstrap
- Un chemin public stable pour récupérer le logiciel host

L'application host n'est pas seulement un binaire d'appoint. C'est le runtime côté machine qui s'enregistre, s'identifie, envoie des heartbeats et accepte ou refusé les sessions.

### 2. Couche identité et confiance
`UnyDesk` utilise plusieurs modes publics de confiance :

- Enregistrement de host lié à un compte
- Flux de claim ou de pairage qui associent un host à un contexte utilisateur
- Liens de session autonomes avec un jeton dédié
- Approbation locale optionnelle sur le host avant le début du contrôle

### 3. Couche broker et session
La couche broker gère :

- La création de session
- Le routage vers le host
- L'échange d'offer et d'answer
- L'échange de candidats ICE
- La présence du host
- La visibilité sur l'état de dispatch, le nombre d'envois et les accusés host

### 4. Couche transport temps réel
Quand c'est possible, `UnyDesk` privilégie un chemin temps réel direct :

- Le viewer navigateur crée une offer WebRTC
- Le host publie la WebRTC answer
- Les candidats ICE sont échangés via le broker
- La vidéo, l'entrée et les canaux auxiliaires deviennent disponibles

Ce chemin est optimisé pour la basse latence, par exemple pour l'écran en direct, le contrôle clavier et souris, le presse-papiers et la signalisation des transferts de fichiers.

### 5. Couche de secours
L'architecture publique inclut aussi des chemins de secours explicites :

- Livraison peer-frame sur le data channel d'écran
- Relais peer-frame via un websocket d'écran dédié
- Poursuite de la signalisation via le websocket broker
- Polling d'état de session en attendant la reprise du transport

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
