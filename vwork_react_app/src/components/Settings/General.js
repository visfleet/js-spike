import React from "react";
import gql from "graphql-tag";

import useData from "hooks/useData";
import useAction from "hooks/useAction";

export default function General() {
  const data = useData(gql`
    query {
      setting {
        id
        enableJobs
        enableSchedule
        enableAssets
        enableCustomers
      }
    }
  `);

  const updateSetting = useAction(gql`
    mutation($input: UpdateSettingInput!) {
      updateSetting(input: $input) {
        setting {
          id
          enableJobs
          enableSchedule
          enableAssets
          enableCustomers
        }
      }
    }
  `);

  return (
    <>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={!!data?.setting.enableJobs}
          onChange={event =>
            updateSetting({
              input: {
                enableJobs: event.currentTarget.checked,
              },
            })
          }
        />
        Enable Jobs
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={!!data?.setting.enableSchedule}
          onChange={event =>
            updateSetting({
              input: {
                enableSchedule: event.currentTarget.checked,
              },
            })
          }
        />
        Enable Schedule
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={!!data?.setting.enableAssets}
          onChange={event =>
            updateSetting({
              input: {
                enableAssets: event.currentTarget.checked,
              },
            })
          }
        />
        Enable Assets
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={!!data?.setting.enableCustomers}
          onChange={event =>
            updateSetting({
              input: {
                enableCustomers: event.currentTarget.checked,
              },
            })
          }
        />
        Enable Customers
      </label>
    </>
  );
}
