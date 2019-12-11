import { useQuery } from "@apollo/react-hooks";

export default function useData(query, variables, options) {
  const { data } = useQuery(query, {
    variables,
    fetchPolicy: "cache-and-network",
    partialRefetch: true,
    ...options
  });

  return data;
}
