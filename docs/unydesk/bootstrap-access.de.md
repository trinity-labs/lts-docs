# Bootstrap und Zugriff
`UnyDesk` muss zwei öffentliche Probleme loesen, bevor eine Fernsitzung beginnen kann:

- Wie die Host-Software installiert und vertraut gemacht wird
- Wie ein Viewer diesen Host erreichen darf

## Verteilung des Host-Pakets
Der erste öffentliche Schritt ist meist der Download des Host-Pakets. Ein Nutzer waehlt das passende Host-Binärpaket für das Zielsystem und installiert oder startet es auf der Maschine, die später Fernzugriff empfangen soll.

Öffentlich sollte der Verteilungsweg einfach bleiben:

- Unterstütztes Zielsystem klar sichtbar
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

Der Viewer soll erkennen können, ob ein Host nur online, bereits gepairt oder noch in einem Vertrauensschritt blockiert ist.

## Lokale Freigabe
Einige Hosts können eine lokale Freigabe erzwingen, bevor die Fernsitzung beginnt. Öffentlich bedeutet das:

- Eine Sitzung kann korrekt geroutet sein und trotzdem auf Host-Freigabe warten
- Ein Host kann die Anfrage lokal annehmen oder ablehnen
- Ein kuerzlich freigegebener Teilnehmer kann erneut zugelassen werden, ohne sofort die komplette Rueckfrage zu wiederholen
- Eine explizite Ablehnung kann diese gemerkte Freigabe für denselben Teilnehmer widerrufen

## Zugriffsmodi
Öffentlich kann `UnyDesk` in zwei groben Zugriffsmodi verwendet werden:

- **Kontoorientierter Zugriff** über die normale Service-Fläche
- **Standalone-Zugriff** über einen direkten Sitzungslink und ein sitzungsspezifisches Token

Standalone-Zugriff ist hilfreich, wenn:

- Ein Nutzer ohne komplettes Kontoportal an einer Sitzung teilnehmen soll
- Ein Support-Operator eine eng begrenzte Einladung braucht
- Die Sitzung auf einen einzelnen Zugriffskontext beschraenkt bleiben soll

## Vor dem Öffnen einer Sitzung
1. Prüfen, dass das richtige Host-Paket installiert ist
2. Prüfen, dass der Host online ist
3. Prüfen, wie Host-Identitaet oder Pairing-Zustand aussehen
4. Prüfen, ob lokale Freigabe erforderlich ist
5. Prüfen, ob die Sitzung konto-basiert oder standalone sein soll
