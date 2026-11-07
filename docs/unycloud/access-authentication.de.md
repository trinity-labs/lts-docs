# Zugang und Authentifizierung
`UnyCloud` hinter HTTPS ausgesetzt ist und vor dem Zugriff auf Dateien eine Authentifizierung erfordert.

## Eingangsstelle
Der Benutzereinstiegspunkt ist:

```text
https://<cloud-domain>/login
```

## Login
Die Anmeldeschnittstelle wird von der Filebrowser-Applikation gerendert. Das sichtbare Verhalten hängt daher von zwei Ebenen ab:

- Filebrowser Application Bundle
- Die Reverse Proxy TRINITY, die einige HTML-Attribute beheben kann

## Autofill-Browser
Die Filebrowser-Historie hat einen wichtigen Punkt gezeigt: Die Anmeldeseite ist kein einfaches statisches HTML. Felder können von einem SPA erzeugt werden, was das automatische Ausfüllen von Attributen behindern kann. `name` und `autocomplete` nicht vorhanden sind.

Die Betriebsvorschrift lautet:

- Visuelles Problem: Branding überprüfen
- Autofill-Problem: Überprüfen Sie den Proxy
- ID-Problem: Überprüfen Sie das Filebrowser-Konto und die Datenbank

## Trennung der Zuständigkeiten
`UnyCloud` Der Filebrowser trägt die Anwendungsverwaltung der Dateien. Der Reverse Proxy trägt die HTTPS-Belichtung und einige Sicherheitsvorkehrungen.
