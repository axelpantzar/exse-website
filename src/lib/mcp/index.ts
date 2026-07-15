import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listCertifications from "./tools/list-certifications";
import listContactLocations from "./tools/list-contact-locations";

export default defineMcp({
  name: "exse-mcp",
  title: "EXSE AB",
  version: "0.1.0",
  instructions:
    "Public information about EXSE AB — a Swedish company operating in environmental recycling and sport (Excellent Floorball). Use the tools to fetch company facts, certifications and contact locations.",
  tools: [getCompanyInfo, listCertifications, listContactLocations],
});
