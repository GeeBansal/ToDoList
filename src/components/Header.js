import React from "react";
import HighlightOutlinedIcon from "@mui/icons-material/HighlightOutlined";

import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>
        <span className={classes.span}>
          <HighlightOutlinedIcon />
        </span>
        <span className={classes.span}>ToDoList</span>
      </h1>
    </header>
  );
};

export default Header;
