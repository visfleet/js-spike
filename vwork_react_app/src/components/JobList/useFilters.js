import gql from "graphql-tag";

import useData from "~/hooks/useData";
import useRouteState from "~/hooks/useRouteState";

export default function useFilters() {
  const data = useData(gql`
    query {
      workers {
        id
        name
      }
      templates {
        id
        name
      }
    }
  `);
  const [filtersState, filtersStateSet] = useRouteState("filters", {});

  const hasDateFilter =
    !!filtersState["date_lt"] ||
    !!filtersState["date_eq"] ||
    !!filtersState["date_gt"];

  const filters = [
    {
      id: "worker_ids",
      label: "Workers",
      type: "options",
      options: (data?.workers || []).map(worker => ({
        label: worker.name,
        value: worker.id,
      })),
    },
    {
      id: "template_ids",
      label: "Templates",
      type: "options",
      options: (data?.templates || []).map(template => ({
        label: template.name,
        value: template.id,
      })),
    },
    {
      id: "date_eq",
      label: "On",
      type: "datepicker",
      disabled: hasDateFilter,
    },
    {
      id: "date_lt",
      label: "Before",
      type: "datepicker",
      disabled: hasDateFilter,
    },
    {
      id: "date_gt",
      label: "After",
      type: "datepicker",
      disabled: hasDateFilter,
    },
  ];

  return {
    filters,
    filtersState,
    filtersStateSet,
  };
}
