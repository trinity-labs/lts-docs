# Scan / Audit
![Rapport TRINITY Scan](../assets/images/projects/scan/scan-report.png){ .unyport-screen }

- ✅ Scanner uniquement une cible que vous êtes autorisé à évaluer.
- ⭕ Un score synthétique ne remplace pas la lecture des preuves du rapport.
- ➡️ Contrôler le point d’entrée avant de lancer une analyse :
```bash
curl -fsSI https://scan.trinity-net.com/
```

`TRINITY Scan / Audit` analyse une surface publique et transforme les signaux techniques en rapport lisible.
Le service combine collecte passive, probes actives, normalisation et corrélation pour donner une vue claire d'un domaine, d'une application ou d'une exposition réseau.

## Objectif
- identifier les points exposés publiquement
- regrouper les preuves observables dans un rapport
- aider à prioriser les corrections
- fournir une synthèse compréhensible par une équipe technique et par un décideur

## Parcours
```text
cible
  -> collecte
  -> verification
  -> correlation
  -> score
  -> rapport partageable
```

## Périmètre
Le scanner se concentre sur les signaux visibles depuis Internet.
Il ne remplace pas un audit intrusif, un pentest contractualisé ou une analyse interne avec accès privilégié.
