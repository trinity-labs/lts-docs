# UnyDesk Einführung
`UnyDesk` ist die Remote-Access-Architektur der Plattform. Sie bietet Benutzern und Betreibern einen kontrollierten Weg zu einer Maschine über eine Browser-Sitzung, eine Host-Laufzeit und eine Broker-API.

Das Produkt ist um drei öffentliche Rollen organisiert:

- **Host**: die Maschine, die Zugriff bereitstellt
- **Viewer**: der Browser-Benutzer, der die Sitzung öffnet
- **Broker**: der `UnyDesk`-Dienst, der authentifiziert, routet und synchronisiert

`UnyDesk` ist bewusst von `TRINITY` und `UnyPort` getrennt. `TRINITY` verwaltet Kunden- und Service-Lebenszyklen. `UnyPort` verwaltet lokale Überwachung und Betrieb. `UnyDesk` verwaltet interaktiven Remote-Zugriff.

## Was UnyDesk löst
`UnyDesk` wird verwendet, wenn der Benutzer Folgendes benötigt:

- Ein Host-Paket herunterladen oder starten
- Einen Host beanspruchen oder vertrauen
- Eine Remote-Sitzung erstellen
- Den Viewer zum richtigen Host routen
- Signalisierung zwischen Browser und Host austauschen
- Die Sitzung fortsetzen, wenn der beste Echtzeitpfad nicht verfügbar ist

## Öffentliche Architektur in einer Ansicht
```text
Browser-Viewer
  -> UnyDesk-Broker
  -> vertrauenswürdiger oder beanspruchter Host
  -> Sitzungs-Signalisierung
  -> WebRTC oder Bildschirm-Fallback
```

Der Broker bleibt der stabile Koordinationspunkt. Der Medienpfad kann direkt sein, wenn es möglich ist, aber Sitzungsstatus, Routing und Fallback-Verhalten bleiben in `UnyDesk` sichtbar.

## Dokumentationspfad
Diese Sektion sollte in dieser Reihenfolge gelesen werden:

- `Präsentation` Für die Produktsicht
- `Architektur` Für das Laufzeitmodell
- `Handbuch` Für den praktischen Pfad
- `Host-Verteilung` Für Downloads und Pakete
- `Session-Broker` Für Lebenszyklus und Signalisierung
- `Sicherheit und Betrieb` Für öffentliche Betriebsgrenzen
