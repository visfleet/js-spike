import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

export default function ViewPort({ navItems = [], children }) {
  const { pathname } = useLocation();

  return (
    <>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <a className="brand" href="/">
              vWork
            </a>
            <div className="nav-collapse collapse">
              <ul className="nav">
                {navItems.map(navItem => (
                  <li
                    key={navItem.title}
                    className={classNames({
                      active: `/#${pathname}`.startsWith(navItem.href),
                    })}
                  >
                    <a href={navItem.href} key={navItem.title}>
                      {navItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: 50 }}>
        {children}
      </div>
    </>
  );
}

ViewPort.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequire,
      title: PropTypes.string.isRequire,
    }),
  ).isRequired,
  children: PropTypes.any.isRequired,
};
