# Scan/Audit
![TRINITY-Scan-Bericht](../assets/images/projects/scan/scan-report.png){ .unyport-screen }

- ✅ Nur Ziele scannen, für deren Prüfung eine Berechtigung vorliegt.
- ⭕ Eine Gesamtbewertung ersetzt nicht die Prüfung der Berichtsnachweise.
- ➡️ Vor einer Analyse den Einstiegspunkt prüfen:
```bash
curl -fsSI https://scan.trinity-net.com/
```

`TRINITY Scan / Audit` analysiert eine öffentliche Oberfläche und verwandelt technische Signale in einen lesbaren Bericht.
Der Service kombiniert passive Sammlung, aktive Sonden, Standardisierung und Korrelation, um eine klare Sicht auf eine Domäne, eine Anwendung oder eine Netzwerkexposition zu erhalten.

## Ziel
- öffentlich exponierte Punkte identifizieren
- Gruppierung beobachtbarer Beweise in einem Bericht
- Hilfe bei der Priorisierung von Korrekturen
- Bereitstellung einer verständlichen Synthese durch ein technisches Team und einen Entscheidungsträger

## Route
```text
cible
  -> collecte
  -> verification
  -> correlation
  -> score
  -> rapport partageable
```

## Perimeter
Der Scanner konzentriert sich auf die Signale, die aus dem Internet sichtbar sind.
Sie ersetzt nicht ein intrusives Audit, eine vertraglich vereinbarte Slopest oder eine interne Analyse mit privilegiertem Zugang.
