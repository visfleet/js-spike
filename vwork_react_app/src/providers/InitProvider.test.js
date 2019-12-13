import { shallow } from "enzyme";
import { useState, useEffect } from "react";

import { initApolloClient } from "../services/apolloClient";
import sleep from "../services/sleep";

import InitProvider from "./InitProvider";

jest.mock("react");
jest.mock("../services/apolloClient");
const React = jest.requireActual("react");

it("renders when loading", () => {
  useState.mockReturnValue([false]);
  shallow(<InitProvider>APP</InitProvider>);
});

it("renders when loaded", () => {
  useState.mockReturnValue([true]);
  shallow(<InitProvider>APP</InitProvider>);
});

it("call initFunc", async () => {
  const initedSet = jest.fn();
  useState.mockReturnValue([true, initedSet]);
  useEffect.mockImplementation(fn => {
    fn();
  });
  shallow(<InitProvider>APP</InitProvider>);
  await sleep(0);
  expect(initApolloClient.mock.calls.length).toEqual(1);
});
