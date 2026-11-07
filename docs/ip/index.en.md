# IP
![TRINITY IP network diagnostic](../assets/images/projects/ip/ip-diagnostic.png){ .unyport-screen }

✅ Compare IPv4 and IPv6 results when both stacks are available.
⭕ IP geolocation is indicative and does not provide a precise position.
➡️ Consume the structured response from a script:
```bash
curl -fsS https://ip.trinity-net.com/api | jq .
```

`IP` is the public diagnostic network service of TRINITY.
It displays the address seen by the infrastructure, associated network information and a context indicator for VPN, proxy or datacenter uses.

## Objective
- quickly know its public IPv4 address
- detect IPv6 when available
- consult a simple JSON for scripts and integrations
- obtain DNS reverse, ASN and indicative geolocation

## Surfaces
- `ip.trinity-net.com` for the main page
- `v4.ip.trinity-net.com` for the IPv4 probe
- `v6.ip.trinity-net.com` for the IPv6 probe

The service does not require a user account.
