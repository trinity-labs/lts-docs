# Sicherheit und Betrieb
`UnyCloud` Die Sicherheit basiert auf einer strengen Lesbarkeit der tatsächlich montierten Zugriffe, Transporte und Daten.

## Kontrollpunkte
- ✅ HTTPS aktiv auf `<cloud-domain>`
- ✅ Reverse Proxy kohärent
- ✅ Dateibrowser-Datenbank persistent
- ✅ Voraussichtlicher Speicherbaum
- ✅ Branding seither serviert `/static/custom.css`
- ✅ Keine direkte Exposition vom Anwendungs-Port zum Internet

## Zwischenfälle zu trennen
Mischen Sie nicht zu schnell:

- ✅ Authentifizierungsvorfall
- ✅ Speichervorfall
- ✅ Branding-Vorfall
- ✅ Proxy-Vorfall
- ✅ Browser-Cache-Vorfall

## Sensible Daten
`UnyCloud` Die abgelegten Dateien können Kunden-, Support- oder Betriebsinformationen enthalten, die Rechte und der sichtbare Baum müssen daher nach jedem Laufzeitwechsel überprüft bleiben.
