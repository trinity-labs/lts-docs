# Einführung
`UnyPort` ist ein monitoring-orientiertes Kontrollportal in Go für Alpine-Linux-Hosts, besonders in Xen-basierten Umgebungen. Die Anwendung bietet eine einzige authentifizierte Oberfläche für Host-Zustand, Live-Metriken, Logs, Sicherheitslage, proxied Tools und Operator-Profilverwaltung.

![`UnyPort`-Dashboard](../assets/images/generated/unyport-live-dashboard.png)

*Generierte Ansicht des Live-Dashboards von `UnyPort` mit Fokus auf Host-Zustand, Ressourcen und operative Sichtbarkeit.*

## Was UnyPort ist
`UnyPort` folgt einigen klaren Prinzipien:

- Ein einzelner Go-Runtime-Pfad
- Ein minimales Bereitstellungsmodell
- Direkte Lesezugriffe auf Kernel und Dateisystem
- Explizite Erkennung der Host-Rolle
- Keine schwere Agenten-Pipeline

In diesem Repository ist das Frontend eine Single-Page-Anwendung, die im Entwicklungsmodus vom Datentraeger und im Produktionsmodus aus dem Binary ausgeliefert wird.

## Was UnyPort nicht ist
`UnyPort` wird nicht präsentiert als:

- Öffentliche Marketing-Website
- Kundenportal für Bestellungen
- Vollstaendige Xen-Orchestrierungssuite heute
- Generisches Remote-Desktop-Werkzeug

Diese Rollen gehoeren stattdessen zu `TRINITY` und `UnyDesk`, je nach Bedarf.

## Warum diese Dokumentation existiert
Diese Dokumentation erklaert die sichtbare Produktoberfläche von `UnyPort` aus Sicht von Deployment und Betrieb:

- Was Operatoren sehen
- Wie Authentifizierung und Rollen funktionieren
- Welche Daten gesammelt werden
- Wie Alpine Linux und Xen das Produkt praegen
- Wo aktuelle Grenzen und Evolutionspunkte liegen
