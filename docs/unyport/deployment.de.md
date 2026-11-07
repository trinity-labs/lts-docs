# Einsatz
Einlagen `docker_unyport` Der Deployment-Historie ist freiwillig einfach: eine Go-Anwendung, ein Haupt-Listening-Port und ein kleines Verzeichnis `settings/` Neben dem Binär.

## Nutzbaum
Die wichtigsten Wege sind:

- `docker-compose.yml`
- `unyport/backend/`
- `unyport/frontend/public/`
- `unyport/backend/settings/settings.yaml`
- `unyport/backend/settings/config.yaml`
- `unyport/backend/settings/users.json`

## Entwicklungsmodus
Die zugeführte Komponente startet einen Behälter `golang:alpine` und stellt das Projekt beim Start zusammen.

Entwicklungsmerkmale:

- Frontend Asset wird von der Festplatte über `UNYPORT_ASSETS`
- Go-Modul und Build-Caches werden in den Volumes namens
- Der Default Port ist `8800:8800`
- Der Container löst `host.docker.internal` über `host-gateway`

## Produktionsart
Die gleiche Logik bereitet auch eine binäre Produktion vor:

- Die Frontend-Assets sind Kopien in `server/assets`
- Die Binärdatei wird kompiliert mit `-tags prod`
- Symbole werden gelöscht
- `upx --lzma` Wird im Behälter ausgebracht

Die README präsentierte dies als den kompakten Paketpfad, während die Entwicklung Live-Assets auf der Festplatte hält.

## Laufzeitdateien
In der Laufzeit, `UnyPort` Wartezeiten:

- `settings/settings.yaml`
- `settings/config.yaml`
- `settings/users.json`

Der Antrag muss auch in operativer Hinsicht Folgendes enthalten:

- `logs/unyport.log`
- `logs/startup-history.jsonl`
- `settings/branding.yaml` Wenn eine Branding-Personalise gespeichert wird

## HTTPS und HTTP/3
Standardmäßig hört die Anwendung in einfachem HTTP auf `:8800`.

Das optionale HTTPS- und QUIC-Verhalten wird durch `settings/settings.yaml` :

- `security_extra.https`
- `http3.enabled`
- `http3.cert_file`
- `http3.key_file`
- `http3.port`
- `http3.redirect_http`

Wenn HTTP/3 korrekt aktiviert ist, `UnyPort` kann das TLS auf dem konfigurierten Port bedienen und umleiten `:8800` zu diesem Lister TLS.

## Reverse Proxy und First Login
Für den Einsatz im Internet ist das übliche Muster:

- Binder `UnyPort` lokal oder an einer kontrollierten Host-Adresse
- Platzieren Sie Nginx oder einen anderen Reverse Proxy vor
- Sicheres Cookie-Verhalten mit `security_extra.https: true`
- OAuth Platzhalter vor der öffentlichen Eröffnung ersetzen
- Ändern Sie die gegebenen oder Demo-IDs sofort

Dies hält die minimale Bereitstellung, ohne vorzugeben, dass eine Demo-Konfiguration für die Produktion bereit ist.
