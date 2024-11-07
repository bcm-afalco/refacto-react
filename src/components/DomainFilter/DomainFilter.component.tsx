import { useEffect, useState } from "react";
import { DomainInfo, getDomainInfo } from "../../utils/domainUtils";

interface Props {
  domains?: string[];
}

const DomainFilter = (props: Props) => {
  const { domains = [] } = props;
  const [state, setState] = useState<DomainInfo>({
    countries: [],
    classifications: [],
    subClassifications: []
  });

  useEffect(() => {
    const domainData = getDomainInfo(domains);
    setState(domainData);
  }, [domains]);

  return (
    <>
      <select name="countries" multiple>
        {state.countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <select name="classifications" multiple>
        {state.classifications.map((classification) => (
          <option value={classification} key={classification}>
            {classification}
          </option>
        ))}
      </select>
      <select name="subClassifications" multiple>
        {state.subClassifications.map((subClassification) => (
          <option value={subClassification} key={subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
    </>
  );
};

export default DomainFilter;
