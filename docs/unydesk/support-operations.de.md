# Support and operations
`UnyDesk`-Support ist in erster Linie operativ. Das Nutzerproblem lautet oft nicht "die Seite ist nicht verfuegbar", sondern "der Host ist online, die Sitzung existiert und trotzdem wird der Medienpfad nicht nutzbar". Oeffentliche Support-Hilfe muss sich deshalb auf Zustaende, Nachweise und Transportverhalten konzentrieren.

## Support-Umfang
Oeffentlich kann `UnyDesk`-Support sich beziehen auf:

- Unklarheiten beim Download des Host-Pakets oder beim Bootstrap
- Claim-, Pairing- oder Vertrauensprobleme
- Sitzungsrouting zum falschen Host oder zu keinem Host
- Lokale Freigaben, die nicht erscheinen oder missverstanden werden
- WebRTC-Signalisierung, die vor dem Answer blockiert
- Direkten Medienpfad ohne dekodiertes Bild
- Fehlende Bildschirm-Fallback-Ausgabe
- Probleme mit Zwischenablage oder Dateiuebertragung

## Nuetzliche Nachweise
```markdown
Betreff: UnyDesk-Sitzung akzeptiert, aber kein Video

Session ID: 188529734844f375
Ziel-Host: DESKTOP-RET6DCA
Beobachteter Zustand: offered -> accepted, kein sichtbares Video
Viewer-Transporthinweis: no remote answer yet / no inbound RTP / fallback fehlt
Erwartetes Ergebnis: Live-Bildschirm oder Peer-Frame-Fallback
```

## Sitzung in Stufen lesen
Oeffentlich scheitert eine Fernsitzung meist in einer dieser Stufen:

1. Host-Paket fehlt oder Host ist offline
2. Host ist sichtbar, aber nicht gepairt oder nicht vertraut
3. Sitzung erstellt, aber nicht geroutet
4. Sitzung geroutet, aber wartet auf lokale Freigabe
5. Host akzeptiert, aber kein Answer gepostet
6. Answer gepostet, aber ICE bleibt unbrauchbar
7. Echtzeitvideo verhandelt, aber kein dekodiertes Bild
8. Fallback erwartet, aber kein Peer-Frame erscheint

## Typische hilfreiche Symptome
- "Host offline"
- "Session pending"
- "Dispatch accepted but no answer"
- "Answer applied but ICE stays checking"
- "No inbound video RTP yet"
- "Realtime track timed out"
- "Peer frame fallback requested but no image arrived"

## Vor einer Eskalation
Pruefen:

- Dass die richtige Host-Paketversion laeuft
- Dass der Host weiterhin online ist
- Dass die Sitzungsroute auf den erwarteten Host zeigt
- Dass lokale Freigabe erteilt wurde, falls erforderlich
- Dass der Browser-Viewer auf derselben Sitzungsseite geblieben ist
- Dass das Problem als Signalisierung, Direktmedien oder Fallback-Bildlieferung verstanden ist

## Verwandte Flaechen
- **`TRINITY`** fuer Konto-, Rechnungs-, Bestell- oder Service-Eigentumsthemen
- **`UnyPort`** fuer breitere Infrastruktur-Sichtbarkeit
- **`UnyDesk`** fuer den interaktiven Fernzugriff selbst
