import gql from "graphql-tag";
import _ from "lodash";

import useData from "~/hooks/useData";
import useRouteState from "~/hooks/useRouteState";

export default function useFilters() {
  const data = useData(gql`
    query {
      setting {
        id
        enableCustomers
        enableAssets
      }
      workers {
        id
        name
      }
      assets {
        id
        name
      }
      templates {
        id
        name
      }
      customers {
        id
        name
      }
      jobStates
    }
  `);
  const [filtersState, filtersStateSet] = useRouteState("filters", {});

  const hasDateFilter =
    !!filtersState.dateLt || !!filtersState.dateEq || !!filtersState.dateGt;

  const filters = [
    {
      id: "workerIds",
      label: "Workers",
      type: "options",
      options: (data?.workers || []).map(worker => ({
        label: worker.name,
        value: worker.id,
      })),
    },
    {
      id: "templateNames",
      label: "Templates",
      type: "options",
      options: _.uniq((data?.templates || []).map(t => t.name)).map(
        templateName => ({
          label: templateName,
          value: templateName,
        }),
      ),
    },
    data?.setting.enableCustomers && {
      id: "customerIds",
      label: "Customers",
      type: "options",
      options: (data?.customers || []).map(customer => ({
        label: customer.name,
        value: customer.id,
      })),
    },
    data?.setting.enableAssets && {
      id: "assetIds",
      label: "Assets",
      type: "options",
      options: (data?.assets || []).map(asset => ({
        label: asset.name,
        value: asset.id,
      })),
    },
    {
      id: "states",
      label: "Status",
      type: "options",
      options: (data?.jobStates || []).map(state => ({
        label: state,
        value: state,
      })),
    },
    {
      id: "dateEq",
      label: "On",
      type: "datepicker",
      disabled: hasDateFilter,
    },
    {
      id: "dateLt",
      label: "Before",
      type: "datepicker",
      disabled: hasDateFilter,
    },
    {
      id: "dateGt",
      label: "After",
      type: "datepicker",
      disabled: hasDateFilter,
    },
  ].filter(f => f);

  return {
    filters,
    filtersState,
    filtersStateSet,
  };
}
