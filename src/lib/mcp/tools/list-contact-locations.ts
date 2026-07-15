import { defineTool } from "@lovable.dev/mcp-js";

const LOCATIONS = [
  {
    name: "EXSE AB — Huvudkontor",
    address: "Kyrkvägen 17, 703 75 Örebro, Sverige",
    country: "SE",
    maps: "https://www.google.com/maps/dir/?api=1&destination=Kyrkv%C3%A4gen+17%2C+703+75+%C3%96rebro",
  },
  {
    name: "El-Kretsens Analysanläggning i Arboga",
    address: "Arboga, Sverige",
    country: "SE",
    maps: "https://www.google.com/maps/dir/?api=1&destination=Arboga%2C+Sverige",
  },
];

export default defineTool({
  name: "list_contact_locations",
  title: "List contact locations",
  description:
    "Lists EXSE AB's public office and facility locations with addresses and Google Maps directions links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(LOCATIONS, null, 2) }],
    structuredContent: { locations: LOCATIONS },
  }),
});
