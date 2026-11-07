# VM und Konsole
Einige Dienstleistungen `TRINITY` Dies bedeutet nicht, dass jeder Client zum Hypervisor-Administrator wird, sondern dass die Plattform einen Maschinenzustand, eine Konsole oder einen Wartungskontext anzeigen kann, wenn der Dienst dies zulässt.

## Was der Nutzer erwarten kann
Eine VM-orientierte Seite kann anzeigen:

- ✅ Name der Maschine
- ⭕ Ein Online-Indikator oder nicht
- ✅ Eine Sichtbarkeit basiert auf Ressourcen
- ✅ Ein Konsoleneinstiegspunkt
- ✅ Links zur Unterstützung oder Überwachung

| Sichtbare Informationen | Sofortige Nutzung | Lesbar |
| --- | --- | --- |
| Name der VM | Identifizieren Sie die richtige Maschine | Stabile Bezeichnung oder technische Referenz |
| Staat | Wissen, ob VM reagiert | `online`, `maintenance`, `récupération`, `unavailable` |
| IP-Adresse | Erkennen des Netzwerkziels | Private oder technische IP abhängig vom Service |
| Konsole | Öffnen Sie eine direkte Diagnose | Zugang beschränkt auf autorisierte Fälle |
| Ressourcen | Kurze Suche nach VM | CPU, RAM, Disk oder Near Indicators |
| Support Links | Klettern sauber | Ticket, Katze oder Hilfekanal |


## Typische Konsolenziele
Der Zugriff auf die Konsole wird verwendet, um:

- ✅ Status des Prüfboots
- ✅ Inspizieren Sie ein montiertes Dateisystem
- ✅ Lesen Sie einen Hostnamen oder eine IP
- ✅ Bestätigen Sie, ob eine Wiederaufnahme möglich ist

```bash
hostname
uname -à
ip addr
lsblk
df -h
```

## Wie man einen VM-Zustand liest
Eine öffentliche VM-Seite sollte einfach lesen:

- ✅ `online` Bedeutet, dass VM in seinem aktuellen Modus reagiert
- ✅ `maintenance` Bedeutet, dass ein technischer Eingriff im Gange oder möglich ist
- ✅ `récupération` Bedeutet, dass Priorität der Zugriff auf Daten ist
- ✅ `unavailable` Bedeutet, dass Sie warten oder um Unterstützung bitten müssen

```text
online       -> accès normal ou technique attendu
maintenance  -> contexte d'intervention
récupération     -> contexte de préservation et de diagnostic
unavailable  -> attente ou support
```

| VM-Erklärung | Was es bedeutet | Guter Reflex |
| --- | --- | --- |
| `online` | VM ist im aktuellen Modus verfügbar | Service oder Konnektivität prüfen |
| `maintenance` | Eine Intervention oder Vorbereitung ist im Gange | Vermeiden Sie nicht angeforderte Änderungen |
| `récupération` | Priorität ist Wiederherstellung oder Erhaltung | Fokus auf Lesen und Speichern |
| `unavailable` | Die VM oder Oberfläche ist nicht verwendbar | Warten oder Öffnen eines Tickets mit Kontext |

## Operationelle Vorsicht
Eine Konsole ist leistungsstark, aber eng in ihrer Verwendung.

- ✅ Wenn VM im normalen oder DDM-Modus ist
- ✅ Wenn das Ziel Diagnose oder Änderung ist
- ✅ Wenn die Unterstützung eine spezifische Maßnahme erfordert

```bash
# Vérifications prudentes en premier
mount
findmnt
cat /etc/os-release
```

| Überprüfung | Warum wirf es | Risiko bei Nichtbeachtung |
| --- | --- | --- |
| `mount` | Siehe aktive Halterungen | Handeln auf das falsche Volumen |
| `findmnt` | Lesen Sie den Baum der Montagepunkte | System- und Datenkonsolidierung |
| `cat /etc/os-release` | Identifizieren Sie die Einladungen des Systems | Falsches Verfahren anwenden |
