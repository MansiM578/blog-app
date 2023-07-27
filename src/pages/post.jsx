import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function post() {
  const { id } = useParams();
  console.log(id);

  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const initialFormData = JSON.parse(localStorage.getItem("formData"));

    if (id) {
      const updatedItems = initialFormData.filter((obj) => obj.id === id)[0];
      setStoredData(updatedItems);
    }
  }, [id]);
  console.log(storedData);

  return (
    <>
      <Navbar />

      <Paper
        elevation={3}
        sx={{ marginTop: "1%", marginRight: "15%", marginLeft: "15%" }}
      >
        {/* {storedData.map(() => ( */}
        <Box component="form" sx={{ padding: 5 }} noValidate>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Edit Form
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Heading
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                label="Heading"
                defaultValue={storedData?.heading}
                name="heading"
                required
                fullWidth
                multiline={1}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Content
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                label="Content"
                defaultValue={storedData?.content}
                name="content"
                multiline
                required
                fullWidth
                rows={4}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Date
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="date"
                name="date"
                label="Date"
                defaultValue={storedData?.paraDate}
                fullWidth
                size="small"
                variant="outlined"
                required
                multiline={1}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Author
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="author"
                name="author"
                label="Author"
                defaultValue={storedData?.paraName}
                fullWidth
                size="small"
                variant="outlined"
                required
                multiline={1}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Img Upload
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Input type="file" />
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" sx={{ color: "#e2f3fe" }}>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
        {/* ))} */}
      </Paper>
    </>
  );
}

export default post;
