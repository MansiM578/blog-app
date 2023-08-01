import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Title from "../pages/Title";

function Content() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setStoredData(JSON.parse(storedFormData));
    }
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    const updatedItems = storedFormData.filter((obj) => obj.id !== id);

    localStorage.setItem("formData", JSON.stringify(updatedItems));

    setStoredData(updatedItems);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <Container maxWidth="lg" sx={{ my: 4 }} spacing={3}>
      <Grid sx={{ ms: "auto" }} spacing={-2}>
        <Grid item>
          {storedData.map((item) => (
            <Paper
              sx={{
                p: 2,
                display: "flex",
                my: 4,
              }}
              key={item.heading}
            >
              <Grid item sx={{ width: "35%", my: "auto", marginLeft: "1%" }}>
                <img
                  src={item.image}
                  alt="Images"
                  style={{ width: "80%", objectFit: "cover", height: "26vh" }}
                />
              </Grid>

              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  my: 4,
                }}
              >
                <Typography component="p" variant="h5">
                  {item.heading}
                </Typography>

                <Typography color="text.secondary" sx={{ flex: 1 }}>
                  {item.paraName}
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                  {item.paraDate}
                </Typography>
                <Title>{item.content}</Title>
                <div>
                  <Button color="warning" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Content;
