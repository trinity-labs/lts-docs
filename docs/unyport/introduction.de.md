# Einfuehrung
`UnyPort` ist ein monitoring-orientiertes Kontrollportal in Go fuer Alpine-Linux-Hosts, besonders in Xen-basierten Umgebungen. Die Anwendung bietet eine einzige authentifizierte Oberflaeche fuer Host-Zustand, Live-Metriken, Logs, Sicherheitslage, proxied Tools und Operator-Profilverwaltung.

![`UnyPort`-Dashboard](../assets/images/generated/unyport-live-dashboard.png)

*Generierte Ansicht des Live-Dashboards von `UnyPort` mit Fokus auf Host-Zustand, Ressourcen und operative Sichtbarkeit.*

## Was UnyPort ist
`UnyPort` folgt einigen klaren Prinzipien:

- ein einzelner Go-Runtime-Pfad
- ein minimales Bereitstellungsmodell
- direkte Lesezugriffe auf Kernel und Dateisystem
- explizite Erkennung der Host-Rolle
- keine schwere Agenten-Pipeline

In diesem Repository ist das Frontend eine Single-Page-Anwendung, die im Entwicklungsmodus vom Datentraeger und im Produktionsmodus aus dem Binary ausgeliefert wird.

## Was UnyPort nicht ist
`UnyPort` wird nicht praesentiert als:

- oeffentliche Marketing-Website
- Kundenportal fuer Bestellungen
- vollstaendige Xen-Orchestrierungssuite heute
- generisches Remote-Desktop-Werkzeug

Diese Rollen gehoeren stattdessen zu `TRINITY` und `UnyDesk`, je nach Bedarf.

## Warum diese Dokumentation existiert
Diese Dokumentation erklaert die sichtbare Produktoberflaeche von `UnyPort` aus Sicht von Deployment und Betrieb:

- was Operatoren sehen
- wie Authentifizierung und Rollen funktionieren
- welche Daten gesammelt werden
- wie Alpine Linux und Xen das Produkt praegen
- wo aktuelle Grenzen und Evolutionspunkte liegen
