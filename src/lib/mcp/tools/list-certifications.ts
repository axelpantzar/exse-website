import { defineTool } from "@lovable.dev/mcp-js";

const CERTIFICATIONS = [
  { id: "uc-gold", name: "UC Gold", description: "Creditworthiness rating." },
  { id: "iso-9001", name: "ISO 9001", description: "Quality management." },
  { id: "en-50625", name: "EN 50625", description: "Collection, logistics and treatment of WEEE." },
  { id: "iso-14001", name: "ISO 14001", description: "Environmental management." },
  { id: "iso-45001", name: "ISO 45001", description: "Occupational health and safety." },
];

export default defineTool({
  name: "list_certifications",
  title: "List certifications",
  description: "Lists the industry certifications held by EXSE AB.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CERTIFICATIONS, null, 2) }],
    structuredContent: { certifications: CERTIFICATIONS },
  }),
});
