# Nutzung von TRINITY
`TRINITY` wird als Lebenszyklus-Portal genutzt. Dieselbe Website muss es ermoeglichen, ein Angebot zu entdecken, zu kaufen, zu bezahlen, eine Bestellung zu verfolgen, eine Rechnung zu oeffnen, Hilfe anzufordern und in manchen Faellen auf eine VM oder eine Konsole zuzugreifen. Diese Seite beschreibt die wichtigsten oeffentlichen Nutzungen.

## Nutzung 1 - Angebot entdecken und Kontakt aufnehmen
Nutzer beginnen haeufig mit:

- Einer Angebotsseite
- Der oeffentlichen Dokumentation
- Der Support-Seite
- Der Kontaktseite

Diese erste Phase hilft dabei zu erkennen, ob der Bedarf zu `TRINITY`-Support, einer Leistung, einer Schulung, `UnyDesk` oder `UnyPort` gehoert.

## Nutzung 2 - Konto erstellen und bestellen
`TRINITY` unterstuetzt den klassischen Kundenweg:

- Kontoerstellung
- Anmeldung
- Eingabe von Rechnungsinformationen
- Auswahl einer Zahlungsmethode
- Verarbeitung des Zahlungsruecklaufs
- Einsicht in Bestellung und Rechnung

Bestellungen koennen Support, Leistungen, Schulungen oder infrastrukturbezogene Services betreffen.

## Nutzung 3 - Bestellung und Zahlung verfolgen
Nach dem Kauf kann der Kunde einsehen:

- Zahlungsstatus
- Bestellreferenzen
- Die PDF-Rechnung
- Rechnungsinformationen
- Ausgewaehlte Wiederaufnahme- oder Fortsetzungsaktionen bei ausstehenden Zahlungen

`TRINITY` zeigt unterschiedliche Zustaende je nach Situation: erfolgreiche Zahlung, ausstehende Zahlung, abgelehnte Zahlung, Stornierung oder Wiederholung.

## Nutzung 4 - VM oder Konsole aufrufen
Wenn ein Service dies erlaubt, kann `TRINITY` Zugriff auf eine virtuelle Maschine oder auf eine Konsole bereitstellen.

![VM- und Konsolenansicht](../assets/images/screens/trinity-console.png)

*Generierte Aufnahme einer `TRINITY`-VM-Ansicht im Data Disk Mode.*

In diesem Kontext kann der Nutzer:

- Pruefen, ob eine VM erreichbar ist
- Ihren Status lesen
- Eine Konsolensitzung oeffnen
- In einem wartungsorientierten Modus arbeiten

## Nutzung 5 - Data Disk Mode verstehen
Der **Data Disk Mode** ist nuetzlich, wenn nicht ein normaler Anwendungsdienst gestartet werden soll, sondern gezielt auf die Umgebung selbst eingegriffen werden muss. In der Praxis dient dieser Modus dazu:

- Den Inhalt eines Datentraegers zu pruefen
- Ein Dateisystem zu inspizieren
- Eine Umgebung wiederherzustellen
- Wartungs- oder Recovery-Arbeiten auszufuehren

Fuer den Nutzer bedeutet das: Eine VM kann in einem technischeren Modus verfuegbar sein, der auf Erhalt, Analyse oder Wiederherstellung von Daten ausgerichtet ist.

## Nutzung 6 - Alpine Linux und Xen verstehen
Zwei oeffentliche Bausteine sind in `TRINITY` wichtig:

- **Alpine Linux**: ein schlankes System fuer kompakte, schnelle und kontrollierte Service-Umgebungen
- **Xen**: die Hypervisor-Schicht, die die virtuellen Maschinen traegt

Nutzer muessen Xen nicht direkt administrieren, um `TRINITY` zu verwenden. Sie sollten jedoch verstehen, dass ihre Services auf diesem Virtualisierungsmodell und auf Alpine-Linux-Umgebungen beruhen.

## Nutzung 7 - wissen, wann UnyDesk oder UnyPort relevant ist
`TRINITY` ist nicht die einzige Oberflaeche im Oekosystem.

- **`UnyDesk`** ist richtig, wenn Fernzugriff oder operatorgestuetzte Assistenz gebraucht wird.
- **`UnyPort`** ist richtig, wenn es um Ueberwachung, Kontrolle oder Topologie geht.

![`UnyPort`-Ansicht](../assets/images/generated/unyport-live-dashboard.png)

*Generierte Aufnahme des `UnyPort`-Demo-Dashboards zur Illustration von Infrastruktur- und Zustandsuebersicht.*
