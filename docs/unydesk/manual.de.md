# UnyDesk Handbuch
Diese Seite ist der praktische Einstieg in `UnyDesk`. Der normale Ablauf ist nicht ein einzelner Knopf, sondern eine Sequenz aus Host-Vorbereitung, Vertrauensaufbau und Sitzungsstart.

## Normaler Pfad
Der übliche öffentliche Pfad ist:

1. `UnyDesk`-URL öffnen
2. anmelden oder Standalone-Einladung verwenden
3. Host-Laufzeit herunterladen oder starten
4. Host beanspruchen oder vertrauen
5. Sitzung zum Zielhost erstellen
6. auf Host-Bestätigung warten
7. Browser-Viewer verwenden
8. Sitzung schließen, wenn der Zugriff nicht mehr benötigt wird

```text
UnyDesk öffnen
  -> Viewer identifizieren
  -> Host vorbereiten
  -> Vertrauen herstellen
  -> Sitzung erstellen
  -> Broker routet zum Host
  -> Viewer verbindet sich
  -> Sitzung schließen
```

## Vor der ersten Nutzung
Vorbereiten:

- die erwartete `UnyDesk`-URL
- Zielbetriebssystem und CPU-Architektur
- ob der Host installiert oder nur gestartet wird
- ob Zugriff kontogebunden oder standalone ist
- ob lokale Zustimmung auf dem Host erforderlich ist

## Während einer Sitzung beobachten
Nützliche öffentliche Signale sind:

- Host online oder offline
- Sitzungsstatus: pending, offered, active oder closed
- Dispatch-Anzahl und letzte Host-Bestätigung
- WebRTC Offer- und Answer-Fortschritt
- Aktualisierungszeit des Bildschirm-Fallbacks
- sichtbare Capture-Fehler, wenn der Host kein Bild liefern kann

## Wann die Oberfläche wechseln
`TRINITY` ist für Konto, Service, Rechnung oder Support zuständig. `UnyPort` ist für Host-Überwachung und lokalen Betrieb zuständig. `UnyDesk` bleibt die richtige Oberfläche für Remote-Zugriff, Viewer-Verhalten, Host-Vertrauen und Sitzungsrouting.
