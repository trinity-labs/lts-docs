# VMs und Konsole
Einige `TRINITY`-Services zeigen eine VM-bezogene Oberflaeche. Das bedeutet nicht, dass jeder Kunde Hypervisor-Administration betreibt. Es bedeutet, dass die Plattform Maschinenstatus, Konsole oder Wartungskontext zeigen kann, wenn der Service dies erlaubt.

## Was der Nutzer erwarten kann
Eine VM-Seite kann zeigen:

- Den Maschinennamen
- Online oder offline
- Grundlegende Ressourcensicht
- Einen Konsolen-Einstieg
- Links zu Support oder Monitoring

![VM- und Konsolenansicht](../assets/images/screens/trinity-console.png)

*Versionierte Repository-Aufnahme eines `TRINITY`-VM-Bildschirms im Data Disk Mode.*

## Typische Ziele einer Konsole
Konsolenzugang ist nuetzlich, um:

- Den Boot-Status zu pruefen
- Ein eingehangtes Dateisystem zu inspizieren
- Hostname oder IP zu lesen
- Zu bestaetigen, ob Recovery-Arbeit moeglich ist

```bash
hostname
uname -a
ip addr
lsblk
df -h
```

## Einen VM-Zustand lesen
Eine oeffentliche VM-Seite sollte einfach gelesen werden:

- `online` Bedeutet, dass die VM im aktuellen Modus antwortet
- `maintenance` Bedeutet, dass ein technischer Eingriff moeglich ist
- `recovery` Bedeutet, dass Daten und Dateisysteme im Mittelpunkt stehen
- `unavailable` Bedeutet warten oder Support anfragen

```text
online       -> normaler oder technischer Zugang moeglich
maintenance  -> Eingriffskontext
recovery     -> Erhaltungs- und Diagnosekontext
unavailable  -> warten oder Support
```

## Operative Vorsicht
Eine Konsole ist stark, aber eng begrenzt. Vor jeder Aenderung sollte klar sein:

- Ob die VM im Normalmodus oder im DDM laeuft
- Ob das Ziel Diagnose oder Aenderung ist
- Ob der Support eine genaue Aktion angefordert hat

```bash
# Sichere erste Pruefungen
mount
findmnt
cat /etc/os-release
```
