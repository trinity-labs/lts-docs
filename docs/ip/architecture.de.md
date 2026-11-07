# Architektur

`IP` ist als Lichtdienst konzipiert.
Die Hauptseite fragt dedizierte Sonden, um IPv4 und IPv6 richtig zu unterscheiden, ohne von der automatischen Browserwahl abhängig zu sein.

## Durchfluss
```text
navigateur
  -> page principale
  -> probe IPv4
  -> probe IPv6
  -> rendu HTML ou JSON
```

## Grundsätze
- kein Benutzerkonto
- keine Bewerbungssitzung
- JSON Response für die Automatisierung verfügbar
- explizite Trennung zwischen beobachteter Adresse und Berichts-Headern

Header, die vom Client oder Proxy übertragen werden, können als Kontext angezeigt werden, aber die Referenzadresse bleibt diejenige, die von der Infrastruktur beobachtet wird.

