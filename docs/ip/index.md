# IP

`IP` est le service public de diagnostic réseau de TRINITY.
Il affiche l'adresse vue par l'infrastructure, les informations réseau associées et un indicateur de contexte pour les usages VPN, proxy ou datacenter.

## Objectif
- connaître rapidement son adresse IPv4 publique
- détecter l'IPv6 quand elle est disponible
- consulter un JSON simple pour les scripts et intégrations
- obtenir le reverse DNS, l'ASN et une géolocalisation indicative

## Surfaces
- `ip.trinity-net.com` pour la page principale
- `v4.ip.trinity-net.com` pour le probe IPv4
- `v6.ip.trinity-net.com` pour le probe IPv6

Le service ne nécessite pas de compte utilisateur.

