# UnyDesk-Ueberblick
`UnyDesk` ist der Fernzugriffsdienst der Plattform. Diese oeffentliche Flaeche wird genutzt, wenn ein Nutzer eine Maschine erreichen, eine andere Person unterstuetzen, eine herunterladbare Host-Laufzeit bereitstellen oder eine Fernsitzung ueber mehrere Transportmodi fortsetzen muss.

Sie stellt bereit:

- Einstiegspunkte fuer den Fernzugriff
- Host-Bootstrap- und Claim-Ablaufe
- Sichtbarkeit ueber das Host-Inventar
- sitzungsorientierte Fernsteuerungs-Workflows
- herunterladbare Host-Pakete
- browserbasierten Viewer-Zugriff
- supporttaugliches Fallback-Verhalten bei degradiertem Direkttransport

## Was der oeffentliche Nutzer sieht
Aus oeffentlicher Sicht erscheint `UnyDesk` typischerweise als:

- Landing-Page fuer Fernzugriff
- Sitzungsseite im Browser
- herunterladbare Host-Binaerdateien fuer unterstuetzte Systeme
- Host-Identitaets- und Vertrauensablaeufe
- Sitzungsstatus mit Route-, Signalisierungs- und Transporthinweisen

Der Nutzer muss keine Broker-Interna verstehen, um den Dienst zu verwenden. Oeffentlich wichtig ist, dass `UnyDesk`:

- den Ziel-Host identifizieren kann
- Host-Akzeptanz anfordern kann
- Viewer und Host verbindet
- die Steuerung auch dann aufrechterhaelt, wenn der beste Medienpfad nicht sofort nutzbar ist

## Rolle im Oekosystem
`UnyDesk` ist eine eigenstaendige Architektur mit eigenem Laufzeitmodell und eigener oeffentlicher Interaktion. Es ist keine Unterfunktion von `TRINITY`.

Die Rolle neben den anderen Flaechen ist klar:

- **`TRINITY`** fuer Konto, Services, Bestellungen, Rechnungen und Support-Einstieg
- **`UnyDesk`** fuer Fernzugriff, Live-Unterstuetzung und interaktive Host-Sitzungen
- **`UnyPort`** fuer Steuerung, Ueberwachung und Infrastruktur-Sichtbarkeit

## Zentrale oeffentliche Begriffe
Die wichtigsten oeffentlichen Begriffe in `UnyDesk` sind:

- **Host**: die Maschine, die Fernzugriff bereitstellt
- **Viewer**: der browserseitige Teilnehmer, der die Sitzung oeffnet
- **Sitzung**: die aktive Beziehung zwischen Viewer und Host
- **Broker**: die Signalisierungs- und Routing-Schicht
- **Claim oder Pairing**: der Vertrauensschritt, der einen Host an einen erwarteten Kontext bindet
- **Standalone access**: ein direkter Sitzungslink mit sitzungsspezifischem Token

## Warum das oeffentlich wichtig ist
Fernzugriff besteht nicht nur aus Video. In der Praxis muss `UnyDesk` auch sicherstellen:

- Host-Erreichbarkeit
- lokale Freigaberegeln
- Zwischenablage- und Dateiaustausch
- Support-Sichtbarkeit
- vernuenftiges Verhalten, wenn direktes WebRTC-Medium unvollstaendig bleibt

Deshalb beschreibt diese Dokumentation `UnyDesk` als vollstaendiges Fernzugriffsprodukt und nicht nur als Download-Seite.
