---
description: Öffentliche Dokumentation für `UnyDesk`, den selbst gehosteten Fernzugriffs-Broker des `TRINITY`-Ökosystems.
social_image: https://unydesk.app/assets/logo-unydesk.jpg
---

# UnyDesk
`UnyDesk` ist der Fernzugriffsdienst des `TRINITY` Edge Networks Ökosystems. Diese öffentliche Fläche wird genutzt, um ein Host-Paket herunterzuladen, einen Host zu pairen oder zu claimen, eine Fernsitzung zu starten und diese Sitzung nutzbar zu halten, auch wenn der beste Transportpfad nicht sofort verfügbar ist.

Im Unterschied zu `TRINITY` als Kunden- und Serviceportal konzentriert sich `UnyDesk` auf:

- Host-Erreichbarkeit
- Routing zwischen Viewer und Host
- Live-Fernsteuerung
- Remote-Support-Ablaufe
- Fallback-Verhalten auf Transportebene

## Einstieg
Für eine praktische Lesereihenfolge wird empfohlen:

1. `Überblick`
2. `Architektur`
3. `Bootstrap und Zugriff`
4. `Nutzung`
5. `Support und Betrieb`
6. `Glossar`

```text
Viewer
  -> UnyDesk-Seite
  -> Ziel-Host
  -> Sitzungserstellung
  -> Broker-Signalisierung
  -> direkter WebRTC-Pfad
  -> Fallback-Pfad falls noetig
```

Dieser Abschnitt beschreibt `UnyDesk` als öffentliche Produkterfahrung und nicht als Quellcode- oder Protokollnotiz.
