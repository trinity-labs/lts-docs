# Applikations-Proxy
`UnyPort` kann ausgewaehlte interne Anwendungen ueber kontrollierte Reverse-Proxys unter `/proxy/<name>/` ausliefern. Damit gelangen Operatoren aus demselben authentifizierten Portal in interne Werkzeuge, ohne jedes Werkzeug separat oeffentlich zu exponieren.

## Eine Anwendung deklarieren
Proxied Apps werden in `settings/config.yaml` deklariert:

```yaml
apps:
  - name: TTYd
    host: ttyd
    port: 7681
    type: terminal
```

Zur Laufzeit stellt das Portal Metadaten ueber `/api/apps` bereit und mountet den Proxy unter:

```text
/proxy/ttyd/
```

## Proxy-Verhalten
Der Reverse-Proxy fuehrt eine kleine Menge Hardening und Umschreiben durch:

- Entfernen unzuverlaessiger Forwarding-Header
- Setzen von `X-Forwarded-For`, `X-Forwarded-Proto` und `X-Forwarded-Prefix`
- Umschreiben von `Location`-Headern, damit Redirects unter dem Mount-Praefix bleiben
- Umschreiben von Cookie-Pfaden, damit Backend-Cookies am Proxy-Mount bleiben
- Rueckleitung nicht-JSON `401`- und `403`-Antworten an die Portalwurzel

## TTYd-spezifische Behandlung
Der Code lockert die CSP nur fuer den `ttyd`-Mount, damit Webterminal-Assets und Websocket-Flows korrekt funktionieren. Andere proxied Anwendungen behalten das standardmaessig gehaertete Verhalten.

## Warum das wichtig ist
Diese Proxy-Schicht haelt `UnyPort` fokussiert:

- Operatoren erhalten einen einheitlichen authentifizierten Einstieg
- interne Anwendungen brauchen kein eigenes oeffentliches Expositionsmodell
- das Produkt bleibt klein und kann trotzdem Bruecke zu terminalorientierten Tools sein

Die Funktion ist daher als kontrolliertes Gateway zu verstehen, nicht als allgemeiner App-Katalog.
