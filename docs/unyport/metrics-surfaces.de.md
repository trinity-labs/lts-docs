# Metriken und Oberflaechen
`UnyPort` ist um eine kleine Zahl operativer Oberflaechen herum gebaut, die von Live-Daten gespeist werden. Das Backend sampelt das System alle `2` Sekunden und schiebt Snapshots ueber SSE, waehrend das Frontend diese in operator-orientierte Seiten uebersetzt.

## Live-Datenmodell
Die Live-Pipeline hat einige wichtige Eigenschaften:

- Ein einziger SSE-Endpoint: `/sse/system`
- Ein In-Memory-Ring mit `60` Snapshots
- Rund `2` Minuten rollender Kontext
- Serverseitig berechnete Diagrammskalen aus den letzten `15` Snapshots

Das haelt das Frontend leicht und verhindert doppelte Telemetrie-Mathematik im Browser.

## Dashboard
Das Dashboard ist die erste Leseflaeche:

- Hostname und Host-Rolle
- Uptime
- CPU- und Speicher-Zusammenfassungen
- Schnelllinks zu Network, Storage und Security
- Jaehrliche Neustart-Heatmap aus `startup-history.jsonl` oder `unyport.log`

## Hypervisor
Die Hypervisor-Seite kombiniert Systemidentitaet und Plattformkontext:

- Alpine- und Kernel-Version
- Host-Rolle und Runtime
- BIOS- und Board-Daten wenn verfuegbar
- Versionsvergleich gegen `TRINITY`-Boot-Tags aus GitHub
- Xen-Hypervisor-Informationen auf Dom0
- Aktive Xen-Domains auf Dom0

## Resources
Die Resources-Seite ist die breite Inspektionsflaeche:

- Load Average
- Temperaturen
- Top-Prozesse
- Paketinventar-Zusammenfassung
- Kernelmodul-Zusammenfassung
- OpenRC-Dienstliste und -Status
- Erlaubtes Log-Browsing und Tail

## Network und Storage
Die `Network`-Seite zeigt:

- Hauptinterface
- IP-Adresse
- RX- und TX-Raten
- Byte-Gesamtzaehler
- Eine Netzwerkkarte aus den Host-Interfaces

Die `Storage`-Seite zeigt:

- Gemountete Datentraeger
- Belegten und freien Platz
- Dateisystemtyp
- LBU-Persistenzstatus auf Alpine-Hosts

## Security
Die Security-Seite ist eine eigene operative Oberflaeche und nicht nur eine Badge-Zusammenfassung. Sie buendelt:

- Kernel-Hardening-Checks
- Dateirechte der Benutzerdatei
- OpenRC-Dienstzustand
- Vorhandensein ueberwachter Prozesse
- Lauschende TCP-Ports

Damit ist `UnyPort` mehr als ein Ressourcenleser. Es ist auch ein kompakter Leser fuer Sicherheitslage.
