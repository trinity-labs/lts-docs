# Nutzung von UnyDesk
`UnyDesk` wird verwendet, wenn der Nutzer einen Fernzugriff initiieren oder empfangen muss. Oeffentlich wichtig ist dabei: Die Nutzung ist sitzungsgetrieben. Der Nutzer oeffnet nicht nur ein Werkzeug, sondern startet eine Beziehung zwischen Viewer, Host, Route und einem oder mehreren Transportpfaden.

Typische oeffentliche Nutzungen sind:

- die Landing Page des Fernzugriffsdienstes oeffnen
- das passende Host-Paket fuer ein Zielsystem auswaehlen
- einen Host bootstrappen oder claimen
- eine Fernsitzung oeffnen oder ueberwachen
- einen Standalone-Sitzungslink teilen
- assistierten Support mit lokaler Freigabe am Host durchfuehren
- mit Bildschirm-Fallback weiterarbeiten, wenn direktes Echtzeitvideo degradierte Wege hat

## Nutzung 1 - einen Host vorbereiten
Nutzer beginnen oft damit:

- das richtige Host-Paket herunterzuladen
- die Host-Laufzeit zu starten oder zu installieren
- zu pruefen, ob der Host online erscheint
- zu bestaetigen, dass Pairing oder Claim abgeschlossen ist

## Nutzung 2 - eine Support-Sitzung starten
In einer normalen assistierten Sitzung:

- oeffnet der Viewer die `UnyDesk`-Seite
- waehlt oder adressiert einen Host
- erstellt eine Sitzung
- wartet auf Host-Akzeptanz
- beobachtet den Uebergang nach offered, accepted und active

## Nutzung 3 - in der Browser-Sitzung arbeiten
Sobald eine Sitzung lebt, kann der Browser-Viewer typischerweise:

- den entfernten Bildschirm sehen
- den Mauszeiger bewegen
- Tastatureingaben senden
- Zwischenablageinhalte austauschen
- Dateien an den Host senden
- die Sitzung schliessen oder ueberwachen

## Nutzung 4 - Standalone-Modus verwenden
Standalone-Zugriff ist hilfreich, wenn:

- ein Nutzer ohne komplettes Kontoportal an einer Sitzung teilnehmen soll
- ein Support-Operator eine eng begrenzte Einladung braucht
- die Sitzung auf einen einzelnen Zugriffskontext beschraenkt bleiben soll

## Nutzung 5 - unvollkommene Netzpfade ueberstehen
Wenn direkte Echtzeitmedien funktionieren, ist die Erfahrung am besten. Wenn nicht, kann `UnyDesk` trotzdem nuetzlich bleiben durch die Kombination aus:

- Broker-Signalisierung
- Sichtbarkeit des Sitzungsstatus
- Peer-Frame-Fallback-Transport
- Wiederanlauf- oder Recovery-Verhalten statt sofortigem Abbruch

Wenn das Ziel zentrale Plattform-Orchestrierung ist, ist `TRINITY` die relevante Architektur. Wenn das Ziel lokale Service-Steuerung ist, ist `UnyPort` die relevante Architektur.
