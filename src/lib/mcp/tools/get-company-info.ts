import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Returns a summary of EXSE AB: what the company does, its two business areas (environment/recycling and sport), and key facts.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "EXSE AB",
      orgNumber: "556802-7931",
      website: "https://exse.se",
      summary:
        "EXSE AB is a Swedish company working across two areas: environmental services focused on the recycling chain for electronics and metals, and sport through the Excellent Floorball brand.",
      businessAreas: [
        {
          key: "environment",
          title: "Miljö / Environment",
          description:
            "A transparent recycling chain covering reception, sorting, analysis and material recovery. Includes involvement in El-Kretsens analysis facility in Arboga.",
        },
        {
          key: "sport",
          title: "Sport",
          description:
            "Excellent Floorball — development and distribution of floorball equipment.",
        },
      ],
      certifications: ["UC Gold", "ISO 9001", "EN 50625", "ISO 14001", "ISO 45001"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
