# TRINITY-Entwicklung
Diese Seite fasst die jüngste funktionale Entwicklung von `TRINITY` auf Basis der tatsächlich umgesetzten Plattformarbeiten zusammen. Sie dokumentiert die öffentliche Produktsicht und die nutzerseitigen Abläufe, ohne interne Implementierungsdetails offenzulegen.

## Überblick
`TRINITY` deckt inzwischen mehr ab als die ursprüngliche Orchestrierungsschicht:

- Kundenkonto und Bestelllebenszyklus
- PDF-Rechnungen und Zahlungsstatus
- kommerzieller und technischer Support
- persistenter Support-Chat
- VM-Lebenszyklus, Konsole und Recovery-Flows
- öffentliche und Admin-Dokumentation
- Consent-, Datenschutz- und Rechtsflächen

Der `TRINITY`-Support umfasst nun ausdrücklich auch **`UnyDesk`** und **`UnyPort`**. Öffentlich ist die Plattform daher als kombinierte Fläche aus Plattform, Betrieb und Support zu verstehen - nicht nur als VM-Kontrolloberfläche.

## Kundenkonto und Bestellungen
Das Kundenkonto wurde um einen vollständigeren Bestellablauf erweitert:

- Liste aktueller Bestellungen
- eigene Bestelldetail-Modalansicht
- statusabhängige Zahlungsdarstellung mit konsistenter Farbsemantik
- Unterscheidung zwischen aktiv, ausstehend, abgelehnt, storniert und gelöscht
- providerspezifische Darstellung, wo erforderlich

Abonnement-Bestellungen zeigen außerdem das **nächste Fälligkeitsdatum**, wenn der jeweilige Flow es liefert. Ausstehende oder fehlgeschlagene Wiederholungen verwenden denselben Eintrag statt Duplikate zu erzeugen.

## PDF-Rechnungen
Die PDF-Rechnungslogik wurde deutlich vereinheitlicht:

- Branding im `TRINITY`-Stil
- stabilisierte Logo-, Header- und Identitätsblöcke
- bessere Behandlung von Sonderzeichen und Akzenten
- ausgerichtete Spalten für Produkt, Menge, Technik und Betrag
- lesbare Rechnungsnummern
- Nettobetrag, MwSt. und Gesamtbetrag inkl. Steuer
- rechtliche Hinweise und Verzugsregelungen
- konsistente Regenerierung älterer PDFs

## Zahlungen
Checkout- und Zahlungsrückläufe wurden erweitert und vereinheitlicht.

### Unterstützte Anbieter und Methoden
Je nach Produkt stellt `TRINITY` bereit:

- **Mollie** für Kartenzahlungen und wiederkehrende Abonnements
- **PayPal** für kompatible Online-Zahlungen
- **Banküberweisung** für manuelle Zahlungen
- **Litecoin** für Krypto-Zahlungen

Vor der Weiterleitung zum Anbieter wurde der Informationsfluss vereinheitlicht:

- Rechnungsidentität
- Rechnungsadresse
- Adressvalidierung und Autocomplete
- Erfassung aller rechnungsrelevanten Kundendaten

### Zahlungsrückläufe und Status
Die Plattform verarbeitet Zahlungsrückläufe jetzt deutlich expliziter:

- systematische Rücklauf-Modalansicht
- **Erfolg** in Grün
- **Ausstehend** in Orange
- **Abgelehnt / Fehlgeschlagen / Storniert** in Rot
- Zahlungswiederholung ohne Bestell-Duplikat
- Wiederaufnahme ausstehender Zahlungen aus dem Kundenkonto

Für manuelle Zahlungen zeigt `TRINITY` detaillierte Anweisungen direkt im Konto:

- IBAN / BIC / Empfänger für Überweisung
- Empfangsadresse und LTC-Betrag für Krypto
- Kopierfunktionen für sensible Referenzen

## Support, Chat und Assistenz
Der Support wurde sowohl in der kommerziellen Positionierung als auch in der Assistenz-UX erweitert.

### Support-Umfang
Der `TRINITY`-Support umfasst ausdrücklich:

- Alpine Linux
- Xen
- **`UnyDesk`**
- **`UnyPort`**

Die Produktseiten wurden entsprechend angepasst, um Produkte, Betrieb und Assistenz nicht künstlich zu trennen.

### Support-Chat
Der Chat wurde von einer Modalansicht auf eine eigene Seite umgestellt, mit:

- Gesprächshistorie
- Frontend-Löschfluss
- vorbefüllten Vorschlägen
- modernerer Chat-Oberfläche
- korrekter Behandlung von einfachem Rich-Text und Inline-Code

Eine wichtige neuere Änderung betrifft nicht angemeldete Besucher:

- Verlauf bleibt auch **ohne Login** zugänglich
- Persistenz über ein **Gast-Token**
- Gespräche werden bei Kontoerstellung zusammengeführt
- für Gäste gilt eine Nachrichtenbegrenzung

## Consent, Cookies und Recht
Auch die sichtbare Compliance im Frontend wurde ausgebaut:

- eigenes Consent-Banner / Präferenzpanel
- Trennung zwischen essenziellen und funktionalen Cookies
- Assistent nur bei entsprechender Zustimmung
- öffentliche Seiten für Cookies, Datenschutz, Bedingungen und rechtliche Hinweise

## VM, Bastion und Konsole
Auch ohne interne Skripte zu dokumentieren, haben mehrere Änderungen das sichtbare Verhalten beeinflusst:

- bessere Wiederaufnahme von Bastion-Konsolen
- klarere VM-Zustände im UI
- robusteres Reboot- und Restart-Verhalten
- strengere Behandlung verwaister oder gelöschter VM-Ressourcen

## Bilder, Katalog und DDM
Zum dokumentierten `TRINITY`-Umfang gehören inzwischen auch:

- System-Images und Varianten
- Konsistenz des DDM-Modells
- Katalogdarstellung
- klarere Alpine-, Xen- und `TRINITY`-Flows

## Dokumentationsflächen
Die Dokumentation wurde neu strukturiert, um zu unterscheiden zwischen:

- öffentlicher Dokumentation
- Admin-Dokumentation
- Produktdarstellung
- betriebsnahen Details

## Aktuelle Grenzen und nächste Schritte
Zum Zeitpunkt dieser Zusammenfassung bleiben mehrere Bereiche erwartbar in Entwicklung:

- stärkere Automatisierung für Überweisungs- und Krypto-Rückläufe
- weitere Verbesserung der PayPal- und Mollie-Rückläufe innerhalb der API-Grenzen
- schrittweiser Ausbau von Katalogen und System-Images
- weitere Vereinheitlichung von `TRINITY`, `UnyDesk` und `UnyPort`

Kurz gesagt: `TRINITY` ist nicht mehr nur ein Plattform-Einstiegspunkt. Es ist jetzt eine vereinheitlichte Fläche für **Bestellungen, Support, Rechnungen, VMs, Konsole und Dokumentation**, explizit verbunden mit **`UnyDesk`** und **`UnyPort`**.
