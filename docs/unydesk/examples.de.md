# Beispiele
Diese Beispiele beschreiben öffentliche `UnyDesk`-Abläufe, ohne private Infrastrukturverfahren offenzulegen.

## Beispiel 1 - assistierter Zugriff
```text
Benutzer öffnet UnyDesk
  -> lädt das Host-Paket herunter
  -> startet die Host-Laufzeit
  -> meldet sich an oder erhält eine begrenzte Einladung
  -> Host wird sichtbar
  -> Viewer startet eine Sitzung
  -> Host bestätigt den Dispatch
```

Das ist der normale Support-Pfad, wenn eine Person nahe an der Zielmaschine verfügbar ist.

## Beispiel 2 - vorbereiteter Host
```text
Betreiber bereitet Host vor
  -> Host behält eine stabile Install ID
  -> Host sendet Heartbeat zum Broker
  -> Viewer öffnet UnyDesk später
  -> Sitzung zielt auf den bekannten Host
```

Das ist nützlich, wenn eine Maschine für spätere Assistenz erreichbar bleiben soll.

## Beispiel 3 - Standalone-Einladung
```text
Sitzung wird erstellt
  -> begrenztes Token wird erzeugt
  -> eingeladener Viewer öffnet den Sitzungslink
  -> Broker validiert das Token
  -> Zugriff bleibt an diesen Sitzungskontext gebunden
```

Standalone-Zugriff ist bewusst enger als ein vollständiger Konto-Login.

## Beispiel 4 - Transport-Fallback
```text
Viewer und Host tauschen Signalisierung aus
  -> direkter Echtzeitpfad wird versucht
  -> Medienpfad ist unvollständig
  -> Broker-Status bleibt sichtbar
  -> Bildschirm-Fallback setzt die Sitzung fort
```

Ziel ist nicht, schlechten Transport zu verstecken. Ziel ist, genug Status sichtbar zu halten, um zu verstehen, was noch funktioniert.
