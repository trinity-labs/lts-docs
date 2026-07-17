# Host-Verteilung
Die Host-Laufzeit ist der maschinenseitige Teil von `UnyDesk`. Sie identifiziert die Maschine, registriert sich oder verbindet sich erneut mit dem Broker und nimmt an Remote-Sitzungen teil.

## Download-Ziele
Die öffentliche Verteilungsoberfläche kann Host-Pakete bereitstellen für:

- Linux amd64
- Linux arm64
- Windows amd64
- Windows arm64
- macOS amd64
- macOS arm64
- Release-Prüfsummen

Die ausgewählte Datei muss zum Betriebssystem und zur CPU-Architektur der Maschine passen, die zum Host wird.

## Rolle des Pakets
Das Host-Paket ist zuständig für:

- eine stabile Installationsidentität erzeugen oder behalten
- Host-Metadaten wie Hostname, OS, Architektur und Version senden
- sich bei Bedarf mit einer Provisioning-Credential authentifizieren
- Heartbeat-Status für den Broker sichtbar halten
- Sitzungs-Dispatch-Nachrichten empfangen
- an Signalisierung und Fallback-Lieferung teilnehmen

## Verifikation
Wenn Prüfsummen veröffentlicht werden, sollte der Benutzer das heruntergeladene Host-Paket vor dem Start mit der Prüfsummenliste vergleichen. Das ist besonders wichtig, wenn das Paket manuell zwischen Maschinen kopiert wird.

## Windows-Doppelklick
Der Windows-Host kann so vorbereitet werden, dass ein Benutzer ihn ohne Kommandozeilenargument startet. Die Server-URL kann kommen von:

- einem expliziten Startargument
- einer Umgebungsvariable
- einer Sidecar-Konfigurationsdatei neben der ausführbaren Datei
- einem eingebetteten Standardwert

Das erleichtert Assistenzszenarien und hält die Serverauswahl trotzdem explizit.
