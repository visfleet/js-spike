import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";

import { initApolloClient } from "services/apolloClient";
import { initClientSchema } from "services/clientSchema";

import InitProvider from "./InitProvider";

jest.mock("services/apolloClient");
jest.mock("services/clientSchema");

it("renders when loading", async () => {
  // InitProvider use lifecycle, shallow rendering won't work
  await act(async () => {
    mount(<InitProvider>APP</InitProvider>);
  });
  expect(initApolloClient.mock.calls.length).toEqual(1);
  expect(initClientSchema.mock.calls.length).toEqual(1);
});
