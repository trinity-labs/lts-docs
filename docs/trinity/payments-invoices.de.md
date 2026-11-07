# Zahlungen und Rechnungen
`TRINITY` Die Abrechnungs- und Abrechnungsströme werden als normaler Teil der Customer Journey dargestellt. Das Ziel ist nicht nur zu zahlen, sondern auch zu verstehen, was nach der Zahlung passiert.

## Zahlungsmittel
Laut dem Dienst, `TRINITY` kann exponieren:

- ✅ Bankkarte
- ✅ PayPal
- ✅ Banküberweisung
- ✅ Zahlung

Jede Methode hat eine andere Betriebserwartung. Online-Zahlungen kommen oft schnell zurück. Manuelle Stromflüsse können bis zur Bestätigung der Abwicklung auf Eis gelegt werden.

```text
carte ou PayPal -> retour rapide -> commande mise à jour vite
virement        -> état en attente -> confirmation de règlement plus tard
Litecoin        -> état en attente -> vérification d'une référence de paiement
```

## Zahlungsstaaten
Die Öffentlichkeitsfläche muss folgende Zustände lesbar machen:

- ✅ Zahl
- ✅ Ausstehender
- ✅ Ablehnung
- ✅ Abbruch
- ✅ Mögliche Rückforderung

```json
{
  "paiement": {
    "fournisseur": "PayPal",
    "statut": "en_attente",
    "reprise_possible": false,
    "facture_disponible": false
  }
}
```

## Rechnungen
Die PDF-Rechnung ist das kundenseitige Rechnungsdokument, das Folgendes enthalten muss:

- ✅ Rechnungsnummer
- ✅ Die Kommandoreferenz
- ✅ Name des Kunden
- ✅ Die Serviceentgelte
- ✅ Bezahlter oder anhängiger Status
- ✅ Datum der Rechnung

```yaml
facture:
  numéro: "INV-2026-00152"
  reference_commande: "TRI-2026-00421"
  statut: "payée"
  export: "pdf"
```

## Wenn die Zahlung noch aussteht
Die richtige Aktion hängt vom Flow ab:

- ✅ Warten Sie auf die Rückgabe des Lieferanten, wenn die Route noch geöffnet ist
- ✅ Lesen Sie die Kommandoseite
- ✅ Rechnungsprofil prüfen
- ✅ Behalten Sie die Zahlungsnummer
- ✅ Kontaktieren Sie den Support, wenn der Status blockiert bleibt

```markdown
Checklist paiement en attente
- Référence commande copiée
- Facture vérifiée
- Fournisseur de paiement noté
- Horodatage noté
- Support contacte après le delai normal
```

## Was nicht passieren sollte
Aus Kundensicht darf eine abgelehnte oder ausstehende Zahlung nicht Folgendes bewirken:

- ✅ Doppelte Befehle ohne Grund
- ⭕ Eine Rechnung nicht gefunden
- ✅ Ein unsichtbarer Recovery-Pfad
- ⭕ Kann den Lieferantenstatus nicht lesen
