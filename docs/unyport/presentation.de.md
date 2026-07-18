# Praesentation von UnyPort
`UnyPort` ist die Kontroll- und Supervisionsanwendung rund um die `TRINITY`-Infrastruktur. Sie ist fuer Operatoren gedacht, nicht fuer oeffentliche Handelsprozesse. Der Produktwert liegt in Klarheit: ein Einstiegspunkt, ein Sitzungsmodell, eine Host-Sicht und wenige gezielte Betriebsseiten.

![`UnyPort`-Oberflaeche](../assets/images/screens/unyport-dashboard.png)

*Beispiel einer `UnyPort`-Oberflaeche mit dashboard-orientierter Struktur und operator-zentrierter Lesart des Host-Zustands.*

## Sichtbare Seiten
Die aktuelle Oberflaeche ist um folgende Seiten gebaut:

- `Dashboard`
- `Hypervisor`
- `Resources`
- `Network`
- `Storage`
- `Security`
- `Settings`

Diese Seiten werden von einer Mischung aus statischen Systemfakten und Live-Snapshots ueber SSE versorgt.

## Zielnutzer
`UnyPort` ist fuer folgende Rollen gedacht:

- Administratoren
- Operatoren
- Viewer im Nur-Lese-Modus

Die Anwendung trennt diese Rollen explizit, damit dieselbe Oberflaeche fuer Beobachtung, Routinebetrieb und kontrollierte Administration verwendet werden kann.

## Position im Oekosystem
`UnyPort` ist die Supervisionsbegleitung von `TRINITY`:

- `TRINITY` Traegt den Kundenlebenszyklus
- `UnyDesk` Traegt Fernzugriff und Assistenz
- `UnyPort` Traegt Infrastrukturzustand, Proxy-Zugang und Operator-Kontext

Diese Positionierung ist mit Repository, README und aktuellem Routing konsistent.
