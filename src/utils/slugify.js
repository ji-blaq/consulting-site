// "IT & digital transformation" -> "it-and-digital-transformation"
// Used for page section ids (/services#risk-management) and article addresses.
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/['’]/g, "") // "it's" -> "its"
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default slugify;
