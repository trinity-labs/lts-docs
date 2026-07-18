# Sicherheit und Betrieb
`UnyPort` verbindet eine gehärtete Weboberfläche mit einem absichtlich schmalen Satz operativer Schreibaktionen. Ziel ist, dass Operatoren inspizieren, verifizieren und ausgewählte Werkzeuge betreten können, ohne das Portal in ein unkontrolliertes Admin-Hintertor zu verwandeln.

## Web-Sicherheitsbasis
Die Middleware-Kette setzt:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Eine strikte Standard-`Content-Security-Policy`
- Optional `Strict-Transport-Security`, wenn HTTPS aktiv ist

Anfragen, die Zustand ändern, laufen außerdem durch CSRF-Validierung und Trusted-Origin-Prüfung.

## Authentifizierungs-Hardening
Aktueller Schutz umfasst:

- JWT-Cookies mit konfigurierbarer Session-Lebensdauer
- Login-Rate-Limit pro Client-IP
- OAuth-State-Cookies für Provider-Callbacks
- Klare Trennung zwischen Nur-Lese- und Schreibrollen

Das Modell ist kompakt, aber in sich schluessig und in den echten Laufzeitpfaden sichtbar.

## Security-Seite
Die dedizierte Security-Seite aggregiert Checks rund um:

- ASLR
- Kernel-Pointer-Restriktion
- `dmesg`-Restriktion
- Unprivilegiertes BPF
- IPv4- und IPv6-Forwarding
- Rechte von `settings/users.json`
- Kritische OpenRC-Dienste
- Überwachte Prozesse
- Lauschende TCP-Ports

Sie ist als Operator-Zusammenfassung gedacht, nicht als Ersatz für ein vollstaendiges Audit-Werkzeug.

## Betriebsumfang
Operativ ist `UnyPort` am stärksten für:

- Sichtbarkeit
- Verifikation
- Kontrollierten App-Einstieg
- Benutzer- und Branding-Administration
- Grundlegendes Host-Troubleshooting

Es ist noch nicht der Ort für vollstaendigen VM-Lebenszyklus oder Cluster-Orchestrierung. Das öffentliche README beschreibt das aktuelle Produkt ausdruecklich als `V1`, monitoring-first, waehrend breitere Xen-Workflows später erwartet werden.

## Logs und Support-Grenzen
Das Portal kann ausgewählte Log-Dateien, Dienstzustand und Host-Sicherheitssignale zeigen. Wenn der Bedarf darüber hinausgeht:

- `TRINITY` Für Kunden- und Service-Lebenszyklus nutzen
- `UnyDesk` Für Fernzugriff oder Assistenz-Sitzungen nutzen
- Tiefere Systemwerkzeuge verwenden, wenn ein vollstaendiger Host-Eingriff erforderlich ist

Diese Grenze haelt `UnyPort` im Betrieb nuetzlich, ohne zu viel zu versprechen.
