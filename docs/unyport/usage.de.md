# Nutzung von UnyPort
`UnyPort` wird verwendet, wenn der Plattform-Operator schnelle Host-Sichtbarkeit, eine stabile Authentifizierungsflaeche und wenige gezielte Betriebseinstiege braucht. Es ist nicht fuer Commerce oder Kunden-Workflows optimiert. Es ist fuer ueberwachte Infrastruktursicht optimiert.

## Nutzung 1 - anmelden und Host-Kontext bestaetigen
Operatoren beginnen meist damit:

- Sich lokal oder ueber OAuth anzumelden
- Die erkannte Host-Rolle zu lesen
- Zu bestaetigen, ob die Flaeche ein Dom0, DomU, Container oder Alpine-Host ist

Dieser erste Schritt veraendert die gesamte weitere Lesart, weil ein Dom0 Xen-weiten Kontext zeigt, waehrend ein DomU eher wie ein VM-Beobachter arbeitet.

## Nutzung 2 - Live-Systemzustand lesen
Der haeufigste laufende Gebrauch ist Echtzeit-Monitoring:

- CPU- und Per-Core-Aktivitaet
- Speichernutzung und Cache-Verhalten
- Netzwerkdurchsatz
- Storage-Belegung
- Temperaturen, Prozesse und Load

Das Portal ist damit bereits vor tieferen Eingriffen ein brauchbares Live-Betriebsdashboard.

## Nutzung 3 - Alpine- und Xen-Besonderheiten inspizieren
`UnyPort` wird auch verwendet, um sehr Alpine- und Xen-spezifische Fragen zu beantworten:

- Ist LBU vorhanden und commitet
- Welche Alpine-Version laeuft
- Welcher Kernel laeuft
- Welche Xen-Version und welcher Scheduler auf Dom0 aktiv sind
- Wie viele Domains laufen und wie viel Speicher sie verbrauchen

## Nutzung 4 - Dienste, Logs und Sicherheit pruefen
Die Resources- und Security-Flaechen unterstuetzen routinemaessiges Troubleshooting:

- OpenRC-Dienste pruefen
- Erlaubte Logs tailen
- Lauschende Ports ansehen
- Hardening-Status bestaetigen
- Kritische Prozesse oder Dienstabstuerze identifizieren

## Nutzung 5 - internes Werkzeug ueber das Portal oeffnen
Wenn konfiguriert, kann `UnyPort` auch als Einstieg in ein proxied internes Werkzeug wie `ttyd` dienen. Damit bleibt der Operator in einer einzigen authentifizierten Oberflaeche und erreicht dennoch terminalorientierte Workflows.

## Nutzung 6 - wissen, wann die Oberflaeche gewechselt werden muss
`UnyPort` ist nicht das einzige Werkzeug im Oekosystem.

- `TRINITY` Verwenden, wenn es um Service-Lebenszyklus, Konto, Abrechnung oder Kundenoperationen geht.
- `UnyDesk` Verwenden, wenn Fernzugriff oder direkte Assistenz gefragt ist.
- In `UnyPort` bleiben, wenn Host-Zustand, Infrastrukturkontext oder kontrollierter Proxy-Zugang gefragt sind.
