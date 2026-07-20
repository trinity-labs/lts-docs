# Support and opérations
Le support `UnyDesk` est de nature opérationnelle. Le problème utilisateur n'est souvent pas "la page est indisponible" mais "le host est en ligne, la session existe et le chemin média ne devient toujours pas exploitable". L'aide publique doit donc se concentrer sur les états, les preuves et le comportement de transport.

## Périmètre du support
Publiquement, le support `UnyDesk` peut concerner :

- Une confusion sur le téléchargement du paquet host ou le bootstrap
- Des problèmes de claim, de pairage ou de confiance
- Une session routée vers le mauvais host ou vers aucun host
- Une approbation locale qui n'apparaît pas ou qui est mal comprise
- Une signalisation WebRTC bloquée avant l'answer
- Un média direct établi mais sans image décodée
- Un fallback écran qui n'apparaît pas
- Des problèmes de presse-papiers ou de transfert de fichiers

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

1. Paquet host absent ou host hors ligne
2. Host présent mais non pairé ou non approuvé
3. Session créée mais non routée
4. Session routée mais en attente d'approbation locale
5. Host accepté mais pas d'answer publiée
6. Answer publiée mais chemin ICE inutilisable
7. Vidéo temps réel négociée mais aucune image décodée
8. Fallback attendu mais aucun peer frame n'apparaît

## Symptômes utiles typiques
- "Host offline"
- "Session pending"
- "Dispatch accepted but no answer"
- "Answer applied but ICE stays checking"
- "No inbound video RTP yet"
- "Realtime track timed out"
- "Peer frame fallback requested but no image arrived"

## Avant d'escalader
Vérifier :

- Que la bonne version du paquet host tourne
- Que le host est toujours en ligne
- Que la route de session pointe vers le host attendu
- Que l'approbation locale à été acceptée si elle est requise
- Que le navigateur viewer est resté sur la même page de session
- Que le problème est bien compris comme souci de signalisation, de média direct ou de fallback image

## Surfaces liées
- Utiliser **`TRINITY`** si le problème concerne le compte, la facturation, les commandes ou la propriété du service
- Utiliser **`UnyPort`** si le problème concerne une visibilité plus large sur l'infrastructure
- Rester dans **`UnyDesk`** si le problème concerne l'accès distant interactif lui-même
