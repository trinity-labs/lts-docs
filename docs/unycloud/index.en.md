---
description: "UnyCloud Public Documentation, the cloud surface of TRINITY files built around Filebrowser and controlled branding."
social_image: "https://docs.trinity-net.com/assets/images/social/og-favicon.png"
---

# UnyCloud
`UnyCloud` is the cloud area of ecosystem files `TRINITY`It exposes `<cloud-domain>` as a browser space, repository, download and file sharing, while relying on a maintained filebrowser fork.

Publicly, `UnyCloud` brings together:

- A web file interface
- Authenticated access to mounted spaces
- A dedicated branding TRINITY
- An HTTPS entry point behind reverse proxy
- Clear separation between visible product and runtime Filebrowser

`UnyCloud` must read as the cloud user service. `Filebrowser` remains the technical lineage and the documented compatibility contract on the admin side.

## Start here
Recommended order:

1. `Introduction`
2. `Présentation`
3. `Architecture`
4. `Mode d'emploi`
5. `Accès et authentification`
6. `Déploiement`
7. `Sécurité et exploitation`
8. `Exemples`
9. `Historique`

```text
Navigateur
  -> <cloud-domain>
  -> Reverse proxy TRINITY
  -> Runtime Filebrowser
  -> Stockage monté
```
