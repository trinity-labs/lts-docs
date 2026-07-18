# TRINITY Handbuch
Diese Seite ist der praktische Einstieg in `TRINITY`. Sie erklaert die Nutzung der Plattform vom ersten Besuch bis zu einer technischeren VM- oder Recovery-Situation.

## Der normale Ablauf
Der uebliche Kundenweg ist:

1. Ein Angebot entdecken
2. Ein Konto erstellen
3. Eine Bestellung aufgeben
4. Eine Zahlung ausfuehren
5. Rechnung und Bestellstatus pruefen
6. Den zugehoerigen Service nutzen
7. Bei Bedarf Support anfragen

```text
Website besuchen
  -> Oeffentliche Dokumentation lesen
  -> Konto anlegen
  -> Rechnungsdaten eingeben
  -> Bestellung bestaetigen
  -> Bezahlen
  -> Service-Lebenszyklus verfolgen
  -> VM, Konsole, UnyDesk oder UnyPort nutzen, wenn verfuegbar
```

## Vor der Bestellung
Bereiten Sie einige einfache Informationen vor:

- Den genau benoetigten Service
- Die Rechnungsidentitaet
- Das erwartete Support-Niveau
- Den Bedarf an Konsole, VM, `UnyDesk` oder `UnyPort`

```yaml
kunden_vorbereitung:
  angebot: "TRINITY Support oder Infrastrukturservice"
  rechnungsprofil: "Firma oder privat"
  braucht_konsole: true
  braucht_remote_hilfe: false
  braucht_monitoring: true
```

## Was TRINITY zeigen kann
Je nach Service kann `TRINITY` zeigen:

- Bestellhistorie
- PDF-Rechnungen
- Zahlungsstatus
- VM-Status
- Konsolenzugang
- Sichtbarkeit des Data Disk Mode
- Support- und Chat-Einstiege
- Links zu `UnyDesk` und `UnyPort`

## Wenn der Ablauf technischer wird
Einige Services gehen ueber einen einfachen Kauf hinaus. Der Weg wird technischer, wenn:

- Eine VM geprueft werden muss
- Eine Konsole geoeffnet werden muss
- Eine Umgebung wiederhergestellt werden muss
- Ein Datenvolumen inspiziert werden muss
- Ein Servicestatus vor einer Support-Eskalation bestaetigt werden muss

```bash
# Beispiel einer konsolenorientierten Sitzung
hostname
uptime
ip addr
df -h
```

## Wie diese Sektion zu lesen ist
Die folgenden Seiten bilden das eigentliche Handbuch:

- `Konto und Bestellungen`
- `Zahlungen und Rechnungen`
- `VMs und Konsole`
- `Data Disk Mode`
- `Alpine Linux und Xen`
- `Support und Betrieb`
