# Paiements et factures
`TRINITY` exposé les flux de facturation et de reglement comme une partie normale du parcours client. Le but n'est pas seulement de payer, mais aussi de comprendre ce qui se passe apres le paiement.

## Moyens de paiement
Selon le service, `TRINITY` peut exposer :

- Carte bancaire
- PayPal
- Virement bancaire
- Paiement Litecoin

Chaque méthode implique une attente opérationnelle differente. Les paiements en ligne reviennent souvent vite. Les flux manuels peuvent rester en attente jusqu'a confirmation du reglement.

```text
carte ou PayPal -> retour rapide -> commande mise a jour vite
virement        -> état en attente -> confirmation de reglement plus tard
Litecoin        -> état en attente -> verification d'une référence de paiement
```

## États de paiement
La surface publique doit rendre lisibles les états suivants :

- Paye
- En attente
- Refuse
- Annule
- Reprise possible

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

## Factures
La facture PDF est le document de facturation visible côté client. Elle doit permettre d'identifier :

- Le numero de facture
- La référence de commande
- Le nom du client
- Le service facture
- L'état paye ou en attente
- La date de facture

```yaml
facture:
  numero: "INV-2026-00152"
  reference_commande: "TRI-2026-00421"
  statut: "payee"
  export: "pdf"
```

## Si le paiement reste en attente
La bonne action dépend du flux :

- Attendre le retour fournisseur si le parcours est encore ouvert
- Relire la page commande
- Vérifier le profil de facturation
- Conserver la référence de paiement
- Contacter le support si l'état reste bloque

```markdown
Checklist paiement en attente
- Reference commande copiee
- Facture verifiee
- Fournisseur de paiement note
- Horodatage note
- Support contacte apres le delai normal
```

## Ce qui ne doit pas arriver
Du point de vue client, un paiement refuse ou en attente ne doit pas creer :

- De commandes dupliquees sans raison
- Une facture introuvable
- Un parcours de reprise invisible
- Une lecture impossible du statut fournisseur
