import React from "react";

export default function ViewPort({ navItems = [], children }) {
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
                  <li className="active">
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
