# Hintergrund
Diese Seite nimmt die nützliche Geschichte aus der Admin-Dokumentation zurück `Filebrowser`, weil `UnyCloud` ist die Produktoberfläche, die auf dieser Laufzeit aufgebaut ist.

## Filebrowser Base
Die erste Basis ist ein Filebrowser-Service, der sich `<cloud-host>`mit:

- Ein Projekt besteht aus `docker_cloud`
- Ein Upstream-Bild `filebrowser/filebrowser:latest`
- Eine anhaltende lokale Basis
- Eine Speicheranordnung unter `/srv`
- Ein Branding Tree, der im Container montiert ist

Dieser Schritt stellt die Hauptfähigkeit fest: Offenlegen einer Webdatei, die unter einer TRINITY-URL surft.

## Filebrowser-Linie und Wartung
Der UnyCloud-Repository-Historie behält den Filebrowser. `2.63.x` Juni und Juli 2026 bringen viele wichtige Korrekturen: Umfangskontrollen, öffentliches Teilen, Uploads, Symlinks, Archive, Vorschau und HTTP-Sicherheit.

Die `2026-08-29`, `UnyCloud 0.0.1` legt offiziell die Gabel von Filebrowser gepflegt, mit einem konservativen Vertrag: bewahren Sie die Basis, die LTC, Flags, Variablen `FB_*`, bestehende Konfigurationen und Nutzungsmodell.

## Branding UnyCloud
Die dokumentierte Historie auf der Filebrowser-Seite zeigt dann die Trennung zwischen:

- Native Branding geladen von `custom.css`
- Die im Rahmen der `/static/...`
- ⭕ Branding-Scripts, die nicht unbedingt von der Login-Seite ausgeführt werden

Dieser Punkt erklärt, warum `UnyCloud` muss das Branding als Produktteil dokumentieren, aber den Verhaltensfehler im Admin behalten.

## Stabilisierung des Logins
Ein Autofill-Vorfall klärte die Rolle des Reverse-Proxys: Die vom Filebrowser SPA gerenderten Anmeldefelder trugen nicht immer die von den Browsern erwarteten Attribute.

Die Korrektur ist eine Inline-Injektionsseite `nginx`, in der Konfiguration `trinity-cloud.conf`, um die Attribute zu erzwingen `name` und `autocomplete` nützlich.

## Härten von UnyCloud
Die erste Zeile UnyCloud fügt Anwendungshärtung hinzu: strenges CSP ohne Inline-Skripte, Bootstrap-Umzug in statisches JavaScript, Authentifizierungscookies `HttpOnly`, `SameSite=Strict` und `Secure` in HTTPS, Milzgrenzen, Protokolle `unycloud_security`, Security Admin Endpoints und fail2ban Integration.

bis `2026-08-30`, zeigt das lokale Repository an `UNYCLOUD_VERSION=0.9.15`Die Git-Geschichte zeigt eine schnelle Serie von Veröffentlichungen `0.6.x`, `0.8.0`, `0.9.0` dann `0.9.15`, zentriert auf Patches und Härten.

## Aktueller Status
Heute, `UnyCloud` ist zu verstehen als:

- Cloud-basierter Produktbereich
- Eine Filebrowser-kompatible Laufzeit, die von UnyCloud verwaltet wird
- Eine spezifische Branding-Trinity
- Ein Dienst, dessen sichtbares Verhalten auch vom Proxy abhängt

Die wichtige Geschichte ist nicht nur die Installation eines Containers, sondern die Umwandlung von Filebrowser in einen UlyCloud-Service, der genutzt, gebrandmarkt und in den Rest von TRINITY integriert werden kann.
