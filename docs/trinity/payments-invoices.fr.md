# Paiements et factures
`TRINITY` expose les flux de facturation et de reglement comme une partie normale du parcours client. Le but n'est pas seulement de payer, mais aussi de comprendre ce qui se passe apres le paiement.

## Moyens de paiement
Selon le service, `TRINITY` peut exposer :

- carte bancaire
- PayPal
- virement bancaire
- paiement Litecoin

Chaque methode implique une attente operationnelle differente. Les paiements en ligne reviennent souvent vite. Les flux manuels peuvent rester en attente jusqu'a confirmation du reglement.

```text
carte ou PayPal -> retour rapide -> commande mise a jour vite
virement        -> etat en attente -> confirmation de reglement plus tard
Litecoin        -> etat en attente -> verification d'une reference de paiement
```

## Etats de paiement
La surface publique doit rendre lisibles les etats suivants :

- paye
- en attente
- refuse
- annule
- reprise possible

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
La facture PDF est le document de facturation visible cote client. Elle doit permettre d'identifier :

- le numero de facture
- la reference de commande
- le nom du client
- le service facture
- l'etat paye ou en attente
- la date de facture

```yaml
facture:
  numero: "INV-2026-00152"
  reference_commande: "TRI-2026-00421"
  statut: "payee"
  export: "pdf"
```

## Si le paiement reste en attente
La bonne action depend du flux :

- attendre le retour fournisseur si le parcours est encore ouvert
- relire la page commande
- verifier le profil de facturation
- conserver la reference de paiement
- contacter le support si l'etat reste bloque

```markdown
Checklist paiement en attente
- reference commande copiee
- facture verifiee
- fournisseur de paiement note
- horodatage note
- support contacte apres le delai normal
```

## Ce qui ne doit pas arriver
Du point de vue client, un paiement refuse ou en attente ne doit pas creer :

- de commandes dupliquees sans raison
- une facture introuvable
- un parcours de reprise invisible
- une lecture impossible du statut fournisseur
