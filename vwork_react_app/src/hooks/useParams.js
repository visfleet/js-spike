import { useHistory, useLocation } from "react-router-dom";
import QueryString from "query-string";

export default function useParams() {
  const { pathname, search } = useLocation();
  const { push } = useHistory();
  const params = QueryString.parse(search);

  const combileParams = newParams => {
    const combinedParams = { ...params, ...newParams };
    for (const [key, value] of Object.entries(combinedParams)) {
      if (value) continue;
      delete combinedParams[key];
    }
    return combinedParams;
  };

  const pathnameForParams = newParams =>
    `${pathname}?${QueryString.stringify(combileParams(newParams))}`;

  const setParams = newParams => push(pathnameForParams(newParams));

  return { ...params, pathnameForParams, setParams };
}
