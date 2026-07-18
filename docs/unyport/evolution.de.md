# Weiterentwicklung
Diese Seite fasst zusammen, wie sich `UnyPort` funktional anhand der sichtbaren Repository-Historie und der aktuellen Codebasis entwickelt hat.

## Monitoring-first-Richtung
Von Beginn an entwickelte sich `UnyPort` als monitoring-first Control Plane:

- Live-Systemzustand vor Orchestrierung
- Host-Rollen-Bewusstsein vor Abstraktion
- Ein einziges Operator-Portal vor mehreren Dashboards

Diese Richtung ist im README explizit und weiterhin in Routen und UI sichtbar.

## Bessere Operator-Ergonomie
Neuere Arbeiten machten das Produkt alltagstauglicher:

- Mobile Navigation und Hamburger-Menue
- Klarere Seitentrennung
- Neustart-Heatmap
- Verfeinerte Netzwerkkarte
- Sichtbare Versionsmeldungen

Das sind nicht nur kosmetische Aenderungen. Sie veraendern, wie schnell ein Operator einen Host lesen kann.

## Reiferes Plattformverstaendnis
Der aktuelle Code zeigt eine reifere Infrastrukturlesart, als die fruehen Overview-Seiten vermuten liessen:

- Unterscheidung zwischen Dom0 und DomU
- Xen-Hypervisor- und Domain-Inspektion
- Alpine-LBU-Bewusstsein
- OpenRC-Lesung ohne schwere externe Tools
- Sicherheitschecks, die an den realen Host gebunden sind

Dadurch fuehlt sich `UnyPort` eher wie ein plattformnativer Beobachter als wie eine generische Web-Admin-Shell an.

## Staerkeres operatives Packaging
Das Repository entwickelte sich auch in der Auslieferungsform:

- Entwicklungsmodus mit Live-Assets
- Produktions-Build mit eingebetteten Assets
- Gestrippte Binaries
- UPX-Kompression
- Optional HTTPS und HTTP/3

Diese Packaging-Entwicklung stuetzt das Single-Binary- und Low-Overhead-Versprechen.

## Reifere Identitaet und Instanz
Die aktuelle Produktoberflaeche umfasst nun:

- Lokale Benutzerverwaltung
- Unterstuetzung fuer OAuth-Provider
- Speicherung von Profil und SSH-Key
- Oeffentliche Branding-Auslieferung
- Admin-Branding-Anpassung

Damit wird `UnyPort` von einem lokalen Dashboard zu einer echten Multi-User-Operator-Flaeche.

## Aktuelle Grenze und naechster Schritt
Zum `2026-07-17` sollte das oeffentliche Produkt weiterhin als `V1` verstanden werden:

- Stark im Monitoring
- Stark im Host-Kontext
- Nuetzlich fuer kontrollierten Proxy-Einstieg
- Noch kein vollstaendiger Xen-Lebenszyklus-Orchestrator

Das README kuendigt ausdruecklich eine spaetere `V2` mit breiteren Orchestrierungs-Workflows an. Die aktuelle Dokumentation sollte `UnyPort` deshalb als ernstes Betriebsportal mit bewusst begrenztem Umfang darstellen.
