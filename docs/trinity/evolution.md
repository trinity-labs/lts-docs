# Evolution de TRINITY
Cette page synthétise l'évolution fonctionnelle récente de `TRINITY` à partir des chantiers réellement menés sur la plateforme. Elle documente la surface produit visible et les flux publics, sans entrer dans les détails d'implémentation internes.

## Vue d'ensemble
`TRINITY` couvre désormais un périmètre plus large que l'orchestration initiale :

- Parcours compte client et commandes
- Facturation PDF et suivi de paiement
- Support commercial et support technique
- Chat d'assistance persistant
- Cycle de vie VM, console et reprise après incident
- Documentation publique et admin
- Conformité, consentement et textes légaux

Le périmètre support `TRINITY` inclut également **`UnyDesk`** et **`UnyPort`**. Le positionnement public doit donc être lu comme une offre plateforme + exploitation + assistance, pas uniquement comme un panneau VM.

## Compte client et commandes
Le compte client à été structuré autour d'un suivi de commande plus complet :

- Liste des commandes récentes
- Détail par commande dans une modale dédiée
- Affichage du statut de paiement avec code couleur cohérent
- Distinction entre commande active, en attente, refusée, annulée ou supprimée
- Adaptation du rendu selon le fournisseur de paiement

Les commandes d'abonnement exposent aussi la **prochaine échéance** lorsque le flux le permet. Les commandes en attente ou en erreur réutilisent la même entrée au lieu de créer des doublons à chaque tentative de paiement.

## Facturation PDF
La facture PDF à été profondément normalisée :

- Charte couleur alignée sur `TRINITY`
- Logo, entête et blocs d'identité stabilisés
- Meilleure gestion des caractères spéciaux et accents
- Alignement des colonnes produit, quantité, technicité et montant
- Génération de numéros de facture lisibles
- Détail HT, TVA et total TTC
- Mentions légales et pénalités de retard
- Rendu cohérent pour les anciens PDF régénérés

Le PDF est désormais pensé comme une facture d'exploitation réellement présentable à un client final, et pas comme un export technique brut.

## Paiements
Le tunnel de paiement à été étendu et unifié.

### Fournisseurs et modes pris en charge
`TRINITY` exposé les flux suivants selon le type de produit :

- **Mollie** pour la carte bancaire et les abonnements récurrents
- **PayPal** pour les paiements compatibles
- **Virement bancaire** pour les règlements manuels
- **Litecoin** pour les paiements crypto

Le parcours d'information préalable à été harmonisé avant le paiement :

- Identité de facturation
- Adresse de facturation
- Validation et autocomplétion d'adresse
- Collecte et conservation des informations de commande utiles à la facture

### Retour de paiement et états
Un effort important à été fait sur la gestion des retours fournisseur :

- Modal de retour de paiement systématique
- État **succès** en vert
- État **en attente** en orange
- État **refusé / échoué / annulé** en rouge
- Relance de paiement sans dupliquer la commande
- Reprise d'un paiement en attente depuis l'espace compte

Pour les paiements manuels, `TRINITY` affiche des instructions détaillées au sein du compte :

- IBAN / BIC / bénéficiaire pour le virement
- Adresse de réception et montant LTC pour la crypto
- Boutons de copier pour les références sensibles

Les flux manuels se comportent publiquement comme des paiements en attente, avec consultation des coordonnées de règlement directement depuis l'espace client.

## Support, chat et assistance
Le support à évolué sur deux plans : l'offre commerciale et l'expérience d'assistance.

### Offre support
L'offre `TRINITY` inclut explicitement :

- Support Alpine Linux
- Support Xen
- Support **`UnyDesk`**
- Support **`UnyPort`**

Les pages commerciales ont été réécrites dans ce sens afin d'éviter un découplage artificiel entre produits, exploitation et assistance.

### Chat d'assistance
Le chat est passé d'une modale à une vraie page dédiée, avec :

- Historique de conversations
- Suppression logique côté interface
- Suggestions préremplies
- Rendu plus proche d'une interface de chat moderne
- Prise en charge correcte du texte enrichi simple et du code inline

Un point important de l'évolution récente concerne les visiteurs non connectés :

- L'historique reste accessible même **sans connexion**
- La persistance repose sur un **token invité**
- Les conversations sont réconciliées lorsqu'un compte est créé
- Un plafond de messages est appliqué pour les invités

L'objectif est d'éviter la perte d'historique entre visiteur et utilisateur authentifié tout en gardant un cadre exploitable publiquement.

## Consentement, cookies et textes légaux
La conformité visible côté front à aussi été renforcée :

- Bannière / panneau de consentement personnalisé
- Distinction entre cookies essentiels et fonctionnels
- Déblocage conditionnel de l'assistant
- Pages publiques dédiées aux cookies, à la confidentialité, aux CGU / CGV et aux mentions légales

Les textes ont été étoffés pour mieux couvrir :

- Commandes et prestations sur mesure
- Règles de remboursement
- Confidentialité
- Usage de la plateforme
- Information légale sur la facturation et le recouvrement

## VM, bastion et console
Même si cette documentation publique ne décrit pas les scripts internes, plusieurs chantiers visibles ont modifié le comportement produit :

- Meilleure reprise des consoles bastion
- Clarification des états VM côté interface
- Prise en compte des redémarrages et relances
- Gestion plus stricte des ressources VM orphelines ou supprimées

Dans le parcours public, cela se traduit par une attente plus claire : une VM commandée ou relancée doit réapparaître dans un état cohérent, avec une console exploitable et une reprise plus prévisible.

## Images, catalogue et expérience DDM
Le périmètre `TRINITY` à aussi intégré un travail sur :

- Les images système et leurs variantes
- La cohérence du modèle DDM
- L'exposition catalogue
- La lisibilité des parcours autour des environnements Alpine / Xen / `TRINITY`

Cette partie reste en évolution, mais elle fait désormais partie du périmètre documenté de la plateforme.

## Documentation et surfaces publiques
La documentation à été restructurée pour distinguer :

- Documentation publique
- Documentation admin
- Présentation produit
- Détails d'exploitation

L'objectif est d'éviter une documentation trop couplée au dépôt ou aux scripts, tout en gardant une image fidèle de la plateforme réellement exposée.

## Limites actuelles et suites attendues
Au moment de cette synthèse, plusieurs axes restent naturellement évolutifs :

- Automatisation plus poussée des retours pour virement et crypto
- Amélioration continue des retours fournisseurs PayPal et Mollie selon les contraintes de leurs APIs
- Enrichissement progressif des catalogues et des images
- Poursuite de l'unification entre surfaces `TRINITY`, `UnyDesk` et `UnyPort`

En résumé, `TRINITY` n'est plus seulement un point d'entrée plateforme. C'est désormais une surface unifiée de **commande, support, facturation, VM, console et documentation**, avec une articulation explicite autour d'**`UnyDesk`** et **`UnyPort`**.
