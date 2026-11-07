# Beispiele:
## Beispiel 1 - Verify Service antwortet
```sh
curl -ks https://<cloud-domain>/login | sed -n '1,80p'
```

Voraussichtliches Ergebnis:

- ✅ Eine HTML-Antwort
- ✅ Keine Proxyfehlerseite
- ✅ Kein Timeout

## Beispiel 2 - Branding überprüfen
```sh
curl -ks https://<cloud-domain>/static/custom.css | sed -n '1,80p'
```

Voraussichtliches Ergebnis:

- ✅ Die CSS UnyCloud antwortet
- ✅ Die referenzierten Bilder existieren
- ✅ Der Browser verwendet keinen alten Cache

## Beispiel 3 - Unterscheidung von Login und Branding
Wenn die Seite visuell falsch ist, aber das Login funktioniert, beginnen Sie mit dem CSS.

Wenn der Browser die registrierten Identifikatoren nicht anbietet, beginnen Sie mit dem Formularverhalten und dem Proxy.
