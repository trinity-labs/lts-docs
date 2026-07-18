# Alpine Linux und Xen
`TRINITY` verwendet zwei technische Grundlagen, die auch oeffentlich verstanden werden sollten, selbst wenn Nutzer sie nicht direkt verwalten: **Alpine Linux** und **Xen**.

## Alpine Linux
Alpine Linux ist die Systembasis fuer kompakte und kontrollierte Umgebungen. Oeffentlich ist das relevant, weil Kunden oft Folgendes sehen:

- Eine schlanke Konsole
- Eine kleine Systembasis
- Eine einfache und direkte Struktur

```bash
cat /etc/os-release
uname -a
apk info | head
```

Praktische Lesart fuer Kunden:

- Das System ist absichtlich klein
- Wartung und Recovery bleiben lesbar
- Die Plattform bevorzugt vorhersehbare technische Oberflaechen

## Xen
Xen ist die Virtualisierungsschicht unter den VM-bezogenen Services. Kunden steuern Xen ueblicherweise nicht direkt aus `TRINITY`, aber Xen erklaert, warum die Plattform Folgendes zeigen kann:

- Isolierte virtuelle Maschinen
- Lesbare VM-Zustaende
- Wartungs- und Recovery-Modi

```text
Kundenoberflaeche -> TRINITY
Gastbetriebssystem -> Alpine Linux
Virtualisierung -> Xen
```

## Warum beides zusammen wichtig ist
Alpine Linux und Xen bilden ein einfaches Modell:

- Alpine Linux liefert die Gastumgebung
- Xen liefert Ausfuehrung und Isolation
- `TRINITY` Liefert Kundenoberflaeche, Lebenszyklus und Support

```yaml
plattform_modell:
  kundenoberflaeche: "TRINITY"
  gastsystem: "Alpine Linux"
  hypervisor: "Xen"
  betriebsmodi:
    - normal
    - wartung
    - data_disk_mode
```

## Was Nutzer mitnehmen sollten
Der Kernpunkt ist einfach: Niemand muss Xen-Spezialist sein. Es reicht, das Modell gut genug zu verstehen, um VM-Zustaende zu lesen, eine Konsole vorsichtig zu nutzen und praezise mit dem Support zu sprechen.
