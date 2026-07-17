# Support and operations
Le support `UnyDesk` est de nature opérationnelle. Le problème utilisateur n'est souvent pas "la page est indisponible" mais "le host est en ligne, la session existe et le chemin média ne devient toujours pas exploitable". L'aide publique doit donc se concentrer sur les états, les preuves et le comportement de transport.

## Périmètre du support
Publiquement, le support `UnyDesk` peut concerner :

- une confusion sur le téléchargement du paquet host ou le bootstrap
- des problèmes de claim, de pairage ou de confiance
- une session routée vers le mauvais host ou vers aucun host
- une approbation locale qui n'apparaît pas ou qui est mal comprise
- une signalisation WebRTC bloquée avant l'answer
- un média direct établi mais sans image décodée
- un fallback écran qui n'apparaît pas
- des problèmes de presse-papiers ou de transfert de fichiers

## Preuves utiles
```markdown
Objet : session UnyDesk acceptée mais pas de vidéo

Session ID : 188529734844f375
Host cible : DESKTOP-RET6DCA
Etat observé : offered -> accepted, pas de vidéo visible
Note transport viewer : no remote answer yet / no inbound RTP / fallback manquant
Résultat attendu : écran en direct ou fallback peer-frame
```

## Lire la session par étapes
Publiquement, une session distante échoue généralement dans l'une de ces étapes :

1. paquet host absent ou host hors ligne
2. host présent mais non pairé ou non approuvé
3. session créée mais non routée
4. session routée mais en attente d'approbation locale
5. host accepté mais pas d'answer publiée
6. answer publiée mais chemin ICE inutilisable
7. vidéo temps réel négociée mais aucune image décodée
8. fallback attendu mais aucun peer frame n'apparaît

## Symptômes utiles typiques
- "host offline"
- "session pending"
- "dispatch accepted but no answer"
- "answer applied but ICE stays checking"
- "no inbound video RTP yet"
- "realtime track timed out"
- "peer frame fallback requested but no image arrived"

## Avant d'escalader
Vérifier :

- que la bonne version du paquet host tourne
- que le host est toujours en ligne
- que la route de session pointe vers le host attendu
- que l'approbation locale a été acceptée si elle est requise
- que le navigateur viewer est resté sur la même page de session
- que le problème est bien compris comme souci de signalisation, de média direct ou de fallback image

## Surfaces liées
- utiliser **`TRINITY`** si le problème concerne le compte, la facturation, les commandes ou la propriété du service
- utiliser **`UnyPort`** si le problème concerne une visibilité plus large sur l'infrastructure
- rester dans **`UnyDesk`** si le problème concerne l'accès distant interactif lui-même
