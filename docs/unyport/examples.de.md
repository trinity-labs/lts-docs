# Beispiele
Diese Seite gibt konkrete Beispiele dafuer, wie `UnyPort` im realen Betrieb verwendet werden soll.

## Beispiel 1 - einen Xen-Dom0 auf einen Blick lesen
Ein Operator oeffnet das Portal auf einem Dom0 und prueft sofort:

- die Host-Rolle zeigt `Dom0`
- Xen-Version und Scheduler sind vorhanden
- die Anzahl der Domains passt zur Erwartung
- die Hypervisor-Speichernutzung wirkt stimmig
- auf der Security-Seite erscheint kein kritischer Dienstabsturz

Das ist der schnellste Weg, um die Hypervisor-Sicht zu bestaetigen, bevor tiefere Gastprobleme analysiert werden.

## Beispiel 2 - uncommitteten Alpine-Zustand erkennen
Auf einem wartungsorientierten Alpine-Host zeigt die Storage-Seite:

- LBU vorhanden
- Zustand `dirty`
- Name des letzten Archivs

Das bedeutet, dass Konfigurationsaenderungen existieren, aber noch nicht in das Persistenzarchiv commitet wurden.

## Beispiel 3 - laufende Versionen mit TRINITY-Boot-Tags vergleichen
Ein Operator oeffnet die Hypervisor-Seite und vergleicht:

- die aktuelle Alpine-Version
- den aktuellen Kernel
- die letzten rollenspezifischen Versionen aus `/api/versions`

So entsteht ein leichtgewichtiges Update-Signal, ohne `UnyPort` in einen vollstaendigen Paketmanager zu verwandeln.

## Beispiel 4 - ein proxied Terminal-Werkzeug betreten
Wenn `ttyd` in `settings/config.yaml` deklariert ist, kann der Operator oeffnen:

```text
/proxy/ttyd/
```

und muss die Terminal-Anwendung nicht auf einer eigenen oeffentlichen URL freigeben.

## Beispiel 5 - einen neuen Operator onboarden
Ein Administrator kann:

- einen Benutzer anlegen
- die Rolle `operator` zuweisen
- diesem Benutzer erlauben, Anzeigename, Avatar und oeffentlichen SSH-Key zu speichern
- Branding und Benutzerverwaltung auf Admins beschraenken

Damit bleibt das Onboarding einfach, waehrend Rollen-Grenzen sauber sichtbar bleiben.
