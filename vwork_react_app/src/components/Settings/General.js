import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";

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

  const { handleSubmit, register } = useForm();

  if (!data) return null;

  return (
    <>
      <form
        onSubmit={handleSubmit(data =>
          updateSetting({
            input: {
              ...data,
            },
          }),
        )}
      >
        <label className="checkbox">
          <input
            name="enableJobs"
            type="checkbox"
            ref={register()}
            defaultChecked={!!data?.setting.enableJobs}
          />
          Enable Jobs
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            name="enableSchedule"
            ref={register()}
            defaultChecked={!!data?.setting.enableSchedule}
          />
          Enable Schedule
        </label>
        <label className="checkbox">
          <input
            name="enableAssets"
            type="checkbox"
            ref={register()}
            defaultChecked={!!data?.setting.enableAssets}
          />
          Enable Assets
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            name="enableCustomers"
            ref={register()}
            defaultChecked={!!data?.setting.enableCustomers}
          />
          Enable Customers
        </label>
        <div className="btn-toolbar">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </>
  );
}
