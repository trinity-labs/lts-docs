# Sicherheit und Betrieb
`UnyDesk` ist ein Remote-Access-Produkt, daher gehört Sicherheit zum normalen Betriebsmodell. Zugriff ist nur sinnvoll, wenn Host-Identität, Viewer-Identität und Sitzungsumfang explizit sind.

## Sicherheitsbasis
Das öffentliche Modell umfasst:

- Kontobasierte Authentifizierung für normale Benutzer
- CSRF-Schutz für zustandsändernde Browser-Anfragen
- Sitzungscookies für authentifizierten Zugriff
- Begrenzte Standalone-Tokens für Einladungen
- Explizite Host-Trust- oder Claim-Flows
- Websocket-Kanäle für Live-Status und Host-Kommunikation
- No-Store-Verhalten für Host-Downloads

## Host-Vertrauen
Ein Host ist nicht nur deshalb vertrauenswürdig, weil er den Broker erreichen kann. Vertrauen hängt von Identitätsmaterial wie Install ID, Public ID, Hostname und Provisioning-Kontext ab.

Betrieblich wird ein Host nützlich, wenn er:

- Sich mit stabiler Identität registriert
- Dem erwarteten Benutzer oder Kontext zugeordnet ist
- Per Heartbeat sichtbar bleibt
- Sitzungs-Dispatch bestätigt

## Sitzungssicherheit
Eine Sitzung sollte geschlossen werden, wenn der Zugriff beendet ist. Öffentliche Betreiber sollten Standalone-Links nicht länger als nötig aktiv halten und ein Sitzungstoken nie als allgemeine Credential wiederverwenden.

## Diagnosegrenzen
Wenn `UnyDesk` fehlschlägt, zuerst den Fehlertyp trennen:

- Authentifizierungsfehler
- Host nicht registriert oder offline
- Host nicht vertrauenswürdig
- Sitzung nicht dispatcht
- WebRTC-Aushandlung unvollständig
- Bildschirm-Fallback aktualisiert sich nicht

Diese Trennung verhindert, dass jedes Remote-Access-Problem als Netzwerkausfall behandelt wird.
