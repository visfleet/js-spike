import { useHistory, useLocation } from "react-router-dom";
import QueryString from "query-string";
import _ from "lodash";

const pruneParams = params =>
  _.fromPairs(Object.entries(params).filter(([k, v]) => v));

export default function useParams() {
  const { pathname, search } = useLocation();
  const { push } = useHistory();
  const params = QueryString.parse(search);

  const pathnameForParams = newParams =>
    `${pathname}?${QueryString.stringify(
      pruneParams({ ...params, ...newParams }),
    )}`;

  const setParams = newParams => push(pathnameForParams(newParams));

  return { ...params, pathnameForParams, setParams };
}
