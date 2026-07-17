# Broker de sessions
Le broker est la couche de coordination d'`UnyDesk`. Il ne remplace ni le host ni le viewer. Il crée le contexte de session commun et transporte les informations nécessaires pour que les deux côtés se rejoignent.

## Cycle de vie session
Le cycle public est :

```text
pending
  -> offered
  -> active
  -> closed
```

Le timing exact dépend de la disponibilité du host, de l'authentification viewer, de l'accusé host et de la négociation transport.

## Ce que suit le broker
Le broker peut exposer :

- l'identifiant de session
- le host cible ou public ID
- l'identité et le libellé du viewer
- l'identité du host routé
- l'état offer / answer WebRTC
- les candidats ICE viewer et host
- l'état et le nombre de dispatch
- les horodatages du dernier dispatch et du dernier accusé host
- la révision écran de secours et son horodatage

Ces champs sont utiles car ils séparent un problème de routage d'un problème média.

## Chemin de signalisation
Quand le transport temps réel est disponible, le navigateur et le host échangent offer, answer et candidats ICE via le broker. Après négociation, le meilleur chemin peut devenir direct.

Quand le transport direct est incomplet, `UnyDesk` garde l'état de session visible et peut s'appuyer sur une livraison écran de secours au lieu d'échouer silencieusement.

## Mode session autonome
Le mode autonome sert aux invitations limitées. La session porte un token spécifique et ne force pas l'invité à passer par toute la surface compte.

Ce mode doit être traité comme un accès borné : le token est lié au contexte de session et ne doit pas devenir une credential générale de compte.
