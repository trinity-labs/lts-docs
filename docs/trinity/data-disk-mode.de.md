# Datenträgermodus
Data Disk Mode, oft abgekürzt **DDM**, ist eines der wichtigsten technischen Konzepte, die von `TRINITY`.

## Was bedeutet DDM
Der DDM ist ein wartungsorientierter VM-Modus, dessen Ziel es nicht ist, die Umgebung als normalen Anwendungsdienst darzustellen, sondern als kontrollierten Kontext zur Überprüfung von Daten, Speicher und Systemstatus.

In der Praxis ist das DMD nützlich, wenn:

- Eine Disc untersuchen
- Check File Systems (Überprüfungsdateien)
- Wiederherstellung von Daten
- Bestätigen Sie, dass eine defekte Umgebung noch montiert werden kann
- ⭕ Arbeiten an einem Dienst, der nicht sofort normal neu gestartet werden sollte

## Wie man DDM erkennt
Die Schnittstelle macht den DDM normalerweise mit dediziertem Wortlaut und einer wartungs- oder wiederherstellungsorientierten Konsole sichtbar.

```text
Mode service normal :
  priorité au service
  comportement applicatif attendu

Data Disk Mode :
  priorité au stockage et au système
  comportement de reprise attendu
```

| Kriterium | Normalbetrieb | Datenträgermodus |
| --- | --- | --- |
| Priorität | Anwendungsdienst | Daten, Speicherung und Rückgewinnung |
| Konsole | Betrieb oder Überprüfung | Instandhaltung und Verwertung |
| Haupterwartung | Service verfügbar | Lesbare Volumina und zuverlässige Diagnose |
| Vorsichtsmaßstab | Standard | Stärken vor jeder Veränderung |

## Sichere DDM-Prüfungen
Die ersten Aktionen in DDM müssen konservativ bleiben.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

Diese Befehle helfen, einfache Fragen zu beantworten:

- Welche Discs sind sichtbar
- Welche Befestigungspunkte sind aktiv
- Welcher Platz ist verfügbar
- Wenn das erwartete Dateisystem vorhanden ist

| Befehl | Thema | Art der erwarteten Antwort |
| --- | --- | --- |
| `lsblk` | Welche Discs gibt es | Liste der Volumen und Größen |
| `findmnt` | Welche Halterungen sind aktiv | Verbohrungen von Befestigungspunkten |
| `df -h` | Welcher Platz ist verfügbar | Kapazität und Sättigung |
| `cat /etc/fstab` | Welche Installation ist geplant | Bezugskonfiguration |

## Typischer DDM-Workflow
```text
Entrer en DDM
  -> identifier les disques
  -> confirmer les montages
  -> inspecter le système de fichiers
  -> collecter les indices
  -> récupérer les données ou préparer l'escalade support
```

## Was der DDM nicht ist
Der DDM sollte nicht gelesen werden als:

- Normaler Anwendungszustand
- Ein Backup-Ersatz
- Eine Einladung, das System ohne Kontrolle zu ändern

Der DDM ist ein technischer Steuerungsmodus, dessen Hauptwert Klarheit, Wiederaufnahme und Inspektion ist.

| Nicht zu verwechseln mit | Warum? | Richtiges Lesen |
| --- | --- | --- |
| Normaler Wiederstart | Ziel ist es nicht, schnell wieder in die Produktion zu gehen. | Priorisieren Sie Inspektion und Wiederherstellung |
| Vollständiges Backup | DDM ist keine Backup-Richtlinie | Verwenden Sie dedizierte Backups, wenn sie vorhanden sind |
| freier Prüfraum | Der Kontext bleibt sensibel | Begrenzung der Maßnahmen auf die erforderlichen Kontrollen |
