export async function initClientSchema() {
  Object.assign(
    clientSchemaState,
    JSON.parse(localStorage.getItem("clientSchemaState")),
  );
  const defaultState = {
    apiRequestDelay: 0,
  };

  for (const [key, value] of Object.entries(defaultState)) {
    if (typeof clientSchemaState[key] === "undefined")
      clientSchemaState[key] = value;
  }
}

function saveState() {
  localStorage.setItem("clientSchemaState", JSON.stringify(clientSchemaState));
}

export const clientSchemaState = {};

const clientSchema = {
  resolvers: {
    Query: {
      apiRequestDelay: () => {
        return clientSchemaState.apiRequestDelay;
      },
    },
    Mutation: {
      apiRequestDelaySet: (node, { apiRequestDelay }) => {
        clientSchemaState.apiRequestDelay = apiRequestDelay;
        saveState();
        return apiRequestDelay;
      },
    },
  },
};

export default clientSchema;
