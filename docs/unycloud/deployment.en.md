# Deployment
`UnyCloud` is deployed as a Filebrowser service behind reverse proxy.

## General form
```text
<cloud-host>
  -> docker_cloud
  -> conteneur filebrowser
  -> stockage monté

TRINITY-SERVER
  -> nginx
  -> <cloud-domain>
```

## Persistent elements
Important elements are:

- ✅ Filebrowser database
- ✅ The configuration
- ✅ Branding
- ✅ Mounted storage

The container is replaceable, but these elements must survive restarts.

## Exposure
The application service remains internal. The public exhibition passes through `nginx`, TLS and the security headers.

## Maintenance principle
A Docker restart is not always enough to diagnose an incident.

- ✅ The container
- ✅ The base
- ✅ Storage
- ✅ Branding
- ✅ The reverse proxy
- ✅ The browser cache
