/* eslint-disable no-plusplus */
import Paper from "@mui/material/Paper";
import Navbar from "components/Navbar";
import React from "react";
import Blogform from "components/BlogForm";

function Post() {
  return (
    <>
      <Navbar />

      <Paper
        elevation={3}
        sx={{
          marginTop: "3%",
          marginRight: "15%",
          marginLeft: "15%",
          marginBottom: "3%",
        }}
      >
        <Blogform />
      </Paper>
    </>
  );
}

export default Post;
