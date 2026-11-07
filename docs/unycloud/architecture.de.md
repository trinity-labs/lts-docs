# UnyCloud Architektur
`UnyCloud` Die Architektur bleibt kompakt: eine kompatible Binärdatei, ein Anwendungscontainer, eine lokale Basis, ein Branding Tree, ein Mounted Storage und ein HTTPS-Proxy-Reverse.

## Layer 1 - Browser und Domain
Der öffentliche Eingang ist:

```text
https://<cloud-domain>
```

Der Browser spricht nicht direkt mit dem Container, sondern durchläuft den Reverse-Proxy TRINITY, der TLS, die Security-Header und die notwendigen Anpassungen zum Login anwendet.

## Layer 2 - Reverse Proxy
Proxy `nginx` Trinity Side Road zum internen Filebrowser-Backend:

```text
<cloud-domain>
  -> nginx TRINITY-SERVER
  -> backend interne Filebrowser
```

Diese Schicht zählt auch für das Anmeldeverhalten, insbesondere wenn das SPA Filebrowser-Bundle nicht nativ die vom Browser erwarteten Attribute bereitstellt.

## Layer 3 - Filebrowser-kompatible Laufzeit
Die UnyCloud-Laufzeit behält den Filebrowser-Vertrag bei: gleiche Befehle, gleiche Basis, gleiche Konfigurationsdateien und den gleichen binären Namen wie möglich für bestehende Dienste.

- ✅ Eine persistente Basis
- ✅ Eine Konfigurationsdatei
- ✅ Ein Branding Tree
- ✅ Befestigtes Root Storage

## Schicht 4 - Speicher
Der Speicher wird dem Container als Navigationswurzel präsentiert. Ziel ist es, die Dateien zur Verfügung zu stellen, ohne die Weboberfläche mit einem schweren Anwendungs-Backend zu verknüpfen.

## Schicht 5 - Branding und Härten
Aktives Branding wird über `/static/custom.css` Das CSS trägt das UlyCloud-Erscheinungsbild, während die Korrekturen des Anmeldeverhaltens je nach Ebene in der Verantwortung des Reverse-Proxys oder der Anwendungsfork verbleiben.
