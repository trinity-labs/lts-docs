# Glossaire UnyDesk
## Host
Le runtime côté machine qui s’enregistre auprès du service, reste en ligne et peut accepter ou refuser une session distante.

## Viewer
Le participant côté navigateur qui ouvre, observe et contrôle la session distante.

## Session
La relation active entre un viewer et un host, y compris le routage, la signalisation, le transport et la fermeture.

## Broker
La couche de service qui transporte la signalisation, le routage, la présence et l'état entre le viewer et le host.

## Claim
Une étape de confiance ou de propriété qui associe un host à un compte ou à un contexte attendu.

## Pairing
La liaison pratique d'un host à un utilisateur, un compte ou un environnement de confiance afin de pouvoir le réutiliser sans ambiguïté plus tard.

## Standalone accès
Un mode d'accès direct à la session utilisant un jeton spécifique à la session au lieu de toute la surface compte.

## Offer and answer
Le couple de signalisation WebRTC échangé entre le viewer et le host avant que le transport temps réel direct puisse commencer.

## ICE candidate
Un candidat de chemin réseau échangé pendant la mise en place WebRTC pour découvrir un chemin direct viable entre le viewer et le host.

## Peer-frame fallback
Un mode de secours de livraison d'écran utilisé lorsque la vidéo temps réel directe n'est pas encore exploitable ou ne produit pas d'image visible.

## Local approval
Une étape d'acceptation côté host qui peut demander à une personne sur la machine d'autoriser ou de refuser l'accès distant.
