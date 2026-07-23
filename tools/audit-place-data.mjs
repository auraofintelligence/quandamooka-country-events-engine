import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
vm.runInContext(await readFile(new URL("../assets/site-data.js", import.meta.url), "utf8"), context);
vm.runInContext(await readFile(new URL("../assets/place-data-extra.js", import.meta.url), "utf8"), context);

const places = [
  ...context.window.QCEE_DATA.places.map((place) => ({ ...place, dataset: "core" })),
  ...context.window.QCEE_EXTRA_PLACES.map((place) => ({ ...place, dataset: "extra" }))
];

const coordKey = (place) => `${Number(place.lat).toFixed(6)},${Number(place.lng).toFixed(6)}`;
const groups = new Map();
places.forEach((place, index) => {
  const key = coordKey(place);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(index);
});

function assessment(place, index) {
  if (place.id === "public-bradbury-s-beach") {
    return ["Corrected", "Moved from the contradictory inland geocoder candidate to a documented representative foreshore point; retain as a shoreline marker rather than an entrance."];
  }
  const shared = groups.get(coordKey(place)) || [];
  const precision = String(place.coordinatePrecision || "");
  if (shared.length > 1) {
    const checkedTogether = shared.every((other) => places[other].coordinateChecked && places[other].coordinatePointType);
    if (checkedTogether) {
      return ["Verified shared precinct", "Records deliberately share a documented facility or precinct point; show them as a grouped map location."];
    }
    const names = shared.filter((other) => other !== index).map((other) => places[other].name).join("; ");
    return ["Shared / unresolved", `Same coordinate as ${names}. Confirm whether these are genuinely co-located or separate facilities.`];
  }
  if (/StreetName/i.test(precision)) {
    return ["Approximate", "Street-name geocode, not a site or entrance coordinate. Inspect aerial imagery and an authoritative facility source."];
  }
  if (/Postal|score 8\d/i.test(precision)) {
    return ["Low confidence", "Broad postal or low-score match. Replace with a verified site, access or representative area point."];
  }
  if (/verify exact entrance/i.test(precision)) {
    return ["Plausible, unverified", "Address or POI match only. Confirm the building/entrance against the named source and aerial imagery."];
  }
  if (!precision) {
    return ["Legacy, unverified", "No coordinate provenance is recorded. Confirm the point and add a precision/source note."];
  }
  return ["Review", precision];
}

const counts = {};
const rows = places.map((place, index) => {
  const [status, action] = assessment(place, index);
  counts[status] = (counts[status] || 0) + 1;
  const source = String(place.url || "").startsWith("http") ? `[source](${place.url})` : String(place.url || "No independent source");
  return `| ${index + 1} | ${String(place.name).replaceAll("|", "\\|")} | ${String(place.area || "").replaceAll("|", "\\|")} | ${place.lat}, ${place.lng} | ${status} | ${action.replaceAll("|", "\\|")} | ${source} |`;
});

const sharedGroups = [...groups.entries()].filter(([, indexes]) => indexes.length > 1);
const summary = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([status, count]) => `- ${status}: ${count}`).join("\n");

const report = `# Place and coordinate audit

Audit date: 21 July 2026

## What this list establishes

This is a record-by-record data-quality audit of the ${places.length} mapped places. It does not claim that a coordinate is correct merely because a geocoder returned a high score. A street-name match can be hundreds of metres from the actual facility, and multiple records can legitimately share a precinct while still needing distinct visitor-facing points.

The statuses are deliberately conservative:

- **Wrong** means current evidence contradicts the stored position.
- **Shared / unresolved** means multiple records use exactly the same coordinate and require individual checking.
- **Approximate** means the coordinate was derived from a street rather than the named site.
- **Low confidence** means the match was postal-level or otherwise weak.
- **Plausible, unverified** means the address or POI result looks usable but has not yet been visually and independently confirmed.
- **Legacy, unverified** means the older core record has no recorded coordinate provenance.

## Summary

${summary}

- Exact shared-coordinate groups: ${sharedGroups.length}
- Records inside those groups: ${sharedGroups.reduce((total, [, indexes]) => total + indexes.length, 0)}

## Removed from the active map during this audit

- **Noreen's Seaside Shop**, formerly at Shop 1, Anchorage on Straddie, 112 Dickson Way: Luke reported the recent closure, and a public January 2026 closing announcement says the shop was ending after 31 years. Removed 21 July 2026. The replacement holiday-rental management business has not been added because its current public name and source have not yet been confirmed.

## Corrected error: Bradbury's Beach

The extra beach record was at **-27.4998052, 153.4044787**, the inland Dunwich geocoder candidate near the shops rather than a defensible beach point. It was moved on 21 July 2026 to a representative foreshore point at **-27.49471, 153.40235**. Independent public listings place Bradbury's Beach Camping Ground around **-27.4951, 153.4022**, near Flinders Avenue and the foreshore. The separate campground record at **-27.4959391, 153.4020046** remains nearby, but the beach and campground records intentionally represent different things.

Current treatment: retain the campground as a campground record pending its own provenance update; use the corrected beach marker only as a representative shoreline point, not an entrance or surveyed boundary.

## Spot-by-spot list

| # | Site | Area | Stored coordinate | Assessment | Required action | Current source |
|---:|---|---|---|---|---|---|
${rows.join("\n")}

## Next verification pass

Work through **Wrong**, then **Shared / unresolved**, then **Approximate**. For each record, retain the stored coordinate, proposed coordinate, evidence links, point type (entrance, building, facility, access or representative area), confidence and Luke's decision before changing source data.
`;

await writeFile(new URL("../docs/PLACE_COORDINATE_AUDIT.md", import.meta.url), report, "utf8");
console.log(`Wrote ${places.length} rows to docs/PLACE_COORDINATE_AUDIT.md`);
