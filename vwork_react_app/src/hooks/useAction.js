import { useMutation } from "@apollo/react-hooks";

export default function useAction(mutation) {
  const [mutate, { loading, error }] = useMutation(mutation);
  const action = async (variables, options) => {
    const result = await mutate({
      variables,
      ...options,
    });

    return result.data;
  };

  action.loading = loading;
  action.error = error;
  return action;
}
