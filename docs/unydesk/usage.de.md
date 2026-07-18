# Nutzung von UnyDesk
`UnyDesk` wird verwendet, wenn der Nutzer einen Fernzugriff initiieren oder empfangen muss. Öffentlich wichtig ist dabei: Die Nutzung ist sitzungsgetrieben. Der Nutzer öffnet nicht nur ein Werkzeug, sondern startet eine Beziehung zwischen Viewer, Host, Route und einem oder mehreren Transportpfaden.

Typische öffentliche Nutzungen sind:

- Die Landing Page des Fernzugriffsdienstes öffnen
- Das passende Host-Paket für ein Zielsystem auswaehlen
- Einen Host bootstrappen oder claimen
- Eine Fernsitzung öffnen oder überwachen
- Einen Standalone-Sitzungslink teilen
- Assistierten Support mit lokaler Freigabe am Host durchfuehren
- Mit Bildschirm-Fallback weiterarbeiten, wenn direktes Echtzeitvideo degradierte Wege hat

## Nutzung 1 - einen Host vorbereiten
Nutzer beginnen oft damit:

- Das richtige Host-Paket herunterzuladen
- Die Host-Laufzeit zu starten oder zu installieren
- Zu prüfen, ob der Host online erscheint
- Zu bestaetigen, dass Pairing oder Claim abgeschlossen ist

## Nutzung 2 - eine Support-Sitzung starten
In einer normalen assistierten Sitzung:

- Öffnet der Viewer die `UnyDesk`-Seite
- Waehlt oder adressiert einen Host
- Erstellt eine Sitzung
- Wartet auf Host-Akzeptanz
- Beobachtet den Übergang nach offered, accepted und active

## Nutzung 3 - in der Browser-Sitzung arbeiten
Sobald eine Sitzung lebt, kann der Browser-Viewer typischerweise:

- Den entfernten Bildschirm sehen
- Den Mauszeiger bewegen
- Tastatureingaben senden
- Zwischenablageinhalte austauschen
- Dateien an den Host senden
- Die Sitzung schliessen oder überwachen

## Nutzung 4 - Standalone-Modus verwenden
Standalone-Zugriff ist hilfreich, wenn:

- Ein Nutzer ohne komplettes Kontoportal an einer Sitzung teilnehmen soll
- Ein Support-Operator eine eng begrenzte Einladung braucht
- Die Sitzung auf einen einzelnen Zugriffskontext beschraenkt bleiben soll

## Nutzung 5 - unvollkommene Netzpfade überstehen
Wenn direkte Echtzeitmedien funktionieren, ist die Erfahrung am besten. Wenn nicht, kann `UnyDesk` trotzdem nuetzlich bleiben durch die Kombination aus:

- Broker-Signalisierung
- Sichtbarkeit des Sitzungsstatus
- Peer-Frame-Fallback-Transport
- Wiederanlauf- oder Recovery-Verhalten statt sofortigem Abbruch

Wenn das Ziel zentrale Plattform-Orchestrierung ist, ist `TRINITY` die relevante Architektur. Wenn das Ziel lokale Service-Steuerung ist, ist `UnyPort` die relevante Architektur.
