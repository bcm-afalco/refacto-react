export interface DomainInfo {
  countries: string[];
  classifications: string[];
  subClassifications: string[];
}
/**
 * Extracts distinct attributes (country, classification, sub-classification) from an array of domain strings.
 *
 * @param {string[]} domains - Array of domain strings, each in the format `{country}_{classification}-{subclassification}`.
 * @returns {DomainData} An object containing arrays of distinct `countries`, `classifications`, and `subClassifications`.
 *
 * @example
 * const domains = ["US_TA-001", "FR_TB-002", "US_TA-003"];
 * const attributes = getDomainInfo(domains);
 * // attributes = {
 * //   countries: ["US", "FR"],
 * //   classifications: ["TA", "TB"],
 * //   subClassifications: ["001", "002", "003"]
 * // }
 */

export const getDomainInfo = (domains: string[]): DomainInfo => {
  const countries: string[] = [];
  const classifications: string[] = [];
  const subClassifications: string[] = [];

  domains.forEach((domain) => {
    const [country, classification, subClassification] = [
      domain.substring(0, 2),
      domain.substring(3, 5),
      domain.substring(6)
    ];

    if (!countries.includes(country)) countries.push(country);
    if (!classifications.includes(classification))
      classifications.push(classification);
    if (!subClassifications.includes(subClassification))
      subClassifications.push(subClassification);
  });

  return {
    countries,
    classifications,
    subClassifications
  };
};
