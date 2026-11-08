# Docker UnyDesk
Diese öffentliche Seite behält nur die Informationen, die nützlich sind, um die Docker-Laufzeit zu verstehen `UnyDesk`.

Referenzquelle:

- ➡️ `<deployment-root>/unydesk/docker-compose.yml`

Interne Build-Details, lange Packaging-Befehle und sensible Werte werden hier nicht veröffentlicht.

## Öffentliche Zusammenfassung
| Element | Öffentlicher Wert |
| --- | --- |
| Dienst | `unydesk` |
| Bild | `golang:alpine` |
| Container | `unydesk` |
| Arbeitsverzeichnis | `/app/unydesk/backend` |
| Binnenhafen | `8890/tcp` |
| Interner Bind | `<internal-host>:8890` |
| Neustartmodus | `unless-stopped` |

## Dienst
`UnyDesk` Spins in einem Go Alpine Container und kompiliert das Backend sowie die Hosts Binärdateien beim Start.

```yaml
services:
  unydesk:
    image: golang:alpine
    container_name: unydesk
    working_dir: /app/unydesk/backend
    restart: unless-stopped
    ports:
      - "${UNYDESK_BIND_ADDRESS:-127.0.0.1}:8890:8890"
    volumes:
      - <deployment-root>/unydesk:/app/unydesk
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
```

## Öffentliche Variablen
Die folgenden Variablen werden verwendet, um die öffentlichen Aspekte des Laufens und der Verpackung zu steuern:

| Variabel | Öffentlicher Wert | Verwendung |
| --- | --- | --- |
| `UNYDESK_ASSETS` | `/app/unydesk/frontend/public` | Frontend-Assets, die von der Disc bedient werden |
| `SERVER_URL` | Umweltvariable | Öffentliche URL zur Laufzeit angekündigt |
| `UNYDESK_FFMPEG_WINDOWS_AMD64_URL` | GitHub FFmpeg URL | Download-Quelle FFmpeg Windows amd64 |
| `UNYDESK_STUN_URLS` | Umweltvariable | Öffentliche STUN-Konfiguration |
| `UNYDESK_TURN_URLS` | Umweltvariable | öffentliche TURN-Konfiguration |
| `UNYDESK_TURN_USERNAME` | Umweltvariable | TURN-KENNZEICHNUNG |
| `UNYDESK_TURN_CREDENTIAL` | `<redacted>` | Geheimtipp versteckt in Public Doc |
| `UNYDESK_ENABLE_PAIRED_UPX` | `1` Ausfall | aktiviert UPX-Packung der zugehörigen Binärdatei |
| `UNYDESK_PACK_EMBEDDED_FFMPEG` | `1` Ausfall | eingebettetes FFmpeg in Windows Payload |
| `UNYDESK_UPX_FLAGS` | Umweltvariable | UPX-Flags überladen |
| `UNYDESK_UPX_ULTRA` | `0` Ausfall | Aktiviert einen langsameren UPX-Modus, wenn er `1` |

```yaml
environment:
  UNYDESK_ASSETS: /app/unydesk/frontend/public
  SERVER_URL: "${SERVER_URL:-}"
  UNYDESK_FFMPEG_WINDOWS_AMD64_URL: "${UNYDESK_FFMPEG_WINDOWS_AMD64_URL:-https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip}"
  UNYDESK_STUN_URLS: "${UNYDESK_STUN_URLS:-}"
  UNYDESK_TURN_URLS: "${UNYDESK_TURN_URLS:-}"
  UNYDESK_TURN_USERNAME: "${UNYDESK_TURN_USERNAME:-}"
  UNYDESK_TURN_CREDENTIAL: "<redacted>"
  UNYDESK_ENABLE_PAIRED_UPX: "${UNYDESK_ENABLE_PAIRED_UPX:-1}"
  UNYDESK_PACK_EMBEDDED_FFMPEG: "${UNYDESK_PACK_EMBEDDED_FFMPEG:-1}"
  UNYDESK_UPX_FLAGS: "${UNYDESK_UPX_FLAGS:-}"
  UNYDESK_UPX_ULTRA: "${UNYDESK_UPX_ULTRA:-0}"
```

## Volumen
Der Service basiert auf drei Hauptvolumen:

| Art der Art | Quelle | Bestimmungsort | Rolle |
| --- | --- | --- | --- |
| Anwendungscode | `<deployment-root>/unydesk` | `/app/unydesk` | Backend-/Frontend-Quellen |
| Go Cache Module | `go-cache` | `/root/go/pkg/mod` | Go Süchte bestehen fort |
| Cache Go gebaut | `go-build-cache` | `/root/.cache/go-build` | Go Compilation Cache |

## Exposition
Der Anwendungsanschluss wird auf der internen Adresse des Docker-Hosts angezeigt:

| Gastgeber | Container | Verwendung |
| --- | --- | --- |
| `<internal-host>:8890` | `8890/tcp` | Interner Zugriff vor Reverse Proxy |

```text
<internal-host>:8890 -> 8890/tcp
```

Der öffentliche Zugang erfolgt dann über die Proxy-Umkehrung der Plattform.

## Verwaltungsanweisung
Die Verwaltungsunterlagen müssen die vollständigen Betriebsdaten aufbewahren, wenn sie von den Instandhaltungspersonals verlangt werden.
