# Background
This page takes back the useful history from the admin documentation `Filebrowser`, because `UnyCloud` is the product surface built on this runtime.

## Filebrowser Base
The initial base is a Filebrowser service dedicated to `<cloud-host>`with:

- A project consists of `docker_cloud`
- An Upstream Image `filebrowser/filebrowser:latest`
- A persistent local base
- A storage assembly under `/srv`
- A branding tree mounted in the container

This step establishes the main ability: expose a web file browsing under a TRINITY URL.

## Filebrowser Lined and Maintenance
UnyCloud repository history retains Filebrowser lineage. Filebrowser versions `2.63.x` June and July 2026 bring many important fixes: scope controls, public sharing, uploads, symlinks, archives, previews and HTTP security.

The `2026-08-29`, `UnyCloud 0.0.1` officially establishes the fork maintained from Filebrowser, with a conservative contract: preserve the base, the CLI, flags, variables `FB_*`, existing configurations and usage model.

## Branding UnyCloud
The documented Filebrowser-side history then shows the separation between:

- Native branding loaded by `custom.css`
- The assets served under `/static/...`
- Branding scripts that are not necessarily executed by the login page

This point explains why `UnyCloud` must document branding as a product part, but keep the behavioral debug on admin.

## Stabilization of the login
An autofill incident clarified the role of the reverse proxy. The login fields rendered by the Filebrowser SPA did not always carry the attributes expected by the browsers.

The patch selected is an inline injection side by side `nginx`, in configuration `trinity-cloud.conf`, in order to force attributes `name` and `autocomplete` useful.

## UnyCloud hardening
The first line UnyCloud adds application hardening: strict CSP without inline scripts, bootstrap moved to static JavaScript, authentication cookies `HttpOnly`, `SameSite=Strict` and `Secure` in HTTPS, spleen limits, logs `unycloud_security`, security admin endpoints and fail2ban integration.

To `2026-08-30`, the local repository indicates `UNYCLOUD_VERSION=0.9.15`. The Git history shows a fast series of releases `0.6.x`, `0.8.0`, `0.9.0` then `0.9.15`, centered on patches and hardening.

## Current status
Today, `UnyCloud` shall be understood as:

- Cloud Product Surface
- A Filebrowser compatible runtime maintained by UnyCloud
- A specific TRINITY branding
- A service whose visible behaviour also depends on the proxy

The important history is therefore not only the installation of a container. It is the transformation of Filebrowser into an exploitable, branded and integrated UnyCloud service to the rest of TRINITY.
