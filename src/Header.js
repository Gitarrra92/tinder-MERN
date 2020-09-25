import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <IconButton className="header__icon">
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Logo-Tinder.svg"
        alt=""
      />
      <IconButton className="header__icon">
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
