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

  function placeHasPublishedPin(place) {
    return Boolean(place) && place.coordinateConfidence === "high" && place.mapStatus !== "withheld";
  }

  function placeMapStatusLabel(place) {
    if (place && place.fieldSurveyed === true) return "Field surveyed";
    return placeHasPublishedPin(place) ? "Source-backed pin" : "Pin withheld";
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
    if (/toilet/.test(text)) return "toilet";
    if (/bbq/.test(text)) return "bbq";
    if (/boat|jetty|ramp/.test(text)) return "boat";
    if (/accommodation/.test(text)) return "stay";
    if (/post|essential/.test(text)) return "essential";
    if (/tour|visitor/.test(text)) return "visitor";
    if (/food|drink|grocery|hospitality/.test(text)) return "food";
    if (/retail|suppl/.test(text)) return "retail";
    if (/creative|culture|heritage|gallery|artist/.test(text)) return "creative";
    if (/camp/.test(text)) return "camping";
    if (/beach|surf|coast/.test(text)) return "beach";
    if (/amenity|picnic/.test(text)) return "amenity";
    if (/sport|oval|club|golf|pool|bowls/.test(text)) return "sport";
    if (/transport|ferry|mail/.test(text)) return "transport";
    if (/park|protected|lake|nature/.test(text)) return "nature";
    if (/hall|civic|venue|property|service/.test(text)) return "civic";
    return "default";
  }

  function mapPinGlyph(category) {
    const glyphs = {
      food: "🍴", retail: "🛍️", creative: "🎨", camping: "⛺", beach: "🏖️",
      toilet: "🚻", bbq: "🔥", amenity: "🧺", sport: "⚽", boat: "⚓",
      transport: "⛴️", nature: "🌿", civic: "🏛️", stay: "🛏️",
      essential: "✚", visitor: "🧭", default: "📍"
    };
    return glyphs[mapPinKind(category)] || glyphs.default;
  }

  function mapPinColour(category) {
    const colours = {
      food: "#ffb55f", retail: "#8fd5ff", creative: "#c5a2ff", camping: "#f1cf72",
      beach: "#5de4dc", toilet: "#eef8f5", bbq: "#ff7d66", amenity: "#f0dca2",
      sport: "#a2f3a8", boat: "#75bfff", transport: "#9fd9ff", nature: "#73e59a",
      civic: "#d7c4ff", stay: "#ffb6d9", essential: "#ffdd66", visitor: "#79ead2",
      default: "#b7ccc7"
    };
    return colours[mapPinKind(category)] || colours.default;
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
        <a class="brand-mark" href="index.html" aria-label="${esc(DATA.project.name)} home">
          <svg class="brand-organism" viewBox="0 0 46 46" aria-hidden="true">
            <path d="M7 34 17 24 11 15m6 9 10-13m-10 13 15 4m-5-17 11 7m-6 10 7 10"/>
            <circle cx="7" cy="34" r="2"/><circle cx="11" cy="15" r="2"/><circle cx="27" cy="11" r="2.4"/><circle cx="38" cy="18" r="2"/><circle cx="32" cy="28" r="2.5"/><circle cx="39" cy="38" r="2"/>
          </svg>
          <span class="brand-words"><span>Quandamooka</span><span>Events Engine</span></span>
        </a>
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
      <section class="hero hero--${esc(pageId)}" aria-labelledby="page-title">
        <svg class="hero-organism" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
          <g class="organism-network">
            <path d="M-40 610C130 520 142 390 295 392S490 545 612 410 725 134 911 190s178 176 340 74"/>
            <path d="M150 520c75-70 38-164 128-220m-2 3c83-12 128-80 154-176m179 282c-20-90 42-146 120-195m-3 2c-20-94 45-154 128-188m52 166c79 30 122 100 147 193"/>
            <path d="M424 130c55 56 117 73 186 58m294-58c-66 34-95 96-88 184M90 590c39 10 72 44 91 91"/>
          </g>
          <g class="organism-nodes"><circle cx="150" cy="520" r="5"/><circle cx="276" cy="303" r="7"/><circle cx="424" cy="130" r="5"/><circle cx="609" cy="409" r="8"/><circle cx="726" cy="216" r="6"/><circle cx="904" cy="130" r="5"/><circle cx="1033" cy="387" r="7"/></g>
        </svg>
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

  function livingDivider() {
    return `
      <div class="living-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 96" preserveAspectRatio="none">
          <path class="living-branch branch-a" pathLength="1" d="M0 55c112-2 141-34 231-24s114 48 204 36 145-54 234-39 111 45 199 29 118-45 184-20 89 17 148 5"/>
          <path class="living-branch branch-b" pathLength="1" d="M228 31c29 3 43-14 55-29m151 65c36-2 55 12 72 28m160-66c12-19 27-27 53-29m148 57c31 1 47 20 62 37"/>
          <g class="living-nodes"><circle cx="231" cy="31" r="4"/><circle cx="435" cy="67" r="5"/><circle cx="669" cy="28" r="4"/><circle cx="868" cy="57" r="5"/><circle cx="1052" cy="37" r="4"/></g>
        </svg>
      </div>`;
  }

  function section(title, deck, body, className) {
    const idAttr = title.id ? ` id="${esc(title.id)}"` : "";
    const deckHtml = deck ? `<p>${esc(deck)}</p>` : "";
    return `
      <section class="section ${className || ""}"${idAttr}>
        ${livingDivider()}
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
      { number: "01", title: "What's happening", body: "Confirmed dates, recurring patterns and source-linked event memory.", href: "calendar.html" },
      { number: "02", title: "Explore the island", body: "A map-led catalogue of venues, parks, beaches and practical amenities.", href: "places.html" },
      { number: "03", title: "Build an event", body: "Shape an idea, test its load and export a clean planning record.", href: "builder-events.html?builder=event" },
      { number: "04", title: "Find the ecosystem", body: "People, services and organisations that make local events possible.", href: "ecosystem.html" }
    ];
    const boundary = [
      { title: "Public by default", body: "The hub is written for hosts, organisers, venues, artists, suppliers, visitors and reviewers." },
      { title: "Private stays private", body: "Contact details, protected places, private planning notes, unapproved images and sensitive incident material stay out of public notices." },
      { title: "Authority is real", body: "The engine helps prepare better questions. It does not replace cultural authority, land managers, council permits, safety advice or emergency sources." }
    ];
    return [
      section({ eyebrow: "How it works", heading: "Idea to aftercare lives here." }, "", `<div class="grid three">${DATA.process.map(tile).join("")}</div>`),
      section({ eyebrow: "Enter the living system", heading: "Start where your attention already is." }, "The engine connects public events, island places and practical planning without pretending a database is the community.", `<div class="grid four portal-grid">${fastDoors.map((item) => `<a class="tile link-card portal-card" href="${item.href}"><span class="portal-number">${item.number}</span><h3>${item.title}</h3><p>${item.body}</p><span class="portal-arrow" aria-hidden="true">${icons.arrowRight}</span></a>`).join("")}</div>`),
      section({ eyebrow: "Public boundary", heading: "Useful without overclaiming." }, DATA.project.boundary, `<div class="grid three">${boundary.map(tile).join("")}</div>`)
    ].join("");
  }

  function renderCalendar() {
    const statusOrder = ["confirmed", "tbc", "recurring", "past", "historical"];
    const automation = DATA.eventAutomation || {};
    const brisbaneTodayKey = () => {
      const parts = new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Brisbane",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).formatToParts(new Date());
      const getPart = (type) => parts.find((part) => part.type === type)?.value || "";
      return `${getPart("year")}-${getPart("month")}-${getPart("day")}`;
    };
    const sortAnchorDate = automation.sortAnchorDate || brisbaneTodayKey();
    const eventEndSort = (event) => event.dateEndSort || event.dateSort || "";
    const effectiveStatus = (event) => {
      const endDate = eventEndSort(event);
      if (event.status === "confirmed" && endDate && endDate < sortAnchorDate) return "past";
      return event.status;
    };
    const statusFilters = ["all", ...statusOrder.filter((status) => DATA.events.some((event) => effectiveStatus(event) === status))];
    const sectors = [...new Set(DATA.events.map((event) => event.sector).filter(Boolean))].sort();
    const loadTags = [...new Set(DATA.events.flatMap((event) => event.loadTags || []))].sort();
    const statusCount = (status) => DATA.events.filter((event) => effectiveStatus(event) === status).length;
    const sourceState = (event) => {
      if (event.sourceStatus) return event.sourceStatus;
      const status = effectiveStatus(event);
      if (status === "confirmed") return `Date source checked ${DATA.project.lastPublicSearch}`;
      if (status === "past") return "Past record kept for event memory";
      if (status === "recurring") return "Recurring pattern needs organiser confirmation";
      if (status === "tbc") return "Date to confirm before public promotion";
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
    const calendarRank = (event) => {
      const status = effectiveStatus(event);
      if (status === "confirmed") return 0;
      if (status === "tbc") return 1;
      if (status === "recurring") return 2;
      if (status === "past") return 3;
      if (status === "historical") return 4;
      return 5;
    };
    const eventCards = DATA.events
      .slice()
      .sort((a, b) => {
        const rankDiff = calendarRank(a) - calendarRank(b);
        if (rankDiff) return rankDiff;
        if (calendarRank(a) >= 3) return String(eventEndSort(b)).localeCompare(String(eventEndSort(a)));
        return String(a.dateSort || "").localeCompare(String(b.dateSort || ""));
      })
      .map((event) => {
        const status = effectiveStatus(event);
        const simulation = event.simulation || {};
        const href = event.sourceUrl || "#";
        const external = href.startsWith("http");
        return `
          <article class="event-card event-atlas-card"
            data-event-status="${esc(status)}"
            data-event-sector="${esc(slug(event.sector))}"
            data-event-tags="${esc((event.loadTags || []).map(slug).join(" "))}"
            data-event-text="${esc(eventText(event))}">
            <div class="event-card-top">
              <span class="status-pill ${esc(status)}">${esc(DATA.eventStatusLabels[status] || status)}</span>
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
    const automationSources = (automation.sources || []).map((source) => `<span class="tag">${esc(source)}</span>`).join("");
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
      section({ eyebrow: automation.label || "Automated source watch", heading: "Where the event scan looks.", id: "event-source-watch" }, automation.interimNote || "", `
        <div class="grid two">
          <article class="panel">
            <h3>Scan rhythm</h3>
            <p><strong>Schedule:</strong> ${esc(automation.schedule || "Twice weekly in Brisbane time.")}</p>
            <p><strong>Last source pass:</strong> ${esc(automation.lastRunLabel || DATA.project.lastPublicSearch)}</p>
          </article>
          <article class="panel">
            <h3>Search lanes</h3>
            <div class="tag-row">${automationSources}</div>
          </article>
        </div>
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
    const publishedPinCount = DATA.places.filter(placeHasPublishedPin).length;
    const withheldPinCount = DATA.places.length - publishedPinCount;
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
            <span class="tag ${placeHasPublishedPin(place) ? "tag--verified" : "tag--withheld"}">${esc(placeMapStatusLabel(place))}</span>
          </div>
          <h3>${esc(place.name)}</h3>
          <p class="meta">${esc(place.area)}</p>
          <p>${esc(place.role)}</p>
        </article>
      `;
    }).join("");
    return section({ eyebrow: "Controlled map layer", heading: "Publish verified points. Withhold the guesses.", id: "place-catalogue" }, "Only independently located, high-confidence facilities appear on the map. The wider catalogue remains visible for auditing, but disputed, stale and geocoder-only records do not get public pins.", `
      <div class="map-truth-band" role="note">
        <span><strong>${publishedPinCount}</strong> source-backed map pins</span>
        <span><strong>${withheldPinCount}</strong> records withheld from map</span>
        <span><strong>0</strong> field-surveyed points</span>
      </div>
      <div class="control-bar place-controls">
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
        <div class="real-place-map" data-place-map aria-label="Interactive map of source-backed Minjerribah facilities"></div>
        <aside class="place-detail" data-place-detail aria-live="polite"></aside>
      </div>
      <p class="empty-note" data-place-empty hidden>No matching places yet. Clear a filter or search another term.</p>
      <details class="place-directory" data-place-directory>
        <summary>Browse the place list <span><strong data-place-count>${DATA.places.length}</strong> matching</span></summary>
        <div class="place-list" data-place-list>${cards}</div>
      </details>
    `, "place-explorer");
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
      <div class="footer-intro">
        <strong>${esc(DATA.project.name)}</strong>
        <p>${esc(DATA.project.boundary)}</p>
        <div class="footer-signature" aria-label="Site signature">
          <span>Built by <strong>${esc(DATA.project.builtBy || "Luke Nathan Hayes")}</strong></span>
          <span>Last updated <time datetime="2026-07-23">${esc(DATA.project.lastUpdated || DATA.project.lastPublicSearch)}</time></span>
        </div>
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

  function setupLivingMotion() {
    document.documentElement.classList.add("motion-ready");
    const revealTargets = [...document.querySelectorAll(".hero-copy, .hero-media, .section-heading, .living-divider, .map-truth-band, .place-map-shell, .portal-card")];
    const reveal = (element) => element.classList.add("is-grown");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -5%" });
      revealTargets.forEach((element) => observer.observe(element));
      window.setTimeout(() => revealTargets.filter((element) => element.getBoundingClientRect().top < window.innerHeight).forEach(reveal), 700);
    } else {
      revealTargets.forEach(reveal);
    }

    const hero = document.querySelector(".hero");
    if (hero && window.matchMedia("(pointer: fine)").matches) {
      hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width - 0.5) * 2}`);
        hero.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height - 0.5) * 2}`);
      });
      hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--pointer-x", "0");
        hero.style.setProperty("--pointer-y", "0");
      });
    }

    let ticking = false;
    const updateScrollSignal = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      document.documentElement.style.setProperty("--scroll-progress", `${Math.min(window.scrollY / max, 1) * 100}%`);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollSignal);
    }, { passive: true });
    updateScrollSignal();
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

    let selectedIndex = Math.max(0, DATA.places.findIndex(placeHasPublishedPin));
    const Leaflet = window.L;
    const hasCoords = (place) => Number.isFinite(Number(place.lat)) && Number.isFinite(Number(place.lng));
    const selectionZoom = (place) => {
      const explicitZoom = Number(place.mapZoom);
      if (Number.isFinite(explicitZoom)) return Math.min(explicitZoom, 17);
      if (place.name === "Naree Budjong Djara National Park") return 13;
      if (place.category === "Parks and protected areas") return 15;
      return 16;
    };
    const islandBounds = Leaflet ? Leaflet.latLngBounds([[-27.72, 153.32], [-27.30, 153.62]]) : null;
    const map = mapEl && Leaflet
      ? Leaflet.map(mapEl, {
          attributionControl: false,
          maxBounds: islandBounds,
          maxBoundsViscosity: 0.9,
          zoomControl: false,
          preferCanvas: true,
          scrollWheelZoom: false,
          tap: true
        }).setView([-27.48, 153.47], 11)
      : null;

    if (map) {
      mapEl.placeMap = map;
      Leaflet.tileLayer("https://spatial-img.information.qld.gov.au/arcgis/rest/services/Basemaps/LatestStateProgram_AllUsers/ImageServer/tile/{z}/{y}/{x}", {
        bounds: islandBounds,
        maxNativeZoom: 20,
        maxZoom: 20,
        minZoom: 10,
        updateWhenIdle: true,
        keepBuffer: 3
      }).addTo(map);
    } else if (mapEl) {
      mapEl.innerHTML = '<p class="map-fallback">Map unavailable. Use the place list below.</p>';
    }

    const coordinateKey = (place) => `${Number(place.lat).toFixed(6)},${Number(place.lng).toFixed(6)}`;
    const coordinateGroups = DATA.places.reduce((groups, place, index) => {
      if (!hasCoords(place) || !placeHasPublishedPin(place)) return groups;
      const key = coordinateKey(place);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(index);
      return groups;
    }, new Map());
    const isApproximate = (place) => /streetname|verify exact|multiple|precinct|park|national park/i.test(String(place.coordinatePrecision || ""));
    const markerStyle = (index, active) => {
      const place = DATA.places[index] || {};
      const shared = (coordinateGroups.get(coordinateKey(place)) || []).length > 1;
      return {
        radius: active ? 11 : shared ? 8 : 6,
        color: active ? "#fff7cb" : shared ? "#f4db81" : "#071112",
        weight: active ? 4 : shared ? 3 : 2,
        fillColor: mapPinColour(place.category),
        fillOpacity: active ? 1 : 0.9,
        opacity: 1,
        dashArray: isApproximate(place) ? "3 3" : null
      };
    };

    const mapMarkers = map
      ? DATA.places.map((place, index) => {
        if (!hasCoords(place) || !placeHasPublishedPin(place)) return null;
        const sharedIndexes = coordinateGroups.get(coordinateKey(place)) || [index];
        const marker = Leaflet.circleMarker([Number(place.lat), Number(place.lng)], markerStyle(index, false)).addTo(map);
        marker.bindTooltip(`${mapPinGlyph(place.category)} ${place.name}`, { direction: "top", offset: [0, -8] });
        marker.bindPopup(`<strong>${esc(place.name)}</strong><br>${esc(place.area)}<br><span>${esc(place.category)}</span>${sharedIndexes.length > 1 ? `<br><small>Approximate shared point · ${sharedIndexes.length} nearby records</small>` : isApproximate(place) ? "<br><small>Approximate position · check the address</small>" : ""}`);
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
      const sharedCount = hasCoords(place) && placeHasPublishedPin(place) ? (coordinateGroups.get(coordinateKey(place)) || []).length : 0;
      const positionNote = !placeHasPublishedPin(place)
        ? "Pin withheld. This record remains in the audit queue and is not presented as a location."
        : place.coordinateConfidence === "high"
        ? "Source-backed facility position; confirm the accessible entrance and current opening conditions on arrival."
        : sharedCount > 1
        ? `Approximate shared point for ${sharedCount} nearby records. Check the written address before relying on the pin.`
        : isApproximate(place)
          ? "Approximate position. Check the written address before relying on the pin."
          : "Venue position; confirm access and entrance details with the source.";
      detail.innerHTML = `
        <p class="eyebrow">Selected place</p>
        <h3>${esc(place.name)}</h3>
        <p class="meta">${esc(place.area)} / ${esc(place.category)}</p>
        ${place.address ? `<p class="meta"><strong>Address:</strong> ${esc(place.address)}</p>` : ""}
        <p>${esc(place.role)}</p>
        <p class="map-position-note"><strong>Map position:</strong> ${esc(positionNote)}</p>
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
        const style = markerStyle(markerIndex, markerIndex === index);
        marker.setStyle(style);
        marker.setRadius(style.radius);
      });
      renderDetail(index);
      if (options.updateUrl) {
        const next = new URL(window.location.href);
        next.searchParams.set("place", placeKey(place));
        next.hash = "place-catalogue";
        window.history.replaceState(null, "", next);
      }
      if (map && place && hasCoords(place) && placeHasPublishedPin(place)) {
        const target = [Number(place.lat), Number(place.lng)];
        if (options.focusMap) {
          const targetZoom = Math.max(Math.min(map.getZoom(), 17), selectionZoom(place));
          map.flyTo(target, targetZoom, { animate: true, duration: 0.55 });
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
      const count = document.querySelector("[data-place-count]");
      const directory = document.querySelector("[data-place-directory]");

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
      if (count) count.textContent = String(visibleIndexes.length);
      if (directory && (query || category !== "all" || locale !== "all")) directory.open = true;
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
            .filter((place) => hasCoords(place) && placeHasPublishedPin(place))
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
        if (map && target) map.flyTo(target.center, target.zoom, { animate: true, duration: 0.55 });
      });
    });
    const controls = document.createElement("div");
    controls.className = "map-action-controls";
    controls.innerHTML = `<button type="button" data-map-home aria-label="Return to island overview">Island</button><button type="button" data-map-gps aria-label="Show my location">My GPS</button><button type="button" data-map-add aria-label="Record a private field observation">Field note</button><button type="button" data-map-info aria-label="Map information and colour key" aria-expanded="false">Key</button><div class="map-source-panel" data-map-source hidden><strong>Published pin layer</strong><div class="map-symbol-key"><span>🚻 Toilet</span><span>⚓ Boat ramp</span><span>⚽ Sport</span></div><small>Only independently located, high-confidence facilities are published as pins. Geocoder-only, disputed and stale records are withheld. No field survey has been completed. Online aerial imagery © State of Queensland; © Planet Labs Netherlands B.V., Planet and Geoplex.</small></div><p class="map-location-status" data-map-location-status aria-live="polite"></p>`;
    mapEl.appendChild(controls);
    Leaflet.DomEvent.disableClickPropagation(controls);
    Leaflet.DomEvent.disableScrollPropagation(controls);
    controls.querySelector("[data-map-home]")?.addEventListener("click", () => map.flyTo([-27.48, 153.47], 11, { duration: 0.55 }));
    const infoButton = controls.querySelector("[data-map-info]");
    const sourcePanel = controls.querySelector("[data-map-source]");
    infoButton?.addEventListener("click", () => {
      const open = sourcePanel.hidden;
      sourcePanel.hidden = !open;
      infoButton.setAttribute("aria-expanded", String(open));
    });
    let locationMarker = null;
    let accuracyCircle = null;
    controls.querySelector("[data-map-gps]")?.addEventListener("click", () => {
      const status = controls.querySelector("[data-map-location-status]");
      if (!navigator.geolocation) {
        status.textContent = "GPS is not available in this browser.";
        return;
      }
      status.textContent = "Finding your position…";
      navigator.geolocation.getCurrentPosition((position) => {
        const point = [position.coords.latitude, position.coords.longitude];
        if (locationMarker) locationMarker.setLatLng(point);
        else locationMarker = Leaflet.circleMarker(point, { radius: 8, color: "#fff", weight: 3, fillColor: "#1677ff", fillOpacity: 1 }).addTo(map);
        if (accuracyCircle) accuracyCircle.setLatLng(point).setRadius(position.coords.accuracy);
        else accuracyCircle = Leaflet.circle(point, { radius: position.coords.accuracy, color: "#7fc8ff", weight: 1, fillOpacity: 0.15 }).addTo(map);
        const accuracy = Math.round(position.coords.accuracy);
        status.textContent = accuracy <= 50 ? `Location found · about ${accuracy} m accuracy` : `Location is approximate · about ${accuracy} m accuracy`;
        map.flyTo(point, accuracy <= 50 ? 16 : 14, { duration: 0.65 });
      }, () => {
        status.textContent = "Location was not shared. The map still works without it.";
      }, { enableHighAccuracy: true, maximumAge: 10000, timeout: 15000 });
    });
    setupFieldCapture();

    function setupFieldCapture() {
      const storageKey = "qcee-field-observations-v1";
      let observations = [];
      try {
        observations = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (!Array.isArray(observations)) observations = [];
      } catch (_) {
        observations = [];
      }
      let draftPosition = null;
      let draftMarker = null;
      const observationMarkers = [];
      const dialog = document.createElement("dialog");
      dialog.className = "field-pin-dialog";
      dialog.innerHTML = `
        <form method="dialog" class="field-pin-sheet" data-field-form>
          <div class="field-pin-heading">
            <div><p class="eyebrow">Private field notes</p><h3>Record a future field observation</h3></div>
            <button type="button" class="field-pin-close" data-field-close aria-label="Close">×</button>
          </div>
          <p class="field-pin-privacy">Saved only on this phone until you export. Photos are compressed for a smaller hand-off file.</p>
          <div class="field-pin-position" data-field-position>No position yet. Use GPS here, or tap the map.</div>
          <div class="field-pin-actions">
            <button type="button" class="button secondary" data-field-gps>Use GPS here</button>
            <button type="button" class="button ghost" data-field-map>Tap map instead</button>
          </div>
          <label>Name or asset<input class="field" name="name" required placeholder="e.g. Cabarita Park BBQ"></label>
          <div class="field-pin-grid">
            <label>Type<select class="select-input" name="category"><option>Business</option><option>Beach</option><option>Park</option><option>BBQ</option><option>Public toilet</option><option>Playground</option><option>Sport</option><option>Campground</option><option>Transport</option><option>Other</option></select></label>
            <label>Observation<select class="select-input" name="observationType"><option value="correction">Correct an existing pin</option><option value="confirmed">Confirm an existing pin</option><option value="new">Add a missing place</option><option value="changed">Business or asset changed</option><option value="closed">Closed or removed</option></select></label>
          </div>
          <label>What did you see?<textarea name="notes" rows="3" placeholder="Entrance, equipment, condition, new business name, useful landmark…"></textarea></label>
          <label>Photo<input class="field" name="photo" type="file" accept="image/*" capture="environment"></label>
          <div class="field-pin-actions">
            <button class="button primary" type="submit" data-field-save>Save observation</button>
            <button class="button secondary" type="button" data-field-export>Export <span data-field-count>${observations.length}</span></button>
          </div>
          <button class="field-pin-clear" type="button" data-field-clear ${observations.length ? "" : "disabled"}>Clear saved field notes</button>
          <p class="status-line" data-field-status aria-live="polite"></p>
        </form>`;
      document.body.appendChild(dialog);
      const form = dialog.querySelector("[data-field-form]");
      const status = dialog.querySelector("[data-field-status]");
      const positionText = dialog.querySelector("[data-field-position]");
      const countText = dialog.querySelector("[data-field-count]");
      const clearButton = dialog.querySelector("[data-field-clear]");

      const renderObservationMarkers = () => {
        observationMarkers.splice(0).forEach((marker) => marker.remove());
        observations.forEach((item) => {
          const marker = Leaflet.circleMarker([item.latitude, item.longitude], { radius: 8, color: "#fff", weight: 3, fillColor: "#8b5cf6", fillOpacity: 1 }).addTo(map);
          marker.bindTooltip(`Field note: ${item.name}`, { direction: "top" });
          observationMarkers.push(marker);
        });
      };
      const syncCount = () => {
        countText.textContent = String(observations.length);
        clearButton.disabled = observations.length === 0;
      };
      const setDraftPosition = (latitude, longitude, accuracy, source) => {
        draftPosition = { latitude, longitude, accuracy: Math.round(accuracy || 0), source };
        positionText.textContent = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}${accuracy ? ` · about ${Math.round(accuracy)} m accuracy` : " · map-selected point"}`;
        if (draftMarker) draftMarker.setLatLng([latitude, longitude]);
        else draftMarker = Leaflet.circleMarker([latitude, longitude], { radius: 9, color: "#fff", weight: 3, fillColor: "#ec4899", fillOpacity: 1 }).addTo(map);
        map.flyTo([latitude, longitude], Math.max(map.getZoom(), 17), { duration: 0.5 });
      };
      const openDialog = () => {
        status.textContent = "";
        dialog.showModal();
      };
      controls.querySelector("[data-map-add]")?.addEventListener("click", openDialog);
      dialog.querySelector("[data-field-close]")?.addEventListener("click", () => dialog.close());
      dialog.querySelector("[data-field-map]")?.addEventListener("click", () => {
        status.textContent = "Tap the place on the map. The form will reopen with that position.";
        dialog.close();
        mapEl.classList.add("is-dropping-field-pin");
      });
      map.on("click", (event) => {
        if (!mapEl.classList.contains("is-dropping-field-pin")) return;
        mapEl.classList.remove("is-dropping-field-pin");
        setDraftPosition(event.latlng.lat, event.latlng.lng, 0, "map tap");
        openDialog();
      });
      dialog.querySelector("[data-field-gps]")?.addEventListener("click", () => {
        if (!navigator.geolocation) {
          status.textContent = "GPS is not available in this browser.";
          return;
        }
        status.textContent = "Finding GPS, then checking accuracy…";
        navigator.geolocation.getCurrentPosition((position) => {
          setDraftPosition(position.coords.latitude, position.coords.longitude, position.coords.accuracy, "phone GPS");
          status.textContent = position.coords.accuracy <= 30 ? "Good GPS fix." : "GPS is approximate; add a landmark or use the aerial map to refine it.";
        }, () => {
          status.textContent = "Location was not shared. You can still tap the aerial map.";
        }, { enableHighAccuracy: true, maximumAge: 0, timeout: 15000 });
      });

      const compressedPhoto = async (file) => {
        if (!file) return null;
        const source = await createImageBitmap(file);
        const scale = Math.min(1, 1280 / Math.max(source.width, source.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(source.width * scale);
        canvas.height = Math.round(source.height * scale);
        canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
        source.close();
        return { name: file.name, type: "image/jpeg", dataUrl: canvas.toDataURL("image/jpeg", 0.72) };
      };
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!draftPosition) {
          status.textContent = "Add a GPS or map position first.";
          return;
        }
        const fields = new FormData(form);
        const name = String(fields.get("name") || "").trim();
        if (!name) return;
        status.textContent = "Saving…";
        const photoFile = form.elements.photo.files[0];
        const item = {
          id: `field-${Date.now()}`,
          recordedAt: new Date().toISOString(),
          name,
          category: String(fields.get("category") || "Other"),
          observationType: String(fields.get("observationType") || "correction"),
          notes: String(fields.get("notes") || "").trim(),
          latitude: draftPosition.latitude,
          longitude: draftPosition.longitude,
          accuracyMetres: draftPosition.accuracy,
          locationSource: draftPosition.source,
          photo: await compressedPhoto(photoFile)
        };
        observations.push(item);
        try {
          localStorage.setItem(storageKey, JSON.stringify(observations));
        } catch (_) {
          item.photo = null;
          localStorage.setItem(storageKey, JSON.stringify(observations));
          status.textContent = "Saved without the photo because phone storage was full. Export before adding more.";
        }
        renderObservationMarkers();
        syncCount();
        form.reset();
        draftPosition = null;
        if (draftMarker) draftMarker.remove();
        draftMarker = null;
        positionText.textContent = "No position yet. Use GPS here, or tap the map.";
        if (!status.textContent.includes("without")) status.textContent = "Saved on this phone. Export when your field check is finished.";
      });
      dialog.querySelector("[data-field-export]")?.addEventListener("click", () => {
        if (!observations.length) {
          status.textContent = "No saved field observations yet.";
          return;
        }
        const bundle = { schema: "qcee-field-observations-v1", exportedAt: new Date().toISOString(), observations };
        const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `quandamooka-map-field-notes-${new Date().toISOString().slice(0, 10)}.json`;
        link.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        status.textContent = "Export created. Send that JSON file to Codex when convenient.";
      });
      clearButton.addEventListener("click", () => {
        if (!window.confirm("Clear every saved field observation from this phone? Export first if you need them.")) return;
        observations = [];
        localStorage.removeItem(storageKey);
        renderObservationMarkers();
        syncCount();
        status.textContent = "Saved field observations cleared.";
      });
      renderObservationMarkers();
      syncCount();
    }
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
  setupLivingMotion();
})();
