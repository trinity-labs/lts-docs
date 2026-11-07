# Alpine Linux und Xen
`UnyPort` Code und README zeigen deutlich, dass das Produkt rund um Alpine Linux und eine Xen-orientierte Infrastruktur geprägt ist, vor allem wenn die Klarheit der Host-Rolle mehr zählt als abstrakte Orchestrierung.

## Warum Alpine Linux hier zählt
Alpine Linux hält am Modell fest `UnyPort` Weil er ist:

- ✅ Klein
- ✅ Vorhersagbar
- ✅ Basis auf musl
- ✅ Komfortabel in minimalen operativen Fingerabdrücken
- ✅ Kompatibel mit LBU Persistenz-Workflows

Das zählt, weil`UnyPort` liest direkt den lokalen Zustand des Systems und profitiert von einem kompakten und lesbaren Host.

## Warum Xen hier zählt
Xen zählt, weil`UnyPort` Differenzierung der Infrastrukturrollen, nicht nur der CPU-Graphen.

Das Backend erkennt, ob der Host aussieht wie:

- ➡️ `Dom0`
- ➡️ `DomU`
- ➡️ `Container`
- ➡️ `Alpine`
- ➡️ `Unknown`

am `Dom0`, `UnyPort` Anreichert Linux-Telemetrie mit Xen-Toolstack-Daten von:

- ➡️ `xl info`
- ➡️ `xl list`

Dies gibt die Anzahl der Domänen, die Summe der vCPU, den Speicher, den Scheduler und die CPU-Messwerte pro Domäne an.

## Dom0 gegen DomU
Diese Unterscheidung ändert, was der Betreiber sieht:

- ✅ am `Dom0`, `UnyPort` kann den Zustand der Hypervisor- und Xen-Domänen anzeigen
- ✅ am `DomU`, `UnyPort` Verhalten sich wie ein VM-zentrierter Beobachter
- ✅ In einem Container können Motherboard- und Firmwarefelder natürlich fehlen

Die IU ist explizit um diese Unterschiede herum aufgebaut.

## LBU und Persistenz
`UnyPort` enthält auch das Alpenmodell `lbu` :

- ✅ Vorhandensein oder Fehlen von LBU
- ✅ Existenz des letzten Archivs
- ✅ Staat `clean` oder `dirty`

Dies ist besonders nützlich in alpinen Wartungs- oder Datenträgermodus-orientierten Umgebungen, in denen die Konfigurationsdrift einfach zu erkennen sein muss.

## Plattformspiel
In Bezug auf die öffentliche Dokumentation, `UnyPort` Daher sollte es wie folgt lauten:

1. ➡️ Ein nativ ausgerichtetes Betreiberportal auf Alpine
2. ➡️ Kenntnis der Topologie und Xen Rollen
3. ➡️ Nützlich für Dom0, DomU und Light Service Hosts
4. ➡️ Ausrichtung mit minimalen Operationen statt schweren Abstraktionsschichten
