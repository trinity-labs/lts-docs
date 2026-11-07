# Unterstützung und Betrieb
Unterstützung `TRINITY` Dies bedeutet, dass die Plattform dem Benutzer helfen muss zu verstehen, wann er um Hilfe bitten muss und was er in seine Anwendung aufnehmen soll.

## Perimeter-Unterstützung
Unterstützung `TRINITY` kann ausdrücklich Folgendes betreffen:

- Bestellungen und Rechnungsfragen
- Zahlungsverfolgung
- Zugang zu Rechnungen
- Alpine Linux-Umgebungen
- VM-Dienste basierend auf Xen
- Situationen im Datenträgermodus
- Die Verwendung von`UnyDesk`
- Die Verwendung von`UnyPort`

| Thema | Self-Service möglich | Empfohlenes Medium |
| --- | --- | --- |
| PDF Rechnung | Ja | Wenn das Dokument fehlt oder inkonsistent ist |
| Zahlung | Ja, um den Staat zu lesen | Wenn der Status blockiert bleibt oder widersprüchlich ist |
| Befehl | Ja, um dem Referenz- und Status zu folgen | Wenn die Lieferung nicht mehr voranschreitet |
| VM | Ja, um einen einfachen Zustand zu lesen | Wenn das Verhalten mehrdeutig oder riskant wird |
| Datenträgermodus | Mögliches sorgfältiges Lesen | Ja, solange eine Wiederherstellungsmaßnahme sensibel ist |
| UnyDesk / UnyPort | Ja, um die Oberfläche zu benutzen | Wenn der Zugriff oder die Interpretation ein Problem darstellt |

## Gutes Format der Anwendungsunterstützung
Eine gute Unterstützungsnachfrage ist konkret und kurz.

```markdown
Objet : VM visible mais service indisponible

Référence commande : TRI-2026-00421
Service : VM Alpine
Mode actuel : Data Disk Mode
Probleme observe : système de fichiers visible, application non démarrée
Résultat attendu : confirmer s'il faut reprendre ou revenir en mode normal
```

## Vor dem Klettern
Sammeln Sie das Minimum zuerst:

- Auftragsnummer
- Rechnung oder Zahlung, falls sinnvoll
- Name der VM, falls vorhanden
- Stromverbrauch: Normalbetrieb, Wartung oder DDM
- Präzise Konsolenbeobachtung

```bash
# Exemple de lot d'informations à relever
hostname
uptime
ip addr
lsblk
df -h
```

| Zu meldende Informationen | Warum sie hilft | Beispiel |
| --- | --- | --- |
| Auftragsnummer | Identifizierende Ordner | `TRI-2026-00421` |
| Zahlungsstatus | Finanzielle und technische Unterscheidung | `confirmé` |
| Name der VM | Richtige Umgebung zeigen | `VM-EXEMPLE01` |
| Stromverbrauch | Kontext ermitteln | `normal`, `maintenance`, `DDM` |
| Konsolenbeobachtung | Geben Sie ein konkretes Symptom | nicht montiertes Volumen, Service abwesend |

## Support oder Self-Service
`TRINITY` versucht, genügend Informationen zu enthüllen, um umsichtiges Handeln zu ermöglichen, ohne jede Situation in ein Support-Ticket zu verwandeln.

Self-Service eignet sich für:

- Lesen Sie eine Rechnung
- Überprüfen Sie eine Zahlungserklärung
- Öffnen Sie eine Konsole
- Bestätigen Sie, ob VM online ist

Die Unterstützung ist geeignet für:

- Blockierte Auftragslieferung
- Unstimmigkeit der Zahlung
- VM-Anweisung unklar
- Risikodeckungsmaßnahmen für Daten

| Lage | Selbstbedienung | Supportticket |
| --- | --- | --- |
| Lesen Sie eine Rechnung | Ja | Nein, es sei denn, das Dokument fehlt |
| Überprüfen Sie eine Online-VM | Ja | Nein, wenn der Staat klar ist |
| Diagnose eines empfindlichen Volumens | Begrenzung | Ja |
| Wiederherstellung des Dienstes nach einem Vorfall | Begrenzung | Ja |
| Einen gegnerischen Status verstehen | Nein | Ja |

## Zu verwendende Oberflächen
Verwenden Sie die richtige Oberfläche nach Bedarf:

- `TRINITY` Für das Konto, Bestellungen, Rechnungen und Service Point of Entry
- `UnyDesk` Für Remote-Support und Interaktion
- `UnyPort` Für Infra-Staat und Aufsicht
