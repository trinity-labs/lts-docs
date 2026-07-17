# Support und Betrieb
`TRINITY`-Support ist sowohl kommerziell als auch technisch. Oeffentlich bedeutet das: Die Plattform soll dem Nutzer zeigen, wann Hilfe noetig ist und welche Informationen in eine Anfrage gehoeren.

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
- aktueller Modus: normal, Wartung oder DDM
- genaue Bildschirm- oder Konsolenbeobachtung

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

Self-Service passt fuer:

- Rechnung lesen
- Zahlungsstatus pruefen
- Konsole oeffnen
- bestaetigen, ob eine VM online ist

Support passt fuer:

- blockierte Service-Auslieferung
- Zahlungsinkonsistenz
- unklaren VM-Zustand
- Recovery-Aktionen mit Datenrisiko

## Die richtigen Oberflaechen
Nutzen Sie die passende Oberflaeche fuer den passenden Bedarf:

- `TRINITY` fuer Konto, Bestellungen, Rechnungen und Service-Einstieg
- `UnyDesk` fuer Remote-Hilfe und Interaktion
- `UnyPort` fuer Infrastrukturstatus und operative Uebersicht
