# Sicherheit und Betrieb
`UnyPort` verbindet eine gehaertete Weboberflaeche mit einem absichtlich schmalen Satz operativer Schreibaktionen. Ziel ist, dass Operatoren inspizieren, verifizieren und ausgewaehlte Werkzeuge betreten koennen, ohne das Portal in ein unkontrolliertes Admin-Hintertor zu verwandeln.

## Web-Sicherheitsbasis
Die Middleware-Kette setzt:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- eine strikte Standard-`Content-Security-Policy`
- optional `Strict-Transport-Security`, wenn HTTPS aktiv ist

Anfragen, die Zustand aendern, laufen ausserdem durch CSRF-Validierung und Trusted-Origin-Pruefung.

## Authentifizierungs-Hardening
Aktueller Schutz umfasst:

- JWT-Cookies mit konfigurierbarer Session-Lebensdauer
- Login-Rate-Limit pro Client-IP
- OAuth-State-Cookies fuer Provider-Callbacks
- klare Trennung zwischen Nur-Lese- und Schreibrollen

Das Modell ist kompakt, aber in sich schluessig und in den echten Laufzeitpfaden sichtbar.

## Security-Seite
Die dedizierte Security-Seite aggregiert Checks rund um:

- ASLR
- Kernel-Pointer-Restriktion
- `dmesg`-Restriktion
- unprivilegiertes BPF
- IPv4- und IPv6-Forwarding
- Rechte von `settings/users.json`
- kritische OpenRC-Dienste
- ueberwachte Prozesse
- lauschende TCP-Ports

Sie ist als Operator-Zusammenfassung gedacht, nicht als Ersatz fuer ein vollstaendiges Audit-Werkzeug.

## Betriebsumfang
Operativ ist `UnyPort` am staerksten fuer:

- Sichtbarkeit
- Verifikation
- kontrollierten App-Einstieg
- Benutzer- und Branding-Administration
- grundlegendes Host-Troubleshooting

Es ist noch nicht der Ort fuer vollstaendigen VM-Lebenszyklus oder Cluster-Orchestrierung. Das oeffentliche README beschreibt das aktuelle Produkt ausdruecklich als `V1`, monitoring-first, waehrend breitere Xen-Workflows spaeter erwartet werden.

## Logs und Support-Grenzen
Das Portal kann ausgewaehlte Log-Dateien, Dienstzustand und Host-Sicherheitssignale zeigen. Wenn der Bedarf darueber hinausgeht:

- `TRINITY` fuer Kunden- und Service-Lebenszyklus nutzen
- `UnyDesk` fuer Fernzugriff oder Assistenz-Sitzungen nutzen
- tiefere Systemwerkzeuge verwenden, wenn ein vollstaendiger Host-Eingriff erforderlich ist

Diese Grenze haelt `UnyPort` im Betrieb nuetzlich, ohne zu viel zu versprechen.
