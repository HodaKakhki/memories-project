import React, { useState } from "react";
import useStyles from "./styles"
import { Paper, TextField, Typography } from "@material-ui/core";
const handleSubmit = () => {
  
}

const Form = () => {
  
  const classes = useStyles();
  const [postData, setPostData]=useState({})
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
<Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth
          value={postData.creator}
          // onChange={ }
        />
      </form>
   </Paper>
  );
};

export default Form;
