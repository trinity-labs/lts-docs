# Alpine Linux und Xen
`UnyPort` ist nicht plattformneutral. Sowohl Code als auch README machen klar, dass das Produkt um Alpine Linux und Xen-orientierte Infrastruktur herum geformt ist, besonders dort, wo Host-Klarheit wichtiger als abstrakte Orchestrierung ist.

## Warum Alpine Linux hier wichtig ist
Alpine Linux passt zum `UnyPort`-Modell, weil es:

- Klein ist
- Vorhersagbar ist
- Auf musl basiert
- In minimalen Betriebsumgebungen gut funktioniert
- Zu LBU-Persistenz-Workflows passt

Das ist wichtig, weil `UnyPort` lokalen Zustand direkt liest und von einem kompakten, lesbaren Host profitiert.

## Warum Xen hier wichtig ist
Xen ist wichtig, weil `UnyPort` Infrastrukturrollen unterscheidet und nicht nur CPU-Diagramme anzeigt.

Das Backend erkennt, ob der Host eher ist:

- `Dom0`
- `DomU`
- `Container`
- `Alpine`
- `Unknown`

Auf `Dom0` erweitert `UnyPort` die Linux-Telemetrie mit Xen-Toolstack-Daten aus:

- `xl info`
- `xl list`

Das liefert Domain-Anzahl, vCPU-Summe, Speicherwerte, Scheduler-Details und CPU-Lesungen pro Domain.

## Dom0 gegen DomU
Diese Unterscheidung veraendert, was Operatoren sehen:

- Auf `Dom0` kann `UnyPort` Hypervisor- und Xen-Domain-Zustand zeigen
- Auf `DomU` verhaelt sich `UnyPort` als VM-zentrierter Beobachter
- In Containern koennen Board- und Firmware-Felder natuerlich fehlen

Die UI ist explizit um diese Unterschiede herum gestaltet.

## LBU und Persistenz
`UnyPort` versteht auch das Alpine-`lbu`-Modell:

- Ob LBU vorhanden ist
- Ob das letzte Archiv existiert
- Ob der Zustand `clean` oder `dirty` ist

Das ist besonders relevant in Alpine-Wartungsumgebungen oder Data-Disk-Mode-nahen Szenarien, in denen Konfigurationsdrift leicht sichtbar sein muss.

## Plattform-Lesart
In oeffentlichen Dokumentationstermen ist `UnyPort` daher zu lesen als:

1. Alpine-natives Operator-Portal
2. Bewusst fuer Xen-Topologie und Rollen
3. Nuetzlich auf Dom0, DomU und schlanken Service-Hosts
4. Ausgerichtet auf minimale Operationen statt schwere Abstraktionsschichten
