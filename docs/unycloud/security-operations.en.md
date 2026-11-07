# Safety and operation
`UnyCloud` The security is based on a strict reading of the accesses, transports and data actually mounted.

## Control points
- HTTPS active on `<cloud-domain>`
- Reverse proxy coherent
- Filebrowser database persistent
- Expected storage tree
- Branding served since `/static/custom.css`
- No direct exposure from the applicative port to the Internet

## Incidents to be separated
Do not mix too fast:

- Authentication incident
- Storage incident
- Branding incident
- Proxy incident
- Browser cache incident

## Sensitive data
`UnyCloud` The files filed may contain customer, support or operating information. The rights and the visible tree must therefore remain checked after each runtime change.
