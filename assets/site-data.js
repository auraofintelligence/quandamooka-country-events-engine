window.QCEE_DATA = {
  project: {
    name: "Quandamooka Country Events Engine",
    shortName: "Events Engine",
    deck: "A public-facing hub for shaping event ideas into clear Markdown records, approval checks, simulation briefs, noticeboard updates and post-event learning.",
    lastPublicSearch: "17 July 2026",
    dataStatus: "Draft event atlas. Confirm dates, permissions and contacts with the responsible source before use.",
    boundary: "This site is not an official permission, cultural authority, council permit, safety approval or live emergency source. It helps organisers ask clearer questions before they approach the right authority.",
    repoUrl: "https://github.com/auraofintelligence/quandamooka-country-events-engine"
  },
  nav: [
    { id: "home", label: "Home", href: "index.html" },
    { id: "calendar", label: "Calendar", href: "calendar.html" },
    { id: "places", label: "Places", href: "places.html" },
    { id: "ecosystem", label: "Ecosystem", href: "ecosystem.html" },
    {
      id: "builders",
      label: "Builders",
      href: "builders.html",
      children: [
        { label: "Event files", href: "builder-events.html" },
        { label: "Run files", href: "builder-run.html" },
        { label: "Simulation files", href: "builder-simulation.html" },
        { label: "Notice builders", href: "builder-notices.html" },
        { label: "External builders", href: "builder-assets.html" }
      ]
    },
    { id: "approvals", label: "Approvals", href: "approvals.html" }
  ],
  pageSequence: [
    "home",
    "calendar",
    "ecosystem",
    "places",
    "supply",
    "builders",
    "builder-events",
    "builder-run",
    "builder-simulation",
    "builder-notices",
    "builder-assets",
    "simulation",
    "approvals"
  ],
  pages: {
    home: {
      title: "Events Engine",
      eyebrow: "Public event hub",
      heading: "Simulate the event before the island has to carry it.",
      deck: "A public gateway for hosts, venues, artists, suppliers, planners and community groups. Start with an idea, turn it into a clean Markdown file, test the practical load, publish only what is safe, and learn properly after the event.",
      image: "assets/images/hero-engine.webp",
      alt: "Island event planning table with abstract map, ferry routes, venue markers and warm coastal lights.",
      actions: [
        { label: "Start an event brief", href: "builder-events.html?builder=event", style: "primary" },
        { label: "See the calendar", href: "calendar.html", style: "secondary" }
      ]
    },
    calendar: {
      title: "Calendar",
      eyebrow: "Past and upcoming",
      heading: "A rolling event memory, not just a date list.",
      deck: "Find confirmed, recurring, past and watchlist event records with source links.",
      image: "assets/images/hero-calendar.webp",
      alt: "Dusk island festival layout with beach, bushland, ferry lights and small crowd clusters.",
      actions: [
        { label: "View event records", href: "#event-atlas", style: "primary" },
        { label: "Create event brief", href: "builder-events.html?builder=event", style: "secondary" }
      ]
    },
    ecosystem: {
      title: "Ecosystem",
      eyebrow: "Directory map",
      heading: "People, places and services that make events possible.",
      deck: "A practical event-planning lens for venues, artists, clubs, food, transport, trades, emergency care, civic groups and public memory.",
      image: "assets/images/hero-ecosystem.webp",
      alt: "Illuminated event ecosystem wall map with category cards and connector lines.",
      actions: [
        { label: "Search catalogue", href: "#ecosystem-catalogue", style: "primary" },
        { label: "Check supply needs", href: "supply.html", style: "secondary" }
      ]
    },
    places: {
      title: "Places",
      eyebrow: "Venues, parks and beaches",
      heading: "Every location needs a use case, carrying limit and permission trail.",
      deck: "Browse venues, parks, beaches, halls, clubs, campsites, cafes, restaurants and transport gateways.",
      image: "assets/images/hero-ecosystem.webp",
      alt: "Island map with venue and landscape planning cards.",
      actions: [
        { label: "Review place checks", href: "#place-catalogue", style: "primary" },
        { label: "Open approvals", href: "approvals.html", style: "secondary" }
      ]
    },
    supply: {
      title: "Supply",
      eyebrow: "Readiness checklist",
      heading: "Turn event needs into clear asks before calling people.",
      deck: "Ecosystem shows who may be involved. Supply shows what an event has to secure, confirm, pay for, roster, store, publish or keep private before anyone can sensibly say yes.",
      image: "assets/images/hero-builders.webp",
      alt: "Coastal workbench with event gear, abstract form fields and planning cards.",
      actions: [
        { label: "Create resource profile", href: "builder-events.html?builder=resource", style: "primary" },
        { label: "Check supply needs", href: "#supply-readiness", style: "secondary" }
      ]
    },
    builders: {
      title: "Builders",
      eyebrow: "Markdown forms",
      heading: "Forms that export useful files for humans and agents.",
      deck: "Each builder runs in the browser and creates a Markdown file that can be reviewed, edited, combined with other builders and handed to planning teams without trapping answers inside a platform.",
      image: "assets/images/hero-builders.webp",
      alt: "Laptop and tablet with glowing abstract Markdown form blocks.",
      actions: [
        { label: "Event files", href: "builder-events.html", style: "primary" },
        { label: "External builders", href: "builder-assets.html", style: "secondary" }
      ]
    },
    "builder-events": {
      title: "Event File Builders",
      eyebrow: "Event files",
      heading: "Start with the record that makes the idea discussable.",
      deck: "Create event briefs, resource profiles, simulation briefs and aftercare reports without sharing private planning detail too early.",
      image: "assets/images/hero-builders.webp",
      alt: "Laptop and tablet with glowing abstract Markdown form blocks.",
      actions: [
        { label: "Run files next", href: "builder-run.html", style: "primary" },
        { label: "Builder hub", href: "builders.html", style: "secondary" }
      ]
    },
    "builder-run": {
      title: "Run File Builders",
      eyebrow: "Run files",
      heading: "Turn an idea into executable records.",
      deck: "Create place use records, approval trails, supplier requests, run sheets, crew rosters, risk notes, evidence files, source trails and market intake records.",
      image: "assets/images/hero-builders.webp",
      alt: "Coastal workbench with event gear, abstract form fields and planning cards.",
      actions: [
        { label: "Simulation files next", href: "builder-simulation.html", style: "primary" },
        { label: "Event files", href: "builder-events.html", style: "secondary" }
      ]
    },
    "builder-simulation": {
      title: "Simulation File Builders",
      eyebrow: "Simulation files",
      heading: "Give each simulation lane its own working file.",
      deck: "Create focused records for crowd flow, transport, logistics, environment, access, guardian checks, local economy and pipeline alignment.",
      image: "assets/images/hero-simulation.webp",
      alt: "Digital twin island control room with crowd-flow paths and abstract safety gauges.",
      actions: [
        { label: "Notice files next", href: "builder-notices.html", style: "primary" },
        { label: "Run files", href: "builder-run.html", style: "secondary" }
      ]
    },
    "builder-notices": {
      title: "Notice Builder Forms",
      eyebrow: "Notice builders",
      heading: "Draft the notice before it goes public.",
      deck: "Use these forms to create public event notices, change updates, transport notices and aftercare summaries with approval owner, source care and expiry built in.",
      image: "assets/images/hero-ecosystem.webp",
      alt: "Public-safe event noticeboard network shown as connected category cards.",
      actions: [
        { label: "External builders next", href: "builder-assets.html", style: "primary" },
        { label: "Simulation files", href: "builder-simulation.html", style: "secondary" }
      ]
    },
    "builder-assets": {
      title: "External Builder Links",
      eyebrow: "External builders",
      heading: "Open the related Markdown builders.",
      deck: "These outlinks cover profiles, assets, grants, film projects, legal memory, market context, noticeboard contracts and podcast guest requests.",
      image: "assets/images/hero-builders.webp",
      alt: "Laptop and tablet with glowing abstract Markdown form blocks.",
      actions: [
        { label: "Back to event files", href: "builder-events.html", style: "primary" },
        { label: "Builder hub", href: "builders.html", style: "secondary" }
      ]
    },
    simulation: {
      title: "Simulation",
      eyebrow: "Responsible scale",
      heading: "Test crowd, transport, waste, power, weather and vibe together.",
      deck: "The simulation guild is a public-language model of the checks an event idea needs before it becomes a real-world load on Country, services, roads, ferries, volunteers and neighbours.",
      image: "assets/images/hero-simulation.webp",
      alt: "Digital twin island control room with crowd-flow paths and abstract safety gauges.",
      actions: [
        { label: "Open simulation builders", href: "builder-simulation.html", style: "primary" },
        { label: "Check approvals", href: "approvals.html", style: "secondary" }
      ]
    },
    approvals: {
      title: "Approvals",
      eyebrow: "Permission map",
      heading: "Find the permission question before chasing forms.",
      deck: "Use this page to decide which authority or source needs to be checked. The builder files carry the detailed approval trail.",
      image: "assets/images/hero-simulation.webp",
      alt: "Event simulation table with approval markers and risk indicators.",
      actions: [
        { label: "Review approval map", href: "#approval-map", style: "primary" },
        { label: "Create approval trail", href: "builder-run.html?builder=approval-trail", style: "secondary" }
      ]
    }
  },
  process: [
    {
      title: "1. Idea",
      body: "Capture the event intention, audience, place, date range, cultural care questions and early no-go conditions in an event brief."
    },
    {
      title: "2. Place",
      body: "Match the idea to venues, parks, beaches, transport access, neighbours, backup spaces, weather exposure and quiet zones."
    },
    {
      title: "3. Authority",
      body: "List the permission trail: cultural authority, land manager, council, parks, traffic, food, liquor, marine, insurance and emergency planning."
    },
    {
      title: "4. Simulation",
      body: "Stress-test crowd flow, ferry pressure, buses, waste, water, power, noise, light, safety, accessibility, volunteer load and visitor experience."
    },
    {
      title: "5. Publishing",
      body: "Release only public-safe notices: what, where, when, access, booking, safety, transport, accessibility, weather changes and approval owner."
    },
    {
      title: "6. Event day",
      body: "Keep the day readable: entry, queues, ferries, signage, welfare, waste, weather, incident channels, volunteer rotations and escalation."
    },
    {
      title: "7. Aftercare",
      body: "Close the loop with cleanup, thanks, evidence, incident notes, spending, media permissions, public memory and next-time changes."
    }
  ],
  eventStatusLabels: {
    confirmed: "Confirmed",
    past: "Past record",
    tbc: "Date to confirm",
    recurring: "Recurring pattern",
    historical: "Historical pattern"
  },
  eventAutomation: {
    label: "Automated source watch",
    schedule: "Twice weekly: Tuesday and Friday at 9:00am GMT+10 Brisbane / AEST.",
    lastRunLabel: "17 July 2026, 11:26am GMT+10 Brisbane / AEST.",
    sortAnchorDate: "2026-07-17",
    interimNote: "This is an interim public-search layer before the Straddie Noticeboard Network becomes functional.",
    sources: [
      "Redland City Council What's On",
      "Visit Redlands Coast",
      "SeaLink North Stradbroke Island events",
      "stradbrokeisland.com",
      "Humanitix and Eventbrite",
      "indexed Facebook and Instagram event pages",
      "venue and club pages including Straddie Brewing, Little Ship Club, Amity Point Community Club, Point Lookout Bowls Club and local museums",
      "festival, arts, markets, sporting club and workshop sources"
    ]
  },
  events: [
    {
      id: "paula-boo-coil-workshop-winter-2026",
      name: "Coil Workshop",
      dateLabel: "30 June and 7 July 2026",
      dateSort: "2026-06-30",
      dateEndSort: "2026-07-07",
      status: "confirmed",
      season: "Winter school holidays",
      place: "Paula Boo Studios",
      village: "Point Lookout",
      sector: "Workshops and making",
      scale: "small guided creative workshop",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Coil-Workshop-Adventurefest-67e6260e64c9461c4042cb1a",
      concise: "Two school-holiday basketry sessions using natural fibres and coiling techniques in a small Point Lookout studio setting.",
      loadTags: ["workshop", "basketry", "Point Lookout", "small group", "winter holidays"],
      simulation: {
        movement: "Small booked arrivals with low transport pressure, afternoon dwell time and limited spillover beyond the studio site.",
        permissions: "Host capacity, booking accuracy, age guidance, accessibility clarity and weather-safe access wording.",
        aftercare: "Session fill rates, repeat bookings, visitor feedback and whether workshop demand grows into later holiday dates.",
        ancestor: "Useful maker-economy marker because it shows how small studio workshops add steady creative activity outside the major festival peaks."
      }
    },
    {
      id: "paula-boo-twist-weave-workshop-winter-2026",
      name: "Twist Weave Workshop",
      dateLabel: "1 and 8 July 2026",
      dateSort: "2026-07-01",
      dateEndSort: "2026-07-08",
      status: "confirmed",
      season: "Winter school holidays",
      place: "Paula Boo Studios",
      village: "Point Lookout",
      sector: "Workshops and making",
      scale: "small guided fibre workshop",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Twist-Weave-Workshop-Adventurefest-67e62a9ee64d2e334074736d",
      concise: "Two holiday weaving sessions focused on twined basket-making with locally gathered natural fibres and small-group teaching.",
      loadTags: ["workshop", "weaving", "Point Lookout", "small group", "winter holidays"],
      simulation: {
        movement: "Small daytime studio attendance with low parking pressure and mostly pre-booked participant arrivals.",
        permissions: "Host capacity, booking pathway, age guidance, access expectations and careful public wording around materials and session length.",
        aftercare: "Participant turnout, repeat interest, material demand and whether related studio workshops should be added to later scans.",
        ancestor: "Good creative-tourism marker because it links island making practice to repeatable holiday programming rather than a single one-off event."
      }
    },
    {
      id: "paula-boo-alternate-weave-workshop-winter-2026",
      name: "Alternate Weave Workshop",
      dateLabel: "2 and 9 July 2026",
      dateSort: "2026-07-02",
      dateEndSort: "2026-07-09",
      status: "confirmed",
      season: "Winter school holidays",
      place: "Paula Boo Studios",
      village: "Point Lookout",
      sector: "Workshops and making",
      scale: "small guided fibre workshop",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Alternate-Weave-Workshop-Adventurefest-69325cb7605e275d5c8766b9",
      concise: "Two school-holiday fibre workshops where participants make small woven sea creatures from coccus palm and raffia in a Point Lookout studio setting.",
      loadTags: ["workshop", "weaving", "Point Lookout", "small group", "winter holidays"],
      simulation: {
        movement: "Small booked afternoon arrivals with low transport pressure, short studio dwell time and limited spillover beyond the host site.",
        permissions: "Host capacity, booking accuracy, minimum-age guidance, accessibility wording and careful public framing around materials and session length.",
        aftercare: "Session fill rates, family uptake, repeat workshop interest and whether playful fibre sessions should stay on the holiday scan list.",
        ancestor: "Useful maker-economy marker because it shows Paula Boo Studios extending the holiday workshop rhythm beyond the basketry sessions already in the atlas."
      }
    },
    {
      id: "tones-and-tides-point-lookout-2026",
      name: "Tones and Tides: Point Lookout",
      dateLabel: "4 July 2026",
      dateSort: "2026-07-04",
      status: "confirmed",
      season: "Winter school holidays",
      place: "Point Lookout Community Hall",
      village: "Point Lookout",
      sector: "Music and community arts",
      scale: "small ticketed concert",
      source: "Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Tones-and-Tides-Point-Lookout-6a2053a2483de0291224b3e5",
      concise: "Afternoon Point Lookout concert in the Tones and Tides series, pairing touring opera with free kids music workshops before the show.",
      loadTags: ["opera", "concert", "Point Lookout", "kids workshop", "winter culture"],
      simulation: {
        movement: "Small afternoon hall audience with pre-show family arrivals and manageable ferry, bus and parking overlap.",
        permissions: "Hall hire, ticketing, accessibility, family workshop safety and accurate timing across concert and workshop notices.",
        aftercare: "Attendance, family participation, visitor feedback and whether the island hall format supports repeat classical programming.",
        ancestor: "Useful cultural-series marker because it shows Point Lookout hosting intimate touring performance outside the larger annual festival peaks."
      }
    },
    {
      id: "redlands-coast-naidoc-cultural-celebration-2026",
      name: "Redlands Coast NAIDOC Cultural Celebration 2026",
      dateLabel: "5 July 2026",
      dateSort: "2026-07-05",
      status: "confirmed",
      season: "NAIDOC Week",
      place: "Raby Bay Harbour Park",
      village: "Cleveland",
      sector: "Culture and community",
      scale: "regional public celebration",
      source: "Visit Redlands Coast and Redland City Council",
      sourceUrl: "https://www.visitredlandscoast.com.au/whats-on/event/7335-redlands-coast-naidoc-cultural-celebration-2026",
      concise: "Free NAIDOC Week launch event with First Nations performers, cultural demonstrations, weaving workshops and market stalls.",
      loadTags: ["NAIDOC", "market stalls", "weaving workshops", "family", "free entry"],
      simulation: {
        movement: "Mainland foreshore arrivals build through the morning, with family-friendly dwell time and staged performance pulses.",
        permissions: "Council event delivery, cultural programming approvals, stall coordination, accessibility and weather-ready public messaging.",
        aftercare: "Attendance, stallholder outcomes, cultural feedback and links into the wider Redlands NAIDOC week program.",
        ancestor: "Useful regional culture marker because it connects island-community visibility with a broader Redlands public gathering."
      }
    },
    {
      id: "world-cup-by-the-bay-2026",
      name: "World Cup by the Bay",
      dateLabel: "19 June-20 July 2026",
      dateSort: "2026-06-19",
      dateEndSort: "2026-07-20",
      status: "confirmed",
      season: "Winter",
      place: "Little Ship Club",
      village: "Goompi / Dunwich",
      sector: "Sport viewing and hospitality",
      scale: "recurring live-screening series",
      source: "Visit Redlands Coast and Little Ship Club",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/World-Cup-by-the-Bay-6a33492e7778574d2cc70614",
      concise: "Selected World Cup screenings by the bay with lunch service, bar trade and waterfront club viewing at Little Ship Club.",
      loadTags: ["World Cup", "live screening", "Little Ship Club", "free entry", "winter"],
      simulation: {
        movement: "Club arrivals pulse around selected match windows, with lunch trade, seated viewing and lighter ferry pressure than a one-day headline event.",
        permissions: "Venue operations, screening schedule accuracy, responsible service, courtesy-bus messaging and clear public updates as match times change.",
        aftercare: "Screening turnout, food-and-bar demand, repeat attendance and whether tournament viewing stays viable as an island winter hospitality pattern.",
        ancestor: "Useful everyday-major-event marker because a global tournament gets translated into small local gathering rhythms on the waterfront."
      }
    },
    {
      id: "minjerribah-photography-awards-2026",
      name: "NSI Golf Club Minjerribah Photography Awards",
      dateLabel: "1 July to 4 October 2026",
      dateSort: "2026-07-01",
      dateEndSort: "2026-10-04",
      status: "confirmed",
      season: "Winter to spring",
      place: "North Stradbroke Island Golf Club",
      village: "Point Lookout",
      sector: "Photography and community arts",
      scale: "open-entry island photo awards",
      source: "iam Straddie Arts Trail",
      sourceUrl: "https://iamstraddie.com.au/workshopsandevents",
      concise: "Annual Minjerribah photography awards inviting entries that celebrate the island's natural beauty and Indigenous cultural heritage.",
      loadTags: ["photography", "competition", "Point Lookout", "artists", "wildlife"],
      simulation: {
        movement: "Steady trickle of entrants, viewers and local word-of-mouth around Point Lookout through the winter-to-spring window.",
        permissions: "Prize terms, entry categories, image rights, judging process and public display details need to stay source-backed.",
        aftercare: "Entry numbers, finalist visibility, community reach and whether exhibition dates surface in later scans.",
        ancestor: "Useful creative-memory marker because the awards gather changing island views into a recurring public archive."
      }
    },
    {
      id: "open-studio-days-pattern",
      name: "Open Studio Days",
      dateLabel: "8-10 July and 14-16 August 2026",
      dateSort: "2026-07-08",
      dateEndSort: "2026-08-16",
      status: "confirmed",
      season: "Winter and early spring",
      place: "Paula Boo Studios, Point Lookout",
      village: "Point Lookout",
      sector: "Artists and studios",
      scale: "open studio",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Open-Studio-Days-68620e3918385d5b3d24aafa",
      concise: "Paula Boo Studios opens across two 2026 date windows for local fibre art, printmaking, silversmithing, biochrome work and studio visits.",
      loadTags: ["open studio", "artists", "Point Lookout", "free entry", "creative tourism"],
      simulation: {
        movement: "Low-to-moderate studio visits spread across holiday and arts-trail windows, with short dwell times and small bursts around midday.",
        permissions: "Artist consent, opening hours, sales handling, image use, accessibility wording and accurate public date windows.",
        aftercare: "Visitor numbers, sales, workshop follow-ups and whether later studio dates should be split into their own records in future scans.",
        ancestor: "Maps living artist lineages and studios."
      }
    },
    {
      id: "stradbroke-chamber-music-2026",
      name: "Stradbroke Chamber Music Festival",
      dateLabel: "17-19 July 2026",
      dateSort: "2026-07-17",
      dateEndSort: "2026-07-19",
      status: "confirmed",
      season: "Winter",
      place: "Point Lookout Community Hall",
      village: "Point Lookout",
      sector: "Music and arts",
      scale: "destination cultural festival",
      source: "SeaLink and festival program",
      sourceUrl: "https://www.sealink.com.au/north-stradbroke-island/events/stradbroke-chamber-music-festival/",
      concise: "Three-day chamber music festival with six concerts and destination travel patterns.",
      loadTags: ["concerts", "hall capacity", "ferry discount", "winter culture"],
      simulation: {
        movement: "Small but high-intent audience, timed around ferry transfers, buses and Point Lookout accommodation.",
        permissions: "Venue hire, ticketing, accessibility, acoustic setup and performer logistics.",
        aftercare: "Audience origin, ferry use, accommodation demand, artist feedback and repeat patron memory.",
        ancestor: "Cultural memory link through repeated annual gathering and place-based listening."
      }
    },
    {
      id: "stradbroke-island-hostplus-cup-game-2026",
      name: "Stradbroke Island Hostplus Cup Game",
      dateLabel: "18 July 2026",
      dateSort: "2026-07-18",
      status: "confirmed",
      season: "Winter / Indigenous Round",
      place: "Ron Stark Oval",
      village: "Goompi / Dunwich",
      sector: "Sport and community",
      scale: "major one-day rugby league event",
      source: "Visit Brisbane and tourism listings",
      sourceUrl: "https://visit.brisbane.qld.au/whats-on/north-stradbroke-island/sporting-events/stradbroke-island-hostplus-cup-game-4d7e",
      concise: "Annual Indigenous Round island game day bringing BMD Premiership and Hostplus Cup teams to Ron Stark Oval.",
      loadTags: ["rugby league", "Ron Stark Oval", "culture", "family", "free entry"],
      simulation: {
        movement: "Day-trip arrivals cluster around ferry and bus connections, then compress into oval entry, food lines and match turnover windows.",
        permissions: "Oval booking, sport operations, cultural ceremony approvals, traffic flow, food service and emergency access.",
        aftercare: "Crowd counts, transport pressure, oval condition, community feedback and sponsor follow-through.",
        ancestor: "Strong sport-and-culture marker because elite competition and community gathering sit together on Country."
      }
    },
    {
      id: "queensland-young-people-quandamooka-country-2026",
      name: "Queensland Young people: Join us on Quandamooka Country!",
      dateLabel: "18-19 July 2026",
      dateSort: "2026-07-18",
      dateEndSort: "2026-07-19",
      status: "confirmed",
      season: "Winter",
      place: "Minjerribah Camping Ground",
      village: "Pulan / Amity",
      sector: "Youth gathering and climate justice",
      scale: "small multi-day gathering",
      source: "Humanitix",
      sourceUrl: "https://events.humanitix.com/queensland-young-climate-warriors-join-us-on-quandamooka-country",
      concise: "Free overnight gathering for young First Nations and Pacific people focused on culture, connection and climate action on Country.",
      loadTags: ["youth", "camping", "free entry", "Amity", "multi-day"],
      simulation: {
        movement: "Small group arrivals build through Saturday morning, with ferry transfers, cabin check-in and shared-program movement centred on the camping ground.",
        permissions: "Host registration, camping-ground coordination, youth duty of care, cultural safety and clear travel messaging for participants.",
        aftercare: "Attendance, travel support demand, participant feedback and whether similar youth gatherings return to the island calendar.",
        ancestor: "Useful civic-futures marker because it links island place, youth leadership and public-facing climate gathering practice."
      }
    },
    {
      id: "travla-hoedown-party-cruise-2026",
      name: "Party Cruise - Journey to the travla Hoedown at The Straddie Hotel",
      dateLabel: "25 July 2026",
      dateSort: "2026-07-25",
      status: "confirmed",
      season: "Winter",
      place: "SeaLink Ferry to The Straddie Hotel",
      village: "Cleveland to Goompi / Dunwich",
      sector: "Travel-linked live music and hospitality",
      scale: "ticketed ferry-and-hotel social event",
      source: "SeaLink North Stradbroke Island",
      sourceUrl: "https://www.sealink.com.au/north-stradbroke-island/events/party-cruise-journey-to-the-travla-hoedown-at-the-straddie-hotel/",
      concise: "Ticketed pre-party ferry cruise with live music, line dancing and transfers into a larger hoedown afternoon at The Straddie Hotel.",
      loadTags: ["SeaLink", "live music", "line dancing", "ferry", "Straddie Hotel"],
      simulation: {
        movement: "Boarding compresses around the Cleveland departure window, then shifts into bus transfers and a broader afternoon hotel crowd in Dunwich.",
        permissions: "Ferry operations, ticketing, responsible service, transfer coordination, hotel host settings and accurate final-return messaging.",
        aftercare: "Boarding flow, transfer timing, bar demand, ferry return pressure and whether transport-bundled events become a repeat winter pattern.",
        ancestor: "Useful transport-and-hospitality marker because it combines the ferry leg, island venue activation and mainland visitor pipeline in one public listing."
      }
    },
    {
      id: "brisbane-open-house-stradbroke-edition-2026",
      name: "Brisbane Open House: Stradbroke Edition",
      dateLabel: "25 July 2026",
      dateSort: "2026-07-25",
      status: "confirmed",
      season: "Winter",
      place: "QUAMPI Quandamooka Arts Centre and Point Lookout residences",
      village: "Point Lookout",
      sector: "Architecture and design",
      scale: "ticketed guided tour day",
      source: "Humanitix",
      sourceUrl: "https://events.humanitix.com/brisbane-open-house-stradbroke-edition",
      concise: "Ticketed architecture day starting at QUAMPI before guided tours through four Point Lookout homes shaped by island landscape and climate.",
      loadTags: ["architecture", "guided tour", "Point Lookout", "ticketed", "design"],
      simulation: {
        movement: "Small guided groups move between QUAMPI and multiple house stops, with private-address handling, timed transfers and long dwell windows.",
        permissions: "Host and resident approval, ticketing limits, private-property access rules, photography guidance and clear wayfinding between tour stops.",
        aftercare: "Attendance, transport smoothness, resident feedback and whether design-led tours become a repeat cultural-program pattern on Minjerribah.",
        ancestor: "Useful built-environment marker because it adds architecture, climate response and house-tour culture to the island's public events mix."
      }
    },
    {
      id: "ambrose-nicholls-skene-little-ship-club-2026",
      name: "Live Music at Little Ship Club with Ambrose Nicholls-Skene",
      dateLabel: "25 July 2026",
      dateSort: "2026-07-25",
      status: "confirmed",
      season: "Winter",
      place: "Little Ship Club",
      village: "Goompi / Dunwich",
      sector: "Live music and waterfront hospitality",
      scale: "free club afternoon session",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Live-Music-at-Little-Ship-Club-with-Ambrose-Nicholls-Skene-6a4ee5113f67a82036e8cd40",
      concise: "Free Saturday waterfront session at Little Ship Club with Ambrose Nicholls-Skene playing acoustic covers, classics and easy-listening favourites.",
      loadTags: ["live music", "free entry", "Little Ship Club", "Dunwich", "waterfront"],
      simulation: {
        movement: "Lunch traffic rolls into a longer bayfront afternoon, with seated hospitality trade building around the music window rather than a single peak arrival.",
        permissions: "Performer booking, club trading settings, responsible service, weather fallback and clear public timing for visitors arriving off ferry connections.",
        aftercare: "Table demand, meal service pressure, performer turnout and whether weekend live sets become a stronger winter shoulder-season drawcard.",
        ancestor: "Useful hospitality marker because it shows how small free music sessions can activate the Dunwich waterfront without needing a major festival footprint."
      }
    },
    {
      id: "goompi-naidoc-community-film-celebration-2026",
      name: "Goompi NAIDOC 2026 - Community Film Celebration",
      dateLabel: "31 July 2026",
      dateSort: "2026-07-31",
      status: "confirmed",
      season: "NAIDOC Week",
      place: "Dunwich State School Oval",
      village: "Goompi / Dunwich",
      sector: "Culture and community storytelling",
      scale: "free community evening",
      source: "Redlands Coast and MMEIC",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Goompi-NAIDOC-2026-Community-Film-Celebration-6a3e137dfc002204294282df",
      concise: "Free evening gathering on Minjerribah centred on community film, dinner and NAIDOC-week storytelling in Goompi.",
      loadTags: ["NAIDOC", "free entry", "film", "Dunwich", "community dinner"],
      simulation: {
        movement: "Late-afternoon arrivals build into an early-evening oval gathering, with family groups, seated viewing and a shared meal rhythm.",
        permissions: "School-oval use, cultural-program approval, accessibility, food coordination and careful public wording around event timing.",
        aftercare: "Turnout, meal demand, community feedback and whether the celebration strengthens future NAIDOC public-program planning on the island.",
        ancestor: "Useful culture-memory marker because film, dinner and local storytelling sit together in a visible community-led NAIDOC setting."
      }
    },
    {
      id: "members-day-little-ship-club-2026",
      name: "Members Day Little Ship Club",
      dateLabel: "1 August 2026",
      dateSort: "2026-08-01",
      status: "confirmed",
      season: "Winter",
      place: "Little Ship Club",
      village: "Goompi / Dunwich",
      sector: "Club social and live music",
      scale: "free afternoon club gathering",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Members-Day-Little-Ship-Club-6a4f0a67ca2fed007f6ff7a9",
      concise: "Free Little Ship Club members afternoon with a visiting solo artist bringing soulful tunes, country roots and a relaxed waterfront set.",
      loadTags: ["club social", "live music", "Little Ship Club", "free entry", "Dunwich"],
      simulation: {
        movement: "A local-heavy midday gathering clusters around lunch and music, with softer arrival waves than a ticketed evening event.",
        permissions: "Club host settings, performer booking, visitor/member messaging, responsible service and accurate public wording if access rules change.",
        aftercare: "Member turnout, casual visitor demand, lunch trade and whether member-day programming starts appearing more regularly in public listings.",
        ancestor: "Useful club-life marker because it captures a smaller social rhythm that still shapes Dunwich hospitality activity and public calendar texture."
      }
    },
    {
      id: "nature-art-retreat-2026",
      name: "Nature Art Retreat",
      dateLabel: "13-15 August 2026",
      dateSort: "2026-08-13",
      dateEndSort: "2026-08-15",
      status: "confirmed",
      season: "Winter",
      place: "Soul Lodge, Amity",
      village: "Pulan / Amity",
      sector: "Retreat and creative practice",
      scale: "small retreat",
      source: "Humanitix",
      sourceUrl: "https://events.humanitix.com/nature-art-retreat-2026",
      concise: "Three-day art-making retreat connecting landscape, meals, studio practice and island visits.",
      loadTags: ["retreat", "small group", "art making", "accommodation"],
      simulation: {
        movement: "Low-volume ferry and local car movement toward Amity.",
        permissions: "Venue booking, food, host duty of care, outdoor visit permissions and weather backup.",
        aftercare: "Participant feedback, artwork records, wellbeing notes and local spend.",
        ancestor: "Useful small-scale model for intimate place-memory and creative restoration."
      }
    },
    {
      id: "subdivision-film-night-2026",
      name: "Film Night: Subdivision Screening and Filmmaker Conversation",
      dateLabel: "13 August 2026",
      dateSort: "2026-08-13",
      status: "confirmed",
      season: "Winter",
      place: "Straddie Brewing Co",
      village: "Goompi / Dunwich",
      sector: "Film and arts",
      scale: "ticketed arts-trail evening event",
      source: "iam Straddie Arts Trail",
      sourceUrl: "https://iamstraddie.com.au/workshopsandevents/opening-event-2026",
      concise: "Arts-trail film night with Subdivision, a filmmaker conversation, pizza and a drink at Straddie Brewing Co.",
      loadTags: ["film", "Straddie Arts Trail", "ticketed", "Straddie Brewing", "evening"],
      simulation: {
        movement: "Early-evening clustering around Dunwich hospitality, with visitors likely flowing from the trail opening into one venue.",
        permissions: "Film screening rights, venue capacity, ticketing, hospitality service and accessibility wording need to remain clear.",
        aftercare: "Ticket uptake, venue load, discussion interest and whether similar arts-trail evening sessions recur next year.",
        ancestor: "Links contemporary storytelling, place change and local hospitality into one shared public memory moment."
      }
    },
    {
      id: "straddie-arts-trail-next",
      name: "Straddie Arts Trail",
      dateLabel: "13-16 August 2026",
      dateSort: "2026-08-13",
      dateEndSort: "2026-08-16",
      status: "confirmed",
      season: "Winter",
      place: "Across the whole island",
      village: "Island-wide",
      sector: "Artists and creative hubs",
      scale: "distributed arts trail",
      source: "Visit Redlands Coast and iam Straddie",
      sourceUrl: "https://www.visitredlandscoast.com.au/whats-on/event/7316-straddie-arts-trail",
      concise: "Self-guided island arts trail with open studios, pop-ups, workshops, talks, performances and market stalls.",
      loadTags: ["open studios", "island-wide", "artists", "workshops", "markets"],
      simulation: {
        movement: "Distributed low-to-medium visitor flow between studios, galleries and village stops.",
        permissions: "Artist approval, studio opening times, public profiles, image use, sales and wayfinding.",
        aftercare: "Studio visits, sales, workshop uptake, artist feedback and trail gaps.",
        ancestor: "Useful for mapping living artists, studios, creative lineages and place-based practice."
      }
    },
    {
      id: "quandamooka-festival-2026",
      name: "Quandamooka Festival",
      dateLabel: "12-13 September 2026",
      dateSort: "2026-09-12",
      dateEndSort: "2026-09-13",
      status: "confirmed",
      season: "Yalingbila / winter-spring transition",
      place: "QUAMPI Arts and Culture Centre",
      village: "Goompi / Dunwich",
      sector: "Quandamooka culture",
      scale: "major cultural anchor",
      source: "Visit Redlands Coast and SeaLink",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Quandamooka-Festival-2026-68bfac3e4a35d00b1f6817eb",
      concise: "Free multi-artform cultural festival with Kunjiel, music, food, weaving, arts, crafts, markets, workshops and panels.",
      loadTags: ["culture", "markets", "workshops", "free entry", "QUAMPI"],
      simulation: {
        movement: "High visitor interest, ferry timing, parking, pedestrian flow around QUAMPI and Dunwich services.",
        permissions: "Cultural authority leads. Public wording, images, filming and program details need direct approval.",
        aftercare: "Cultural safety review, attendance, stallholder outcomes, visitor flow and public memory.",
        ancestor: "Core ancestor-simulation anchor because living culture, memory, language, art and Country are central."
      }
    },
    {
      id: "straddie-invitational-2026",
      name: "Straddie Invitational",
      dateLabel: "16-18 October 2026",
      dateSort: "2026-10-16",
      dateEndSort: "2026-10-18",
      status: "confirmed",
      season: "Spring",
      place: "Main Beach, Point Lookout",
      village: "Point Lookout",
      sector: "Surfing and sport",
      scale: "major spectator sport",
      source: "SeaLink event listing",
      sourceUrl: "https://www.sealink.com.au/north-stradbroke-island/events/straddie-invitational/",
      concise: "Longest-running team surfing competition, formerly Straddie Assault, returning for its 43rd year.",
      loadTags: ["surf", "spectators", "food vendors", "music", "Main Beach"],
      simulation: {
        movement: "Ferry pressure, beach access, headland viewing, food vendors, weather and surf conditions.",
        permissions: "Beach use, surf safety, event area, vendors, music, waste and emergency access.",
        aftercare: "Beach condition, spectator numbers, vendor outcomes, surf safety notes and media records.",
        ancestor: "Strong sport-lineage record because the event began in 1983."
      }
    },
    {
      id: "island-vibe-pattern",
      name: "Island Vibe Festival",
      dateLabel: "Annual last weekend of October; 2026 date to confirm",
      dateSort: "2026-10-30",
      status: "tbc",
      season: "Late spring / whale migration end",
      place: "Point Lookout Oval / Home Beach precinct",
      village: "Point Lookout",
      sector: "Music, arts and island culture",
      scale: "major music festival pattern",
      source: "Island Vibe official site",
      sourceUrl: "https://www.islandvibe.com.au/about",
      concise: "Reggae, roots, soul, electronic music, art exhibitions, workshops, stalls, circus, eco-food and craft markets.",
      loadTags: ["music", "multi-day", "camping", "markets", "eco-event"],
      simulation: {
        movement: "Large multi-day visitor load, camping, shuttles, ferry transfers and late-night movement.",
        permissions: "Entertainment event licence, oval use, noise, waste, camping, alcohol/drug settings and cultural protocol.",
        aftercare: "Waste diversion, campground pressure, noise, neighbour feedback, artist records and community benefit.",
        ancestor: "Important historical event-memory layer for music, youth culture and island visitor scale."
      }
    },
    {
      id: "straddie-oyster-festival-next",
      name: "Straddie Oyster Festival",
      dateLabel: "2026 date to confirm",
      dateSort: "2026-11-01",
      status: "tbc",
      season: "Late spring / summer lead-in",
      place: "Ron Stark Oval, Dunwich",
      village: "Goompi / Dunwich",
      sector: "Food and community festival",
      scale: "community festival",
      source: "SeaLink event page and Straddie Sharks link",
      sourceUrl: "https://www.sealink.com.au/north-stradbroke-island/events/straddie-oyster-festival/",
      concise: "Seafood, food vendors, mud crab races, oyster-shucking, live entertainment and market stalls.",
      loadTags: ["food vendors", "oval", "markets", "music", "waste"],
      simulation: {
        movement: "Dunwich oval attendance, food-truck access, ferry arrival pulses and family flow.",
        permissions: "Food safety, oval booking, music, waste, market stalls, insurance and public toilets.",
        aftercare: "Vendor sales, seafood waste, rubbish, community benefit and sponsor thanks.",
        ancestor: "Food culture and local club memory marker."
      }
    },
    {
      id: "point-lookout-markets-pattern",
      name: "Point Lookout Markets",
      dateLabel: "Every second Sunday, about 8am-midday",
      dateSort: "2026-01-01",
      status: "recurring",
      season: "Year-round / visitor peaks",
      place: "Point Lookout Bowls Club",
      village: "Point Lookout",
      sector: "Markets and stallholders",
      scale: "regular local market",
      source: "SeaLink and Point Lookout Bowls Club",
      sourceUrl: "https://www.sealink.com.au/north-stradbroke-island/events/point-lookout-markets/",
      concise: "Regular island market with local makers, food, breakfast trade and a relaxed Sunday community rhythm at the Bowls Club.",
      loadTags: ["stallholders", "second Sunday", "local artists", "food", "visitor rhythm"],
      simulation: {
        movement: "Small recurring market flow with parking, breakfast overlap, bus stop use and weather-sensitive stall layout.",
        permissions: "Club host approval, stallholder coordination, food safety, public listing accuracy and wet-weather rules.",
        aftercare: "Stallholder attendance, visitor count, popular categories and public notice updates.",
        ancestor: "Good daily-life rhythm marker rather than a single spectacle."
      }
    },
    {
      id: "bowlsie-wednesday-trivia-pattern",
      name: "Wednesday Nights @ The Bowlsie",
      dateLabel: "Every Wednesday, with trivia from 7pm",
      dateSort: "2026-01-07",
      status: "recurring",
      season: "Year-round midweek rhythm",
      place: "Point Lookout Bowls Club",
      village: "Point Lookout",
      sector: "Community nights and club hospitality",
      scale: "weekly local club gathering",
      source: "Point Lookout Bowls Club",
      sourceUrl: "https://www.pointlookoutbowlsclub.com.au/whats-on/billys-world-famous-trivia-24sep25-cyl6d-efwcl-rl48c-ygx28-6h9nw-br7cp-jxf78-6cj5m-a4xhm-87sld-wba7f-jdcnx-zzcgs-9kmtm-f3zfw-jrsam-g92tw-mywj6",
      concise: "Weekly Bowlsie midweek gathering with roast specials, Billy's trivia and a steady locals-and-visitors social mix.",
      loadTags: ["weekly", "trivia", "club night", "Point Lookout", "midweek"],
      simulation: {
        movement: "Low-to-moderate evening arrivals centred on dinner and trivia, with little ferry pressure compared with weekend events.",
        permissions: "Club operations, bookings, food service flow, responsible service and clear recurring-listing wording.",
        aftercare: "Table demand, repeat local attendance, kitchen pressure and whether the weekly pattern stays stable across seasons.",
        ancestor: "Useful everyday-social marker because it captures repeat community gathering, not just festival spikes."
      }
    },
    {
      id: "stitching-stories-pattern",
      name: "Stitching Stories",
      dateLabel: "Every second Saturday of the month, 10am-1pm",
      dateSort: "2026-01-10",
      status: "recurring",
      season: "Year-round",
      place: "North Stradbroke Island Museum on Minjerribah verandah",
      village: "Goompi / Dunwich",
      sector: "Museum and community making",
      scale: "small recurring workshop",
      source: "North Stradbroke Island Museum on Minjerribah",
      sourceUrl: "https://www.stradbrokemuseum.com.au/",
      concise: "Free community slow-clothing and making session hosted at the museum every second Saturday.",
      loadTags: ["museum", "community making", "slow clothing", "free", "recurring"],
      simulation: {
        movement: "Low-volume local and visitor attendance around museum opening hours and verandah seating.",
        permissions: "Museum host approval, workshop accessibility, public wording accuracy and weather backup.",
        aftercare: "Attendance rhythm, repeat participation, volunteer capacity and links into wider museum programming.",
        ancestor: "Good small-scale memory pattern because it ties making, museum life and regular community return."
      }
    },
    {
      id: "grass-roots-live-music-pattern",
      name: "Grass Roots Live Music",
      dateLabel: "First Sunday of every month, 2pm-5pm",
      dateSort: "2026-06-07",
      status: "recurring",
      season: "Year-round Sunday music rhythm",
      place: "Straddie Brewing Co rooftop deck",
      village: "Goompi / Dunwich",
      sector: "Live music and hospitality",
      scale: "regular local live-music session",
      source: "Stradbroke Island visitor listing and Straddie Brewing Co",
      sourceUrl: "https://stradbrokeisland.com/straddie-brewing-co-2/",
      concise: "Monthly rooftop live-music session at the brewery with local acts, Sunday food trade and an easy afternoon social crowd.",
      loadTags: ["live music", "monthly", "brewery", "Dunwich", "Sunday session"],
      simulation: {
        movement: "Low-to-moderate Sunday arrivals centred on lunch, drinks and a relaxed rooftop dwell pattern rather than a single peak.",
        permissions: "Venue operations, live-sound settings, table bookings, responsible service and clear recurring-listing wording.",
        aftercare: "Table demand, artist rotation, visitor mix and whether the monthly pattern stays stable through holiday peaks.",
        ancestor: "Useful everyday culture marker because it tracks a repeat local music rhythm rather than only one-off ticketed shows."
      }
    },
    {
      id: "straddievarious-philip-farley-exhibition-2026",
      name: "Straddievarious Gallery: Philip Farley Earth, Sea and Sky Exhibition",
      dateLabel: "16 May-28 June 2026",
      dateSort: "2026-05-16",
      dateEndSort: "2026-06-28",
      status: "past",
      season: "Autumn to winter",
      place: "Straddievarious Gallery",
      village: "Cleveland",
      sector: "Gallery and coastal arts",
      scale: "regional exhibition",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.visitredlandscoast.com.au/whats-on/markets/event/7345-straddievarious-gallery-philip-farley-earth-sea-and-sky-exhibition",
      concise: "Extended gallery exhibition of coastal and bayside painting with a Straddie-linked creative identity in the Cleveland harbour precinct.",
      loadTags: ["gallery", "exhibition", "coastal art", "Cleveland", "winter culture"],
      simulation: {
        movement: "Steady small-scale gallery traffic that can combine with harbour dining, shopping and ferry-day itineraries.",
        permissions: "Gallery opening hours, exhibition care, image permissions and public listing accuracy.",
        aftercare: "Visitor numbers, artwork sales, tourism crossover and evidence of island-mainland creative spillover.",
        ancestor: "Useful ecosystem marker because it shows how Straddie-adjacent creative brands extend into the mainland harbour circuit."
      }
    },
    {
      id: "tones-and-tides-dunwich-2026",
      name: "Tones and Tides: Dunwich",
      dateLabel: "28 June 2026",
      dateSort: "2026-06-28",
      status: "past",
      season: "Winter",
      place: "Dunwich Community Hall",
      village: "Goompi / Dunwich",
      sector: "Music and community arts",
      scale: "small ticketed concert",
      source: "Redlands Coast",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Tones-and-Tides-Dunwich-6a1682a0894ff201458e34f0",
      concise: "Intimate afternoon opera concert in Dunwich with free pre-concert kids workshops and post-show chats with the musicians.",
      loadTags: ["opera", "concert", "Dunwich", "kids workshop", "winter culture"],
      simulation: {
        movement: "Small afternoon hall attendance with light ferry-linked visitor movement and low pressure on surrounding streets.",
        permissions: "Hall booking, ticketing clarity, accessibility, musician setup and careful public wording around workshop times.",
        aftercare: "Attendance, workshop uptake, visitor origin and whether similar small-format concerts should be tracked across the island series.",
        ancestor: "Useful cultural-series marker because it brings touring classical performance into a local island hall rather than a major festival setting."
      }
    },
    {
      id: "pig-day-out-stradbroke-2026",
      name: "Pig Day Out Stradbroke Island",
      dateLabel: "27 June 2026",
      dateSort: "2026-06-27",
      status: "past",
      season: "Winter",
      place: "Little Ship Club",
      village: "Goompi / Dunwich",
      sector: "Family fun and waterfront hospitality",
      scale: "daytime club event",
      source: "Visit Redlands Coast and Little Ship Club",
      sourceUrl: "https://www.redlandscoast.com.au/ATDW/Events/Pig-Day-Out-Stradbroke-Island-6a28cf22cba85783776e1725",
      concise: "Full-day Little Ship Club event with live pig races, family activities, food stalls and a busy waterfront social crowd in Dunwich.",
      loadTags: ["family", "Little Ship Club", "pig races", "Dunwich", "winter weekend"],
      simulation: {
        movement: "Day-trip and local arrivals build from the late morning, with ferry-linked visitor pulses, family dwell time and a broad afternoon spread across the waterfront venue.",
        permissions: "Club host approval, ticketing clarity, family-safe activity setup, food service, ferry travel messaging and clear venue rules including the no-dogs condition.",
        aftercare: "Attendance, queue pressure, ferry timing feedback, food-and-bar demand and whether the club repeats the winter pig-race format.",
        ancestor: "Useful waterfront-activation marker because it shows how a Dunwich club event can pull families and day-trippers into a single daytime social anchor."
      }
    },
    {
      id: "north-stradbroke-emergencyredi-2026",
      name: "North Stradbroke Island Australian Red Cross EmergencyRedi Workshop",
      dateLabel: "17 June 2026",
      dateSort: "2026-06-17",
      status: "past",
      season: "Early winter",
      place: "Dunwich Community Hall",
      village: "Goompi / Dunwich",
      sector: "Preparedness and community resilience",
      scale: "free workshop",
      source: "Eventbrite and Australian Red Cross",
      sourceUrl: "https://www.eventbrite.com.au/e/north-stradbroke-island-australian-red-cross-emergencyreditm-workshop-tickets-1989199949597",
      concise: "Free preparedness workshop focused on local risks, practical planning and disaster-readiness for island residents and community groups.",
      loadTags: ["free entry", "workshop", "preparedness", "Dunwich", "community resilience"],
      simulation: {
        movement: "Small daytime hall attendance with mostly local arrivals and low transport pressure compared with festival or sport events.",
        permissions: "Hall booking, facilitator setup, accessibility, registration handling and accurate emergency-preparedness wording.",
        aftercare: "Attendance, follow-up resource use, community readiness signals and whether more practical resilience sessions are requested.",
        ancestor: "Important civic-care marker because it models preparedness learning before weather, ferry or service disruption events."
      }
    },
    {
      id: "amity-community-day-2026",
      name: "Amity Point Community Day",
      dateLabel: "13 June 2026",
      dateSort: "2026-06-13",
      status: "past",
      season: "Early winter",
      place: "Amity Point Community Club",
      village: "Pulan / Amity",
      sector: "Community and family gathering",
      scale: "free local club activation",
      source: "Amity Point Community Club",
      sourceUrl: "https://amitypointcommunityclub.com.au/whats-on/",
      concise: "Free community afternoon with kids activities, a sausage sizzle and live music from Pippi Lips at the club.",
      loadTags: ["free entry", "community day", "family", "live music", "Amity"],
      simulation: {
        movement: "Short local and visitor arrivals build across late morning, with family dwell time spread between food, music and kids activities.",
        permissions: "Club host approval, family-safe activity setup, music staging, food service and clear wet-weather messaging.",
        aftercare: "Turnout, kitchen and bar pressure, family feedback and whether the day strengthens repeat community use of the club.",
        ancestor: "Useful village-scale marker because it tracks simple community activation in Amity rather than only larger island events."
      }
    },
    {
      id: "many-hands-making-reflection-zone-2026",
      name: "Many Hands, Making and Reflection Zone",
      dateLabel: "28 April-9 June 2026",
      dateSort: "2026-04-28",
      dateEndSort: "2026-06-09",
      status: "past",
      season: "Autumn to early winter",
      place: "Redland Art Gallery",
      village: "Cleveland",
      sector: "Art and cultural participation",
      scale: "regional gallery activation",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.visitredlandscoast.com.au/whats-on/markets/event/7347-drop-in-activity-many-hands-making-and-reflection-zone",
      concise: "Free drop-in making zone linked to Dean Bingkin Tyson's exhibition, inviting slow creative participation shaped by land and sea patterns.",
      loadTags: ["gallery", "free entry", "drop-in", "Quandamooka connections", "Cleveland"],
      simulation: {
        movement: "Low-to-steady gallery visitation with flexible dwell time rather than a single arrival spike.",
        permissions: "Gallery host approvals, exhibition care, accessibility, family-safe materials and public wording accuracy.",
        aftercare: "Visitor participation levels, gallery staff feedback, material use and crossover into other Redlands cultural visits.",
        ancestor: "Useful mainland culture link because it carries Quandamooka-connected making practice into the wider Redlands public realm."
      }
    },
    {
      id: "reef-and-beef-open-2026",
      name: "Reef & Beef 2026 Open Competition",
      dateLabel: "6-7 June 2026",
      dateSort: "2026-06-06",
      dateEndSort: "2026-06-07",
      status: "past",
      season: "Winter",
      place: "Point Lookout Bowls Club",
      village: "Point Lookout",
      sector: "Sport and club competition",
      scale: "weekend bowls tournament",
      source: "Point Lookout Bowls Club",
      sourceUrl: "https://www.pointlookoutbowlsclub.com.au/whats-on",
      concise: "Weekend open competition on the greens with teams of three and a public club-weekend atmosphere.",
      loadTags: ["bowls", "club competition", "weekend", "spectators", "Point Lookout"],
      simulation: {
        movement: "Steady daytime foot traffic into the club with player arrivals, meal service and spectator overlap.",
        permissions: "Club operations, green bookings, team registration, hospitality flow and parking management.",
        aftercare: "Team turnout, club takings, visitor spillover and timing lessons for future winter weekends.",
        ancestor: "Useful recurring club-sport pattern for modelling smaller but still structured visitor load."
      }
    },
    {
      id: "australian-eagles-live-2026",
      name: "The Australian Eagles Show",
      dateLabel: "6 June 2026",
      dateSort: "2026-06-06",
      status: "past",
      season: "Winter",
      place: "Little Ship Club",
      village: "Goompi / Dunwich",
      sector: "Live music",
      scale: "ticketed waterfront concert",
      source: "Little Ship Club social calendar",
      sourceUrl: "https://littleshipclub.com.au/whats-on/social-calendar/",
      concise: "Waterfront live music afternoon with reserved seating, buffet packages and limited remaining tickets.",
      loadTags: ["live music", "ticketed", "waterfront", "buffet", "Dunwich"],
      simulation: {
        movement: "Pre-booked arrivals concentrate before noon, with afternoon dwell time and ferry-linked return waves.",
        permissions: "Ticketing, seating layout, food service, live-sound controls and waterfront crowd management.",
        aftercare: "Attendance against capacity, food service timing, ferry fit and neighbour/noise feedback.",
        ancestor: "Adds a clear small-concert pattern for Dunwich waterfront activation."
      }
    },
    {
      id: "gallery-museum-hop-2026",
      name: "Redlands Coast Gallery and Museum Hop",
      dateLabel: "23-24 May 2026",
      dateSort: "2026-05-23",
      dateEndSort: "2026-05-24",
      status: "past",
      season: "Autumn / AdventureFest",
      place: "Island and mainland venues, including NSI Museum, Salt Water Murris and QUAMPI",
      village: "Goompi / Dunwich plus wider Redlands Coast",
      sector: "Heritage and art",
      scale: "multi-venue",
      source: "Visit Redlands Coast",
      sourceUrl: "https://www.visitredlandscoast.com.au/redlandscoastadventurefest/redlands-coast-gallery-and-museum-hop",
      concise: "Two-day gallery and museum trail with several Minjerribah venues in the network.",
      loadTags: ["heritage", "gallery trail", "cultural venues", "visitor dispersal"],
      simulation: {
        movement: "Self-drive and ferry-linked island visitation across multiple venues.",
        permissions: "Venue-level permissions, gallery protocols, cultural material review and public opening hours.",
        aftercare: "Visitor counts, venue feedback, art sales, workshop attendance and return-visit prompts.",
        ancestor: "High-value ancestor-simulation seed because museum, gallery and Country memory are active inputs."
      }
    },
    {
      id: "straddie-stories-workshops-2026",
      name: "Straddie Stories: Collage Workshop",
      dateLabel: "Series through 22 May 2026",
      dateSort: "2026-05-22",
      dateEndSort: "2026-05-22",
      status: "past",
      season: "Summer-autumn workshop series",
      place: "Paula Boo Studios, Point Lookout",
      village: "Point Lookout",
      sector: "Creative workshop",
      scale: "small workshop",
      source: "Humanitix and Visit Redlands Coast",
      sourceUrl: "https://events.humanitix.com/straddie-stories-collage-workshop-may-22nd",
      concise: "Collage and paper-weaving workshops using island flora, fauna, coastal life and local imagery.",
      loadTags: ["workshop", "collage", "weaving", "studio", "local artists"],
      simulation: {
        movement: "Very small studio-scale attendance with direct booking.",
        permissions: "Artist/host approval, imagery permissions, workshop safety and public profile accuracy.",
        aftercare: "Workshop attendance, artworks made, future class interest and artist catalogue links.",
        ancestor: "Small but rich story-memory input through personal art-making about place."
      }
    },
    {
      id: "straddie-salute-2026",
      name: "Straddie Salute Triathlon Festival",
      dateLabel: "15-17 May 2026",
      dateSort: "2026-05-15",
      dateEndSort: "2026-05-17",
      status: "past",
      season: "Autumn / AdventureFest",
      place: "Point Lookout and island course areas",
      village: "Point Lookout / island course",
      sector: "Triathlon and endurance sport",
      scale: "major participant sport",
      source: "Straddie Salute, AusTriathlon and Visit Redlands Coast",
      sourceUrl: "https://straddiesalute.com.au/home/",
      concise: "Destination triathlon festival with triathlon, trail run, ocean swim and kids events.",
      loadTags: ["triathlon", "trail run", "ocean swim", "kids", "road and trail"],
      simulation: {
        movement: "Athlete and supporter ferry load, road/trail closures, transition zones, bikes, beaches and emergency access.",
        permissions: "QYAC, council, NX, traffic, surf safety, first aid, course marking, insurance and volunteer rosters.",
        aftercare: "Race numbers, incidents, volunteer grants, course condition, transport pressure and local spend.",
        ancestor: "Important annual sport load model; launched in 2008 and now a multi-day festival."
      }
    },
    {
      id: "caxton-classic-golf-tournament-2026",
      name: "Caxton Classic Golf Tournament",
      dateLabel: "16 May 2026",
      dateSort: "2026-05-16",
      status: "past",
      season: "Autumn",
      place: "North Stradbroke Island Golf Course and Straddie Brewing Co",
      village: "Goompi / Dunwich",
      sector: "Golf, hospitality and fundraising",
      scale: "small invitational tournament",
      source: "Stradbroke Island visitor listing and Straddie Brewing Co",
      sourceUrl: "https://stradbrokeisland.com/caxton-classic-golf-tournament/",
      concise: "All-inclusive island golf day with sporting guests, ferry transfers, brewery after-party and Wildlife Rescue Minjerribah support.",
      loadTags: ["golf", "fundraiser", "brewery", "ferry transfers", "small tournament"],
      simulation: {
        movement: "Team arrivals move through ferry transfer, golf-course start windows and a later return pulse toward the brewery rooftop after-party.",
        permissions: "Golf-course access, buggy logistics, ferry-transfer timing, hospitality service and fundraiser public wording.",
        aftercare: "Team turnout, transfer timing, course pressure, sponsor follow-through and whether the event returns as a repeat fixture.",
        ancestor: "Useful crossover marker because sport, hospitality and local fundraising meet in one compact island day."
      }
    },
    {
      id: "goompi-heritage-walk-2026",
      name: "Goompi / Dunwich Heritage Walk",
      dateLabel: "15 May 2026",
      dateSort: "2026-05-15",
      status: "past",
      season: "Autumn / AdventureFest",
      place: "North Stradbroke Island Museum on Minjerribah",
      village: "Goompi / Dunwich",
      sector: "History and heritage",
      scale: "guided walk",
      source: "Visit Redlands Coast and Stradbroke Island visitor listing",
      sourceUrl: "https://stradbrokeisland.com/goompi-dunwich-heritage-walk/",
      concise: "Guided history walk through Goompi/Dunwich, followed by museum presentation and visit.",
      loadTags: ["heritage", "museum", "guided walk", "limited places"],
      simulation: {
        movement: "Low-volume guided foot movement from museum through nearby heritage sites.",
        permissions: "Museum booking, heritage interpretation care, group size, accessibility and weather.",
        aftercare: "Attendance, questions asked, oral-history leads and visitor pathway improvements.",
        ancestor: "Direct ancestor-simulation seed because it interprets layered place history and institutions."
      }
    },
    {
      id: "straddie-sharks-easter-2026",
      name: "Straddie Sharks Easter Carnival",
      dateLabel: "4 April 2026",
      dateSort: "2026-04-04",
      status: "past",
      season: "Easter",
      place: "Ron Stark Oval, Dunwich",
      village: "Goompi / Dunwich",
      sector: "Family and community",
      scale: "local carnival",
      source: "Straddie Sharks and Visit Redlands Coast",
      sourceUrl: "https://straddiesharks.com/upcoming-events/",
      concise: "Family carnival with rides, reptile show, food vendors, market stalls and fireworks.",
      loadTags: ["rides", "fireworks", "food vendors", "markets", "family"],
      simulation: {
        movement: "Afternoon family flow into Ron Stark Oval, parking, ride queues and evening exit after fireworks.",
        permissions: "Amusement rides, animals, fireworks, food vendors, oval booking, noise and emergency plan.",
        aftercare: "Ground condition, rubbish, vendor results, incident log and next Easter planning.",
        ancestor: "Community-club seasonal marker."
      }
    },
    {
      id: "little-ship-game-classic-2026",
      name: "Little Ship Club Garmin Game Classic & Reef Rumble",
      dateLabel: "27-29 March 2026",
      dateSort: "2026-03-27",
      dateEndSort: "2026-03-29",
      status: "past",
      season: "Autumn shoulder",
      place: "Little Ship Club and Moreton Bay offshore grounds",
      village: "Goompi / Dunwich",
      sector: "Boating and sport fishing",
      scale: "multi-day tournament",
      source: "Little Ship Club Game Fishing Club",
      sourceUrl: "https://littleshipclub.com.au/on-the-water/game-fishing/",
      concise: "Annual family-friendly game fishing and reef event linked to the Little Ship Club waterfront base.",
      loadTags: ["boating", "fishing", "offshore", "family", "club event"],
      simulation: {
        movement: "Boat launches, pontoon traffic, marina-style coordination and return-to-club social flow.",
        permissions: "Marine safety, club operations, weigh-in procedures, weather monitoring and on-water communications.",
        aftercare: "Catch records, safety notes, fuel and pontoon pressure, and club hospitality outcomes.",
        ancestor: "Adds a water-based event pattern that matters for ferry, bay, pontoon and boating logistics."
      }
    },
    {
      id: "art-teacher-camp-2026",
      name: "Art Teacher Camp",
      dateLabel: "6-8 March 2026",
      dateSort: "2026-03-06",
      dateEndSort: "2026-03-08",
      status: "past",
      season: "Late summer",
      place: "Point Lookout Community Hall and QUAMPI visit",
      village: "Point Lookout / Goompi",
      sector: "Education and creative practice",
      scale: "professional development camp",
      source: "Humanitix",
      sourceUrl: "https://events.humanitix.com/art-teacher-camp",
      concise: "Place-based professional development camp for arts educators with workshops and QUAMPI visit.",
      loadTags: ["education", "teacher camp", "community hall", "QUAMPI", "place-based learning"],
      simulation: {
        movement: "Small group travelling between accommodation, hall, field sites and QUAMPI.",
        permissions: "Venue hire, First Nations cultural insight, image/teaching permissions and transfer timing.",
        aftercare: "Teacher feedback, curriculum outputs, workshop evidence and future camp demand.",
        ancestor: "Strong education-to-memory bridge for teaching place and cultural context."
      }
    },
    {
      id: "clean-up-straddie-2026",
      name: "Clean Up Straddie",
      dateLabel: "1 March 2026",
      dateSort: "2026-03-01",
      status: "past",
      season: "Late summer",
      place: "Island-wide registration points in Point Lookout, Amity and Dunwich",
      village: "Island-wide",
      sector: "Environment and community care",
      scale: "distributed volunteer day",
      source: "Straddie Brewing Co",
      sourceUrl: "https://straddiebrewing.com.au/news/beach-cleanup/",
      concise: "Community clean-up day with township registration points and volunteer support across Minjerribah.",
      loadTags: ["cleanup", "volunteers", "beaches", "waste", "community"],
      simulation: {
        movement: "Small volunteer groups disperse across beaches and townships, with staggered registration and return flow.",
        permissions: "Volunteer briefing, waste collection points, road and beach safety, and sponsor/public messaging care.",
        aftercare: "Rubbish volume, volunteer numbers, beach hotspots and repeat clean-up priorities.",
        ancestor: "Strong care-for-Country pattern because the public action is practical, distributed and place-protective."
      }
    },
    {
      id: "arthur-mobsby-seafood-spectacular-2026",
      name: "Arthur Mobsby Seafood Spectacular",
      dateLabel: "17 January 2026",
      dateSort: "2026-01-17",
      status: "past",
      season: "Summer",
      place: "Little Ship Club",
      village: "Goompi / Dunwich",
      sector: "Seafood and community fundraising",
      scale: "waterfront club event",
      source: "Stradbroke Island visitor listing and Little Ship Club",
      sourceUrl: "https://stradbrokeisland.com/arthur-mobsby-seafood-spectacular/",
      concise: "Waterfront seafood day with mud crab races, live music and a strong local-family turnout.",
      loadTags: ["seafood", "live music", "fundraiser", "waterfront", "family"],
      simulation: {
        movement: "Midday visitor flow into Dunwich waterfront parking, ferry arrivals and club lawn seating.",
        permissions: "Club operations, food safety, liquor service, waterfront safety and live-music settings.",
        aftercare: "Seafood waste handling, volunteer load, fundraiser results and transport timing feedback.",
        ancestor: "Useful local calendar marker because it mixes island seafood culture, club memory and public gathering."
      }
    }
  ],
  places: [
    {
      name: "QUAMPI Arts and Culture Centre",
      area: "Goompi / Dunwich",
      category: "Culture and heritage",
      lat: -27.5027,
      lng: 153.4055,
      role: "Cultural anchor, exhibitions, arts gatherings and public education",
      checks: "Cultural authority, venue capacity, opening hours, media permissions, visitor flow.",
      source: "QYAC / QUAMPI public sources",
      url: "https://www.qyac.net.au/"
    },
    {
      name: "North Stradbroke Island Museum on Minjerribah",
      area: "Goompi / Dunwich",
      category: "Culture and heritage",
      lat: -27.4977144,
      lng: 153.4040103,
      role: "Museum, heritage walks, archive-linked events and public history.",
      checks: "Venue opening, guide approval, archive permissions, image use, accessibility and group size.",
      source: "Museum and visitor event sources",
      url: "https://stradbrokeisland.com/goompi-dunwich-heritage-walk/"
    },
    {
      name: "Dunwich Public Hall and community venues",
      area: "Goompi / Dunwich",
      category: "Halls and civic venues",
      lat: -27.50138966,
      lng: 153.40395575,
      role: "Indoor community events, workshops, meetings, training, arts and wet-weather fallback.",
      checks: "Council or venue booking, capacity, insurance, accessibility, kitchen use, noise and closing times.",
      source: "Redland City Council venue booking",
      url: "https://www.redland.qld.gov.au/info/20293/book_a_venue_or_space"
    },
    {
      name: "Ron Stark Oval",
      area: "Goompi / Dunwich",
      category: "Sport and oval",
      lat: -27.4997995,
      lng: 153.4024218,
      role: "Large community sport, carnivals, food vendors, fireworks, markets and club events.",
      checks: "Oval booking, vehicle access, food vendors, amusements, fireworks, toilets, waste and aftercare.",
      source: "Event records and club sources",
      url: "calendar.html"
    },
    {
      name: "Dunwich Swimming Pool and sports precinct",
      area: "Goompi / Dunwich",
      category: "Sport and club",
      lat: -27.4963306,
      lng: 153.4043363,
      role: "Aquatic sport, training, club gatherings, youth programs and heat-safe activities.",
      checks: "Facility owner, lifeguard duty, child safety, booking rules, first aid and accessibility.",
      source: "Noticeboard entity catalogue",
      url: "ecosystem.html"
    },
    {
      name: "Point Lookout Surf Life Saving Club",
      area: "Mulumba / Point Lookout",
      category: "Beach and safety",
      address: "24 Kennedy Drive, Point Lookout QLD 4183",
      lat: -27.4365757,
      lng: 153.5430054,
      mapZoom: 18,
      role: "Coastal safety hub, club functions, sport, beach event coordination",
      checks: "Surf conditions, patrol needs, emergency access, parking, food and alcohol rules.",
      source: "Point Lookout SLSC official contact map",
      url: "https://www.pointlookoutslsc.com.au/contact/"
    },
    {
      name: "Point Lookout Community Hall",
      area: "Point Lookout",
      category: "Halls and civic venues",
      lat: -27.4260574,
      lng: 153.5209842,
      role: "Concerts, workshops, talks, meetings, arts programs and indoor backup.",
      checks: "Venue booking, capacity, acoustic setup, parking, accessibility, kitchen and pack-down timing.",
      source: "Event records and council venue booking",
      url: "https://www.redland.qld.gov.au/info/20293/book_a_venue_or_space"
    },
    {
      name: "Stradbroke Island Beach Hotel",
      area: "Point Lookout",
      category: "Hospitality and accommodation",
      lat: -27.4269355,
      lng: 153.5297484,
      role: "Hospitality, accommodation, music, dining and visitor events",
      checks: "Noise, venue licence, patron movement, accommodation pressure, transport home.",
      source: "Noticeboard entity catalogue",
      url: "ecosystem.html"
    },
    {
      name: "North Stradbroke Island Golf Club",
      area: "Dunwich",
      category: "Sport and club",
      lat: -27.4980726,
      lng: 153.4424251,
      role: "Club events, sport, functions and community gatherings",
      checks: "Venue bookings, parking, accessibility, catering, weather backup.",
      source: "Noticeboard entity catalogue",
      url: "ecosystem.html"
    },
    {
      name: "Point Lookout Bowls Club",
      area: "Point Lookout",
      category: "Sport and club",
      lat: -27.4273992,
      lng: 153.5211935,
      role: "Club meals, local gatherings, functions and sport",
      checks: "Member rules, catering, live music limits, accessibility, parking.",
      source: "Noticeboard entity catalogue",
      url: "ecosystem.html"
    },
    {
      name: "Point Lookout Oval / Home Beach precinct",
      area: "Point Lookout",
      category: "Sport and oval",
      lat: -27.4270089,
      lng: 153.5223051,
      role: "Music festivals, markets, surf events, spectator movement and Home Beach activity.",
      checks: "Oval use, beach access, camping pressure, noise, toilets, waste, parking and neighbours.",
      source: "Event records and visitor sources",
      url: "calendar.html"
    },
    {
      name: "The Amity Pavilion",
      area: "Pulan / Amity Point",
      category: "Hospitality and accommodation",
      lat: -27.3970258,
      lng: 153.4392958,
      role: "Community, food, small events and local gatherings",
      checks: "Neighbour impact, seating, weather, ferry and bus timing, food safety.",
      source: "Noticeboard entity catalogue",
      url: "ecosystem.html"
    },
    {
      name: "Amity Point Community Club",
      area: "Pulan / Amity Point",
      category: "Sport and club",
      lat: -27.4035599,
      lng: 153.4407868,
      role: "Community club, meals, sport-linked gatherings, meetings and local social events.",
      checks: "Club approval, kitchen or bar rules, capacity, parking, neighbour impact and closing times.",
      source: "Amity Point Community Club public map",
      url: "https://amitypointcommunityclub.com.au/about-us/"
    },
    {
      name: "Amity Point Public Hall",
      area: "Pulan / Amity Point",
      category: "Halls and civic venues",
      lat: -27.3975984,
      lng: 153.439233,
      role: "Public hall, community meetings, indoor fallback, small performances and local notices.",
      checks: "Council booking, capacity, access, kitchen use, insurance, parking, noise and after-hours care.",
      source: "Redland City Council local heritage source",
      url: "https://www.redland.qld.gov.au/files/4dcd54d5-16ad-4779-a484-789d4a6b9864/Heritage_Card_31__Amity_Point_Public_Hall.pdf"
    },
    {
      name: "Naree Budjong Djara National Park",
      area: "Minjerribah",
      category: "Parks and protected areas",
      lat: -27.476,
      lng: 153.454,
      role: "Nature, education, walking, caring-for-Country context",
      checks: "Land manager permission, visitor limits, protected areas, waste, fire, wildlife.",
      source: "Queensland Parks public information",
      url: "https://parks.desi.qld.gov.au/parks/naree-budjong-djara"
    },
    {
      name: "Bummiera / Brown Lake",
      area: "Inland Minjerribah",
      category: "Parks and protected areas",
      lat: -27.4897219,
      lng: 153.43227,
      role: "Quiet nature education and visitor-flow consideration; not a default event venue.",
      checks: "Cultural care, protected-place sensitivity, access rules, toilets, traffic, waste and no-overclaim wording.",
      source: "Queensland Parks and visitor sources",
      url: "https://parks.desi.qld.gov.au/parks/naree-budjong-djara"
    },
    {
      name: "Karboora / Blue Lake",
      area: "Inland Minjerribah",
      category: "Parks and protected areas",
      lat: -27.5316514,
      lng: 153.4773948,
      role: "Sensitive walking and nature context; suitable for education framing only with care.",
      checks: "Cultural protocol, park rules, walking limits, visitor safety, protected values and no event-load assumptions.",
      source: "Queensland Parks public information",
      url: "https://parks.desi.qld.gov.au/parks/naree-budjong-djara"
    },
    {
      name: "Flinders Beach and beach camping zones",
      area: "North coast",
      category: "Beach and camping",
      lat: -27.4196977,
      lng: 153.4920722,
      role: "Beach activity, camping, visitor movement and environmental sensitivity",
      checks: "Tides, vehicles, camping permits, waste, dunes, toilets, emergency access.",
      source: "Minjerribah Camping public information",
      url: "https://minjerribahcamping.com.au/"
    },
    {
      name: "Cylinder Beach and campground",
      area: "Point Lookout",
      category: "Beach and camping",
      lat: -27.4268025,
      lng: 153.5322561,
      role: "Beach recreation, camping, school holiday pressure and visitor safety notices.",
      checks: "Camping permits, surf and weather, parking, toilets, dunes, waste and emergency access.",
      source: "Minjerribah Camping public information",
      url: "https://minjerribahcamping.com.au/"
    },
    {
      name: "Adder Rock campground",
      area: "Point Lookout",
      category: "Beach and camping",
      lat: -27.4226139,
      lng: 153.5141609,
      role: "Camping, visitor overflow, small group gatherings and event accommodation load.",
      checks: "Camping permits, vehicle access, quiet hours, waste, showers, powered sites and peak-season pressure.",
      source: "Minjerribah Camping public information",
      url: "https://minjerribahcamping.com.au/"
    },
    {
      name: "Main Beach, Point Lookout",
      area: "Point Lookout",
      category: "Beach and safety",
      lat: -27.4369,
      lng: 153.5437,
      role: "Surfing, spectator sport, beach awareness, filming and weather-dependent activity.",
      checks: "Surf safety, tides, beach access, emergency response, weather, parking and public notices.",
      source: "Point Lookout Main Beach access reference",
      url: "https://www.pointlookoutslsc.com.au/contact/"
    },
    {
      name: "Amity Point campground",
      area: "Pulan / Amity Point",
      category: "Beach and camping",
      lat: -27.4034279,
      lng: 153.4381755,
      role: "Camping, fishing, small gatherings and western-side sunset visitor movement.",
      checks: "Camping permits, marine safety, foreshore care, waste, quiet hours and local traffic.",
      source: "Minjerribah Camping public information",
      url: "https://minjerribahcamping.com.au/"
    },
    {
      name: "Bradbury's Beach campground",
      area: "Goompi / Dunwich",
      category: "Beach and camping",
      lat: -27.4959391,
      lng: 153.4020046,
      role: "Arrival-side camping, family gatherings and ferry-linked accommodation load.",
      checks: "Camping permits, ferry arrivals, parking, beach access, waste, toilets and quiet hours.",
      source: "Minjerribah Camping public information",
      url: "https://minjerribahcamping.com.au/"
    },
    {
      name: "Dunwich ferry gateway",
      area: "Goompi / Dunwich",
      category: "Transport gateway",
      lat: -27.5032513,
      lng: 153.4011797,
      role: "Arrival, freight, buses, wayfinding and visitor pressure",
      checks: "Ferry capacity, bus connections, road queues, accessibility, weather disruption.",
      source: "SeaLink and Translink public transport sources",
      url: "https://www.sealink.com.au/north-stradbroke-island/"
    }
  ],
  supplyLanes: [
    {
      title: "Food, drink and water",
      need: "Meals, snacks, drinking water, vendor menus, food safety, cold storage and allergen information.",
      confirm: "Licence or permit path, handwashing, refrigeration, gas, power draw, queue space, waste and sold-out messaging.",
      output: "Food-provider profile, site needs, public menu note and private compliance checklist."
    },
    {
      title: "Power, lighting and gear",
      need: "Power boards, tagged leads, generators, batteries, lights, projection, speakers, marquees, tables and screens.",
      confirm: "Who owns it, who transports it, where it can be stored, weather limits, safety tags, bump-in time and backup gear.",
      output: "Asset list, equipment wishlist, upgrade roadmap or resource profile."
    },
    {
      title: "Bump-in, freight and storage",
      need: "Delivery windows, ferry freight, vehicle access, loading zones, trolleys, lockup, staging and pack-down order.",
      confirm: "Arrival times, site access, road pressure, ferry disruptions, storage security, heavy items and who signs things in or out.",
      output: "Run sheet, supplier contact list and private logistics notes."
    },
    {
      title: "Toilets, waste and cleaning",
      need: "Public toilets, extra toilets, bins, recycling, seafood or food waste, grey water, post-event cleanup and site restoration.",
      confirm: "Capacity, cleaner roster, bin contractor, contamination risk, beach or park protection, glass rules and aftercare evidence.",
      output: "Waste plan, cleanup roster and aftercare report fields."
    },
    {
      title: "Crew, volunteers and rosters",
      need: "Set-up crew, gate or info table, first aid, stage hands, stall support, parking helpers, runners and pack-down crew.",
      confirm: "Shift length, training, supervision, escalation contact, breaks, child-safe settings, meals, sign-in and fatigue risk.",
      output: "Crew roster, role cards and private contact list."
    },
    {
      title: "Transport, access and accommodation",
      need: "Ferries, buses, taxis, charters, walking routes, accessible access, parking, accommodation load and late-return options.",
      confirm: "Last boat, bus timing, shuttle capacity, road closure, wet-weather changes, emergency access and visitor guidance.",
      output: "Public transport notice, access note and simulation brief."
    },
    {
      title: "Signs, comms and noticeboards",
      need: "Entry signs, wayfinding, public notices, cancellation updates, screen text, QR codes, lost property and media permissions.",
      confirm: "Approval owner, expiry time, public/private boundary, who updates changes and which channels are trusted.",
      output: "Public noticeboard contract and screen-safe message."
    },
    {
      title: "Weather, backup and quiet care",
      need: "Shade, rain plan, wind limits, heat care, quiet space, welfare point, wildlife and environmental protection.",
      confirm: "Trigger points for delay, move, shrink or cancel; who makes the call and how the public hears it.",
      output: "Decision log, simulation note and aftercare learning."
    }
  ],
  simulationAgents: [
    { name: "Crowd Flow", job: "Models entry, exits, queues, dense spots, toilets, bars, beach access and path conflicts.", metrics: "people per square metre, queue minutes, bottlenecks, egress time" },
    { name: "Transport", job: "Checks ferries, buses, parking, charters, walking routes, freight and emergency access.", metrics: "ferry capacity, bus alignment, road pressure, response time" },
    { name: "Logistics", job: "Models power, water, waste, sanitation, suppliers, gear, bump-in and bump-out.", metrics: "kWh, litres, kilograms, cycles, crew hours" },
    { name: "Environment", job: "Tests tide, weather, light, noise, dunes, wildlife, waste leakage and ground pressure.", metrics: "decibels, lux spill, tide line, soil pressure, waste diversion" },
    { name: "Vibe", job: "Tracks experience quality, cultural care, quiet zones, inclusion, accessibility and psychological safety.", metrics: "wait tolerance, crowd comfort, rest access, complaint signals" },
    { name: "Guardian", job: "Stress-tests the plan against permission gates, consent, safety, public/private boundaries and escalation.", metrics: "open approvals, unresolved risks, private data leaks, incident readiness" },
    { name: "Economy", job: "Estimates local spend, supplier fit, volunteer load, artist value, leakage and public benefit.", metrics: "local procurement share, paid roles, volunteer hours, reporting evidence" }
  ],
  approvalGates: [
    { title: "QYAC cultural heritage and native title", body: "Check cultural heritage, Country access, Welcome to Country, cultural performance, filming, story use and any place-based protocol questions with the relevant Quandamooka authority." },
    { title: "MMEIC Elders and cultural memory", body: "For Elders, language, historical memory, cultural education, intergenerational learning or sensitive public story, identify whether Minjerribah Moorgumpin Elders-in-Council needs to be consulted." },
    { title: "Yulu-Burri-Ba community wellbeing", body: "When the event touches Aboriginal community health, youth wellbeing, family support, heat care, fatigue, alcohol harm, accessibility or culturally safe welfare, add a wellbeing check." },
    { title: "Land and venue control", body: "Confirm the legal land manager, booking path, venue hire rules, operating hours, capacity, insurance and bonds before naming a site publicly." },
    { title: "Council event permits", body: "Check venue or park hire, temporary entertainment event approval, temporary park access, traffic control, markets, waste, toilets, public health and noise." },
    { title: "Parks, beach and environment", body: "Check protected areas, beach access, tides, dunes, camping, fire, wildlife, rubbish, restoration duties and whether a place should stay quiet." },
    { title: "Food, alcohol and trade", body: "Confirm temporary food stalls, kitchens, cold storage, liquor or wet-area approval, responsible service, vendor permits and payment flows." },
    { title: "Local business and supplier impact", body: "Where an event changes visitor movement, accommodation demand, local spend, stallholder competition or freight pressure, check Chamber and supplier channels." },
    { title: "Media and public notices", body: "Separate approved public messages from private planning records, contact details, protected places, safety detail and unapproved images." }
  ],
  approvalGroups: [
    {
      title: "Cultural authority and Country care",
      body: "For cultural heritage, Welcome to Country, protected places, story use, cultural performance, filming or Country-care questions, start with the relevant Quandamooka authority and Elders source."
    },
    {
      title: "Land, venue and public-space permission",
      body: "Before naming a place publicly, confirm who controls the land or venue, what the booking path is, and whether council, parks or venue conditions apply."
    },
    {
      title: "Public health, food, trade and alcohol",
      body: "Food stalls, kitchens, cold storage, liquor, markets, vendors, payment flows and temporary commercial activity need source checks before promotion."
    },
    {
      title: "Transport, safety and accessibility",
      body: "Traffic, ferry load, emergency access, first aid, mobility access, heat, fatigue, alcohol harm and wellbeing checks belong in the approval trail before public notices."
    },
    {
      title: "Media, privacy and public notices",
      body: "Images, names, incident detail, protected places, private contacts and internal planning notes need a public/private boundary before anything reaches screens or posts."
    }
  ],
  approvalSources: [
    { label: "QYAC Cultural Heritage", url: "https://qyac.net.au/cultural-heritage/", note: "Cultural heritage services, duty-of-care advice, site recording, cultural heritage management plans and discovery guidance." },
    { label: "QYAC Business Services", url: "https://qyac.net.au/qbs/", note: "Project services, cultural heritage guidance, community engagement, Welcome to Country and cultural performances." },
    { label: "QALSMA", url: "https://qyac.net.au/qalsma/", note: "Quandamooka land and sea management, Country care and joint management context." },
    { label: "MMEIC governance", url: "https://mmeicac.com.au/index.php/governance/", note: "Minjerribah Moorgumpin Elders-in-Council governance and contact source." },
    { label: "MMEIC cultural work", url: "https://mmeicac.com.au/index.php/what-we-do/", note: "Elder-led cultural education, language, cultural talks, wellbeing and heritage focus." },
    { label: "Yulu-Burri-Ba contact", url: "https://www.ybb.com.au/contact", note: "Community health and wellbeing contact source, including Dunwich clinic details." },
    { label: "Straddie Chamber of Commerce", url: "https://straddiechamber.org/contact/", note: "Local business and supplier network contact source." },
    { label: "Redlands Coast council approvals", url: "https://events.redland.qld.gov.au/council-approvals/", note: "Council event approval pathway for temporary entertainment events, markets and related forms." },
    { label: "Temporary access to a park or reserve", url: "https://www.redland.qld.gov.au/Parks-venues-and-sport/Parks-and-venues/Temporary-Access-to-a-Park-or-Reserve", note: "Council park/reserve access, temporary entertainment event trigger and documentation checklist." },
    { label: "Temporary commercial activity", url: "https://www.redland.qld.gov.au/Parks-venues-and-sport/Leasing-and-commercial-activities/Temporary-commercial-activity-in-a-park-or-public-open-space", note: "Commercial activity in selected parks and open spaces, including mobile food, hire and entertainment." },
    { label: "Starting a food business", url: "https://www.redland.qld.gov.au/info/20304/food_health_and_safety/1104/starting_a_new_food_business", note: "Food business and temporary food stall licensing pathway." },
    { label: "Queensland Parks: Naree Budjong Djara", url: "https://parks.desi.qld.gov.au/parks/naree-budjong-djara", note: "National park and conservation-area source for protected-place checks." }
  ],
  externalSources: [
    { label: "Quandamooka Festival", url: "https://www.quandamookafestival.com.au/", note: "Festival and cultural-season reference." },
    { label: "QYAC", url: "https://www.qyac.net.au/", note: "Quandamooka public organisational source." },
    { label: "I Am Straddie", url: "https://iamstraddie.com.au/", note: "Visitor and local event listing reference." },
    { label: "Straddie Salute", url: "https://straddiesalute.com.au/event-information/", note: "Triathlon event reference." },
    { label: "Official North Stradbroke Island visitor site", url: "https://stradbrokeisland.com/", note: "Visitor event and island information reference." },
    { label: "Redland City Council What's On calendar", url: "https://www.redland.qld.gov.au/News-events-and-have-your-say/Events-and-whats-on/Whats-On-calendar", note: "Council community-event calendar reference. Treat as a cross-check source because the listing is embedded." },
    { label: "SeaLink North Stradbroke Island", url: "https://www.sealink.com.au/north-stradbroke-island/", note: "Ferry and island access reference." },
    { label: "Translink", url: "https://translink.com.au/", note: "Bus and public transport source." },
    { label: "Redland City Council", url: "https://www.redland.qld.gov.au/", note: "Council permits, grants and public event guidance." },
    { label: "Queensland Parks", url: "https://parks.desi.qld.gov.au/parks/naree-budjong-djara", note: "National park and recreation-area reference." },
    { label: "Minjerribah Camping", url: "https://minjerribahcamping.com.au/", note: "Camping and visitor permit reference." }
  ],
  linkedBuilders: [
    { title: "Public noticeboard builder", href: "https://auraofintelligence.github.io/straddie-noticeboard-network/public-noticeboard-builder.html", body: "Creates a public_noticeboard.md contract for screen-safe updates." },
    { title: "Business profile builder", href: "https://auraofintelligence.github.io/straddie-content-assets-kit/business-profile-builder.html", body: "Creates public business or group profile context for grants and event listings." },
    { title: "Asset list builder", href: "https://auraofintelligence.github.io/straddie-content-assets-kit/asset-list-builder.html", body: "Creates an asset-list.md for gear, media, lighting, power, storage and transport." },
    { title: "Shared assets builder", href: "https://auraofintelligence.github.io/straddie-content-assets-kit/shared-assets-builder.html", body: "Creates a shared-assets.md file for team gear and pooled resources." },
    { title: "Wishlist builder", href: "https://auraofintelligence.github.io/straddie-content-assets-kit/wishlist-builder.html", body: "Creates an equipment-wishlist.md file for grant and supplier planning." },
    { title: "Upgrade roadmap builder", href: "https://auraofintelligence.github.io/straddie-content-assets-kit/upgrade-roadmap-builder.html", body: "Creates an upgrade-roadmap.md file for staged improvements." },
    { title: "Grant profile kit", href: "https://auraofintelligence.github.io/stradbroke-grants-lab/profile-kit.html", body: "Creates grant-readiness and milestone records for funding paths." },
    { title: "Film club builder", href: "https://auraofintelligence.github.io/straddie-content-assets-kit/film-club-builder.html", body: "Creates film-club.md records for screen, media and story-world events." },
    { title: "Market intake builder", href: "builder-run.html?builder=market-intake", body: "Creates a market-intake.md file for stallholders, food, artists, host spaces and market add-ons." },
    { title: "Legal memory builder", href: "https://auraofintelligence.github.io/legal-memory-workbench/pages/start.html", body: "Creates legal-memory-starter.md context for information preparation, source clues and next questions." },
    { title: "Documentary builders", href: "https://auraofintelligence.github.io/film-club-documentary-builders/builders/index.html", body: "Creates documentary planning files for source trails, interviews, scenes, run sheets and handoffs." },
    { title: "Two Dogs Podcast guest request", href: "https://auraofintelligence.github.io/two-dogs-podcast-backend/builders/guest.html", body: "Request a podcast guest spot or invite someone in; create the guest-chosen spirit animal and recording plan." }
  ],
  builderDefinitions: [
    {
      id: "event",
      label: "Event brief",
      filename: "event-brief.md",
      schema: "qcee.event_brief.v0",
      fields: [
        ["event_name", "What is the event called for now?", "text", "A working title is enough. It can change as the idea becomes clearer."],
        ["host", "Who is holding or exploring the idea?", "text", "Name the public host, group, venue or organiser if it is already known."],
        ["date_window", "When might it happen?", "text", "Try a date, month, season, school-holiday window or flexible range."],
        ["place", "Where might it fit?", "text", "Name a venue, beach, park, village, route or island-wide area to investigate."],
        ["audience", "Who would this serve?", "textarea", "Think about residents, visitors, families, artists, athletes, Elders, youth, stallholders or quiet participants."],
        ["purpose", "Why would it be worth doing?", "textarea", "Describe the benefit in plain language: culture, sport, learning, income, connection, fun, repair or public memory."],
        ["public_needs", "What would the public need to know?", "textarea", "Consider booking, access, transport, cost, age suitability, safety, accessibility, weather and what to bring."],
        ["private_boundaries", "What should stay private for now?", "textarea", "Keep private contacts, protected places, sensitive cultural material, unapproved names and incident detail out of public notes."],
        ["open_questions", "What questions must be answered before this feels real?", "textarea", "List the authority, venue, budget, date, safety, supplier or community-care gaps that need a real answer."]
      ]
    },
    {
      id: "resource",
      label: "Resource profile",
      filename: "event-resource.md",
      schema: "qcee.event_resource.v0",
      fields: [
        ["resource_name", "What resource are you describing?", "text", "This could be a venue, supplier, artist, piece of gear, planner, transport option or support role."],
        ["resource_type", "What kind of help is it?", "text", "Use a simple category such as food, stage, transport, power, media, venue, crew or accessibility."],
        ["place_or_service_area", "Where could it help?", "text", "Name the village, beach, venue, route or island-wide service area."],
        ["public_role", "How might it help an event?", "textarea", "Explain the useful public role without promising availability or sharing private details."],
        ["requirements", "What would it need to work well?", "textarea", "Think about power, water, access, insurance, storage, licences, bump-in time, weather limits and permits."],
        ["availability", "When might it be available?", "textarea", "Note dates, seasons, lead time, booking limits or what still needs to be confirmed."],
        ["approval_owner", "Who needs to say yes before it is used publicly?", "text", "Name the person, group, venue or organisation that can approve public use of this record."],
        ["privacy_notes", "Which details should stay private?", "textarea", "Keep private contacts, pricing, stock levels, exact storage, security notes and internal limits out of public pages."]
      ]
    },
    {
      id: "simulation",
      label: "Simulation brief",
      filename: "simulation-brief.md",
      schema: "qcee.simulation_brief.v0",
      fields: [
        ["scenario", "What situation are you testing?", "text", "Example: 800 people at a beach sport weekend, or 40 people at a hall workshop."],
        ["attendance", "How many people might come?", "text", "Give a best guess, a low-to-high range and any likely peak time."],
        ["movement", "How might people and supplies move?", "textarea", "Think through ferries, buses, cars, walking, bikes, charters, freight, parking and last-return options."],
        ["site_load", "What pressure could the site feel?", "textarea", "Consider toilets, water, power, waste, food queues, shade, seating, noise and waiting time."],
        ["environment", "What could weather, tide, wildlife or noise change?", "textarea", "Name heat, wind, rain, surf, tide, dunes, light spill, wildlife or quiet-area concerns."],
        ["safety", "What safety and access needs should be planned for?", "textarea", "Include first aid, surf risk, evacuation, communications, mobility access, sensory load and quiet space."],
        ["approval_gaps", "Which permissions are still unclear?", "textarea", "List cultural authority, land manager, council, parks, traffic, food, alcohol, insurance or safety gaps."],
        ["decision", "What decision should this simulation help with?", "textarea", "Should the idea proceed, shrink, move, split, add an online layer, postpone or ask for more data?"]
      ]
    },
    {
      id: "aftercare",
      label: "Aftercare report",
      filename: "aftercare-report.md",
      schema: "qcee.aftercare_report.v0",
      fields: [
        ["event_name", "Which event are you closing?", "text", "Use the public event name or the working title people used while planning."],
        ["date", "When did it happen?", "text", "Add the date, time window or season so the record can be traced later."],
        ["public_summary", "What happened in plain public language?", "textarea", "Write a short summary that could be shared without exposing private planning detail."],
        ["attendance_notes", "Where did visitors, queues or transport feel pressure?", "textarea", "Note numbers if known, peak moments, ferry or bus issues, waiting time and crowd comfort."],
        ["cleanup", "How was the place left?", "textarea", "Describe waste, recycling, beach or park condition, repairs, restoration and anything still unfinished."],
        ["gratitude", "Who should be thanked?", "textarea", "Name volunteers, artists, sponsors, suppliers, venues, crew or community groups only where public thanks are appropriate."],
        ["incidents", "Were there issues or near misses that need careful follow-up?", "textarea", "Keep this public-safe. Store sensitive incident detail somewhere private and controlled."],
        ["evidence", "What evidence or feedback was gathered?", "textarea", "Include approved photos, surveys, attendance estimates, spend, reports, media links or public quotes."],
        ["next_time", "What should change next time?", "textarea", "Name practical improvements before memory fades: timing, place, staffing, notices, suppliers, safety or care."]
      ]
    }
  ],
  runBuilderDefinitions: [
    {
      id: "place-use",
      label: "Place use record",
      filename: "place-use-record.md",
      schema: "qcee.place_use_record.v0",
      fields: [
        ["place_name", "Which place are you thinking about?", "text", "Name the venue, beach, park, oval, hall, campground, road edge or gateway."],
        ["event_or_use", "What might happen there?", "text", "Describe the event, activity, stall, performance, meeting, ceremony, sport or support use."],
        ["use_case", "How would people use the place?", "textarea", "Think about who arrives, what they do, how long they stay, where they gather and what public access remains open."],
        ["carrying_limits", "What could the place comfortably carry?", "textarea", "Consider capacity, quiet areas, toilets, parking, surf, tides, heat, weather, neighbours and sensitive areas."],
        ["permission_path", "Who may need to give permission?", "textarea", "List cultural authority, land manager, venue owner, council, parks, club or resident-facing checks."],
        ["site_requirements", "What would the site need to work?", "textarea", "Think about power, water, shade, bins, signage, access, bump-in, storage, pack-down and restoration."],
        ["do_not_publish", "What place details should not be public?", "textarea", "Protect sensitive places, private access notes, security detail, cultural notes and unapproved images."],
        ["next_check", "What needs to be checked next?", "textarea", "Name the source, person, agency, booking page or file that should be checked before planning goes further."]
      ]
    },
    {
      id: "approval-trail",
      label: "Approval trail",
      filename: "approval-trail.md",
      schema: "qcee.approval_trail.v0",
      fields: [
        ["event_or_file", "Which event or file does this approval belong to?", "text", "Link it to an event brief, place use record, supplier request, simulation file or notice."],
        ["approval_scope", "What permission question are you trying to answer?", "textarea", "Name the topic: cultural care, land use, venue, council, parks, traffic, food, alcohol, insurance, media or safety."],
        ["responsible_body", "Who might be responsible for that answer?", "text", "Name the organisation, group, venue, agency, owner or committee that should be approached."],
        ["source_link", "Where did this information come from?", "textarea", "Add the URL, document title, email subject, phone source, meeting note or human source."],
        ["status", "What is the current status?", "text", "Use plain words: unknown, draft, asked, approved, declined, expired, unclear or needs review."],
        ["conditions", "What conditions or limits were mentioned?", "textarea", "Note required documents, dates, insurance, capacity, wording limits, no-go conditions or follow-up steps."],
        ["private_notes", "What should stay out of public notes?", "textarea", "Keep private contacts, sensitive context, dispute detail and internal reasoning away from notices."],
        ["next_action", "What is the next check?", "textarea", "Who checks what, by when, and before which public step?"]
      ]
    },
    {
      id: "supplier-request",
      label: "Supplier request",
      filename: "supplier-request.md",
      schema: "qcee.supplier_request.v0",
      fields: [
        ["request_name", "What are you asking for?", "text", "Example: food vendor, lighting hire, generator, toilets, bus, artist, planner, stage hand or crew role."],
        ["linked_event", "Which event or idea is it for?", "text", "Name the event brief, place use record or scenario this request supports."],
        ["public_need", "What public need would this solve?", "textarea", "Explain the visitor, host, artist, safety, comfort or access need without sharing private cost or contact detail."],
        ["specific_requirements", "What details would a supplier need to answer well?", "textarea", "Include dates, quantities, power, water, delivery, setup, pack-down, licences, access, insurance and weather limits."],
        ["response_needed", "What answer do you need back?", "textarea", "Ask for availability, quote, conditions, alternatives, lead time, refusal reason or what they need from you."],
        ["boundary", "What can be shared and what should stay private?", "textarea", "Separate public supplier information from private prices, contacts, bank details, stock levels or internal notes."],
        ["source_status", "What has already been checked?", "textarea", "Note who was checked, when, how confident you are, what is uncertain and when to follow up."]
      ]
    },
    {
      id: "run-sheet",
      label: "Run sheet",
      filename: "event-run-sheet.md",
      schema: "qcee.event_run_sheet.v0",
      fields: [
        ["event_name", "Which event is this run sheet for?", "text", "Use the same name as the event brief if one already exists."],
        ["date_and_place", "When and where does this plan apply?", "text", "Add the date, venue, village, beach, hall, oval or route."],
        ["bump_in", "What needs to happen before the public arrives?", "textarea", "List arrival windows, access, deliveries, setup order, keys, safety checks and who opens the site."],
        ["program_flow", "What should happen during the program?", "textarea", "Sketch the public program, private timing, MC cues, artist changes, workshops, matches or breaks."],
        ["critical_checks", "Which checks could stop or change the day?", "textarea", "Think about power, toilets, bins, first aid, signage, weather, transport, accessibility and approvals."],
        ["escalation", "Who decides if something changes?", "textarea", "Name the person or role that can delay, move, cancel, publish an update or ask for help."],
        ["pack_down", "How should pack-down and handback work?", "textarea", "Include close time, cleaning, gear return, waste, lost property, site handback and aftercare evidence."]
      ]
    },
    {
      id: "crew-roster",
      label: "Crew roster",
      filename: "crew-roster.md",
      schema: "qcee.crew_roster.v0",
      fields: [
        ["event_name", "Which event needs people?", "text", "Link this roster to the event brief, run sheet or place use record."],
        ["roles_needed", "What roles might be needed?", "textarea", "Think about set-up, gate, info, stage, transport, first aid, runners, accessibility, waste and pack-down."],
        ["shift_windows", "When are people needed, and when should they rest?", "textarea", "Add times, breaks, handovers, fatigue risks, meals and any late-night or heat concerns."],
        ["training_notes", "What would helpers need to know before they start?", "textarea", "Include briefing, child-safe settings, safety, cultural care, radio, cash handling, access or privacy."],
        ["contact_boundary", "Which contact details should be public or private?", "textarea", "Separate public roles from private phone numbers, emergency contacts and internal-only detail."],
        ["gaps", "Where are the roster gaps?", "textarea", "Name unfilled roles, over-reliance on one person, escalation needs or roles that should be paid."]
      ]
    },
    {
      id: "risk-incident",
      label: "Risk and incident log",
      filename: "risk-incident-log.md",
      schema: "qcee.risk_incident_log.v0",
      fields: [
        ["event_or_scenario", "What situation needs a risk note?", "text", "Link it to an event, simulation, run sheet, notice or aftercare record."],
        ["risk_summary", "What could go wrong or need care?", "textarea", "Consider safety, weather, transport, crowding, wildlife, water, heat, alcohol, conflict or protected-place risk."],
        ["likelihood_and_impact", "How likely or serious does it feel?", "textarea", "Write what you know, who may be affected, what is uncertain and how confident you are."],
        ["controls", "What could reduce the risk?", "textarea", "Name prevention steps, monitoring, equipment, staffing, signage, quiet zones, welfare or cancellation triggers."],
        ["incident_channel", "Who records and responds if something happens?", "textarea", "Name the record keeper, responder, public-message owner and where sensitive detail is stored."],
        ["public_statement", "What public words might be needed?", "textarea", "Draft only public-safe wording for updates, delays, closures or care notices."],
        ["aftercare_followup", "What follow-up should happen after?", "textarea", "Include evidence, review owner, support, repair, reporting and next-time change."]
      ]
    },
    {
      id: "value-evidence",
      label: "Value evidence",
      filename: "value-evidence.md",
      schema: "qcee.value_evidence.v0",
      fields: [
        ["event_name", "Which event or program is being measured?", "text", "Link this to an event brief, aftercare report, grant record or public notice."],
        ["value_claim", "What value might it create?", "textarea", "Think about local spend, paid roles, cultural education, visitor learning, youth pathways, sport, arts or wellbeing."],
        ["evidence_sources", "What evidence could prove or disprove that?", "textarea", "Use invoices, attendance, bookings, surveys, approved photos, public quotes, reports or partner records."],
        ["who_benefits", "Who benefits?", "textarea", "Name residents, Traditional Owners, artists, clubs, suppliers, visitors, volunteers, youth, venues or future organisers."],
        ["who_carries_load", "Who carries the load?", "textarea", "Consider volunteer time, neighbours, services, Country, transport, accommodation, waste, emergency care or unpaid labour."],
        ["public_summary", "What public summary would be fair and modest?", "textarea", "Write a concise evidence-based summary for aftercare, grants or public memory."],
        ["next_measure", "What should be measured next time?", "textarea", "Name the next useful signal and who should own the record."]
      ]
    },
    {
      id: "source-trail",
      label: "Source trail",
      filename: "source-trail.md",
      schema: "qcee.source_trail.v0",
      fields: [
        ["source_title", "What source are you saving?", "text", "Name the page, document, calendar entry, email title, public notice or human source."],
        ["linked_record", "Which record does it support?", "text", "Link it to an event, place, approval, notice, simulation, run file or aftercare file."],
        ["source_url_or_location", "Where can it be found again?", "textarea", "Add a URL, file path, organisation page, phone note, archive location or source description."],
        ["checked_on", "When was it checked?", "text", "Add date, time and timezone so future readers can judge freshness."],
        ["confidence", "How confident is this source?", "textarea", "Say what is confirmed, what is inferred, what may be stale and what contradicts it."],
        ["update_trigger", "What should trigger another check?", "textarea", "Examples: date change, weather, approval expiry, ticket release, source edit, complaint or new evidence."],
        ["public_boundary", "What can be cited publicly?", "textarea", "Separate public source notes from private documents, personal details or material needing permission."]
      ]
    },
    {
      id: "market-intake",
      label: "Market intake",
      filename: "market-intake.md",
      schema: "qcee.market_intake.v0",
      fields: [
        ["market_or_event", "What market or event idea is this for?", "text", "Name the market, stallholder intake, festival add-on, arts trail or host-space idea."],
        ["participant_role", "What role is the person offering?", "text", "They may be a stallholder, food provider, artist, helper, host venue, organiser or sponsor."],
        ["offer_summary", "What are they offering?", "textarea", "Describe what is being offered, sold, shown, served, performed, loaned or coordinated."],
        ["site_needs", "What would their stall or activity need on site?", "textarea", "Think about space, shade, power, water, storage, vehicle access, bump-in, tables, lighting and waste."],
        ["compliance_checks", "What checks might apply?", "textarea", "Consider food safety, insurance, licences, child-safe settings, cultural care, permits and venue rules."],
        ["public_listing", "What could be used in a public listing?", "textarea", "Draft a short public description, booking or stall name, accessibility note and any approved images."],
        ["private_boundary", "What should stay private?", "textarea", "Keep private contacts, prices, bank details, stock levels, security, complaints and sensitive notes out of public listings."],
        ["next_action", "What should happen next?", "textarea", "Options might include asking for more detail, matching to a host, adding a notice, simulating load or deciding it is not a fit."]
      ]
    }
  ],
  simulationBuilderDefinitions: [
    {
      id: "sim-crowd-flow",
      label: "Crowd flow",
      filename: "sim-crowd-flow.md",
      schema: "qcee.simulation.crowd_flow.v0",
      fields: [
        ["event_or_scenario", "What crowd situation are you trying to understand?", "text", "Name the event, draft idea, busy moment or stress-test case."],
        ["linked_event_file", "Which event record should this connect to?", "text", "Link the event brief, calendar record, place use record or source URL if one exists."],
        ["place_scope", "Where might people bunch up or slow down?", "textarea", "Think about entries, exits, paths, queues, toilets, beach access, quiet zones and nearby neighbours."],
        ["source_signals", "What clues would help estimate crowd flow?", "textarea", "Use counts, queue timing, approved photos, ferry arrivals, ticket windows, local observations or past events."],
        ["assumptions", "What are you guessing, and how uncertain is it?", "textarea", "Write expected ranges, confidence level, unknowns and data gaps instead of pretending to know."],
        ["agent_actions", "What could an agent help check?", "textarea", "It might compare records, flag bottlenecks, ask for human review or suggest questions for a steward."],
        ["decision_rule", "What choice should this help with?", "textarea", "Possible choices: proceed, shrink, split, reroute, add stewards, delay or stop."]
      ]
    },
    {
      id: "sim-transport",
      label: "Transport",
      filename: "sim-transport.md",
      schema: "qcee.simulation.transport.v0",
      fields: [
        ["event_or_scenario", "What movement problem are you testing?", "text", "Name the event, draft idea, visitor surge or transport-sensitive moment."],
        ["transport_lanes", "How might people, gear and crew get there?", "textarea", "Consider ferry, bus, car, charter, taxi, walking, bikes, freight and emergency access."],
        ["peak_windows", "When could transport pressure peak?", "textarea", "Look at arrivals, departures, last boat, school holidays, wet weather, freight and artist changeovers."],
        ["source_signals", "What transport clues should be checked?", "textarea", "Use timetables, booking limits, road observations, parking notes, accessibility needs and local warnings."],
        ["public_notice_need", "What would visitors need to know?", "textarea", "Draft helpful public guidance without exposing private planning details or unconfirmed promises."],
        ["agent_actions", "What could an agent help compare?", "textarea", "It might compare timetables, test peak load, draft a notice, flag conflict or request confirmation."],
        ["decision_rule", "What choice should this help with?", "textarea", "Possible choices: proceed, add shuttle, cap attendance, change time, move venue or split the program."]
      ]
    },
    {
      id: "sim-logistics",
      label: "Logistics",
      filename: "sim-logistics.md",
      schema: "qcee.simulation.logistics.v0",
      fields: [
        ["event_or_scenario", "What practical setup are you testing?", "text", "Name the event, draft idea, place use or support activity."],
        ["resources_needed", "What might the event need to function?", "textarea", "Think about power, lighting, water, waste, toilets, storage, crew, marquees, screens and food prep."],
        ["resource_files", "Which resource records should this connect to?", "textarea", "Link resource profiles, asset lists, shared assets, wishlists, supplier requests or gear notes."],
        ["bump_in_plan", "How could setup and pack-down actually happen?", "textarea", "Consider freight, vehicle access, setup order, storage, crew hours, site restoration and handback."],
        ["weak_points", "What could break the plan?", "textarea", "Look for single points of failure, weather exposure, unavailable gear, missing people and volunteer fatigue."],
        ["agent_actions", "What could an agent help build or compare?", "textarea", "It might build a checklist, compare gaps, draft a roster, estimate cycles or prepare supplier questions."],
        ["decision_rule", "What choice should this help with?", "textarea", "Possible choices: proceed, borrow, buy, hire, reduce scale, delay or cancel one part."]
      ]
    },
    {
      id: "sim-environment",
      label: "Environment",
      filename: "sim-environment.md",
      schema: "qcee.simulation.environment.v0",
      fields: [
        ["event_or_scenario", "What place impact are you testing?", "text", "Name the event, draft idea, location, route or quiet-place question."],
        ["place_values", "What makes this place worth caring for?", "textarea", "Consider dunes, beach, park, wildlife, cultural care, quiet areas, protected values and sensitive context."],
        ["weather_and_tide", "What could weather, tide or light change?", "textarea", "Think about heat, wind, rain, storms, tide, daylight, noise, lighting and surf conditions."],
        ["impact_controls", "What could reduce harm or pressure?", "textarea", "Name bins, toilets, fencing, signage, restoration, no-go areas, low-noise choices or a smaller footprint."],
        ["source_signals", "What environmental clues should be checked?", "textarea", "Use forecasts, tide tables, park advice, land-manager notes, local observations and previous aftercare."],
        ["agent_actions", "What could an agent help notice?", "textarea", "It might scan risks, compare thresholds, draft care notes or flag protected-place language."],
        ["decision_rule", "What choice should this help with?", "textarea", "Possible choices: proceed, move, shrink, add protections, change time, postpone or keep the place quiet."]
      ]
    },
    {
      id: "sim-vibe-access",
      label: "Vibe and access",
      filename: "sim-vibe-access.md",
      schema: "qcee.simulation.vibe_access.v0",
      fields: [
        ["event_or_scenario", "What visitor experience are you testing?", "text", "Name the event, draft idea, audience journey or access concern."],
        ["who_it_serves", "Who should feel considered?", "textarea", "Think about families, Elders, youth, artists, visitors, athletes, residents and people who need quiet."],
        ["experience_risks", "What might make the experience harder?", "textarea", "Consider crowding, waiting, heat, alcohol, noise, cost, exclusion, unclear wayfinding or sensory load."],
        ["access_needs", "What access and inclusion needs could matter?", "textarea", "Think about mobility, language, transport, shade, seating, sensory load, toilets and child-safe settings."],
        ["public_tone", "How should the public invitation sound?", "textarea", "Draft welcome text that is clear, respectful, honest about limits and careful about what not to promise."],
        ["agent_actions", "What could an agent help test?", "textarea", "It might find gaps, draft an inclusive notice, test a visitor journey or ask for lived review."],
        ["decision_rule", "What choice should this help with?", "textarea", "Possible choices: proceed, add support, change layout, slow timing, split audiences or redesign."]
      ]
    },
    {
      id: "sim-guardian",
      label: "Guardian",
      filename: "sim-guardian.md",
      schema: "qcee.simulation.guardian.v0",
      fields: [
        ["event_or_scenario", "What needs a final sense-check?", "text", "Name the event, notice, place use, simulation or public update."],
        ["approval_trail", "Which permissions still need attention?", "textarea", "Check cultural authority, land manager, council, parks, traffic, food, alcohol, insurance and safety."],
        ["public_private_boundary", "What can be public, and what must stay private?", "textarea", "Separate publishable information from contacts, sensitive safety detail, protected places and unapproved images."],
        ["risk_register", "Which risks or unknowns are still open?", "textarea", "List incident channels, escalation contacts, authority questions, missing sources and unresolved care needs."],
        ["source_quality", "How good are the sources?", "textarea", "Name the source title, URL, checked date, timezone, confidence, uncertainty and contradiction."],
        ["agent_actions", "What could an agent help audit?", "textarea", "It might check files, flag private-data leaks, compare approvals or ask for source confirmation."],
        ["decision_rule", "What should stop this from being published?", "textarea", "Name the missing approvals, privacy risks, source gaps or safety issues that mean pause, redact, reroute or ask."]
      ]
    },
    {
      id: "sim-economy",
      label: "Local economy",
      filename: "sim-local-economy.md",
      schema: "qcee.simulation.local_economy.v0",
      fields: [
        ["event_or_scenario", "What local value question are you testing?", "text", "Name the event, market, workshop, sport day, festival add-on or visitor-flow idea."],
        ["local_benefit", "Where might local benefit show up?", "textarea", "Think about paid roles, artists, suppliers, accommodation, food, transport, workshop income and return visits."],
        ["load_tradeoff", "What local load might come with it?", "textarea", "Consider volunteer load, accommodation pressure, freight, traffic, unpaid work, disruption and service pressure."],
        ["evidence_to_collect", "What evidence would make the value clearer?", "textarea", "Use spend, invoices, bookings, stall sales, surveys, attendance, approved quotes or aftercare notes."],
        ["fair_exchange", "Who benefits, and who carries cost?", "textarea", "Ask what should be paid, credited, reduced, shared, capped or changed to make the exchange fairer."],
        ["agent_actions", "What could an agent help estimate?", "textarea", "It might compare supplier fit, flag leakage, draft reporting evidence or prepare next questions."],
        ["decision_rule", "What choice should this help with?", "textarea", "Possible choices: proceed, rebalance, pay more locally, cap load, partner differently or pause."]
      ]
    },
    {
      id: "sovereign-pipeline",
      label: "Pipeline alignment",
      filename: "sovereign-pipeline-alignment.md",
      schema: "qcee.sovereign_pipeline_alignment.v0",
      fields: [
        ["pipeline_name", "What workflow are you trying to align?", "text", "Example: event idea to public notice, market intake to run sheet, or aftercare to next simulation."],
        ["layer_path", "Which scale layers are involved?", "text", "Name the person, group, place, network or mixed path the work moves through."],
        ["builder_inputs", "Which builder files feed this workflow?", "textarea", "List event briefs, resource profiles, approvals, notices, aftercare, source files and external builders."],
        ["agent_roles", "What should agents help with, and what stays human?", "textarea", "Separate scanning, collecting, drafting and comparison from human approval, care, consent and final publishing."],
        ["genai_stack", "Which tools or model steps might be used?", "textarea", "Name models, MCP tools, browser steps, Markdown stores, review gates and likely future changes."],
        ["version_signals", "How will freshness be tracked?", "textarea", "Include source title, date checked, timezone, confidence, uncertainty and update triggers."],
        ["public_boundary", "Which outputs can be public?", "textarea", "Separate public files from private notes, sensitive detail and outputs needing sign-off."],
        ["next_action", "What is the next useful step?", "textarea", "Prototype, test, ask for human review, connect a source, pause, publish or retire."]
      ]
    }
  ],
  noticeboardBuilderDefinitions: [
      {
        id: "notice-public-event",
        label: "Public event notice",
        filename: "public-event-notice.md",
        schema: "qcee.notice.public_event.v0",
        fields: [
          ["notice_title", "What should this public notice be called?", "text", "Use a short title people can understand quickly."],
          ["event_name", "Which event is this notice about?", "text", "Link the event brief, calendar record or program name if one already exists."],
          ["when_where", "When and where should people go?", "textarea", "Include date, time, place, entry point and any public access limits."],
          ["who_for", "Who is this notice for?", "textarea", "Name the audience, age notes, accessibility needs, booking limits or who should not attend."],
          ["public_action", "What should the public do next?", "textarea", "Book, register, arrive early, bring water, use the bus, check weather or watch for updates."],
          ["approval_owner", "Who can approve this notice?", "text", "Name the person, group or venue responsible for release."],
          ["expiry", "When should this notice expire?", "text", "Choose when it should leave screens, posters or active feeds."]
        ]
      },
      {
        id: "notice-change",
        label: "Change update",
        filename: "change-update-notice.md",
        schema: "qcee.notice.change_update.v0",
        fields: [
          ["notice_title", "What should this change update be called?", "text", "Example: wet-weather venue change, delayed start, new ferry guidance or sold-out session."],
          ["what_changed", "What has changed?", "textarea", "Explain the change in plain public language without private planning detail."],
          ["who_is_affected", "Who needs to hear about it?", "textarea", "Think about ticket holders, stallholders, artists, visitors, residents, suppliers, crew and access needs."],
          ["new_action", "What should people do now?", "textarea", "Tell people where to go, what to bring, what to stop doing and which public contact or page to use."],
          ["channels", "Where should this update appear?", "textarea", "Choose the website, kiosk, ferry screen, social post, posters, SMS, venue door or other public channels."],
          ["approval_owner", "Who can approve this update?", "text", "Name the person, group or venue responsible for releasing the change."],
          ["expiry", "When should this update expire?", "text", "Choose when it should leave screens, posters or active feeds."]
        ]
      },
      {
        id: "notice-transport",
        label: "Transport notice",
        filename: "transport-access-notice.md",
        schema: "qcee.notice.transport_access.v0",
        fields: [
          ["notice_title", "What should this transport notice be called?", "text", "Use a short title people can understand before they leave home."],
          ["movement_issue", "What movement problem are you solving?", "textarea", "Think about ferry, bus, road, parking, walking, shuttle, freight, accessibility or last-return issues."],
          ["recommended_route", "What route or timing should people try first?", "textarea", "Give public-safe directions, timing, accessibility notes and any limits that are confirmed."],
          ["backup_option", "What backup should people know?", "textarea", "Explain what to do if weather, crowding, ferry capacity or transport disruption changes the plan."],
          ["source_checked", "Which source did you check?", "textarea", "Add the source title, link, checked date, timezone, confidence and uncertainty."],
          ["approval_owner", "Who can approve this transport notice?", "text", "Name the person, group, venue or transport source responsible for release."],
          ["expiry", "When should this notice expire?", "text", "Choose when it should leave screens, posters or active feeds."]
        ]
      },
      {
        id: "notice-aftercare-summary",
        label: "Aftercare summary",
        filename: "aftercare-summary-notice.md",
        schema: "qcee.notice.aftercare_summary.v0",
        fields: [
          ["notice_title", "What should this aftercare notice be called?", "text", "Use a short public title that makes the follow-up easy to recognise."],
          ["event_name", "Which completed event is this about?", "text", "Use the same public event name or working title used during planning."],
          ["thanks", "Who should be thanked publicly?", "textarea", "Name volunteers, artists, sponsors, venues, suppliers, visitors or groups only where public thanks are appropriate."],
          ["cleanup_status", "What cleanup or lost-property note is safe to share?", "textarea", "Mention waste, recycling, site condition, restoration, lost property or follow-up without exposing private incident detail."],
          ["public_memory", "What public memory can be shared?", "textarea", "Include approved photos, survey links, attendance estimates, community benefit and next-time notes."],
          ["private_boundary", "What must stay private?", "textarea", "Keep incident detail, private contacts, unapproved photos, sensitive places and internal lessons out of public notices."],
          ["expiry", "When should this summary expire?", "text", "Choose when it should leave active noticeboards."]
        ]
      }
  ]
};
