/************************

TRINITY DOCS JS OVERRIDE

************************/

function isVisibleInLayout(node) {
  if (!node) return false;
  const style = window.getComputedStyle(node);
  const rect = node.getBoundingClientRect();
  return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
}

function updateTrinityContentBorders() {
  const content = document.querySelector(".md-content");
  if (!content) return;

  const hasPrimarySidebar = isVisibleInLayout(document.querySelector(".md-sidebar--primary"));
  const hasSecondarySidebar = isVisibleInLayout(document.querySelector(".md-sidebar--secondary"));

  content.classList.toggle("trinity-content--framed", hasPrimarySidebar && hasSecondarySidebar);
}

function buildTrinityLanguageHref(lang, fallbackHref) {
  const products = new Set(["trinity", "unydesk", "unyport"]);
  const rawPath = window.location.pathname || "/";
  const adminPrefix = rawPath === "/admin" || rawPath.startsWith("/admin/") ? "/admin" : "";
  let path = adminPrefix ? rawPath.slice(adminPrefix.length) || "/" : rawPath;

  path = path.split(/[?#]/)[0];
  if (!path.startsWith("/")) path = `/${path}`;
  path = path.replace(/\/+$/, "");

  const segments = path.split("/").filter(Boolean);
  const joinPath = (parts) => `${adminPrefix}/${parts.filter(Boolean).join("/")}`.replace(/\/{2,}/g, "/");
  const withSlash = (value) => (value.endsWith("/") ? value : `${value}/`);

  let baseSegments;
  if (segments.length === 0) {
    baseSegments = ["index"];
  } else {
    baseSegments = [...segments];
    const last = baseSegments[baseSegments.length - 1];
    const localized = last.match(/^(.+)\.(fr|de)$/);
    if (localized) {
      baseSegments[baseSegments.length - 1] = localized[1];
    } else if (baseSegments.length === 1 && products.has(baseSegments[0])) {
      baseSegments.push("index");
    }
  }

  const last = baseSegments[baseSegments.length - 1];
  const parent = baseSegments.slice(0, -1);

  if (lang === "en") {
    if (baseSegments.length === 1 && last === "index") return `${adminPrefix || ""}/`;
    if (last === "index") return withSlash(joinPath(parent));
    return withSlash(joinPath(baseSegments));
  }

  if (!["fr", "de"].includes(lang)) return fallbackHref || `${adminPrefix || ""}/`;
  if (baseSegments.length === 1 && last === "index") return withSlash(joinPath([`index.${lang}`]));
  if (last === "index") return withSlash(joinPath([...parent, `index.${lang}`]));
  return withSlash(joinPath([...parent, `${last}.${lang}`]));
}

function localizeTrinityInternalHref(href, locale) {
  if (!["fr", "de"].includes(locale) || !href) return href;

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch (_) {
    return href;
  }

  if (url.origin !== window.location.origin) return href;
  if (url.pathname.startsWith("/assets/") || url.pathname.startsWith("/admin/assets/")) return href;
  if (url.pathname.includes("/assets/")) return href;

  const adminPrefix = url.pathname === "/admin" || url.pathname.startsWith("/admin/") ? "/admin" : "";
  let path = adminPrefix ? url.pathname.slice(adminPrefix.length) || "/" : url.pathname;
  path = path.replace(/\/+$/, "");

  const products = new Set(["trinity", "unydesk", "unyport"]);
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) {
    url.pathname = `${adminPrefix}/index.${locale}/`.replace(/\/{2,}/g, "/");
    return url.pathname + url.search + url.hash;
  }

  const first = segments[0];
  if (first !== "index" && !products.has(first)) return href;

  const baseSegments = [...segments];
  const last = baseSegments[baseSegments.length - 1];
  const localized = last.match(/^(.+)\.(fr|de)$/);
  if (localized) {
    baseSegments[baseSegments.length - 1] = localized[1];
  } else if (baseSegments.length === 1 && products.has(first)) {
    baseSegments.push("index");
  }

  const targetLast = baseSegments[baseSegments.length - 1];
  const localizedLast = targetLast === "index" && baseSegments.length === 1
    ? `index.${locale}`
    : `${targetLast}.${locale}`;

  baseSegments[baseSegments.length - 1] = localizedLast;
  url.pathname = `${adminPrefix}/${baseSegments.join("/")}/`.replace(/\/{2,}/g, "/");
  return url.pathname + url.search + url.hash;
}

function localizeTrinityNavigationLinks(locale) {
  document.querySelectorAll(".md-sidebar--primary a.md-nav__link[href], .md-tabs a[href], .md-content a[href]").forEach((link) => {
    if (link.matches("[hreflang], .trinity-lang-switcher__link")) return;
    const href = link.getAttribute("href");
    const localized = localizeTrinityInternalHref(href, locale);
    if (localized !== href) link.setAttribute("href", localized);
  });
}

function decorateTrinitySecondaryNav() {
  document.querySelectorAll(".md-sidebar--secondary .md-nav__link").forEach((link) => {
    if (link.querySelector(".trinity-toc-hash")) return;

    const hash = document.createElement("span");
    hash.className = "trinity-toc-hash";
    hash.setAttribute("aria-hidden", "true");
    hash.textContent = "#";

    link.prepend(hash);
  });
}

function initTrinityHighlighting() {
  if (!window.hljs || typeof window.hljs.highlightElement !== "function") return;

  document.querySelectorAll(".md-typeset pre code").forEach((block) => {
    if (block.dataset.trinityHljsDone === "1") return;
    window.hljs.highlightElement(block);
    block.dataset.trinityHljsDone = "1";
  });
}

function getTrinitySitePrefix() {
  const rawPath = window.location.pathname || "/";
  return rawPath === "/admin" || rawPath.startsWith("/admin/") ? "/admin" : "";
}

function getTrinityReleaseMeta() {
  const url = `${getTrinitySitePrefix()}/assets/meta/release.json`.replace(/\/{2,}/g, "/");

  if (!window.__trinityReleaseMetaCache) {
    window.__trinityReleaseMetaCache = {};
  }

  if (!window.__trinityReleaseMetaCache[url]) {
    window.__trinityReleaseMetaCache[url] = fetch(url, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .catch(() => null);
  }

  return window.__trinityReleaseMetaCache[url];
}

function getTrinityReleaseRepoUrl(meta) {
  if (meta?.git_url) return meta.git_url;
  return meta?.scope === "admin"
    ? "https://github.com/trinity-labs/lts-adocs"
    : "https://github.com/trinity-labs/lts-docs";
}

function mountTrinitySidebarRelease(meta) {
  const sidebarInner = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
  if (!sidebarInner || !meta || !meta.version) return;

  sidebarInner.classList.add("trinity-sidebar-versioned");

  let node = sidebarInner.querySelector(".trinity-sidebar-release");
  if (!node) {
    node = document.createElement("div");
    node.className = "trinity-sidebar-release";
    sidebarInner.appendChild(node);
  }

  node.replaceChildren();

  const version = document.createElement("a");
  version.className = "trinity-sidebar-release__version";
  version.href = getTrinityReleaseRepoUrl(meta);
  version.target = "_blank";
  version.rel = "noopener noreferrer";
  version.textContent = `version ${meta.version}`;

  node.appendChild(version);
  node.title = [meta.kind, meta.scope, meta.visibility, meta.released_at].filter(Boolean).join(" · ");
}

function initTrinityDocsChrome() {
  const locale = (document.documentElement.lang || "en").slice(0, 2);
  const localeLabels = {
    en: "English",
    fr: "Français",
    de: "Deutsch",
  };
  const localeFlags = {
    en: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img" aria-hidden="true">
        <rect width="24" height="16" fill="#22408c"/>
        <polygon points="0,0 2.8,0 24,13.2 24,16 21.2,16 0,2.8" fill="#ffffff"/>
        <polygon points="24,0 21.2,0 0,13.2 0,16 2.8,16 24,2.8" fill="#ffffff"/>
        <polygon points="0,0 1.6,0 24,14.4 24,16 22.4,16 0,1.6" fill="#cf142b"/>
        <polygon points="24,0 22.4,0 0,14.4 0,16 1.6,16 24,1.6" fill="#cf142b"/>
        <rect x="9" width="6" height="16" fill="#ffffff"/>
        <rect y="5" width="24" height="6" fill="#ffffff"/>
        <rect x="10" width="4" height="16" fill="#cf142b"/>
        <rect y="6" width="24" height="4" fill="#cf142b"/>
      </svg>`,
    fr: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img" aria-hidden="true">
        <rect width="8" height="16" fill="#1f3fb6"/>
        <rect x="8" width="8" height="16" fill="#ffffff"/>
        <rect x="16" width="8" height="16" fill="#d82f3a"/>
      </svg>`,
    de: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img" aria-hidden="true">
        <rect width="24" height="5.333" fill="#121212"/>
        <rect y="5.333" width="24" height="5.333" fill="#cf2e2e"/>
        <rect y="10.666" width="24" height="5.334" fill="#f0c419"/>
      </svg>`,
  };
  const footerCopy = {
    en: {
      tagline: "Secure Systems · Long-Term Design",
      rights: "All rights reserved",
    },
    fr: {
      tagline: "Systèmes sécurisés · Conception long terme",
      rights: "Tous droits réservés",
    },
    de: {
      tagline: "Sichere Systeme · Langfristiges Design",
      rights: "Alle Rechte vorbehalten",
    },
  };
  const copy = footerCopy[locale] || footerCopy.en;
  const sidebar = document.querySelector(".md-sidebar--primary");
  if (sidebar) {
    sidebar.querySelectorAll("input.md-nav__toggle").forEach(t => (t.checked = true));
    sidebar.querySelectorAll("nav.md-nav[aria-expanded]").forEach(n => n.setAttribute("aria-expanded", "true"));
  }
  localizeTrinityNavigationLinks(locale);

  const headerInner = document.querySelector(".md-header__inner");
  const headerOption = [...document.querySelectorAll(".md-header__option")]
    .find((node) => node.querySelector(".md-select__link[hreflang], .trinity-lang-switcher__link[hreflang]"));

  if (headerInner && headerOption) {
    const links = [...headerOption.querySelectorAll(".md-select__link[hreflang], .trinity-lang-switcher__link[hreflang]")]
      .map((link) => ({
        href: link.getAttribute("href"),
        lang: (link.getAttribute("hreflang") || "").slice(0, 2),
      }))
      .filter((entry) => entry.href && localeFlags[entry.lang]);

    if (links.length > 0) {
      let switcher = headerInner.querySelector(".trinity-lang-switcher--header");
      if (!switcher) {
        switcher = document.createElement("div");
        switcher.className = "trinity-lang-switcher trinity-lang-switcher--header";
      }
      switcher.setAttribute("aria-label", locale === "fr" ? "Langue" : locale === "de" ? "Sprache" : "Language");
      switcher.replaceChildren();

      links.forEach(({ href, lang }) => {
        const anchor = document.createElement("a");
        anchor.className = "trinity-lang-switcher__link";
        if (lang === locale) anchor.classList.add("is-active");
        anchor.href = buildTrinityLanguageHref(lang, href);
        anchor.hreflang = lang;
        anchor.setAttribute("aria-label", localeLabels[lang] || lang);
        anchor.title = localeLabels[lang] || lang;

        const flag = document.createElement("span");
        flag.className = "trinity-lang-switcher__flag";
        flag.innerHTML = localeFlags[lang];

        anchor.appendChild(flag);
        switcher.appendChild(anchor);
      });

      const search = headerInner.querySelector(".md-search");
      const anchor = search || headerInner.querySelector(".md-header__title");

      if (anchor) {
        anchor.insertAdjacentElement("afterend", switcher);
      } else if (switcher.parentElement !== headerInner) {
        headerInner.appendChild(switcher);
      }

      headerOption.classList.add("trinity-lang-source");
    }
  }

  const leadLangList = document.querySelector(".md-content__inner.md-typeset > ul:first-of-type");
  if (leadLangList) {
    const items = [...leadLangList.children];
    if (items.length > 0 && items.every((item) => item.classList.contains("i18n-link"))) {
      leadLangList.remove();
    }
  }

  const footer = document.querySelector(".md-footer");

  if (footer) {
    footer.innerHTML = `
      <div class="trinity-footer">
        <div class="trinity-footer__inner">
          <div class="trinity-footer__brand">
            <strong>TRINITY</strong>
            <span>${copy.tagline}</span>
          </div>
          <div class="trinity-footer__meta">
            © ${new Date().getFullYear()} TRINITY · ${copy.rights}
          </div>
        </div>
      </div>
    `;
  }

  updateTrinityContentBorders();
  decorateTrinitySecondaryNav();
  initTrinityHighlighting();
  getTrinityReleaseMeta().then((meta) => mountTrinitySidebarRelease(meta));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTrinityDocsChrome, { once: true });
} else {
  initTrinityDocsChrome();
}

if (window.document$ && typeof window.document$.subscribe === "function") {
  window.document$.subscribe(() => {
    window.requestAnimationFrame(() => initTrinityDocsChrome());
  });
}

if (!window.__trinityDocsBordersBound) {
  window.__trinityDocsBordersBound = true;
  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => updateTrinityContentBorders());
  }, { passive: true });
}
