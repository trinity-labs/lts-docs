# Konto und Bestellungen
`TRINITY` Es ist nicht nur ein Schaufenster, sondern auch der Ort, an dem der Kundenaccount und der Lebenszyklus der Bestellung sichtbar bleiben.

## Rolle des Kontos
Das Kundenkonto wird verwendet, um:

- Authentifizierend
- Informationen zur Rechnungsstellung im Lager
- Aktive und vergangene Bestellungen anzeigen
- Wiederaufnahme bestimmter Zahlungsaktionen
- Rechnungen herunterladen
- Den richtigen Servicebereich nach dem Kauf abrufen

```json
{
  "compte": {
    "email": "client@example.com",
    "profil_facturation": "entreprise",
    "commandes_visibles": true,
    "telechargement_facture": true
  }
}
```

## Typische Schritte eines Auftrags
Eine Bestellung kann durch mehrere Staaten übergeben werden:

- Entwurf
- Eingereicht
- Ausstehende Zahlung
- Bezahlt
- In Vorbereitung
- Verfügbar oder geliefert
- Abgesagt oder abgelaufen

```text
brouillon -> soumise -> paiement_en_attente -> payée -> préparation -> disponible
                                 \-> refusée -> reprise
```

| Status | Kundenseitige Bedeutung | Empfohlene Maßnahme |
| --- | --- | --- |
| Entwurf | Auftrag nicht abgeschlossen | Überprüfen Sie die Informationen und übermitteln Sie |
| Eingereicht | Die Nachfrage besteht, ist aber noch nicht beglichen | Warten auf Zahlung oder Abschluss des Stromflusses |
| Ausstehende Zahlung | Rückgabe der Zahlung wird nicht bestätigt | Überprüfen Sie die Zahlungsmethode und warten Sie |
| Bezahlt | Die Verordnung ist gültig | Folgen Sie der Vorbereitung oder Lieferung |
| In Vorbereitung | Der Service wird verarbeitet | Warten auf Verfügbarkeit oder Zugriff prüfen |
| Verfügbar | Der Dienst oder das Dokument ist zugänglich | Belichtete Oberfläche |
| Abgesagt oder abgelaufen | Der Fluss wird ohne Lieferung geschlossen | Restart oder Kontaktunterstützung |

## Was der Kunde in einer Bestellung lesen sollte
Die Bestellseite muss ohne interne Details lesbar bleiben. Der Kunde braucht vor allem:

- Die Referenz
- Aktueller Stand
- Der gewählte Service
- Das Abrechnungsprofil
- Status der Zahlung
- Link-Rechnung, falls vorhanden

```yaml
resume_commande:
  référence: "TRI-2026-00421"
  service: "session de support"
  statut: "payée"
  statut_paiement: "confirmé"
  facture_pdf: true
```

| Sichtbares Feld | Warum zählt er | Beispiel |
| --- | --- | --- |
| Bezugsnummer | Unverkennbare Identifizierung des Befehls | `TRI-2026-00421` |
| Dienst | Wissen, was gekauft wurde | `session de support` |
| Status | Lesen Sie den Lebenszyklus-Status | `payée` |
| Zahlungsstatus | Unterscheiden von Order und Settlement | `confirmé` |
| PDF Rechnung | Zurückfordern des Belegs | `true` |
| Abrechnungsprofil | Vermeidung eines Verwaltungsfehlers | `entreprise` |

## Gute Angewohnheit vor dem Öffnen eines Tickets
Führen Sie eine einfache Aufzeichnung von:

- Die Kommandoreferenz
- Kaufdatum
- Zahlungsmittel
- Erwartetes Ergebnis
- Der genaue Schritt, bei dem der Fluss aufhörte

```markdown
Référence commande : TRI-2026-00421
Résultat attendu : accès VM et visibilité console
Probleme actuel : paiement accepte, service pas encore visible
```

## Verwandte Seiten
- ➡️ `Paiements et factures`
- ➡️ `Support et exploitation`
- ➡️ `Parcours client`
