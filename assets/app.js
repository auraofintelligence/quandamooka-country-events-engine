(function () {
  const DATA = window.QCEE_DATA;
  const NOTICEBOARD = window.NOTICEBOARD_DATA || {};
  if (Array.isArray(window.QCEE_EXTRA_PLACES)) {
    DATA.places = [...(DATA.places || []), ...window.QCEE_EXTRA_PLACES];
  }
  const pageId = document.body.dataset.page || "home";
  if (redirectLegacyBuilderUrl(pageId)) return;
  const page = DATA.pages[pageId] || DATA.pages.home;

  const icons = {
    arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8h11v11H8zM5 16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v6h6M20 20v-6h-6M5 15a7 7 0 0 0 12 3M19 9A7 7 0 0 0 7 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function slug(value) {
    return String(value || "item")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "item";
  }

  const PLACE_LOCALES = [
    { id: "all", label: "All locations", center: [-27.48, 153.47], zoom: 11 },
    { id: "goompi-dunwich", label: "Goompi / Dunwich", center: [-27.5003, 153.405], zoom: 16 },
    { id: "mulumba-point-lookout", label: "Mulumba / Point Lookout", center: [-27.4282, 153.5258], zoom: 15 },
    { id: "pulan-amity", label: "Pulan / Amity Point", center: [-27.3998, 153.4398], zoom: 16 },
    { id: "north-coast", label: "North coast", center: [-27.4202, 153.493], zoom: 14 },
    { id: "inland-parks", label: "Inland parks", center: [-27.497, 153.455], zoom: 13 }
  ];

  function placeKey(place) {
    return slug(place && (place.id || place.name));
  }

  function placeLocaleId(place) {
    const text = [place && place.area, place && place.name, place && place.category].filter(Boolean).join(" ").toLowerCase();
    if (/flinders|north coast/.test(text)) return "north-coast";
    if (/bummiera|brown lake|karboora|blue lake|inland|naree|national park/.test(text)) return "inland-parks";
    if (/pulan|amity/.test(text)) return "pulan-amity";
    if (/mulumba|point lookout|cylinder|adder rock|home beach|main beach/.test(text)) return "mulumba-point-lookout";
    if (/goompi|dunwich|bradbury/.test(text)) return "goompi-dunwich";
    return "all";
  }

  function mapPinKind(category) {
    const text = String(category || "").toLowerCase();
    if (/food|drink|grocery|hospitality/.test(text)) return "food";
    if (/retail|suppl/.test(text)) return "retail";
    if (/creative|culture|heritage|gallery|artist/.test(text)) return "creative";
    if (/camp/.test(text)) return "camping";
    if (/beach|surf|coast/.test(text)) return "beach";
    if (/toilet|bbq|amenity|picnic/.test(text)) return "amenity";
    if (/sport|oval|club|golf|pool|bowls/.test(text)) return "sport";
    if (/transport|ferry|post|mail|boat|jetty|ramp/.test(text)) return "transport";
    if (/park|protected|lake|nature/.test(text)) return "nature";
    if (/hall|civic|venue|property|service/.test(text)) return "civic";
    return "default";
  }

  function builderRouteForId(id) {
    if (!id) return null;
    if ((DATA.builderDefinitions || []).some((def) => def.id === id)) return "builder-events.html";
    if ((DATA.runBuilderDefinitions || []).some((def) => def.id === id)) return "builder-run.html";
    if ((DATA.simulationBuilderDefinitions || []).some((def) => def.id === id)) return "builder-simulation.html";
    if ((DATA.noticeboardBuilderDefinitions || []).some((def) => def.id === id)) return "builder-notices.html";
    return null;
  }

  function builderRouteForHash(hash) {
    const cleanHash = String(hash || "").replace(/^#/, "");
    const routes = {
      "builder-forms": "builder-events.html",
      "run-builders": "builder-run.html",
      "simulation-builders": "builder-simulation.html",
      "notice-builders": "builder-notices.html",
      "related-builders": "builder-assets.html"
    };
    return routes[cleanHash] || null;
  }

  function redirectLegacyBuilderUrl(currentPageId) {
    if (currentPageId !== "builders") return false;
    const url = new URL(window.location.href);
    const requestedBuilder = url.searchParams.get("builder");
    const route = builderRouteForId(requestedBuilder) || builderRouteForHash(window.location.hash);
    if (!route) return false;
    const next = new URL(route, window.location.href);
    if (requestedBuilder && builderRouteForId(requestedBuilder)) {
      next.searchParams.set("builder", requestedBuilder);
    }
    window.location.replace(next.href);
    return true;
  }

  function button(action) {
    return `<a class="button ${esc(action.style || "secondary")}" href="${esc(action.href)}">${esc(action.label)} ${icons.arrowRight}</a>`;
  }

  function tags(items) {
    return `<div class="tag-row">${(items || []).map((item) => `<span class="tag">${esc(item)}</span>`).join("")}</div>`;
  }

  function navItem(item) {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const childCurrent = hasChildren && item.children.some((child) => linkMatchesPage(child.href));
    const current = item.id === pageId || childCurrent;
    if (!hasChildren) {
      return `<a class="nav-main-link" href="${esc(item.href)}" ${item.id === pageId ? 'aria-current="page"' : ""}>${esc(item.label)}</a>`;
    }
    const children = item.children.map((child) => {
      const href = child.href || "#";
      const external = href.startsWith("http");
      const childActive = linkMatchesPage(href);
      return `<a href="${esc(href)}" ${childActive ? 'aria-current="page"' : ""} ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(child.label)}</a>`;
    }).join("");
    return `
      <div class="nav-item has-dropdown ${current ? "is-current" : ""}">
        <div class="nav-parent">
          <a class="nav-parent-link" href="${esc(item.href || "#")}" ${item.id === pageId ? 'aria-current="page"' : ""}>${esc(item.label)}</a>
          <button class="nav-menu-button" type="button" data-nav-drop aria-expanded="false" aria-label="Open ${esc(item.label)} menu">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="nav-dropdown" aria-label="${esc(item.label)} menu">${children}</div>
      </div>
    `;
  }

  function linkMatchesPage(href) {
    const target = String(href || "").split("#")[0].split("?")[0];
    if (!target || target.startsWith("http")) return false;
    if (pageId === "home") return target === "index.html" || target === "/";
    return target === `${pageId}.html`;
  }

  function renderHeader() {
    const mount = document.querySelector("[data-site-header]");
    if (!mount) return;
    mount.innerHTML = `
      <nav class="nav" aria-label="Main navigation">
        <a class="brand-mark" href="index.html" aria-label="${esc(DATA.project.name)} home"><span>Quandamooka</span><span>Events Engine</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu"><span></span><span></span><span></span></button>
        <div class="nav-links" id="nav-links">
          ${DATA.nav.map(navItem).join("")}
        </div>
      </nav>
    `;
  }

  function renderHero() {
    const actions = page.actions || [];
    const actionHtml = actions.length ? `<div class="hero-actions">${actions.map(button).join("")}</div>` : "";
    return `
      <section class="hero" aria-labelledby="page-title">
        <div class="hero-copy">
          <p class="eyebrow">${esc(page.eyebrow)}</p>
          <h1 id="page-title">${esc(page.heading)}</h1>
          <p class="hero-lede">${esc(page.deck)}</p>
          ${actionHtml}
        </div>
        <figure class="hero-media">
          <img src="${esc(page.image)}" alt="${esc(page.alt)}" width="1600" height="900">
        </figure>
      </section>
    `;
  }

  function section(title, deck, body, className) {
    const idAttr = title.id ? ` id="${esc(title.id)}"` : "";
    const deckHtml = deck ? `<p>${esc(deck)}</p>` : "";
    return `
      <section class="section ${className || ""}"${idAttr}>
        <div class="site-shell">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${esc(title.eyebrow || "")}</p>
              <h2>${esc(title.heading || title)}</h2>
            </div>
            ${deckHtml}
          </div>
          ${body}
        </div>
      </section>
    `;
  }

  function tile(item) {
    return `
      <article class="tile">
        <h3>${esc(item.title || item.name)}</h3>
        <p>${esc(item.body || item.job || item.notes || "")}</p>
        ${item.metrics ? `<p class="meta"><strong>Metrics:</strong> ${esc(item.metrics)}</p>` : ""}
      </article>
    `;
  }

  function renderHome() {
    const fastDoors = [
      { title: "Calendar", body: "Confirmed, TBC, recurring and past event records.", href: "calendar.html" },
      { title: "Ecosystem", body: "The local categories and entity catalogue.", href: "ecosystem.html" },
      { title: "Places", body: "Venues, parks, beaches and gateways.", href: "places.html" },
      { title: "Markdown builders", body: "Export event, resource, simulation and aftercare files.", href: "builders.html" }
    ];
    const boundary = [
      { title: "Public by default", body: "The hub is written for hosts, organisers, venues, artists, suppliers, visitors and reviewers." },
      { title: "Private stays private", body: "Contact details, protected places, private planning notes, unapproved images and sensitive incident material stay out of public notices." },
      { title: "Authority is real", body: "The engine helps prepare better questions. It does not replace cultural authority, land managers, council permits, safety advice or emergency sources." }
    ];
    return [
      section({ eyebrow: "How it works", heading: "Idea to aftercare lives here." }, "", `<div class="grid three">${DATA.process.map(tile).join("")}</div>`),
      section({ eyebrow: "Fast doors", heading: "Choose the part of the system you need." }, "Start with the decision in front of you, then move into the deeper records only when they help.", `<div class="grid four">${fastDoors.map((item) => `<a class="tile link-card" href="${item.href}"><h3>${item.title}</h3><p>${item.body}</p></a>`).join("")}</div>`),
      section({ eyebrow: "Public boundary", heading: "Useful without overclaiming." }, DATA.project.boundary, `<div class="grid three">${boundary.map(tile).join("")}</div>`)
    ].join("");
  }

  function renderCalendar() {
    const statusOrder = ["confirmed", "tbc", "recurring", "past", "historical"];
    const statusFilters = ["all", ...statusOrder.filter((status) => DATA.events.some((event) => event.status === status))];
    const sectors = [...new Set(DATA.events.map((event) => event.sector).filter(Boolean))].sort();
    const loadTags = [...new Set(DATA.events.flatMap((event) => event.loadTags || []))].sort();
    const statusCount = (status) => DATA.events.filter((event) => event.status === status).length;
    const sourceState = (event) => {
      if (event.status === "confirmed") return `Date source checked ${DATA.project.lastPublicSearch}`;
      if (event.status === "past") return "Past record kept for event memory";
      if (event.status === "recurring") return "Recurring pattern needs organiser confirmation";
      if (event.status === "tbc") return "Date to confirm before public promotion";
      return "Source status needs review";
    };
    const eventText = (event) => [
      event.name,
      event.dateLabel,
      event.place,
      event.village,
      event.sector,
      event.scale,
      event.source,
      event.concise,
      ...(event.loadTags || []),
      ...Object.values(event.simulation || {})
    ].filter(Boolean).join(" ").toLowerCase();
    const checkedDate = "2026-05-22";
    const calendarRank = (event) => {
      if (event.status === "confirmed" && String(event.dateSort || "") >= checkedDate) return 0;
      if (event.status === "tbc") return 1;
      if (event.status === "recurring") return 2;
      if (event.status === "confirmed") return 3;
      if (event.status === "past") return 4;
      return 5;
    };
    const eventCards = DATA.events
      .slice()
      .sort((a, b) => {
        const rankDiff = calendarRank(a) - calendarRank(b);
        if (rankDiff) return rankDiff;
        if (calendarRank(a) === 4) return String(b.dateSort || "").localeCompare(String(a.dateSort || ""));
        return String(a.dateSort || "").localeCompare(String(b.dateSort || ""));
      })
      .map((event) => {
        const simulation = event.simulation || {};
        const href = event.sourceUrl || "#";
        const external = href.startsWith("http");
        return `
          <article class="event-card event-atlas-card"
            data-event-status="${esc(event.status)}"
            data-event-sector="${esc(slug(event.sector))}"
            data-event-tags="${esc((event.loadTags || []).map(slug).join(" "))}"
            data-event-text="${esc(eventText(event))}">
            <div class="event-card-top">
              <span class="status-pill ${esc(event.status)}">${esc(DATA.eventStatusLabels[event.status] || event.status)}</span>
              <span class="source-status">${esc(sourceState(event))}</span>
            </div>
            <h3>${esc(event.name)}</h3>
            <p class="event-concise">${esc(event.concise)}</p>
            <dl class="event-facts">
              <div><dt>When</dt><dd>${esc(event.dateLabel)}</dd></div>
              <div><dt>Where</dt><dd>${esc(event.place)}</dd></div>
              <div><dt>Lens</dt><dd>${esc(event.sector)} / ${esc(event.scale)}</dd></div>
            </dl>
            ${tags(event.loadTags)}
            <details class="event-detail">
              <summary>Simulation notes</summary>
              <div class="detail-grid">
                <div><strong>Movement</strong><p>${esc(simulation.movement)}</p></div>
                <div><strong>Permissions</strong><p>${esc(simulation.permissions)}</p></div>
                <div><strong>Aftercare</strong><p>${esc(simulation.aftercare)}</p></div>
                <div><strong>Ancestor signal</strong><p>${esc(simulation.ancestor)}</p></div>
              </div>
            </details>
            <a class="button ghost" href="${esc(href)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(event.source)} ${icons.arrowRight}</a>
          </article>
        `;
      }).join("");
    return [
      section({ eyebrow: "Event atlas", heading: "Search the event records.", id: "event-atlas" }, "", `
        <div class="calendar-summary" aria-label="Calendar summary">
          <article><strong>${DATA.events.length}</strong><span>mapped records</span></article>
          <article><strong>${statusCount("confirmed")}</strong><span>confirmed dates</span></article>
          <article><strong>${statusCount("tbc") + statusCount("recurring")}</strong><span>watchlist patterns</span></article>
          <article><strong>${DATA.externalSources.length}</strong><span>source links</span></article>
        </div>
        <div class="control-bar calendar-controls" aria-label="Event filters">
          <input class="search-input" type="search" placeholder="Search events, places, tags or source notes" data-calendar-search>
          <select class="select-input" data-sector-filter aria-label="Filter by event sector">
            <option value="all">All sectors</option>
            ${sectors.map((sector) => `<option value="${esc(slug(sector))}">${esc(sector)}</option>`).join("")}
          </select>
          <select class="select-input" data-load-filter aria-label="Filter by event tag">
            <option value="all">All event tags</option>
            ${loadTags.map((tag) => `<option value="${esc(slug(tag))}">${esc(tag)}</option>`).join("")}
          </select>
          <div class="filter-row" role="group" aria-label="Filter by source status">
            ${statusFilters.map((filter) => `<button class="builder-tab" type="button" data-event-filter="${filter}" aria-selected="${filter === "all"}">${filter === "all" ? "All" : esc(DATA.eventStatusLabels[filter] || filter)}</button>`).join("")}
            <button class="builder-tab reset-filter" type="button" data-event-clear>Reset filters</button>
          </div>
        </div>
        <p class="empty-note" data-event-empty hidden>No matching event records yet. Clear a filter or search another term.</p>
        <div class="grid two" data-event-grid>${eventCards}</div>
      `),
      section({ eyebrow: "Source links", heading: "Check the public source.", id: "calendar-sources" }, "", `<div class="grid three">${DATA.externalSources.map(sourceCard).join("")}</div>`)
    ].join("");
  }

  function sourceCard(source) {
    const href = source.url || source.href || "#";
    const external = href.startsWith("http");
    return `<a class="tile link-card" href="${esc(href)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}><h3>${esc(source.label || source.title)}</h3><p>${esc(source.note || source.body)}</p></a>`;
  }

  function noticeGroups() {
    return NOTICEBOARD.entityGroups || [];
  }

  function renderEcosystem() {
    const groups = noticeGroups();
    const options = groups.map((group) => `<option value="${esc(group.slug)}">${esc(group.label)}</option>`).join("");
    const cards = groups.map((group) => `
      <section class="entity-group" data-group="${esc(group.slug)}">
        <div class="category-heading">
          <div>
            <p class="eyebrow">${esc(group.kind)}</p>
            <h3>${esc(group.label)}</h3>
          </div>
          <span class="tag">${esc((group.entities || []).length)} records</span>
        </div>
        <p class="meta">${esc(group.note)}</p>
        <div class="grid three">
          ${(group.entities || []).map(entityCard).join("")}
        </div>
      </section>
    `).join("");
    return section({ eyebrow: "Public catalogue", heading: "Search the event ecosystem.", id: "ecosystem-catalogue" }, "", `
      <div class="control-bar">
        <input class="search-input" type="search" placeholder="Search names, places, roles or notes" data-entity-search>
        <select class="select-input" data-group-filter>
          <option value="all">All categories</option>
          ${options}
        </select>
      </div>
      <div class="entity-browser" data-entity-browser>${cards}</div>
    `);
  }

  function entityCard(entity) {
    const text = [entity.name, entity.type, entity.place, entity.share, entity.status].filter(Boolean).join(" ");
    return `
      <article class="entity-card" data-entity-text="${esc(text.toLowerCase())}">
        <h3>${esc(entity.name)}</h3>
        <p>${esc(entity.type || "Public entity")}</p>
        <p class="meta">${esc(entity.place || "Place to confirm")}</p>
        <p>${esc(entity.share || "Public share notes need confirmation.")}</p>
      </article>
    `;
  }

  function renderPlaces() {
    const categories = [...new Set(DATA.places.map((place) => place.category).filter(Boolean))].sort();
    const options = categories.map((category) => `<option value="${esc(slug(category))}">${esc(category)}</option>`).join("");
    const localeOptions = PLACE_LOCALES
      .filter((locale) => locale.id !== "all")
      .map((locale) => `<option value="${esc(locale.id)}">${esc(locale.label)}</option>`)
      .join("");
    const localeButtons = PLACE_LOCALES.map((locale) => `
      <button class="map-shortcut-button" type="button" data-map-shortcut="${esc(locale.id)}">${esc(locale.label)}</button>
    `).join("");
    const cards = DATA.places.map((place, index) => {
      const text = [place.name, place.area, place.category, place.address, place.role, place.checks, place.source].filter(Boolean).join(" ").toLowerCase();
      return `
        <article class="place-card" data-place-card="${index}" data-place-slug="${esc(placeKey(place))}" data-place-locale="${esc(placeLocaleId(place))}" data-place-category="${esc(slug(place.category))}" data-place-text="${esc(text)}" tabindex="0">
          <div>
            <span class="tag">${index + 1}</span>
            <span class="tag">${esc(place.category)}</span>
          </div>
          <h3>${esc(place.name)}</h3>
          <p class="meta">${esc(place.area)}</p>
          <p>${esc(place.role)}</p>
        </article>
      `;
    }).join("");
    return section({ eyebrow: "Place catalogue", heading: "Find a place that fits the event.", id: "place-catalogue" }, "", `
      <div class="control-bar">
        <input class="search-input" type="search" placeholder="Search places, checks, roles or sources" data-place-search>
        <select class="select-input" data-place-filter aria-label="Filter places by category">
          <option value="all">All place types</option>
          ${options}
        </select>
        <select class="select-input" data-place-locale-filter aria-label="Filter places by location">
          <option value="all">All locations</option>
          ${localeOptions}
        </select>
      </div>
      <div class="map-shortcuts" aria-label="Map zoom shortcuts">${localeButtons}</div>
      <div class="place-map-shell">
        <div class="real-place-map" data-place-map aria-label="Interactive map of Minjerribah event places"></div>
        <aside class="place-detail" data-place-detail aria-live="polite"></aside>
      </div>
      <p class="empty-note" data-place-empty hidden>No matching places yet. Clear a filter or search another term.</p>
      <div class="place-list" data-place-list>${cards}</div>
    `);
  }

  function renderSupply() {
    const laneCards = DATA.supplyLanes.map((lane) => {
      return `
        <article class="panel">
          <h3>${esc(lane.title)}</h3>
          <p>${esc(lane.need)}</p>
          <p class="meta"><strong>Confirm:</strong> ${esc(lane.confirm)}</p>
          <p class="meta"><strong>Record:</strong> ${esc(lane.output)}</p>
        </article>
      `;
    }).join("");
    return [
      section({ eyebrow: "Resource file", heading: "Turn one need into one record.", id: "resource-record" }, "Start with the resource profile when a venue, supplier, crew role, equipment item or support service needs to be checked, priced or shared safely.", `<div class="button-row"><a class="button primary" href="builder-events.html?builder=resource">Create resource profile ${icons.arrowRight}</a><a class="button secondary" href="ecosystem.html">Find possible providers ${icons.arrowRight}</a></div>`),
      section({ eyebrow: "Supply readiness", heading: "Know the ask before asking.", id: "supply-readiness" }, "Use these lanes to turn an event idea into practical requirements that can be priced, rostered, checked and recorded.", `<div class="grid two">${laneCards}</div>`)
    ].join("");
  }

  function builderSetPages() {
    return [
      { title: "Event files", href: "builder-events.html", count: `${DATA.builderDefinitions.length} builders`, body: "Event brief, resource profile, simulation brief and aftercare report." },
      { title: "Run files", href: "builder-run.html", count: `${DATA.runBuilderDefinitions.length} builders`, body: "Place use, approvals, suppliers, run sheet, crew, risk, evidence, sources and market intake." },
      { title: "Simulation files", href: "builder-simulation.html", count: `${DATA.simulationBuilderDefinitions.length} builders`, body: "Crowd, transport, logistics, environment, access, guardian, economy and pipeline checks." },
      { title: "Notice builders", href: "builder-notices.html", count: `${DATA.noticeboardBuilderDefinitions.length} builders`, body: "Public event notices, change updates, transport notices and aftercare summaries." },
      { title: "External builders", href: "builder-assets.html", count: `${DATA.linkedBuilders.length} links`, body: "Related Markdown builders for profiles, assets, legal memory, grants, film and podcast requests." }
    ];
  }

  function builderSetCard(item) {
    return `
      <a class="tile link-card builder-set-card" href="${esc(item.href)}">
        <span class="tag">${esc(item.count)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.body)}</p>
      </a>
    `;
  }

  function renderBuilders() {
    return section({ eyebrow: "Builder sets", heading: "Pick one focused builder page.", id: "builder-sets" }, "Each builder set has its own page so the menu stays stable and the next form in a set is available at the bottom of the current form.", `<div class="grid builder-set-grid">${builderSetPages().map(builderSetCard).join("")}</div>`, "builder-gateway-section");
  }

  function renderBuilderSetPage(config) {
    return section({ eyebrow: config.eyebrow, heading: config.heading, id: "builder-set" }, config.deck, renderBuilderSuite(config.definitions));
  }

  function renderBuilderEvents() {
    return renderBuilderSetPage({
      eyebrow: "Event files",
      heading: "Make the core event records.",
      deck: "Use these forms for event briefs, resource profiles, simulation briefs and aftercare reports.",
      definitions: DATA.builderDefinitions
    });
  }

  function renderBuilderRun() {
    return renderBuilderSetPage({
      eyebrow: "Run files",
      heading: "Create the records that make an event executable.",
      deck: "These are agent-readable records for place use, approval trails, run sheets, crew, risk, value evidence, source provenance and market intake.",
      definitions: DATA.runBuilderDefinitions
    });
  }

  function renderBuilderSimulation() {
    return renderBuilderSetPage({
      eyebrow: "Simulation files",
      heading: "Give each simulation lane a record.",
      deck: "Use these forms when the event needs specialist agent-readable checks before it becomes public or active.",
      definitions: DATA.simulationBuilderDefinitions
    });
  }

  function renderBuilderNotices() {
    return renderBuilderSetPage({
      eyebrow: "Noticeboard files",
      heading: "Create public-safe update records.",
      deck: "Use these forms for concise screen, poster, transport, venue and aftercare updates.",
      definitions: DATA.noticeboardBuilderDefinitions
    });
  }

  function renderBuilderAssets() {
    return section({ eyebrow: "External builders", heading: "Open the related builder links.", id: "external-builders" }, "These outlink cards connect this event engine to the wider Markdown builder ecosystem.", `<div class="grid four">${DATA.linkedBuilders.map(sourceCard).join("")}</div>`);
  }

  function renderSimulation() {
    const decisions = [
      { title: "Collect signals", body: "Start with event brief, place, expected attendance, timing, transport, weather and source confidence." },
      { title: "Stress-test load", body: "Check crowd flow, ferries, toilets, waste, power, safety, accessibility, permissions and local benefit together." },
      { title: "Choose the next move", body: "Proceed, shrink, split, move, delay, add virtual reach or ask for a named approval before publishing." }
    ];
    return [
      section({ eyebrow: "Simulation files", heading: "Create the simulation record first.", id: "simulation-builders" }, "The simulation page explains the checks. The actual Markdown files live on their own focused builder page.", `<div class="button-row"><a class="button primary" href="builder-simulation.html">Open simulation builders ${icons.arrowRight}</a><a class="button secondary" href="approvals.html">Check approval gates ${icons.arrowRight}</a></div>`),
      section({ eyebrow: "Decision path", heading: "Turn the event into a go, change or pause decision.", id: "simulation-path" }, "", `<div class="grid three">${decisions.map(tile).join("")}</div>`),
      section({ eyebrow: "Check lanes", heading: "Different experts see different risks.", id: "simulation-guild" }, "Use the lanes below as prompts for the simulation builder, not as separate pages to manage.", `<div class="grid two">${DATA.simulationAgents.map(tile).join("")}</div>`)
    ].join("");
  }

  function renderApprovals() {
    return [
      section({ eyebrow: "Approval map", heading: "Ask the right kind of permission first.", id: "approval-map" }, "This is the short map. Use the approval-trail builder when a decision needs a source, status, condition or next check.", `<div class="grid two">${(DATA.approvalGroups || DATA.approvalGates).map(tile).join("")}<a class="tile link-card" href="builder-run.html?builder=approval-trail"><h3>Create approval trail</h3><p>Turn the permission question into a Markdown file with source, status, conditions and next check.</p></a></div>`),
      section({ eyebrow: "Source links", heading: "Open the source only when that lane applies.", id: "approval-sources" }, "", `<div class="grid four">${DATA.approvalSources.map(sourceCard).join("")}</div>`)
    ].join("");
  }

  function renderBuilderSuite(definitions) {
    const tabs = definitions.map((def, index) => `<button class="builder-tab" type="button" data-builder-tab="${esc(def.id)}" aria-selected="${index === 0}">${esc(def.label)}</button>`).join("");
    const panels = definitions.map((def, index) => {
      const previous = definitions[index - 1];
      const next = definitions[index + 1];
      const previousButton = previous
        ? `<button class="button secondary" type="button" data-builder-jump="${esc(previous.id)}">Previous: ${esc(previous.label)}</button>`
        : `<a class="button secondary" href="builders.html">Builder hub ${icons.arrowRight}</a>`;
      const nextButton = next
        ? `<button class="button primary" type="button" data-builder-jump="${esc(next.id)}">Next: ${esc(next.label)} ${icons.arrowRight}</button>`
        : `<a class="button primary" href="builders.html">Back to builder hub ${icons.arrowRight}</a>`;
      return `
      <div class="form-panel" id="builder-${esc(def.id)}" data-builder-panel="${esc(def.id)}" ${index === 0 ? "" : "hidden"}>
        <form class="md-form" data-builder-form="${esc(def.id)}">
          ${def.fields.map(([name, label, type, hint]) => `
            <label>${esc(label)}
              <span>${esc(hint)}</span>
              ${type === "textarea" ? `<textarea name="${esc(name)}" rows="4"></textarea>` : `<input class="field" name="${esc(name)}" type="${esc(type)}">`}
            </label>
          `).join("")}
          <div class="form-actions">
            <button class="button primary" type="button" data-builder-download="${esc(def.id)}">${icons.download} Export .md</button>
            <button class="button secondary" type="button" data-builder-copy="${esc(def.id)}">${icons.copy} Copy</button>
            <button class="button ghost" type="button" data-builder-clear="${esc(def.id)}">${icons.reset} Reset</button>
          </div>
          <p class="status-line" data-builder-status="${esc(def.id)}"></p>
        </form>
        <textarea class="md-output" readonly data-builder-output="${esc(def.id)}" aria-label="${esc(def.label)} Markdown output"></textarea>
        <nav class="builder-panel-nav" aria-label="${esc(def.label)} builder navigation">
          ${previousButton}
          ${nextButton}
        </nav>
      </div>
    `;
    }).join("");
    return `<div class="builder-shell" data-builder-suite><div class="builder-tabs" role="tablist">${tabs}</div>${panels}</div>`;
  }

  function renderFooter() {
    const mount = document.querySelector("[data-site-footer]");
    if (!mount) return;
    mount.innerHTML = `
      <div>
        <strong>${esc(DATA.project.name)}</strong>
        <p>${esc(DATA.project.boundary)}</p>
      </div>
      <nav class="footer-links" aria-label="Footer links">
        <a href="LICENCE.md">Licence</a>
        <a href="${esc(DATA.project.repoUrl)}" target="_blank" rel="noopener noreferrer">Source repo</a>
        <a href="approvals.html">Approvals</a>
        <a href="builder-notices.html">Notice builders</a>
        <a href="builders.html">Builders</a>
      </nav>
    `;
  }

  function renderPageNav() {
    const sequence = DATA.pageSequence || Object.keys(DATA.pages);
    const index = sequence.indexOf(pageId);
    if (index === -1) return "";
    const previousId = index > 0 ? sequence[index - 1] : null;
    const nextId = index < sequence.length - 1 ? sequence[index + 1] : "home";
    const links = [];

    if (previousId) {
      links.push(pageNavLink(previousId, "Back"));
    }
    if (nextId && nextId !== pageId) {
      links.push(pageNavLink(nextId, index === 0 ? "Start with" : nextId === "home" ? "Return to" : "Next"));
    }

    return `
      <nav class="page-nav ${links.length === 1 ? "single" : ""}" id="page-nav" aria-label="Page sequence">
        ${links.join("")}
      </nav>
    `;
  }

  function pageNavLink(id, label) {
    const targetPage = DATA.pages[id] || {};
    const href = id === "home" ? "index.html" : `${id}.html`;
    return `<a href="${esc(href)}"><span>${esc(label)}</span><strong>${esc(targetPage.title || id)}</strong></a>`;
  }

  function mainContent() {
    const routes = {
      home: renderHome,
      calendar: renderCalendar,
      ecosystem: renderEcosystem,
      places: renderPlaces,
      supply: renderSupply,
      builders: renderBuilders,
      "builder-events": renderBuilderEvents,
      "builder-run": renderBuilderRun,
      "builder-simulation": renderBuilderSimulation,
      "builder-notices": renderBuilderNotices,
      "builder-assets": renderBuilderAssets,
      simulation: renderSimulation,
      approvals: renderApprovals
    };
    return renderHero() + (routes[pageId] || routes.home)() + `<div class="site-shell">${renderPageNav()}</div>`;
  }

  function setupNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      links.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    });

    const toggleDropdown = (buttonEl) => {
      const item = buttonEl.closest(".nav-item");
      const expanded = buttonEl.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".nav-item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector("[data-nav-drop]")?.setAttribute("aria-expanded", "false");
        }
      });
      buttonEl.setAttribute("aria-expanded", String(!expanded));
      item.classList.toggle("is-open", !expanded);
    };

    links.addEventListener("pointerdown", (event) => {
      const buttonEl = event.target.closest("[data-nav-drop]");
      if (!buttonEl || !links.contains(buttonEl)) return;
      event.preventDefault();
      toggleDropdown(buttonEl);
    });

    links.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const buttonEl = event.target.closest("[data-nav-drop]");
      if (!buttonEl || !links.contains(buttonEl)) return;
      event.preventDefault();
      toggleDropdown(buttonEl);
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 980px)").matches) closeMenu();
      });
    });
  }

  function setupToTop() {
    const buttonEl = document.querySelector("[data-to-top]");
    if (!buttonEl) return;
    const sync = () => buttonEl.classList.toggle("is-visible", window.scrollY > 420);
    window.addEventListener("scroll", sync, { passive: true });
    buttonEl.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    sync();
  }

  function setupEventFilters() {
    const buttons = [...document.querySelectorAll("[data-event-filter]")];
    const cards = [...document.querySelectorAll("[data-event-status]")];
    const search = document.querySelector("[data-calendar-search]");
    const sectorFilter = document.querySelector("[data-sector-filter]");
    const loadFilter = document.querySelector("[data-load-filter]");
    const empty = document.querySelector("[data-event-empty]");
    const clearButton = document.querySelector("[data-event-clear]");
    let activeStatus = "all";
    const sync = () => {
      const query = (search && search.value || "").trim().toLowerCase();
      const selectedSector = sectorFilter && sectorFilter.value || "all";
      const selectedLoad = loadFilter && loadFilter.value || "all";
      let visibleCount = 0;
      cards.forEach((cardEl) => {
        const statusOk = activeStatus === "all" || cardEl.dataset.eventStatus === activeStatus;
        const sectorOk = selectedSector === "all" || cardEl.dataset.eventSector === selectedSector;
        const loadOk = selectedLoad === "all" || (cardEl.dataset.eventTags || "").split(" ").includes(selectedLoad);
        const textOk = !query || (cardEl.dataset.eventText || "").includes(query);
        const visible = statusOk && sectorOk && loadOk && textOk;
        cardEl.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (empty) empty.hidden = visibleCount > 0;
    };
    buttons.forEach((buttonEl) => {
      buttonEl.addEventListener("click", () => {
        activeStatus = buttonEl.dataset.eventFilter;
        buttons.forEach((item) => item.setAttribute("aria-selected", String(item === buttonEl)));
        sync();
      });
    });
    if (search) search.addEventListener("input", sync);
    if (sectorFilter) sectorFilter.addEventListener("change", sync);
    if (loadFilter) loadFilter.addEventListener("change", sync);
    if (clearButton) {
      clearButton.addEventListener("click", () => {
        activeStatus = "all";
        if (search) search.value = "";
        if (sectorFilter) sectorFilter.value = "all";
        if (loadFilter) loadFilter.value = "all";
        buttons.forEach((item) => item.setAttribute("aria-selected", String(item.dataset.eventFilter === "all")));
        sync();
      });
    }
    sync();
  }

  function setupEntitySearch() {
    const search = document.querySelector("[data-entity-search]");
    const groupFilter = document.querySelector("[data-group-filter]");
    const groups = [...document.querySelectorAll("[data-group]")];
    const sync = () => {
      const query = (search && search.value || "").trim().toLowerCase();
      const selectedGroup = groupFilter && groupFilter.value || "all";
      groups.forEach((group) => {
        const groupVisible = selectedGroup === "all" || group.dataset.group === selectedGroup;
        let anyVisible = false;
        [...group.querySelectorAll("[data-entity-text]")].forEach((card) => {
          const visible = groupVisible && (!query || card.dataset.entityText.includes(query));
          card.classList.toggle("is-hidden", !visible);
          anyVisible = anyVisible || visible;
        });
        group.hidden = !groupVisible || !anyVisible;
      });
    };
    if (search) search.addEventListener("input", sync);
    if (groupFilter) groupFilter.addEventListener("change", sync);
  }

  function setupPlaceMap() {
    const search = document.querySelector("[data-place-search]");
    const filter = document.querySelector("[data-place-filter]");
    const localeFilter = document.querySelector("[data-place-locale-filter]");
    const shortcutButtons = [...document.querySelectorAll("[data-map-shortcut]")];
    const cards = [...document.querySelectorAll("[data-place-card]")];
    const mapEl = document.querySelector("[data-place-map]");
    const empty = document.querySelector("[data-place-empty]");
    const detail = document.querySelector("[data-place-detail]");
    if (!cards.length || !detail) return;

    let selectedIndex = 0;
    const Leaflet = window.L;
    const hasCoords = (place) => Number.isFinite(Number(place.lat)) && Number.isFinite(Number(place.lng));
    const selectionZoom = (place) => {
      const explicitZoom = Number(place.mapZoom);
      if (Number.isFinite(explicitZoom)) return explicitZoom;
      if (place.name === "Naree Budjong Djara National Park") return 13;
      if (place.category === "Parks and protected areas") return 15;
      return 18;
    };
    const map = mapEl && Leaflet
      ? Leaflet.map(mapEl, { scrollWheelZoom: false }).setView([-27.48, 153.47], 11)
      : null;

    if (map) {
      mapEl.placeMap = map;
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    } else if (mapEl) {
      mapEl.innerHTML = '<p class="map-fallback">Map unavailable. Use the place list below.</p>';
    }

    const markerIcon = (index, active) => {
      const place = DATA.places[index] || {};
      const label = place.pinLabel || index + 1;
      return Leaflet.divIcon({
        className: "map-pin-shell",
        html: `<span class="map-pin map-pin--${esc(mapPinKind(place.category))} ${active ? "is-active" : ""}"><span class="map-pin-label">${esc(label)}</span></span>`,
        iconSize: [36, 44],
        iconAnchor: [18, 42],
        popupAnchor: [0, -38]
      });
    };

    const mapMarkers = map
      ? DATA.places.map((place, index) => {
        if (!hasCoords(place)) return null;
        const marker = Leaflet.marker([Number(place.lat), Number(place.lng)], {
          icon: markerIcon(index, false),
          title: place.name
        }).addTo(map);
        marker.bindPopup(`
          <strong>${esc(place.name)}</strong><br>
          ${esc(place.area)}<br>
          <span>${esc(place.category)}</span>
        `);
        marker.on("click", () => selectPlace(index, { fromMap: true, focusMap: true, updateUrl: true }));
        return marker;
      })
      : [];

    const placeVisible = (el, query, category, locale) => {
      const categoryOk = category === "all" || el.dataset.placeCategory === category;
      const localeOk = locale === "all" || el.dataset.placeLocale === locale;
      const textOk = !query || (el.dataset.placeText || "").includes(query);
      return categoryOk && localeOk && textOk;
    };

    const renderDetail = (index) => {
      const place = DATA.places[index];
      if (!place) return;
      const external = String(place.url || "").startsWith("http");
      detail.innerHTML = `
        <p class="eyebrow">Selected place</p>
        <h3>${esc(place.name)}</h3>
        <p class="meta">${esc(place.area)} / ${esc(place.category)}</p>
        ${place.address ? `<p class="meta"><strong>Address:</strong> ${esc(place.address)}</p>` : ""}
        <p>${esc(place.role)}</p>
        <div class="detail-divider"></div>
        <p><strong>Check first:</strong> ${esc(place.checks)}</p>
        <a class="button ghost" href="${esc(place.url)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(place.source)} ${icons.arrowRight}</a>
      `;
    };

    const selectPlace = (index, options = {}) => {
      selectedIndex = index;
      const place = DATA.places[index];
      if (!place) return;
      cards.forEach((card) => card.classList.toggle("is-active", Number(card.dataset.placeCard) === index));
      mapMarkers.forEach((marker, markerIndex) => {
        if (!marker) return;
        marker.setIcon(markerIcon(markerIndex, markerIndex === index));
      });
      renderDetail(index);
      if (options.updateUrl) {
        const next = new URL(window.location.href);
        next.searchParams.set("place", placeKey(place));
        next.hash = "place-catalogue";
        window.history.replaceState(null, "", next);
      }
      if (map && place && hasCoords(place)) {
        const target = [Number(place.lat), Number(place.lng)];
        if (options.focusMap) {
          const targetZoom = Math.max(map.getZoom(), selectionZoom(place));
          map.setView(target, targetZoom, { animate: true });
        } else if (!options.skipPan) {
          map.panTo(target, { animate: true });
        }
        if ((options.fromMap || options.openPopup) && mapMarkers[index]) mapMarkers[index].openPopup();
      }
    };

    const sync = (options = {}) => {
      const query = (search && search.value || "").trim().toLowerCase();
      const category = filter && filter.value || "all";
      const locale = localeFilter && localeFilter.value || "all";
      let firstVisible = -1;
      const visibleIndexes = [];

      cards.forEach((card) => {
        const index = Number(card.dataset.placeCard);
        const visible = placeVisible(card, query, category, locale);
        card.hidden = !visible;
        if (visible && firstVisible === -1) firstVisible = index;
        if (visible) visibleIndexes.push(index);
      });

      if (map) {
        mapMarkers.forEach((marker, index) => {
          if (!marker) return;
          const visible = visibleIndexes.includes(index);
          if (visible && !map.hasLayer(marker)) marker.addTo(map);
          if (!visible && map.hasLayer(marker)) map.removeLayer(marker);
        });
      }

      if (empty) empty.hidden = firstVisible !== -1;
      if (firstVisible !== -1 && (!cards[selectedIndex] || cards[selectedIndex].hidden)) {
        selectPlace(firstVisible, { skipPan: true });
      }
      shortcutButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.mapShortcut === locale);
      });
      if (map && visibleIndexes.length && options.fit !== false) {
        const bounds = Leaflet.latLngBounds(
          visibleIndexes
            .map((index) => DATA.places[index])
            .filter(hasCoords)
            .map((place) => [Number(place.lat), Number(place.lng)])
        );
        const maxZoom = locale === "all" && category === "all" ? 12 : 16;
        if (bounds.isValid()) map.fitBounds(bounds.pad(0.16), { maxZoom });
      }
    };

    cards.forEach((card) => {
      const index = Number(card.dataset.placeCard);
      card.addEventListener("click", () => selectPlace(index, { focusMap: true, updateUrl: true }));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectPlace(index, { focusMap: true, updateUrl: true });
        }
      });
    });

    if (search) search.addEventListener("input", sync);
    if (filter) filter.addEventListener("change", sync);
    if (localeFilter) localeFilter.addEventListener("change", sync);
    shortcutButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const locale = button.dataset.mapShortcut || "all";
        if (localeFilter) localeFilter.value = locale;
        sync();
        const target = PLACE_LOCALES.find((item) => item.id === locale);
        if (map && target) map.setView(target.center, target.zoom, { animate: true });
      });
    });
    sync();
    const requestedPlace = new URLSearchParams(window.location.search).get("place");
    const requestedIndex = requestedPlace
      ? DATA.places.findIndex((place) => placeKey(place) === requestedPlace)
      : -1;
    if (requestedIndex !== -1) {
      selectPlace(requestedIndex, { focusMap: true, openPopup: true });
      requestAnimationFrame(() => document.querySelector("#place-catalogue")?.scrollIntoView({ block: "start" }));
    } else {
      selectPlace(0, { skipPan: true });
    }
  }

  function yamlScalar(value) {
    const text = String(value || "TODO").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `"${text}"`;
  }

  function formState(form) {
    const state = {};
    [...form.elements].forEach((el) => {
      if (!el.name) return;
      state[el.name] = el.value.trim();
    });
    return state;
  }

  function buildMarkdown(def, state) {
    const generatedOn = new Date().toLocaleDateString("en-AU", { year: "numeric", month: "2-digit", day: "2-digit" });
    const titleField = def.fields[0] && def.fields[0][0];
    const title = state[titleField] || def.label;
    const lines = [
      "---",
      `schema: ${yamlScalar(def.schema)}`,
      "status: draft_for_human_review",
      `title: ${yamlScalar(title)}`,
      `generated_on: ${yamlScalar(generatedOn)}`,
      `source_site: ${yamlScalar(DATA.project.name)}`,
      "public_boundary: \"review before publishing\"",
      "---",
      "",
      `# ${title}`,
      "",
      "This file is a draft planning record. It should be checked by the responsible humans before it is treated as public, approved or complete.",
      ""
    ];
    def.fields.forEach(([name, label]) => {
      lines.push(`## ${label}`, "", state[name] || "TODO", "");
    });
    lines.push(
      "## Public Boundary",
      "",
      "- Do not publish private contact details, protected places, sensitive safety notes, unapproved images or cultural material without approval.",
      "- Confirm the approval owner before using this file as a public notice.",
      "",
      "## Linked Event Engine",
      "",
      "- Calendar: calendar.html",
      "- Ecosystem catalogue: ecosystem.html",
      "- Approval gates: approvals.html",
      "- Notice builders: builder-notices.html",
      "- Event file builders: builder-events.html",
      "- Run file builders: builder-run.html",
      "- Simulation file builders: builder-simulation.html",
      "- Noticeboard file builders: builder-notices.html",
      "- Aftercare report builder: builder-events.html?builder=aftercare",
      ""
    );
    return lines.join("\n");
  }

  function allBuilderDefinitions() {
    return [
      ...(DATA.builderDefinitions || []),
      ...(DATA.runBuilderDefinitions || []),
      ...(DATA.simulationBuilderDefinitions || []),
      ...(DATA.noticeboardBuilderDefinitions || [])
    ];
  }

  function setupBuilders() {
    const definitions = allBuilderDefinitions();
    const byId = new Map(definitions.map((def) => [def.id, def]));
    const suites = [...document.querySelectorAll("[data-builder-suite]")];
    if (!suites.length) return;

    document.querySelectorAll("[data-builder-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        const suite = tab.closest("[data-builder-suite]");
        const id = tab.dataset.builderTab;
        selectBuilderPanel(suite, id);
        updateBuilderUrl(suite, id);
      });
    });

    document.querySelectorAll("[data-builder-jump]").forEach((buttonEl) => {
      buttonEl.addEventListener("click", () => {
        const suite = buttonEl.closest("[data-builder-suite]");
        const id = buttonEl.dataset.builderJump;
        selectBuilderPanel(suite, id);
        updateBuilderUrl(suite, id);
        (suite.closest(".section") || suite).scrollIntoView({ block: "start", behavior: "smooth" });
      });
    });

    document.querySelectorAll("[data-builder-form]").forEach((form) => {
      const id = form.dataset.builderForm;
      const def = byId.get(id);
      const output = document.querySelector(`[data-builder-output="${id}"]`);
      const status = document.querySelector(`[data-builder-status="${id}"]`);
      const storageKey = `qcee-builder-${id}`;
      let statusTimer;

      function setStatus(message) {
        if (!status) return;
        status.textContent = message;
        window.clearTimeout(statusTimer);
        statusTimer = window.setTimeout(() => {
          status.textContent = "";
        }, 2400);
      }

      function restore() {
        try {
          const stored = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
          Object.keys(stored).forEach((name) => {
            if (form.elements[name]) form.elements[name].value = stored[name];
          });
        } catch (error) {
          sessionStorage.removeItem(storageKey);
        }
      }

      function sync() {
        const state = formState(form);
        sessionStorage.setItem(storageKey, JSON.stringify(state));
        output.value = buildMarkdown(def, state);
      }

      restore();
      sync();
      form.addEventListener("input", sync);

      document.querySelector(`[data-builder-download="${id}"]`).addEventListener("click", () => {
        sync();
        const blob = new Blob([output.value], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const state = formState(form);
        const first = def.fields[0] && def.fields[0][0];
        link.href = url;
        link.download = `${slug(state[first] || def.filename.replace(/\.md$/, ""))}.md`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        setStatus("Markdown exported.");
      });

      document.querySelector(`[data-builder-copy="${id}"]`).addEventListener("click", async () => {
        sync();
        try {
          await navigator.clipboard.writeText(output.value);
          setStatus("Markdown copied.");
        } catch (error) {
          output.select();
          document.execCommand("copy");
          setStatus("Markdown copied.");
        }
      });

      document.querySelector(`[data-builder-clear="${id}"]`).addEventListener("click", () => {
        form.reset();
        sessionStorage.removeItem(storageKey);
        sync();
        setStatus("Form reset.");
      });
    });

    const requestedBuilder = new URLSearchParams(window.location.search).get("builder");
    suites.forEach((suite) => {
      if (requestedBuilder && suite.querySelector(`[data-builder-tab="${requestedBuilder}"]`)) {
        selectBuilderPanel(suite, requestedBuilder);
      }
    });
  }

  function updateBuilderUrl(suite, id) {
    if (!pageId.startsWith("builder") || !suite || !id) return;
    const url = new URL(window.location.href);
    url.searchParams.set("builder", id);
    if (pageId === "builders") {
      const targetSection = suite.closest(".section");
      url.hash = targetSection && targetSection.id ? targetSection.id : "builder-sets";
    } else {
      url.hash = "";
    }
    window.history.replaceState({}, "", url);
  }

  function selectBuilderPanel(suite, id) {
    suite.querySelectorAll("[data-builder-tab]").forEach((buttonEl) => {
      buttonEl.setAttribute("aria-selected", String(buttonEl.dataset.builderTab === id));
    });
    suite.querySelectorAll("[data-builder-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.builderPanel !== id;
    });
  }

  function setupHashScroll() {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ block: "start", behavior: "auto" });
    };
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("load", scrollToHash);
    window.setTimeout(scrollToHash, 0);
    window.setTimeout(scrollToHash, 250);
    window.setTimeout(scrollToHash, 900);
  }

  document.title = `${page.title} | ${DATA.project.name}`;
  renderHeader();
  const main = document.querySelector("[data-page-main]");
  if (main) main.innerHTML = mainContent();
  renderFooter();
  setupNavigation();
  setupToTop();
  setupEventFilters();
  setupEntitySearch();
  setupPlaceMap();
  setupBuilders();
  setupHashScroll();
})();
