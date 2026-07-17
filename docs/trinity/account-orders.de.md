# Konto und Bestellungen
`TRINITY` ist nicht nur eine Schaufenster-Seite. Es ist auch der Ort, an dem Kundenkonto und Bestell-Lebenszyklus sichtbar bleiben.

## Rolle des Kontos
Das Kundenkonto dient dazu:

- sich anzumelden
- Rechnungsdaten zu speichern
- aktive und vergangene Bestellungen zu sehen
- bestimmte Zahlungsaktionen erneut aufzurufen
- Rechnungen herunterzuladen
- nach dem Kauf die richtige Service-Oberflaeche wiederzufinden

```json
{
  "konto": {
    "email": "kunde@example.com",
    "rechnungsprofil": "firma",
    "bestellungen_sichtbar": true,
    "rechnung_download": true
  }
}
```

## Typische Bestellphasen
Eine Bestellung kann mehrere Zustaende durchlaufen:

- entwurf
- eingereicht
- zahlung ausstehend
- bezahlt
- in bearbeitung
- verfuegbar oder geliefert
- storniert oder abgelaufen

```text
entwurf -> eingereicht -> zahlung_ausstehend -> bezahlt -> bearbeitung -> verfuegbar
                                 \-> abgelehnt -> erneuter_versuch
```

## Was ein Kunde in einer Bestellung lesen sollte
Die Bestellseite soll ohne interne Details verstaendlich bleiben. Wichtig sind vor allem:

- Referenznummer
- aktueller Status
- ausgewaehlter Service
- Rechnungsprofil
- Zahlungsstatus
- Rechnungslink, falls vorhanden

```yaml
bestellung:
  referenz: "TRI-2026-00421"
  service: "Support-Sitzung"
  status: "bezahlt"
  zahlungsstatus: "bestaetigt"
  rechnung_pdf: true
```

## Gute Gewohnheit vor einem Ticket
Halten Sie eine kleine Notiz fest zu:

- Bestellreferenz
- Kaufdatum
- Zahlungsmethode
- erwartetem Ergebnis
- genauer Stelle, an der der Ablauf stoppt

```markdown
Bestellreferenz: TRI-2026-00421
Erwartetes Ergebnis: VM-Zugang und sichtbare Konsole
Aktuelles Problem: Zahlung akzeptiert, Service noch nicht sichtbar
```

## Verwandte Seiten
- `Zahlungen und Rechnungen`
- `Support und Betrieb`
- `Kundenwege`
