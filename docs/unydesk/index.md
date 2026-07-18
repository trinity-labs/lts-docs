---
description: Documentation publique de `UnyDesk`, le broker d'accès distant auto-heberge de l'ecosysteme `TRINITY`.
social_image: https://unydesk.app/assets/logo-unydesk.jpg
---

# UnyDesk
`UnyDesk` est le service d'accès distant de l'écosystème `TRINITY` Edge Networks. C'est la surface publique utilisée pour télécharger un paquet host, pairer ou associer un host, démarrer une session distante et garder cette session exploitable même lorsque le meilleur chemin de transport n'est pas immédiatement disponible.

Contrairement à `TRINITY`, qui reste le portail client et services, `UnyDesk` est centré sur :

- L'accessibilité du host
- Le routage des sessions entre viewer et host
- Le contrôle distant en direct
- Les flux d'assistance distante
- Les comportements de secours côté transport

## Commencer ici
Pour une lecture pratique, l'ordre recommandé est :

1. `Overview`
2. `Architecture`
3. `Bootstrap and access`
4. `Usage`
5. `Support and operations`
6. `Glossary`

```text
Viewer
  -> page UnyDesk
  -> host cible
  -> création de session
  -> signalisation broker
  -> chemin WebRTC direct
  -> chemin de secours si nécessaire
```

Cette section décrit `UnyDesk` comme une expérience produit publique, pas comme une note de protocole interne ou de code source.
