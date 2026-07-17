# Bootstrap and access
`UnyDesk` doit résoudre deux problèmes publics avant qu'une session distante puisse commencer :

- comment le logiciel host est installé et mis en confiance
- comment un viewer est autorisé à atteindre ce host

## Distribution du paquet host
La première étape publique est généralement le téléchargement du paquet host. Un utilisateur choisit le bon binaire host pour le système cible puis l'installe ou le lance sur la machine qui recevra plus tard l'accès distant.

Publiquement, le chemin de distribution doit rester simple :

- cible supportée clairement visible
- paquet courant facile à identifier
- chemin d'installation ou de bootstrap évident
- chemin de mise à jour ou de re-téléchargement stable

## Enregistrement, claim et pairage
Après le premier démarrage, le host n'est pas encore un point d'accès distant réellement exploitable. Il doit s'enregistrer et exposer une identité.

Selon le scénario, `UnyDesk` peut impliquer :

- le premier enregistrement du runtime host
- un claim ou un pairage vers un compte
- une association à un environnement de confiance
- la réutilisation d'une identité host connue après reconnexion

Le viewer doit pouvoir comprendre si un host est seulement en ligne, déjà pairé ou encore en attente d'une étape de confiance.

## Approbation locale
Certains hosts peuvent imposer une approbation locale avant qu'une session distante ne commence. Publiquement, cela signifie :

- une session peut être correctement routée et pourtant attendre une approbation côté host
- un host peut accepter ou refuser localement la demande
- un participant récemment approuvé peut être réautorisé sans répéter immédiatement toute l'invite
- un refus explicite peut révoquer cette autorisation mémorisée pour ce même participant

## Modes d'accès
Publiquement, `UnyDesk` peut être utilisé selon deux grands modes :

- **accès orienté compte** via la surface normale du service
- **accès autonome** via un lien direct de session et un jeton spécifique à la session

L'accès autonome est utile lorsque :

- un utilisateur doit rejoindre une session sans passer par tout le portail compte
- un opérateur support a besoin d'une invitation étroite
- la session doit rester limitée à un seul contexte d'accès

## Avant d'ouvrir une session
1. confirmer que le bon paquet host est installé
2. confirmer que le host est en ligne
3. confirmer l'identité du host ou son état de pairage
4. confirmer si une approbation locale est requise
5. confirmer si la session sera liée à un compte ou autonome
