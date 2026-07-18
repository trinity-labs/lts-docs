# UnyDesk-Architektur
`UnyDesk` kombiniert eine Broker-Oberfläche, eine Software-Verteilungsoberfläche und eine Live-Sitzungsfläche.

Seine öffentliche Architektur ist zentriert auf:

- Authentifizierung
- Bootstrap-Claim- und Provision-Ablaufe
- Host- und Sitzungszustand
- Live-Updates über WebSockets
- Verteilung von Host-Binaries für unterstützte Zielplattformen
- Direkte WebRTC-Signalisierung über die Broker-API
- Bildschirm-Fallback-Pfade, wenn direkte Echtzeitmedien nicht nutzbar sind

## Zentrale öffentliche Schichten
Die öffentliche Architektur kann in fuenf Schichten gelesen werden.

### 1. Distributionsschicht
Diese Schicht liefert:

- Herunterladbare Host-Binärdateien
- Plattformspezifisches Host-Packaging
- Bootstrap-Einstiegspunkte
- Einen stabilen öffentlichen Pfad zum Abruf der Host-Software

Die Host-Anwendung ist nicht nur ein Hilfsprogramm. Sie ist die Laufzeit auf der Maschine, registriert sich, identifiziert sich, sendet Heartbeats und akzeptiert oder verweigert Sitzungen.

### 2. Identitaets- und Vertrauensschicht
`UnyDesk` nutzt mehrere öffentliche Vertrauensmodi:

- Kontogebundene Host-Registrierung
- Claim- oder Pairing-Ablaufe, die einen Host an einen Nutzerkontext binden
- Standalone-Sitzungslinks mit eigenem Token
- Optionale lokale Freigabe auf dem Host vor Beginn der Steuerung

### 3. Broker- und Sitzungsschicht
Die Broker-Schicht verarbeitet:

- Sitzungserstellung
- Host-Routing
- Offer/Answer-Austausch
- ICE-Kandidaten-Austausch
- Host-Praesenz
- Sichtbarkeit von Dispatch-Status, Zustellzaehlern und Host-Bestaetigungen

### 4. Echtzeit-Transportschicht
Wenn möglich, bevorzugt `UnyDesk` einen direkten Echtzeitpfad:

- Der Browser-Viewer erstellt ein WebRTC-Offer
- Der Host stellt das WebRTC-Answer bereit
- ICE-Kandidaten werden über den Broker ausgetauscht
- Video-, Input- und Hilfskanaele werden verfügbar

Dieser Pfad ist für niedrige Latenz optimiert, etwa für Live-Bildschirmansicht, Tastatur- und Maussteuerung, Zwischenablageaustausch und Dateisignalisierung.

### 5. Fallback-Lieferschicht
Die öffentliche Architektur enthaelt auch explizite Fallback-Pfade:

- Peer-Frame-Übertragung über den Screen-Data-Channel
- Peer-Frame-Relay über ein dediziertes Screen-WebSocket
- Fortlaufende Signalisierung über das Broker-WebSocket
- Polling des Sitzungsstatus waehrend Transporterholung

## Sitzungsweg in Klartext
```text
Viewer-Seite
  -> Sitzung erstellt
  -> zum Host geroutet
  -> Host akzeptiert
  -> Broker traegt die Signalisierung
  -> direkter WebRTC-Pfad wird versucht
  -> Fallback wird genutzt, wenn direkte Medien unvollstaendig bleiben
```

Diese Architektur ist als Fernzugriffssystem zu verstehen, nicht als allgemeine Datei-Download-Seite.
