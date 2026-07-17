# Evolution de TRINITY
Cette page synthétise l'évolution fonctionnelle récente de `TRINITY` à partir des chantiers réellement menés sur la plateforme. Elle documente la surface produit visible et les flux publics, sans entrer dans les détails d'implémentation internes.

## Vue d'ensemble
`TRINITY` couvre désormais un périmètre plus large que l'orchestration initiale :

- parcours compte client et commandes
- facturation PDF et suivi de paiement
- support commercial et support technique
- chat d'assistance persistant
- cycle de vie VM, console et reprise après incident
- documentation publique et admin
- conformité, consentement et textes légaux

Le périmètre support `TRINITY` inclut également **`UnyDesk`** et **`UnyPort`**. Le positionnement public doit donc être lu comme une offre plateforme + exploitation + assistance, pas uniquement comme un panneau VM.

## Compte client et commandes
Le compte client a été structuré autour d'un suivi de commande plus complet :

- liste des commandes récentes
- détail par commande dans une modale dédiée
- affichage du statut de paiement avec code couleur cohérent
- distinction entre commande active, en attente, refusée, annulée ou supprimée
- adaptation du rendu selon le fournisseur de paiement

Les commandes d'abonnement exposent aussi la **prochaine échéance** lorsque le flux le permet. Les commandes en attente ou en erreur réutilisent la même entrée au lieu de créer des doublons à chaque tentative de paiement.

## Facturation PDF
La facture PDF a été profondément normalisée :

- charte couleur alignée sur `TRINITY`
- logo, entête et blocs d'identité stabilisés
- meilleure gestion des caractères spéciaux et accents
- alignement des colonnes produit, quantité, technicité et montant
- génération de numéros de facture lisibles
- détail HT, TVA et total TTC
- mentions légales et pénalités de retard
- rendu cohérent pour les anciens PDF régénérés

Le PDF est désormais pensé comme une facture d'exploitation réellement présentable à un client final, et pas comme un export technique brut.

## Paiements
Le tunnel de paiement a été étendu et unifié.

### Fournisseurs et modes pris en charge
`TRINITY` expose les flux suivants selon le type de produit :

- **Mollie** pour la carte bancaire et les abonnements récurrents
- **PayPal** pour les paiements compatibles
- **virement bancaire** pour les règlements manuels
- **Litecoin** pour les paiements crypto

Le parcours d'information préalable a été harmonisé avant le paiement :

- identité de facturation
- adresse de facturation
- validation et autocomplétion d'adresse
- collecte et conservation des informations de commande utiles à la facture

### Retour de paiement et états
Un effort important a été fait sur la gestion des retours fournisseur :

- modal de retour de paiement systématique
- état **succès** en vert
- état **en attente** en orange
- état **refusé / échoué / annulé** en rouge
- relance de paiement sans dupliquer la commande
- reprise d'un paiement en attente depuis l'espace compte

Pour les paiements manuels, `TRINITY` affiche des instructions détaillées au sein du compte :

- IBAN / BIC / bénéficiaire pour le virement
- adresse de réception et montant LTC pour la crypto
- boutons de copie pour les références sensibles

Les flux manuels se comportent publiquement comme des paiements en attente, avec consultation des coordonnées de règlement directement depuis l'espace client.

## Support, chat et assistance
Le support a évolué sur deux plans : l'offre commerciale et l'expérience d'assistance.

### Offre support
L'offre `TRINITY` inclut explicitement :

- support Alpine Linux
- support Xen
- support **`UnyDesk`**
- support **`UnyPort`**

Les pages commerciales ont été réécrites dans ce sens afin d'éviter un découplage artificiel entre produits, exploitation et assistance.

### Chat d'assistance
Le chat est passé d'une modale à une vraie page dédiée, avec :

- historique de conversations
- suppression logique côté interface
- suggestions préremplies
- rendu plus proche d'une interface de chat moderne
- prise en charge correcte du texte enrichi simple et du code inline

Un point important de l'évolution récente concerne les visiteurs non connectés :

- l'historique reste accessible même **sans connexion**
- la persistance repose sur un **token invité**
- les conversations sont réconciliées lorsqu'un compte est créé
- un plafond de messages est appliqué pour les invités

L'objectif est d'éviter la perte d'historique entre visiteur et utilisateur authentifié tout en gardant un cadre exploitable publiquement.

## Consentement, cookies et textes légaux
La conformité visible côté front a aussi été renforcée :

- bannière / panneau de consentement personnalisé
- distinction entre cookies essentiels et fonctionnels
- déblocage conditionnel de l'assistant
- pages publiques dédiées aux cookies, à la confidentialité, aux CGU / CGV et aux mentions légales

Les textes ont été étoffés pour mieux couvrir :

- commandes et prestations sur mesure
- règles de remboursement
- confidentialité
- usage de la plateforme
- information légale sur la facturation et le recouvrement

## VM, bastion et console
Même si cette documentation publique ne décrit pas les scripts internes, plusieurs chantiers visibles ont modifié le comportement produit :

- meilleure reprise des consoles bastion
- clarification des états VM côté interface
- prise en compte des redémarrages et relances
- gestion plus stricte des ressources VM orphelines ou supprimées

Dans le parcours public, cela se traduit par une attente plus claire : une VM commandée ou relancée doit réapparaître dans un état cohérent, avec une console exploitable et une reprise plus prévisible.

## Images, catalogue et expérience DDM
Le périmètre `TRINITY` a aussi intégré un travail sur :

- les images système et leurs variantes
- la cohérence du modèle DDM
- l'exposition catalogue
- la lisibilité des parcours autour des environnements Alpine / Xen / `TRINITY`

Cette partie reste en évolution, mais elle fait désormais partie du périmètre documenté de la plateforme.

## Documentation et surfaces publiques
La documentation a été restructurée pour distinguer :

- documentation publique
- documentation admin
- présentation produit
- détails d'exploitation

L'objectif est d'éviter une documentation trop couplée au dépôt ou aux scripts, tout en gardant une image fidèle de la plateforme réellement exposée.

## Limites actuelles et suites attendues
Au moment de cette synthèse, plusieurs axes restent naturellement évolutifs :

- automatisation plus poussée des retours pour virement et crypto
- amélioration continue des retours fournisseurs PayPal et Mollie selon les contraintes de leurs APIs
- enrichissement progressif des catalogues et des images
- poursuite de l'unification entre surfaces `TRINITY`, `UnyDesk` et `UnyPort`

En résumé, `TRINITY` n'est plus seulement un point d'entrée plateforme. C'est désormais une surface unifiée de **commande, support, facturation, VM, console et documentation**, avec une articulation explicite autour d'**`UnyDesk`** et **`UnyPort`**.
