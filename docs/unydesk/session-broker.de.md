# Session-Broker
Der Broker ist die Koordinationsschicht von `UnyDesk`. Er ersetzt weder Host noch Viewer. Er erstellt den gemeinsamen Sitzungskontext und transportiert die Informationen, damit beide Seiten zusammenfinden.

## Sitzungslebenszyklus
Der öffentliche Lebenszyklus ist:

```text
pending
  -> offered
  -> active
  -> closed
```

Das genaue Timing hängt von Host-Verfügbarkeit, Viewer-Authentifizierung, Host-Bestätigung und Transportaushandlung ab.

## Was der Broker verfolgt
Der Broker kann Folgendes anzeigen:

- Sitzungs-ID
- Zielhost oder Public ID
- Viewer-Identität und Label
- geroutete Host-Identität
- WebRTC Offer- und Answer-Status
- Viewer- und Host-ICE-Kandidaten
- Dispatch-Status und Anzahl
- Zeitpunkte des letzten Dispatch und der letzten Host-Bestätigung
- Bildschirm-Fallback-Revision und Aktualisierungszeit

Diese Felder sind nützlich, weil sie Routing-Probleme von Medien-Problemen trennen.

## Signalisierungspfad
Wenn Echtzeittransport verfügbar ist, tauschen Browser und Host Offer, Answer und ICE-Kandidaten über den Broker aus. Nach der Aushandlung kann der beste Pfad direkt werden.

Wenn direkter Transport unvollständig ist, hält `UnyDesk` den Sitzungsstatus sichtbar und kann Bildschirm-Fallback nutzen, statt still zu scheitern.

## Standalone-Sitzungsmodus
Standalone-Modus ist für eine enge Einladung geeignet. Die Sitzung trägt ein spezifisches Token und der eingeladene Benutzer muss nicht die vollständige Kontooberfläche durchlaufen.

Dieser Modus ist begrenzter Zugriff: Das Token gehört zum Sitzungskontext und darf nicht als allgemeine Konto-Credential behandelt werden.
