import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Dashboard
    </NavLink>{" "}
    |{" "}
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>{" "}
    |{" "}
    <NavLink activeClassName="is-active" to="/help">
      Help
    </NavLink>
  </header>
);

export default Header;
