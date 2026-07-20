# Bootstrap and accès
`UnyDesk` doit résoudre deux problèmes publics avant qu'une session distante puisse commencer :

- Comment le logiciel host est installé et mis en confiance
- Comment un viewer est autorisé à atteindre ce host

## Distribution du paquet host
La première étape publique est généralement le téléchargement du paquet host. Un utilisateur choisit le bon binaire host pour le système cible puis l'installe ou le lance sur la machine qui recevra plus tard l'accès distant.

Publiquement, le chemin de distribution doit rester simple :

- Cible supportée clairement visible
- Paquet courant aisable à identifier
- Chemin d'installation ou de bootstrap évident
- Chemin de mise à jour ou de re-téléchargement stable

## Enregistrement, claim et pairage
Après le premier démarrage, le host n'est pas encore un point d'accès distant réellement exploitable. Il doit s'enregistrer et exposer une identité.

Selon le scénario, `UnyDesk` peut impliquer :

- Le premier enregistrement du runtime host
- Un claim ou un pairage vers un compte
- Une association à un environnement de confiance
- La réutilisation d'une identité host connue après reconnexion

Le viewer doit pouvoir comprendre si un host est seulement en ligne, déjà pairé ou encore en attente d'une étape de confiance.

## Approbation locale
Certains hosts peuvent imposer une approbation locale avant qu'une session distante ne commence. Publiquement, cela signifie :

- Une session peut être correctement routée et pourtant attendre une approbation côté host
- Un host peut accepter ou refuser localement la demande
- Un participant récemment approuvé peut être réautorisé sans répéter immédiatement toute l'invite
- Un refus explicite peut révoquer cette autorisation mémorisée pour ce même participant

## Modes d'accès
Publiquement, `UnyDesk` peut être utilisé selon deux grands modes :

- **Accès orienté compte** via la surface normale du service
- **Accès autonome** via un lien direct de session et un jeton spécifique à la session

L'accès autonome est utile lorsque :

- Un utilisateur doit rejoindre une session sans passer par tout le portail compte
- Un opérateur support à besoin d'une invitation étroite
- La session doit rester limitéée à un seul contexte d'accès

## Avant d'ouvrir une session
1. Confirmer que le bon paquet host est installé
2. Confirmer que le host est en ligne
3. Confirmer l'identité du host ou son état de pairage
4. Confirmer si une approbation locale est requise
5. Confirmer si la session sera liée à un compte ou autonome
