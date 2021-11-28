import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import memories from "../../images/memories.png";
import useStyles from "./Navbar.styles";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img
        className={classes.image}
        src={memories}
        alt="Memories"
        height="60"
      />
      <Toolbar ClassName={classes.toolbar}>
        {user ? (
          <div ClassName={classes.profile}>
            <Avatar
              ClassName={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            />
            <Typography ClassName={classes.userName} variant="h6">
              {user.result?.name}
            </Typography>
          </div>
        ) : (
          <Button
            variant="contained"
            ClassName={classes.logout}
            color="secondary"
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
