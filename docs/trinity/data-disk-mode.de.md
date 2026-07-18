# Data Disk Mode
Der Data Disk Mode, oft **DDM** genannt, ist eines der wichtigsten technischen Konzepte in der öffentlichen `TRINITY`-Dokumentation.

## Was DDM bedeutet
DDM ist ein wartungsorientierter VM-Modus. Das Ziel ist nicht, die Umgebung als normalen Applikationsdienst zu zeigen, sondern als kontrollierten Kontext für Daten-, Speicher- und Systemprüfung.

In der Praxis ist DDM nuetzlich, wenn man:

- Eine Festplatte inspizieren muss
- Dateisysteme prüfen muss
- Daten retten muss
- Bestaetigen muss, dass eine defekte Umgebung noch eingehangen werden kann
- An einem Service arbeitet, der noch nicht normal booten soll

## Wie man DDM erkennt
Die Oberfläche macht DDM meist über Labels und eine auf Recovery oder Wartung ausgerichtete Konsole sichtbar.

```text
Normaler Service-Modus:
  Fokus auf dem Service
  Applikationsverhalten wird erwartet

Data Disk Mode:
  Fokus auf Speicher und System
  Recovery-Verhalten wird erwartet
```

## Sichere DDM-Prüfungen
Die ersten Schritte im DDM sollten konservativ bleiben.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

Diese Befehle helfen bei einfachen Fragen:

- Welche Datentraeger sichtbar sind
- Welche Mounts aktiv sind
- Wie viel Platz frei ist
- Ob das erwartete Dateisystem vorhanden ist

## Typischer DDM-Ablauf
```text
DDM betreten
  -> Datentraeger identifizieren
  -> Mounts bestaetigen
  -> Dateisystem inspizieren
  -> Belege sammeln
  -> Daten retten oder Support-Eskalation vorbereiten
```

## Was DDM nicht ist
DDM sollte nicht verstanden werden als:

- Normaler Applikationszustand
- Ersatz für Backups
- Einladung zu unkontrollierten Systemänderungen

DDM ist ein kontrollierter technischer Modus für Klarheit, Recovery und Inspektion.
