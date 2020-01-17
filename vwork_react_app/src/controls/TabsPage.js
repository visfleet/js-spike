import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import useParams from "hooks/useParams";

export default function TabsPage({ tabs, tabParamName = "tab" }) {
  const { [tabParamName]: currentTabName, pathnameForParams } = useParams();
  const activeTab = tabs.find(t => t.name === currentTabName) || tabs[0];

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li
            key={tab.name}
            className={classNames({
              active: tab.name === activeTab.name,
            })}
          >
            <a href={`/#${pathnameForParams({ [tabParamName]: tab.name })}`}>
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {activeTab.children}
    </>
  );
}

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      children: PropTypes.any.isRequired,
    }),
  ).isRequired,
  tabParamName: PropTypes.string,
};
