import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          {storedData.map((item) => (
            <Paper
              sx={{
                p: 2,
                display: "flex-center",
                flexDirection: "column",
                width: "100%",
                height: "30vh",

                my: 4,
              }}
              key={item.heading}
            >
              <img
                src={item.image}
                alt="Images"
                style={{ width: "80%", objectFit: "cover", height: "26vh" }}
              />
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={8} lg={8}>
          {storedData.map((item) => (
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "30vh",
                my: 4,
              }}
              key={item.heading}
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
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Content;
