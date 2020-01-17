import React, { useState } from "react";
import moment from "moment";

import useFilters from "./useFilters";
import AddFilterDialog from "./AddFilterDialog";

export default function Filters() {
  const [addDialogOpen, addDialogOpenSet] = useState(false);
  const { filters, filtersState, filtersStateSet } = useFilters();

  return (
    <>
      <div className="btn-toolbar">
        <button className="btn disabled">Filters:</button>
        {filters
          .flatMap(filter => {
            const filterValue = filtersState[filter.id];

            if (filter.type === "options")
              return filter.options
                .filter(o => filterValue?.includes(o.value))
                .map(option => ({
                  label: `${filter.label}:${option.label}`,
                  onRemove: () =>
                    filtersStateSet({
                      ...filtersState,
                      [filter.id]: filterValue.filter(v => v !== option.value),
                    }),
                }));
            else if (filter.type === "datepicker")
              return !filterValue
                ? []
                : [
                    {
                      label: `${filter.label}:${{
                        [moment()
                          .subtract(1, "days")
                          .format("LL")]: "Yesterday",
                        [moment().format("LL")]: "Today",
                        [moment()
                          .add(1, "days")
                          .format("LL")]: "Tomorrow",
                      }[moment(filterValue).format("LL")] ||
                        moment(filterValue).format("LL")}`,
                      onRemove: () =>
                        filtersStateSet({
                          ...filtersState,
                          [filter.id]: null,
                        }),
                    },
                  ];
            else throw new Error(`Unknown filter type: ${filter.type}`);
          })
          .map(badge => (
            <div key={badge.label} className="btn-group">
              <button className="btn disabled">{badge.label}</button>
              <button className="btn" onClick={badge.onRemove}>
                remove
              </button>
            </div>
          ))}
        <button className="btn btn-info" onClick={() => addDialogOpenSet(true)}>
          Add
        </button>
      </div>
      <AddFilterDialog
        open={addDialogOpen}
        onClose={() => addDialogOpenSet(false)}
      />
    </>
  );
}
