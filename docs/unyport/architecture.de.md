# UnyPort-Architektur
`UnyPort` ist als kompakter Operator-Stack aufgebaut: ein Go-Backend, ein statisches Frontend, eine kleine Konfigurationsfläche und eine Telemetrieschleife, die Linux- und Xen-sichtbaren Zustand direkt liest. Das Ziel ist operative Klarheit statt Framework-Komplexitaet.

## Ebene 1 - Runtime und Assets
Die erste Ebene ist die eigentliche Anwendungslaufzeit:

- Ein Go-Backend unter `unyport/backend`
- Ein statisches Frontend unter `unyport/frontend/public`
- Ein Entwicklungsmodus mit Assets vom Datentraeger über `UNYPORT_ASSETS`
- Ein Produktionsmodus mit eingebetteten Frontend-Assets im Binary

Im gelieferten `docker-compose.yml` wird das Projekt in einem `golang:alpine`-Container gebaut und auf Port `8800` bereitgestellt.

## Ebene 2 - Transport und Routing
Die zweite Ebene ist die Operator-Transportfläche:

- HTTP auf `:8800` standardmaessig
- Optional HTTPS und HTTP/3 bei Konfiguration in `settings/settings.yaml`
- JSON-APIs unter `/api/*`
- Live-Metriken über `/sse/system`
- App-Reverse-Proxys unter `/proxy/<app>/`

```text
Browser-SPA
  -> /api/system
  -> /api/security
  -> /api/services
  -> /sse/system
  -> /proxy/ttyd/
```

## Ebene 3 - Identitaet und persistenter Zustand
Identitaet ist absichtlich einfach und lokal:

- Lokale Benutzer liegen in `settings/users.json`
- Branding liegt in `settings/branding.yaml`
- Runtime-Einstellungen liegen in `settings/settings.yaml`
- App- und OAuth-Deklarationen liegen in `settings/config.yaml`
- Logs werden nach `logs/` geschrieben

Das Repository kann außerdem einen ersten Admin automatisch anlegen, wenn `users.json` fehlt und `UNYPORT_ADMIN_PASSWORD` gesetzt ist oder Standardwerte akzeptiert werden.

## Ebene 4 - Telemetrie und Host-Bewusstsein
`UnyPort` liest die Plattform direkt statt über einen separaten Monitoring-Agenten:

- `/proc` Und `/sys` für CPU, Speicher, Uptime, Netzwerk und Temperaturen
- OpenRC-Zustand für Dienste
- Dateirechte von `settings/users.json` und Kernel-Sysctls für Sicherheitschecks
- `xl info` Und `xl list` für Dom0-Xen-Kontext
- `startup-history.jsonl` Und `unyport.log` für Neustart-Historie

Der SSE-Broker sampelt alle `2` Sekunden, haelt einen Ring von `60` Snapshots im Speicher und berechnet Diagrammskalen serverseitig vor dem Versand an das Frontend.

## Ebene 5 - Operator-UX
Die sichtbare Oberfläche ist danach in zielgerichtete Seiten gegliedert:

- Dashboard für Schnellstatus und Neustart-Historie
- Hypervisor-Seite für Host-Rolle, Xen und Versionskontext
- Resources-Seite für CPU, Speicher, Prozesse, Pakete, Module, Dienste und Logs
- Network-Seite für Interface-Aktivitaet und Netzwerkkarte
- Storage-Seite für Datentraeger und LBU-Zustand
- Security-Seite für Hardening-Checks
- Settings-Seite für Branding und spätere Provider-Einstellungen

Diese Architektur ist daher als Supervisionsportal mit klarer Grenze zu lesen, nicht als allgemeine Website oder universelle Virtualisierungssuite.
