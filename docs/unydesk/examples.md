# Exemples
Ces exemples décrivent des parcours publics `UnyDesk` sans exposer de procédures d'infrastructure privées.

## Exemple 1 - accès assisté
```text
L'utilisateur ouvre UnyDesk
  -> télécharge le package host
  -> démarre le runtime host
  -> se connecte ou reçoit une invitation bornée
  -> le host devient visible
  -> le viewer démarre une session
  -> le host accuse le dispatch
```

C'est le parcours normal d'assistance quand une personne est présente près de la machine cible.

## Exemple 2 - host préparé
```text
L'opérateur prépare le host
  -> le host garde un install ID stable
  -> le host envoie son heartbeat au broker
  -> le viewer ouvre UnyDesk plus tard
  -> la session cible le host connu
```

Ce cas est utile lorsqu'une machine doit rester joignable pour une assistance future.

## Exemple 3 - invitation autonome
```text
La session est créée
  -> un token borné est généré
  -> le viewer invité ouvre le lien session
  -> le broker valide le token
  -> l'accès reste lié à ce contexte session
```

L'accès autonome est volontairement plus étroit qu'une connexion complète par compte.

## Exemple 4 - transport de secours
```text
Viewer et host échangent la signalisation
  -> le chemin temps réel direct est tenté
  -> le chemin média est incomplet
  -> l'état broker reste visible
  -> la livraison écran de secours continue la session
```

Le but n'est pas de masquer un transport dégradé. Le but est de garder assez d'état visible pour comprendre ce qui fonctionne encore.
