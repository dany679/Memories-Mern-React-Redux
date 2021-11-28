import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
//parei aqui
function Input({ name, handleChange, label, type, autoFocus, half = 12 }) {
  return (
    <Grid item xs={12} md={half}>
      <TextField
        name={name}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        inputProps={
          name === 'password' && {
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
}

export default Input;
