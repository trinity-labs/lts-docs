---
description: "Öffentliche Dokumentation für UnyPort, die operator-orientierte Alpine-Linux- und Xen-Kontrollfläche im TRINITY-Ökosystem."
social_image: "https://unyport.app/media/img/logos/logo-unyport-full.png"
---

# UnyPort
`UnyPort` ist die operator-orientierte Überwachungsfläche des `TRINITY`-Ökosystems. Sie ist als leichtgewichtige Go-Anwendung für Alpine-Linux-Umgebungen gebaut und verbindet Xen-Bewusstsein, Live-Systemzustand, kontrolliertes App-Proxying und tägliche Host-Supervision.

Öffentlich bringt `UnyPort` zusammen:

- Authentifizierten Operator-Zugriff
- Live-Sichtbarkeit auf Host und Dienste
- Expliziten Xen-Kontext für Dom0- und DomU-Umgebungen
- Kontrollierten Zugang zu internen Anwendungen wie `ttyd`
- Operative Seiten für Sicherheit, Storage, Netzwerk und Systemzustand

`UnyPort` arbeitet mit zwei Begleitflächen:

- `TRINITY` Für Kundenlebenszyklus, Bestellungen, Abrechnung und Service-Einstiege
- `UnyDesk` Für Fernzugriff und Assistenz-Workflows

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

Dieser Abschnitt beschreibt `UnyPort` daher als echte Betriebsoberfläche und nicht als generisches Dashboard-Theme oder blosses Quellcode-Repository.
