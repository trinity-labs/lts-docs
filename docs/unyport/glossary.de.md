# Glossar
Dieses Glossar gibt eine kompakte Lesart der wichtigsten `UnyPort`-Begriffe.

## Kernbegriffe
- `UnyPort`: Operator-orientiertes Supervisions- und Kontrollportal
- `viewer`: Authentifizierte Nur-Lese-Rolle
- `operator`: Authentifizierte Rolle mit Routine-Schreibaktionen
- `admin`: Authentifizierte Rolle mit Benutzer- und Branding-Administration
- `branding`: Instanz-Logo- und Rollenfarb-Konfiguration in `branding.yaml`

## Plattformbegriffe
- `Alpine Linux`: Leichtgewichtige Linux-Distribution als bevorzugtes Host-Modell
- `Xen`: Hypervisor-Schicht für Dom0- und DomU-Infrastruktur
- `Dom0`: Xen-Kontrolldomain mit Hypervisor-Kontext
- `DomU`: Xen-Gastdomain, sichtbar als virtuelle Maschine
- `LBU`: Alpine-Mechanismus für Backup und Persistenz

## Laufzeitbegriffe
- `SSE`: Server-sent events für Live-System-Snapshots
- `proxy app`: Interne Anwendung unter `/proxy/<name>/`
- `startup history`: Neustart-Timeline in `startup-history.jsonl`
- `trusted origins`: Erlaubte Hosts für CSRF-geschuetzte zustandsändernde Requests

## Lesemodell
```text
TRINITY = Kundenlebenszyklus
UnyDesk = Fernzugriff
UnyPort = Host-Supervision und kontrollierter Einstieg
```
