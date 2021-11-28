import { Avatar, Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Auth.styles';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
const Auth = () => {
  const classes = useStyles();
  const isSignup = null;
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography>{isSignup ? 'Sign up' : 'Sign In'}</Typography>
        <form></form>
      </Paper>
    </Container>
  );
};

export default Auth;
