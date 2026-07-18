# Bereitstellung
`UnyDesk` wird als eigenständiger Dienst bereitgestellt. Öffentlich wichtig ist, dass es eine eigene Laufzeit, eine eigene API und einen eigenen Host-Verteilungspfad besitzt.

## Laufzeitmodell
Der Dienst besteht aus:

- Einem Go-Backend
- Einer primären HTTP-Listenadresse
- Optionalem nativem HTTP/3, wenn Zertifikate konfiguriert sind
- Statischen Frontend-Assets
- Einstellungsdateien für Benutzer, Hosts, vertrauenswürdige Hosts und öffentliche Identität
- Host-Download-Artefakten aus dem konfigurierten Download-Verzeichnis

## Reverse-Proxy-Modell
Für Internet-exponierte Bereitstellung ist das übliche Modell:

- `UnyDesk` Hinter einem Reverse Proxy bereitstellen
- Ursprüngliche Host- und Client-Adress-Header weitergeben
- Cookies und CSRF-Verhalten mit der öffentlichen URL konsistent halten
- Websocket-Upgrade-Pfade für Host- und Sitzungskanäle freigeben
- TLS am Proxy terminieren, außer natives TLS/HTTP3 ist bewusst aktiviert

## Öffentliche Endpunkte bewahren
Bereitstellungen müssen diese Routen bewahren:

- `/healthz`
- `/api/v1/info`
- `/api/v1/auth/*`
- `/api/v1/bootstrap/*`
- `/api/v1/hosts`
- `/api/v1/hosts/ws`
- `/api/v1/sessions`
- `/download/host/*`

Wenn diese Routen falsch umgeschrieben werden, kann das Frontend laden, während Host-Pairing oder Sitzungsrouting scheitern.

## Betriebserwartung
Eine korrekte Bereitstellung muss UI-Öffnung, Host-Download, Authentifizierung oder begrenzte Einladung, Host-Präsenz und Sitzungserstellung erlauben, ohne Produktnamen zu ändern oder in `TRINITY`- oder `UnyPort`-Menüs zu wechseln.
