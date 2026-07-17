# UnyDesk Präsentation
`UnyDesk` ist die Remote-Desktop- und Assistenzoberfläche der Plattform. Es ist keine generische Werkzeugsammlung, sondern die Architektur für Live-Zugriff zwischen einem Browser-Benutzer und einer registrierten Maschine.

## Produktposition
`UnyDesk` steht neben den zwei anderen Architekturen:

- **`TRINITY`**: Konto, Bestellungen, Services, Rechnungen und Support-Einstieg
- **`UnyDesk`**: Remote-Zugriff, Host-Pakete, Assistenzsitzungen und Live-Interaktion
- **`UnyPort`**: lokaler Betrieb, Überwachung und kontrollierte Infrastruktursicht

Diese Trennung hält jedes Produkt verständlich. Wer Abrechnung verwaltet, nutzt `TRINITY`. Wer einen Host inspiziert, nutzt `UnyPort`. Wer eine Maschine steuern oder unterstützen will, nutzt `UnyDesk`.

## Sichtbare Fähigkeiten
Die öffentliche Oberfläche kann Folgendes bereitstellen:

- eine Einstiegsseite für Remote-Zugriff
- Host-Downloads für Linux, Windows und macOS
- Prüfsummen zur Release-Verifikation
- Sitzungseinstieg per Konto oder Standalone-Modus
- Claim- und Trust-Flows für Hosts
- Sitzungsstatus und Dispatch-Sichtbarkeit
- browserbasierte Viewer-Steuerung
- Bildschirm-Fallback, wenn direkte Medienverbindung eingeschränkt ist

## Entwurfsprinzipien
`UnyDesk` folgt diesen Produktregeln:

- die Host-Laufzeit ist eine zentrale Komponente
- Sitzungsstatus muss verständlich bleiben
- Vertrauen muss explizit sein, bevor Zugriff sinnvoll ist
- direkter Echtzeittransport wird bevorzugt, aber nicht vorausgesetzt
- die Broker-API ist der Vertrag zwischen Benutzeroberfläche und Host-Seite

## Was nicht in diese Seite gehört
Diese öffentliche Dokumentation zeigt keine privaten Pfade, Geheimnisse oder nur intern genutzte Wiederherstellungsverfahren. Diese Themen gehören in die eingeschränkte Dokumentation.
