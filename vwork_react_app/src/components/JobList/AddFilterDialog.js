import React, { useState, useRef } from "react";
import moment from "moment";
import PropType from "prop-types";

import Dialog from "~/controls/Dialog";

import useFilters from "./useFilters";

export default function AddFilterDialog({ open, onClose }) {
  const { filters, filtersState, filtersStateSet } = useFilters();
  const [selectedFilter, selectedFilterSet] = useState();
  const inputRef = useRef();

  return (
    <Dialog open={open} onClose={onClose} title="Add filter">
      {!selectedFilter && (
        <div className="btn-toolbar">
          {filters
            .filter(f => !f.disabled)
            .map(filter => (
              <button
                key={filter.id}
                className="btn"
                onClick={() => selectedFilterSet(filter)}
              >
                {filter.label}
              </button>
            ))}
        </div>
      )}
      {selectedFilter && (
        <>
          <div className="btn-toolbar">
            <button className="btn" onClick={() => selectedFilterSet(null)}>
              back
            </button>
          </div>
          {selectedFilter && <label>{selectedFilter.label}:</label>}
          {selectedFilter.type === "options" && (
            <>
              <div className="btn-toolbar">
                {selectedFilter.options
                  .filter(
                    o => !filtersState[selectedFilter.id]?.includes(o.value),
                  )
                  .map(option => (
                    <div
                      key={option.value}
                      className="btn btn-info"
                      onClick={() => {
                        filtersStateSet({
                          ...filtersState,
                          [selectedFilter.id]: [
                            ...(filtersState[selectedFilter.id] || []),
                            option.value,
                          ],
                        });
                        selectedFilterSet(null);
                        onClose();
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
              </div>
            </>
          )}
          {selectedFilter.type === "datepicker" && (
            <>
              <input
                type="date"
                ref={inputRef}
                defaultValue={moment().format("YYYY-MM-DD")}
              />
              <div className="btn-toolbar">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    filtersStateSet({
                      ...filtersState,
                      [selectedFilter.id]: inputRef.current.value,
                    });
                    selectedFilterSet(null);
                    onClose();
                  }}
                >
                  Ok
                </button>
              </div>
            </>
          )}
        </>
      )}
    </Dialog>
  );
}

AddFilterDialog.propTypes = {
  open: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
};
