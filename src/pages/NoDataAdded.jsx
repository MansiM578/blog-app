import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const primary = blue[300];

function NoDataAdded() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard/addForm");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "90.8vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        No Data Added
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        There is no Article added to the page
      </Typography>
      <Button variant="contained" onClick={handleSubmit}>
        Add Article
      </Button>
    </Box>
  );
}
export default NoDataAdded;
