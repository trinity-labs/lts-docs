# Support und Betrieb
`TRINITY`-Support ist sowohl kommerziell als auch technisch. Öffentlich bedeutet das: Die Plattform soll dem Nutzer zeigen, wann Hilfe noetig ist und welche Informationen in eine Anfrage gehoeren.

## Support-Umfang
`TRINITY`-Support kann sich ausdruecklich beziehen auf:

- Bestellungen und Rechnungsfragen
- Zahlungsnachverfolgung
- Zugang zu Rechnungen
- Alpine-Linux-Umgebungen
- Xen-basierte VM-Services
- Data-Disk-Mode-Situationen
- Nutzung von `UnyDesk`
- Nutzung von `UnyPort`

## Gute Support-Anfrage
Eine gute Support-Anfrage ist konkret und kurz.

```markdown
Betreff: VM sichtbar, Service jedoch nicht verfuegbar

Bestellreferenz: TRI-2026-00421
Service: Alpine VM
Aktueller Modus: Data Disk Mode
Beobachtetes Problem: Dateisystem sichtbar, Anwendung nicht gestartet
Erwartetes Ergebnis: bestaetigen, ob Recovery oder Normalstart noetig ist
```

## Vor einer Eskalation
Sammeln Sie zuerst die Minimaldaten:

- Bestellreferenz
- Rechnungs- oder Zahlungsstatus falls relevant
- VM-Name falls vorhanden
- Aktueller Modus: normal, Wartung oder DDM
- Genaue Bildschirm- oder Konsolenbeobachtung

```bash
# Beispiel fuer ein kleines Belegpaket
hostname
uptime
ip addr
lsblk
df -h
```

## Support versus Self-Service
`TRINITY` soll genug Information bereitstellen, damit der Nutzer sicher handeln kann, ohne aus jeder Lage automatisch ein Support-Ticket zu machen.

Self-Service passt für:

- Rechnung lesen
- Zahlungsstatus prüfen
- Konsole öffnen
- Bestaetigen, ob eine VM online ist

Support passt für:

- Blockierte Service-Auslieferung
- Zahlungsinkonsistenz
- Unklaren VM-Zustand
- Recovery-Aktionen mit Datenrisiko

## Die richtigen Oberflächen
Nutzen Sie die passende Oberfläche für den passenden Bedarf:

- `TRINITY` Für Konto, Bestellungen, Rechnungen und Service-Einstieg
- `UnyDesk` Für Remote-Hilfe und Interaktion
- `UnyPort` Für Infrastrukturstatus und operative Übersicht
