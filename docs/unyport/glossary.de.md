# Glossar
Dieses Glossar gibt eine kompakte Lesart der wichtigsten `UnyPort`-Begriffe.

## Kernbegriffe
- `UnyPort`: operator-orientiertes Supervisions- und Kontrollportal
- `viewer`: authentifizierte Nur-Lese-Rolle
- `operator`: authentifizierte Rolle mit Routine-Schreibaktionen
- `admin`: authentifizierte Rolle mit Benutzer- und Branding-Administration
- `branding`: Instanz-Logo- und Rollenfarb-Konfiguration in `branding.yaml`

## Plattformbegriffe
- `Alpine Linux`: leichtgewichtige Linux-Distribution als bevorzugtes Host-Modell
- `Xen`: Hypervisor-Schicht fuer Dom0- und DomU-Infrastruktur
- `Dom0`: Xen-Kontrolldomain mit Hypervisor-Kontext
- `DomU`: Xen-Gastdomain, sichtbar als virtuelle Maschine
- `LBU`: Alpine-Mechanismus fuer Backup und Persistenz

## Laufzeitbegriffe
- `SSE`: server-sent events fuer Live-System-Snapshots
- `proxy app`: interne Anwendung unter `/proxy/<name>/`
- `startup history`: Neustart-Timeline in `startup-history.jsonl`
- `trusted origins`: erlaubte Hosts fuer CSRF-geschuetzte zustandsaendernde Requests

## Lesemodell
```text
TRINITY = Kundenlebenszyklus
UnyDesk = Fernzugriff
UnyPort = Host-Supervision und kontrollierter Einstieg
```
