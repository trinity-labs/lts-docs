# Data Disk Mode
Der Data Disk Mode, oft **DDM** genannt, ist eines der wichtigsten technischen Konzepte in der oeffentlichen `TRINITY`-Dokumentation.

## Was DDM bedeutet
DDM ist ein wartungsorientierter VM-Modus. Das Ziel ist nicht, die Umgebung als normalen Applikationsdienst zu zeigen, sondern als kontrollierten Kontext fuer Daten-, Speicher- und Systempruefung.

In der Praxis ist DDM nuetzlich, wenn man:

- eine Festplatte inspizieren muss
- Dateisysteme pruefen muss
- Daten retten muss
- bestaetigen muss, dass eine defekte Umgebung noch eingehangen werden kann
- an einem Service arbeitet, der noch nicht normal booten soll

## Wie man DDM erkennt
Die Oberflaeche macht DDM meist ueber Labels und eine auf Recovery oder Wartung ausgerichtete Konsole sichtbar.

```text
Normaler Service-Modus:
  Fokus auf dem Service
  Applikationsverhalten wird erwartet

Data Disk Mode:
  Fokus auf Speicher und System
  Recovery-Verhalten wird erwartet
```

## Sichere DDM-Pruefungen
Die ersten Schritte im DDM sollten konservativ bleiben.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

Diese Befehle helfen bei einfachen Fragen:

- welche Datentraeger sichtbar sind
- welche Mounts aktiv sind
- wie viel Platz frei ist
- ob das erwartete Dateisystem vorhanden ist

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

- normaler Applikationszustand
- Ersatz fuer Backups
- Einladung zu unkontrollierten Systemaenderungen

DDM ist ein kontrollierter technischer Modus fuer Klarheit, Recovery und Inspektion.
