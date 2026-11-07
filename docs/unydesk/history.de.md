# Entwicklung
`UnyDesk` wurde als eigene Architektur getrennt, weil Remote-Zugriff andere Anforderungen hat als lokaler Betrieb und Kunden-Lifecycle-Management.

## Ursprüngliche Richtung
Die erste Richtung war, das Produkt klein und explizit zu halten:

- Eigenständiges Go-Backend
- Eine öffentliche Broker-API
- Alpine-freundliche Laufzeitbedingungen
- Browserorientierte Sitzungsoberfläche
- Separat verteilte Host-Laufzeit
- Zukünftige Integration über HTTP-APIs statt Code-Kopplung

## Warum nicht in UnyPort integrieren
`UnyPort` ist ein Betriebs- und Überwachungsportal. `UnyDesk` trägt ein anderes Risikoprofil:

- Echtzeittransport
- Host-Zugriff
- Viewer-Steuerung
- Sitzungstokens
- Medien-Fallback
- Vertrauen und Pairing

Die getrennte Architektur macht Sicherheits- und Produktgrenzen leichter verständlich.

## Aktuelle öffentliche Reife
Die öffentliche Oberfläche dokumentiert `UnyDesk` jetzt als Produkt, nicht nur als Scaffold. Wichtige sichtbare Bereiche sind Host-Verteilung, Bootstrap, Vertrauen, Sitzungsrouting, Transport-Signalisierung und Fallback-Verhalten.

## Beziehung zur Plattform
`UnyDesk` bleibt Teil derselben Plattformfamilie wie `TRINITY` und `UnyPort`. Die Beziehung entsteht durch Produktgrenze und API-Vertrag, nicht durch gemeinsame Menülabels oder Entwicklungsordnernamen.
