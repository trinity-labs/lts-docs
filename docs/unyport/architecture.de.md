# UnyPort-Architektur
`UnyPort` ist als kompakter Operator-Stack aufgebaut: ein Go-Backend, ein statisches Frontend, eine kleine Konfigurationsflaeche und eine Telemetrieschleife, die Linux- und Xen-sichtbaren Zustand direkt liest. Das Ziel ist operative Klarheit statt Framework-Komplexitaet.

## Ebene 1 - Runtime und Assets
Die erste Ebene ist die eigentliche Anwendungslaufzeit:

- Ein Go-Backend unter `unyport/backend`
- Ein statisches Frontend unter `unyport/frontend/public`
- Ein Entwicklungsmodus mit Assets vom Datentraeger ueber `UNYPORT_ASSETS`
- Ein Produktionsmodus mit eingebetteten Frontend-Assets im Binary

Im gelieferten `docker-compose.yml` wird das Projekt in einem `golang:alpine`-Container gebaut und auf Port `8800` bereitgestellt.

## Ebene 2 - Transport und Routing
Die zweite Ebene ist die Operator-Transportflaeche:

- HTTP auf `:8800` standardmaessig
- Optional HTTPS und HTTP/3 bei Konfiguration in `settings/settings.yaml`
- JSON-APIs unter `/api/*`
- Live-Metriken ueber `/sse/system`
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

Das Repository kann ausserdem einen ersten Admin automatisch anlegen, wenn `users.json` fehlt und `UNYPORT_ADMIN_PASSWORD` gesetzt ist oder Standardwerte akzeptiert werden.

## Ebene 4 - Telemetrie und Host-Bewusstsein
`UnyPort` liest die Plattform direkt statt ueber einen separaten Monitoring-Agenten:

- `/proc` Und `/sys` fuer CPU, Speicher, Uptime, Netzwerk und Temperaturen
- OpenRC-Zustand fuer Dienste
- Dateirechte von `settings/users.json` und Kernel-Sysctls fuer Sicherheitschecks
- `xl info` Und `xl list` fuer Dom0-Xen-Kontext
- `startup-history.jsonl` Und `unyport.log` fuer Neustart-Historie

Der SSE-Broker sampelt alle `2` Sekunden, haelt einen Ring von `60` Snapshots im Speicher und berechnet Diagrammskalen serverseitig vor dem Versand an das Frontend.

## Ebene 5 - Operator-UX
Die sichtbare Oberflaeche ist danach in zielgerichtete Seiten gegliedert:

- Dashboard fuer Schnellstatus und Neustart-Historie
- Hypervisor-Seite fuer Host-Rolle, Xen und Versionskontext
- Resources-Seite fuer CPU, Speicher, Prozesse, Pakete, Module, Dienste und Logs
- Network-Seite fuer Interface-Aktivitaet und Netzwerkkarte
- Storage-Seite fuer Datentraeger und LBU-Zustand
- Security-Seite fuer Hardening-Checks
- Settings-Seite fuer Branding und spaetere Provider-Einstellungen

Diese Architektur ist daher als Supervisionsportal mit klarer Grenze zu lesen, nicht als allgemeine Website oder universelle Virtualisierungssuite.
