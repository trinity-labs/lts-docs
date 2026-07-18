# Bereitstellung
Das Repository `docker_unyport` liefert sowohl den Quellbaum als auch ein funktionierendes containerisiertes Laufzeitmodell. Die Bereitstellungsgeschichte bleibt absichtlich einfach: eine Go-Anwendung, ein Hauptport und ein kleines `settings/`-Verzeichnis neben dem Binary.

## Relevante Struktur
Wichtige Pfade sind:

- `docker-compose.yml`
- `unyport/backend/`
- `unyport/frontend/public/`
- `unyport/backend/settings/settings.yaml`
- `unyport/backend/settings/config.yaml`
- `unyport/backend/settings/users.json`

## Entwicklungsmodus
Das mitgelieferte Compose startet einen `golang:alpine`-Container und baut das Projekt beim Start.

Eigenschaften im Entwicklungsmodus:

- Frontend-Assets werden über `UNYPORT_ASSETS` vom Datentraeger ausgeliefert
- Go-Modul- und Build-Caches liegen auf benannten Volumes
- Der Standard-Port ist `8800:8800`
- Der Container loest `host.docker.internal` über `host-gateway`

## Produktionsmodus
Dieselbe Compose-Logik bereitet auch ein Produktions-Binary vor:

- Frontend-Assets werden nach `server/assets` kopiert
- Das Binary wird mit `-tags prod` gebaut
- Symbole werden entfernt
- `upx --lzma` Wird im Container angewendet

Das README beschreibt dies als kompakten Paketpfad, waehrend Entwicklung Live-Assets auf dem Datentraeger behaelt.

## Runtime-Dateien
Zur Laufzeit erwartet `UnyPort`:

- `settings/settings.yaml`
- `settings/config.yaml`
- `settings/users.json`

Operativ schreibt die Anwendung außerdem:

- `logs/unyport.log`
- `logs/startup-history.jsonl`
- `settings/branding.yaml`, Wenn benutzerdefiniertes Branding gespeichert wird

## HTTPS und HTTP/3
Standardmaessig lauscht die Anwendung auf einfachem HTTP `:8800`.

Optionales HTTPS- und QUIC-Verhalten wird aus `settings/settings.yaml` gesteuert:

- `security_extra.https`
- `http3.enabled`
- `http3.cert_file`
- `http3.key_file`
- `http3.port`
- `http3.redirect_http`

Wenn HTTP/3 korrekt aktiviert ist, kann `UnyPort` TLS auf dem konfigurierten Port bedienen und `:8800` auf diesen TLS-Listener umleiten.

## Reverse Proxy und erster Login
Für Internet-exponierte Deployments ist das uebliche Muster:

- `UnyPort` Lokal oder an eine kontrollierte Host-Adresse binden
- Nginx oder einen anderen Reverse Proxy davor setzen
- Secure-Cookie-Verhalten mit `security_extra.https: true` aktivieren
- OAuth-Platzhalter vor öffentlichem Einsatz ersetzen
- Geseedete oder Demo-Credentials sofort ändern

So bleibt die Bereitstellung minimal, ohne eine Demo-Konfiguration als produktionsreif auszugeben.
