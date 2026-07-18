# Handbuch
Diese Seite ist der praktische Einstieg für Operatoren, die `UnyPort` im Alltag verwenden. Sie konzentriert sich auf den sichtbaren Ablauf vom ersten Login bis zu überwachten Aktionen.

## Normaler Operator-Pfad
Der uebliche Pfad ist:

1. Die `UnyPort`-URL öffnen
2. Sich mit lokalem oder OAuth-Konto anmelden
3. Die erkannte Host-Rolle bestaetigen
4. Dashboard und Neustart-Historie lesen
5. Zu Hypervisor-, Network-, Storage- oder Security-Seiten wechseln
6. Bei Bedarf eine interne proxied Anwendung öffnen
7. Profil oder Admin-Einstellungen nur ändern, wenn die Rolle es erlaubt

```text
Portal oeffnen
  -> Authentifizieren
  -> Host-Rolle lesen
  -> CPU / Speicher / Netzwerk pruefen
  -> Xen- oder LBU-Kontext ansehen
  -> Logs oder Sicherheit pruefen
  -> Bei Bedarf zu TRINITY oder UnyDesk eskalieren
```

## Vor der ersten Nutzung
Einige Informationen sollten vorliegen:

- Die korrekte URL oder der Reverse-Proxy-Einstieg
- Ein lokaler Benutzer oder ein konfigurierter OAuth-Provider
- Der erwartete Host-Typ: Dom0, DomU, Container oder Alpine-Host
- Die Frage, ob eine interne Anwendung wie `ttyd` verfügbar sein soll

## Was das Portal zeigen kann
Je nach Konfiguration und Host-Rolle kann `UnyPort` zeigen:

- Dashboard-Zusammenfassungen
- Live-Daten für CPU, Speicher und Netzwerk
- Disk-Zustand und LBU-Persistenz
- OpenRC-Dienste und ausgewählte Logs
- Sicherheitschecks und Port-Exposition
- Xen-Hypervisor- und Domain-Daten auf Dom0
- Operator-Profil, SSH-Key und Branding-Einstellungen

## Wenn der Pfad technischer wird
Der Workflow wird technischer, wenn der Operator:

- Alpine- oder Kernel-Version mit `TRINITY`-Boot-Tags vergleichen muss
- Einen Dom0 und seine aktiven Domains inspiziert
- Prüft, ob LBU-Änderungen commitet wurden
- Abgestuerzte Dienste analysiert
- Eine Terminal-Anwendung über `/proxy/<name>/` öffnet

Die folgenden Seiten bilden das strukturierte Handbuch für diese Aufgaben.
