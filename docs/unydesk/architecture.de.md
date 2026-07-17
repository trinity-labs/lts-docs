# UnyDesk-Architektur
`UnyDesk` kombiniert eine Broker-Oberflaeche, eine Software-Verteilungsoberflaeche und eine Live-Sitzungsflaeche.

Seine oeffentliche Architektur ist zentriert auf:

- Authentifizierung
- Bootstrap-Claim- und Provision-Ablaufe
- Host- und Sitzungszustand
- Live-Updates ueber WebSockets
- Verteilung von Host-Binaries fuer unterstuetzte Zielplattformen
- direkte WebRTC-Signalisierung ueber die Broker-API
- Bildschirm-Fallback-Pfade, wenn direkte Echtzeitmedien nicht nutzbar sind

## Zentrale oeffentliche Schichten
Die oeffentliche Architektur kann in fuenf Schichten gelesen werden.

### 1. Distributionsschicht
Diese Schicht liefert:

- herunterladbare Host-Binaerdateien
- plattformspezifisches Host-Packaging
- Bootstrap-Einstiegspunkte
- einen stabilen oeffentlichen Pfad zum Abruf der Host-Software

Die Host-Anwendung ist nicht nur ein Hilfsprogramm. Sie ist die Laufzeit auf der Maschine, registriert sich, identifiziert sich, sendet Heartbeats und akzeptiert oder verweigert Sitzungen.

### 2. Identitaets- und Vertrauensschicht
`UnyDesk` nutzt mehrere oeffentliche Vertrauensmodi:

- kontogebundene Host-Registrierung
- Claim- oder Pairing-Ablaufe, die einen Host an einen Nutzerkontext binden
- Standalone-Sitzungslinks mit eigenem Token
- optionale lokale Freigabe auf dem Host vor Beginn der Steuerung

### 3. Broker- und Sitzungsschicht
Die Broker-Schicht verarbeitet:

- Sitzungserstellung
- Host-Routing
- Offer/Answer-Austausch
- ICE-Kandidaten-Austausch
- Host-Praesenz
- Sichtbarkeit von Dispatch-Status, Zustellzaehlern und Host-Bestaetigungen

### 4. Echtzeit-Transportschicht
Wenn moeglich, bevorzugt `UnyDesk` einen direkten Echtzeitpfad:

- der Browser-Viewer erstellt ein WebRTC-Offer
- der Host stellt das WebRTC-Answer bereit
- ICE-Kandidaten werden ueber den Broker ausgetauscht
- Video-, Input- und Hilfskanaele werden verfuegbar

Dieser Pfad ist fuer niedrige Latenz optimiert, etwa fuer Live-Bildschirmansicht, Tastatur- und Maussteuerung, Zwischenablageaustausch und Dateisignalisierung.

### 5. Fallback-Lieferschicht
Die oeffentliche Architektur enthaelt auch explizite Fallback-Pfade:

- Peer-Frame-Uebertragung ueber den Screen-Data-Channel
- Peer-Frame-Relay ueber ein dediziertes Screen-WebSocket
- fortlaufende Signalisierung ueber das Broker-WebSocket
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
