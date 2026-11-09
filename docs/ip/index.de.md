# IP
![TRINITY-IP-Netzwerkdiagnose](../assets/images/projects/ip/ip-diagnostic.png){ .unyport-screen }

- ✅ IPv4- und IPv6-Ergebnisse vergleichen, wenn beide Stacks verfügbar sind.
- ⭕ Die IP-Geolokalisierung ist nur ein Hinweis und keine genaue Position.
- ➡️ Die strukturierte Antwort in einem Skript verwenden:
```bash
curl -fsS https://ip.trinity-net.com/api | jq .
```

`IP` ist der öffentliche Diagnosenetzwerkdienst von TRINITY.
Es zeigt die von der infrastruktur gesehene adresse, die zugehörigen netzwerkinformationen und einen kontextindikator für vpn-, proxy- oder datencenter-anwendungen an.

## Ziel
- schnell seine öffentliche IPv4-Adresse kennen
- IPv6 erkennen, wenn verfügbar
- Konsultieren Sie einen einfachen JSON für Skripte und Integrationen
- DNS Reverse, ASN und indikative Geolokalisierung

## Oberflächen
- `ip.trinity-net.com` für die Hauptseite
- `v4.ip.trinity-net.com` für die IPv4-Sonde
- `v6.ip.trinity-net.com` für die IPv6-Sonde

Der Dienst benötigt kein Benutzerkonto.
