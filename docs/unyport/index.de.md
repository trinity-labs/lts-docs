# UnyPort
`UnyPort` ist die operator-orientierte Ueberwachungsflaeche des `TRINITY`-Oekosystems. Sie ist als leichtgewichtige Go-Anwendung fuer Alpine-Linux-Umgebungen gebaut und verbindet Xen-Bewusstsein, Live-Systemzustand, kontrolliertes App-Proxying und taegliche Host-Supervision.

Oeffentlich bringt `UnyPort` zusammen:

- authentifizierten Operator-Zugriff
- Live-Sichtbarkeit auf Host und Dienste
- expliziten Xen-Kontext fuer Dom0- und DomU-Umgebungen
- kontrollierten Zugang zu internen Anwendungen wie `ttyd`
- operative Seiten fuer Sicherheit, Storage, Netzwerk und Systemzustand

`UnyPort` arbeitet mit zwei Begleitflaechen:

- `TRINITY` fuer Kundenlebenszyklus, Bestellungen, Abrechnung und Service-Einstiege
- `UnyDesk` fuer Fernzugriff und Assistenz-Workflows

## Hier beginnen
Die empfohlene Lesereihenfolge ist:

1. `Einfuehrung`
2. `Architektur`
3. `Handbuch`
4. `Zugriff und Authentifizierung`
5. `Metriken und Oberflaechen`
6. `Bereitstellung`
7. `Alpine Linux und Xen`
8. `Sicherheit und Betrieb`
9. `Beispiele`

```text
Operator-Login
  -> Dashboard
  -> Erkennung der Host-Rolle
  -> Metriken und Logs
  -> Sicherheit und Versionen
  -> App-Proxy bei Bedarf
  -> Admin-Einstellungen wenn erlaubt
```

Dieser Abschnitt beschreibt `UnyPort` daher als echte Betriebsoberflaeche und nicht als generisches Dashboard-Theme oder blosses Quellcode-Repository.
