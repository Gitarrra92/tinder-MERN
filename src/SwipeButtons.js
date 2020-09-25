import React from "react";

import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";

export const SwipeButtons = () => {
  return (
    <div className="swipeUpButtons">
      <IconButton className="swipeUpButtons__repeat">
        <ReplyIcon fontSize="large" color="primary" />
      </IconButton>
      <IconButton className="swipeUpButtons__left">
        <CloseIcon fontSize="large" color="secondary" />
      </IconButton>
      <IconButton className="swipeUpButtons__star">
        <GradeIcon fontSize="large" style={{ color: "green" }} />
      </IconButton>
      <IconButton className="swipeUpButtons__right">
        <FavoriteIcon fontSize="large" color="secondary" />
      </IconButton>
      <IconButton className="swipeUpButtons__lightning">
        <FlashOnIcon fontSize="large" style={{ color: "yellow" }} />
      </IconButton>
    </div>
  );
};
