import React from "react";
import Paper from "@mui/material/Paper";
import Blogform from "components/BlogForm";

function AddForm() {
  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: "5%",
        marginRight: "15%",
        marginLeft: "15%",
        marginBottom: "5%",
      }}
    >
      <Blogform />
    </Paper>
  );
}

export default AddForm;
