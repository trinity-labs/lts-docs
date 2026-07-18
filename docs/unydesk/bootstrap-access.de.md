# Bootstrap and access
`UnyDesk` muss zwei oeffentliche Probleme loesen, bevor eine Fernsitzung beginnen kann:

- Wie die Host-Software installiert und vertraut gemacht wird
- Wie ein Viewer diesen Host erreichen darf

## Verteilung des Host-Pakets
Der erste oeffentliche Schritt ist meist der Download des Host-Pakets. Ein Nutzer waehlt das passende Host-Binaerpaket fuer das Zielsystem und installiert oder startet es auf der Maschine, die spaeter Fernzugriff empfangen soll.

Oeffentlich sollte der Verteilungsweg einfach bleiben:

- Unterstuetztes Zielsystem klar sichtbar
- Aktuelles Paket leicht erkennbar
- Installations- oder Bootstrap-Pfad eindeutig
- Update- oder erneuter Downloadpfad stabil

## Registrierung, Claim und Pairing
Nach dem ersten Start ist der Host noch kein sinnvoll nutzbarer Fernzugriffsendpunkt. Er muss sich registrieren und eine Identitaet bereitstellen.

Je nach Szenario kann `UnyDesk` Folgendes beinhalten:

- Erste Registrierung der Host-Laufzeit
- Claim oder Pairing mit einem Konto
- Zuordnung zu einem Vertrauenskontext
- Wiederverwendung einer bekannten Host-Identitaet nach Reconnect

Der Viewer soll erkennen koennen, ob ein Host nur online, bereits gepairt oder noch in einem Vertrauensschritt blockiert ist.

## Lokale Freigabe
Einige Hosts koennen eine lokale Freigabe erzwingen, bevor die Fernsitzung beginnt. Oeffentlich bedeutet das:

- Eine Sitzung kann korrekt geroutet sein und trotzdem auf Host-Freigabe warten
- Ein Host kann die Anfrage lokal annehmen oder ablehnen
- Ein kuerzlich freigegebener Teilnehmer kann erneut zugelassen werden, ohne sofort die komplette Rueckfrage zu wiederholen
- Eine explizite Ablehnung kann diese gemerkte Freigabe fuer denselben Teilnehmer widerrufen

## Zugriffsmodi
Oeffentlich kann `UnyDesk` in zwei groben Zugriffsmodi verwendet werden:

- **Kontoorientierter Zugriff** ueber die normale Service-Flaeche
- **Standalone-Zugriff** ueber einen direkten Sitzungslink und ein sitzungsspezifisches Token

Standalone-Zugriff ist hilfreich, wenn:

- Ein Nutzer ohne komplettes Kontoportal an einer Sitzung teilnehmen soll
- Ein Support-Operator eine eng begrenzte Einladung braucht
- Die Sitzung auf einen einzelnen Zugriffskontext beschraenkt bleiben soll

## Vor dem Oeffnen einer Sitzung
1. Pruefen, dass das richtige Host-Paket installiert ist
2. Pruefen, dass der Host online ist
3. Pruefen, wie Host-Identitaet oder Pairing-Zustand aussehen
4. Pruefen, ob lokale Freigabe erforderlich ist
5. Pruefen, ob die Sitzung konto-basiert oder standalone sein soll
