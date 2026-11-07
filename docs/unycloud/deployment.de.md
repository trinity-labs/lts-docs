# Entsendung
`UnyCloud` Wird als Filebrowser-Dienst hinter Reverse-Proxy bereitgestellt.

## Allgemeine Form
```text
<cloud-host>
  -> docker_cloud
  -> conteneur filebrowser
  -> stockage monté

TRINITY-SERVER
  -> nginx
  -> <cloud-domain>
```

## Persistente Elemente
Wichtige Elemente sind:

- Filebrowser-Datenbank
- Die Konfiguration
- Branding
- Befestigte Lagerung

Der Container ist austauschbar, aber diese Elemente müssen Neustarts überleben.

## Exposition
Der Bewerbungsservice bleibt intern. Die öffentliche Ausstellung geht durch `nginx`TLS und die Security Header.

## Instandhaltungsgrundsatz
Ein Docker-Neustart reicht nicht immer aus, um einen Vorfall zu diagnostizieren.

- Der Behälter
- Die Basis
- Lagerung
- Branding
- Der Reverse Proxy
- Der Browser Cache
