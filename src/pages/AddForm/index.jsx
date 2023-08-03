import React from "react";
import Paper from "@mui/material/Paper";
import Navbar from "components/Navbar";
import Blogform from "components/BlogForm";

function AddForm() {
  return (
    <div>
      <Navbar />
      <Paper
        elevation={3}
        sx={{ marginTop: "5%", marginRight: "15%", marginLeft: "15%" }}
      >
        <Blogform />
      </Paper>
    </div>
  );
}

export default AddForm;
