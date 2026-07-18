# Beispiele
Diese Seite sammelt praktische Beispiele fuer typische `TRINITY`-Situationen.

## Beispiel 1 - eine neu gelieferte VM pruefen
```bash
hostname
uptime
ip addr
df -h
```

Erwartete Lesart:

- Die Maschine antwortet
- Die Laufzeit wirkt plausibel
- Das Netzwerk ist sichtbar
- Das Hauptdateisystem ist eingehangen

## Beispiel 2 - einen DDM-Kontext erkennen
```bash
lsblk
findmnt
cat /etc/os-release
```

Erwartete Lesart:

- Sichtbare Datentraeger
- Lesbare aktive Mounts
- Ein schlankes Alpine-Userland

## Beispiel 3 - eine Zahlungs-Support-Nachricht vorbereiten
```markdown
Bestellreferenz: TRI-2026-00421
Zahlungsanbieter: Bankueberweisung
Beobachteter Status: laenger als erwartet ausstehend
Rechnung sichtbar: nein
Gewuenschte Aktion: bestaetigen, ob die Zahlung noch wartet
```

## Beispiel 4 - ein VM-Problem fuer den Support zusammenfassen
```json
{
  "vm": "vm-trinity01",
  "modus": "data_disk_mode",
  "status": "online",
  "problem": "service noch nicht im normalen Laufzeitmodus",
  "belege": [
    "hostname ok",
    "dateisystem eingehangen",
    "anwendung nicht gestartet"
  ]
}
```

## Beispiel 5 - Kundensicht auf das Oekosystem
```text
TRINITY  -> Konto, Bestellungen, Rechnungen, Dokumentation
UnyDesk  -> Remote-Zugang und Hilfe
UnyPort  -> Status, Host-Daten, Service-Monitoring
```
