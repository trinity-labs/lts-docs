# Zahlungen und Rechnungen
`TRINITY` macht Abrechnung und Zahlung zu einem sichtbaren Teil der Kundenerfahrung. Das Ziel ist nicht nur zu bezahlen, sondern auch zu verstehen, was nach der Zahlung passiert.

## Zahlungsarten
Je nach Service kann `TRINITY` folgende Wege anzeigen:

- Kartenzahlung
- PayPal
- Bankueberweisung
- Litecoin-Zahlung

Jede Methode hat eine andere operative Erwartung. Online-Zahlungen kommen meist schnell zurueck. Manuelle Fluesse koennen bis zur Bestaetigung offen bleiben.

```text
Karte oder PayPal -> schnelle Rueckkehr -> Bestellung schnell aktualisiert
Ueberweisung      -> ausstehender Zustand -> spaetere Bestaetigung
Litecoin          -> ausstehender Zustand -> Pruefung einer Zahlungsreferenz
```

## Zahlungszustaende
Die oeffentliche Oberflaeche soll diese Zustaende verstaendlich machen:

- Bezahlt
- Ausstehend
- Abgelehnt
- Storniert
- Erneuter Versuch moeglich

```json
{
  "zahlung": {
    "anbieter": "PayPal",
    "status": "ausstehend",
    "erneut_moeglich": false,
    "rechnung_verfuegbar": false
  }
}
```

## Rechnungen
Die PDF-Rechnung ist das kundenorientierte Abrechnungsdokument. Sie sollte Folgendes klar zeigen:

- Rechnungsnummer
- Bestellreferenz
- Kundenname
- Berechneter Service
- Bezahlt oder ausstehend
- Rechnungsdatum

```yaml
rechnung:
  nummer: "INV-2026-00152"
  bestellreferenz: "TRI-2026-00421"
  status: "bezahlt"
  export: "pdf"
```

## Wenn eine Zahlung ausstehend bleibt
Die richtige Aktion haengt vom Fluss ab:

- Auf die Rueckkehr des Zahlungsanbieters warten
- Die Bestellseite erneut pruefen
- Das Rechnungsprofil kontrollieren
- Die Zahlungsreferenz aufbewahren
- Den Support kontaktieren, wenn der Zustand blockiert bleibt

```markdown
Checkliste fuer ausstehende Zahlung
- Bestellreferenz kopiert
- Rechnung geprueft
- Zahlungsanbieter notiert
- Zeitstempel notiert
- Support erst nach normaler Wartezeit kontaktiert
```

## Was nicht passieren sollte
Aus Kundensicht sollte eine ausstehende oder abgelehnte Zahlung nicht zu Folgendem fuehren:

- Doppelte Bestellungen ohne Grund
- Nicht auffindbare Rechnung
- Unsichtbarer Wiederaufnahmeweg
- Unlesbarer Anbieterstatus
