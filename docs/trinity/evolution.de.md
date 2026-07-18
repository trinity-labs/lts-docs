# TRINITY-Entwicklung
Diese Seite fasst die jüngste funktionale Entwicklung von `TRINITY` auf Basis der tatsächlich umgesetzten Plattformarbeiten zusammen. Sie dokumentiert die öffentliche Produktsicht und die nutzerseitigen Abläufe, ohne interne Implementierungsdetails offenzulegen.

## Überblick
`TRINITY` deckt inzwischen mehr ab als die ursprüngliche Orchestrierungsschicht:

- Kundenkonto und Bestelllebenszyklus
- PDF-Rechnungen und Zahlungsstatus
- Kommerzieller und technischer Support
- Persistenter Support-Chat
- VM-Lebenszyklus, Konsole und Recovery-Flows
- Öffentliche und Admin-Dokumentation
- Consent-, Datenschutz- und Rechtsflächen

Der `TRINITY`-Support umfasst nun ausdrücklich auch **`UnyDesk`** und **`UnyPort`**. Öffentlich ist die Plattform daher als kombinierte Fläche aus Plattform, Betrieb und Support zu verstehen - nicht nur als VM-Kontrolloberfläche.

## Kundenkonto und Bestellungen
Das Kundenkonto wurde um einen vollständigeren Bestellablauf erweitert:

- Liste aktueller Bestellungen
- Eigene Bestelldetail-Modalansicht
- Statusabhängige Zahlungsdarstellung mit konsistenter Farbsemantik
- Unterscheidung zwischen aktiv, ausstehend, abgelehnt, storniert und gelöscht
- Providerspezifische Darstellung, wo erforderlich

Abonnement-Bestellungen zeigen außerdem das **nächste Fälligkeitsdatum**, wenn der jeweilige Flow es liefert. Ausstehende oder fehlgeschlagene Wiederholungen verwenden denselben Eintrag statt Duplikate zu erzeugen.

## PDF-Rechnungen
Die PDF-Rechnungslogik wurde deutlich vereinheitlicht:

- Branding im `TRINITY`-Stil
- Stabilisierte Logo-, Header- und Identitätsblöcke
- Bessere Behandlung von Sonderzeichen und Akzenten
- Ausgerichtete Spalten für Produkt, Menge, Technik und Betrag
- Lesbare Rechnungsnummern
- Nettobetrag, MwSt. und Gesamtbetrag inkl. Steuer
- Rechtliche Hinweise und Verzugsregelungen
- Konsistente Regenerierung älterer PDFs

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

- Systematische Rücklauf-Modalansicht
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
- Vorbefüllten Vorschlägen
- Modernerer Chat-Oberfläche
- Korrekter Behandlung von einfachem Rich-Text und Inline-Code

Eine wichtige neuere Änderung betrifft nicht angemeldete Besucher:

- Verlauf bleibt auch **ohne Login** zugänglich
- Persistenz über ein **Gast-Token**
- Gespräche werden bei Kontoerstellung zusammengeführt
- Für Gäste gilt eine Nachrichtenbegrenzung

## Consent, Cookies und Recht
Auch die sichtbare Compliance im Frontend wurde ausgebaut:

- Eigenes Consent-Banner / Präferenzpanel
- Trennung zwischen essenziellen und funktionalen Cookies
- Assistent nur bei entsprechender Zustimmung
- Öffentliche Seiten für Cookies, Datenschutz, Bedingungen und rechtliche Hinweise

## VM, Bastion und Konsole
Auch ohne interne Skripte zu dokumentieren, haben mehrere Änderungen das sichtbare Verhalten beeinflusst:

- Bessere Wiederaufnahme von Bastion-Konsolen
- Klarere VM-Zustände im UI
- Robusteres Reboot- und Restart-Verhalten
- Strengere Behandlung verwaister oder gelöschter VM-Ressourcen

## Bilder, Katalog und DDM
Zum dokumentierten `TRINITY`-Umfang gehören inzwischen auch:

- System-Images und Varianten
- Konsistenz des DDM-Modells
- Katalogdarstellung
- Klarere Alpine-, Xen- und `TRINITY`-Flows

## Dokumentationsflächen
Die Dokumentation wurde neu strukturiert, um zu unterscheiden zwischen:

- Öffentlicher Dokumentation
- Admin-Dokumentation
- Produktdarstellung
- Betriebsnahen Details

## Aktuelle Grenzen und nächste Schritte
Zum Zeitpunkt dieser Zusammenfassung bleiben mehrere Bereiche erwartbar in Entwicklung:

- Stärkere Automatisierung für Überweisungs- und Krypto-Rückläufe
- Weitere Verbesserung der PayPal- und Mollie-Rückläufe innerhalb der API-Grenzen
- Schrittweiser Ausbau von Katalogen und System-Images
- Weitere Vereinheitlichung von `TRINITY`, `UnyDesk` und `UnyPort`

Kurz gesagt: `TRINITY` ist nicht mehr nur ein Plattform-Einstiegspunkt. Es ist jetzt eine vereinheitlichte Fläche für **Bestellungen, Support, Rechnungen, VMs, Konsole und Dokumentation**, explizit verbunden mit **`UnyDesk`** und **`UnyPort`**.
