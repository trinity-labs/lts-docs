# Zugriff und Authentifizierung
`UnyPort` verwendet ein kompaktes Authentifizierungsmodell mit lokalen Benutzern, JWT-Cookies und CSRF-Schutz. Die Anwendung unterstuetzt ausserdem OAuth-Login ueber GitHub und GitLab, wenn die Provider-Einstellungen vollstaendig konfiguriert sind.

## Lokale Benutzer und Bootstrap
Die primaere Identitaetsquelle ist `settings/users.json`.

Wichtiges Verhalten:

- Wenn `users.json` fehlt, legt `UnyPort` einen ersten Admin an
- Die angelegte E-Mail ist `demo@unyport.app`
- Das Passwort kommt aus `UNYPORT_ADMIN_PASSWORD` oder faellt auf den eingebauten Standard zurueck
- Das Repository bringt in seiner Quellstruktur zusaetzlich einen Demo-Benutzer fuer Evaluation mit

Damit sind Deployment-Pfad und Repository-Evaluationspfad verwandt, aber nicht identisch.

## Rollen
Drei Rollen werden vom Backend akzeptiert:

- `admin`
- `operator`
- `viewer`

Ihre operative Bedeutung:

- `viewer`: Authentifizierte Nur-Lese-Nutzung
- `operator`: Authentifizierte Nutzung mit Routine-Schreibaktionen wie Profil- und Passwortaenderung
- `admin`: Voller Zugriff inklusive Benutzer- und Branding-Administration

In der aktuellen UI koennen Viewer das Portal lesen, aber keine Profil- oder Passwortaenderungen speichern.

## OAuth-Provider
OAuth ist fuer folgende Provider implementiert:

- GitHub
- GitLab

Die Provider-Deklarationen stehen in `settings/config.yaml`. Platzhalterwerte werden absichtlich ignoriert, daher wird OAuth erst aktiv, wenn echte `client_id`, `client_secret` und `redirect_url` gesetzt sind.

## Sitzungsmodell
Nach erfolgreicher Authentifizierung gibt `UnyPort` ein JWT-Cookie aus:

- Signiert mit `security.jwt_secret`
- Gespeichert als HTTP-only-Cookie
- Vom `https`-Schalter fuer Secure-Cookie-Verhalten beeinflusst
- Zeitlich begrenzt ueber `security_extra.session_timeout_mins`

## CSRF, Rate Limit und Trusted Origins
Die Anwendung erzwingt ausserdem:

- CSRF-Schutz mit eigenem Endpoint `/api/csrf`
- Login-Rate-Limit, standardmaessig `5` Versuche pro Minute
- Trusted-Origin-Pruefung fuer zustandsaendernde Requests

Wenn `trusted_origins` leer ist, berechnet `UnyPort` eine Standardliste aus aktiven lokalen Interfaces auf Port `8800`.

## Admin-Aktionen
Admin-exklusive Schreibaktionen sind aktuell:

- Benutzer anlegen
- Rollen aendern
- Benutzer loeschen ausser dem eigenen Konto
- Instanz-Branding aktualisieren oder zuruecksetzen

Damit bleibt Administration explizit und klein gehalten.
