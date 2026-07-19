# Präsentation von UnyPort
`UnyPort` ist die Kontroll- und Supervisionsanwendung rund um die `TRINITY`-Infrastruktur. Sie ist für Operatoren gedacht, nicht für öffentliche Handelsprozesse. Der Produktwert liegt in Klarheit: ein Einstiegspunkt, ein Sitzungsmodell, eine Host-Sicht und wenige gezielte Betriebsseiten.


## Sichtbare Seiten
Die aktuelle Oberfläche ist um folgende Seiten gebaut:

- `Dashboard`
- `Hypervisor`
- `Resources`
- `Network`
- `Storage`
- `Security`
- `Settings`

Diese Seiten werden von einer Mischung aus statischen Systemfakten und Live-Snapshots über SSE versorgt.

## Zielnutzer
`UnyPort` ist für folgende Rollen gedacht:

- Administratoren
- Operatoren
- Viewer im Nur-Lese-Modus

Die Anwendung trennt diese Rollen explizit, damit dieselbe Oberfläche für Beobachtung, Routinebetrieb und kontrollierte Administration verwendet werden kann.

## Position im Ökosystem
`UnyPort` ist die Supervisionsbegleitung von `TRINITY`:

- `TRINITY` Traegt den Kundenlebenszyklus
- `UnyDesk` Traegt Fernzugriff und Assistenz
- `UnyPort` Traegt Infrastrukturzustand, Proxy-Zugang und Operator-Kontext

Diese Positionierung ist mit Repository, README und aktuellem Routing konsistent.
