---
description: "Öffentliche Dokumentation für TRINITY, UnyDesk und UnyPort mit Fokus auf Architektur, Nutzung und Plattformabläufe."
social_image: "https://trinity-net.com/img/products/trinity/hero-trinity.png"
---

# TRINITY
- ✅ Vor einer Anleitung das zum Bedarf passende Produkt auswählen.

- ⭕ Niemals Token, Geheimnisse oder Sitzungswerte in einem Bericht veröffentlichen.

- ➡️ Die wichtigsten öffentlichen Oberflächen prüfen:

```bash
curl -fsSI https://trinity-net.com/
curl -fsS https://ip.trinity-net.com/api | jq .
```

## Dokumentierte Produkte

<div class="unyport-icon-grid">
  <figure class="trinity-home-logo"><img src="assets/images/projects/trinity/logo-trinity.png" alt="TRINITY"><figcaption><a href="trinity/">TRINITY</a></figcaption></figure>
  <figure><img src="assets/images/projects/scan/scan-report.png" alt="Scan-Bericht"><figcaption><a href="scan/">Scan / Audit</a></figcaption></figure>
  <figure><img src="assets/images/projects/ip/ip-diagnostic.png" alt="IP-Diagnose"><figcaption><a href="ip/">IP</a></figcaption></figure>
  <figure><img src="assets/images/projects/unydesk/logo-unydesk.jpg" alt="UnyDesk"><figcaption><a href="unydesk/">UnyDesk</a></figcaption></figure>
  <figure><img src="assets/images/unyport/logo.jpg" alt="UnyPort"><figcaption><a href="unyport/">UnyPort</a></figcaption></figure>
  <figure><img src="assets/images/projects/unycloud/unycloud-screen.jpg" alt="UnyCloud"><figcaption><a href="unycloud/">UnyCloud</a></figcaption></figure>
</div>
`TRINITY` ist die zentrale Architektur der Plattform.

Sie ist die wichtigste öffentliche Oberfläche für:

- Identität und Kontozugriff
- Bestell- und Provisionierungsabläufe
- Orchestrierung des VM-Lebenszyklus
- Konsolenzugriff
- Veröffentlichung kuratierter Downloads

Im öffentlichen Dokumentationsbestand wird `TRINITY` zusammen mit den beiden ergänzenden Architekturen dokumentiert, die die Plattform vervollständigen:

- `UnyDesk` Für den Fernzugriff
- `UnyPort` Für die Service-Steuerung

Diese Dokumentation beginnt mit `TRINITY`, weil es das funktionale Zentrum der Plattform ist, nicht weil die anderen Architekturen zweitrangig wären.
