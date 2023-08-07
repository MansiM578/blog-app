import Paper from "@mui/material/Paper";
import React from "react";
import Blogform from "components/BlogForm";

function Post() {
  return (
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
  );
}

export default Post;
