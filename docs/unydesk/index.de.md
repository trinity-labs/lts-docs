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

1. `Overview`
2. `Architecture`
3. `Bootstrap and access`
4. `Usage`
5. `Support and operations`
6. `Glossary`

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
