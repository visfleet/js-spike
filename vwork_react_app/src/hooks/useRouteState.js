import useParams from "./useParams";

export default function useRouteState(paramName, defaultValue) {
  const { [paramName]: valueJSON, pathnameForParams, setParams } = useParams();

  const value = valueJSON ? JSON.parse(valueJSON) : defaultValue;
  const serialize = v => {
    const valueJSON = JSON.stringify(v);
    if (valueJSON === JSON.stringify(defaultValue)) return "";

    return valueJSON;
  };

  const valueSet = v =>
    setParams({
      [paramName]: serialize(v),
    });
  const pathnameFor = v => pathnameForParams({ [paramName]: serialize(v) });

  return [value, valueSet, pathnameFor];
}
