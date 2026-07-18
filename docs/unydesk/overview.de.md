# UnyDesk-Überblick
`UnyDesk` ist der Fernzugriffsdienst der Plattform. Diese öffentliche Fläche wird genutzt, wenn ein Nutzer eine Maschine erreichen, eine andere Person unterstützen, eine herunterladbare Host-Laufzeit bereitstellen oder eine Fernsitzung über mehrere Transportmodi fortsetzen muss.

Sie stellt bereit:

- Einstiegspunkte für den Fernzugriff
- Host-Bootstrap- und Claim-Ablaufe
- Sichtbarkeit über das Host-Inventar
- Sitzungsorientierte Fernsteuerungs-Workflows
- Herunterladbare Host-Pakete
- Browserbasierten Viewer-Zugriff
- Supporttaugliches Fallback-Verhalten bei degradiertem Direkttransport

## Was der öffentliche Nutzer sieht
Aus öffentlicher Sicht erscheint `UnyDesk` typischerweise als:

- Landing-Page für Fernzugriff
- Sitzungsseite im Browser
- Herunterladbare Host-Binärdateien für unterstützte Systeme
- Host-Identitaets- und Vertrauensablaeufe
- Sitzungsstatus mit Route-, Signalisierungs- und Transporthinweisen

Der Nutzer muss keine Broker-Interna verstehen, um den Dienst zu verwenden. Öffentlich wichtig ist, dass `UnyDesk`:

- Den Ziel-Host identifizieren kann
- Host-Akzeptanz anfordern kann
- Viewer und Host verbindet
- Die Steuerung auch dann aufrechterhaelt, wenn der beste Medienpfad nicht sofort nutzbar ist

## Rolle im Ökosystem
`UnyDesk` ist eine eigenstaendige Architektur mit eigenem Laufzeitmodell und eigener öffentlicher Interaktion. Es ist keine Unterfunktion von `TRINITY`.

Die Rolle neben den anderen Flächen ist klar:

- **`TRINITY`** für Konto, Services, Bestellungen, Rechnungen und Support-Einstieg
- **`UnyDesk`** für Fernzugriff, Live-Unterstützung und interaktive Host-Sitzungen
- **`UnyPort`** für Steuerung, Überwachung und Infrastruktur-Sichtbarkeit

## Zentrale öffentliche Begriffe
Die wichtigsten öffentlichen Begriffe in `UnyDesk` sind:

- **Host**: die Maschine, die Fernzugriff bereitstellt
- **Viewer**: der browserseitige Teilnehmer, der die Sitzung öffnet
- **Sitzung**: die aktive Beziehung zwischen Viewer und Host
- **Broker**: die Signalisierungs- und Routing-Schicht
- **Claim oder Pairing**: der Vertrauensschritt, der einen Host an einen erwarteten Kontext bindet
- **Standalone access**: ein direkter Sitzungslink mit sitzungsspezifischem Token

## Warum das öffentlich wichtig ist
Fernzugriff besteht nicht nur aus Video. In der Praxis muss `UnyDesk` auch sicherstellen:

- Host-Erreichbarkeit
- Lokale Freigaberegeln
- Zwischenablage- und Dateiaustausch
- Support-Sichtbarkeit
- Vernuenftiges Verhalten, wenn direktes WebRTC-Medium unvollstaendig bleibt

Deshalb beschreibt diese Dokumentation `UnyDesk` als vollstaendiges Fernzugriffsprodukt und nicht nur als Download-Seite.
