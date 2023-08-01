/* eslint-disable no-plusplus */
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
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { setLocalStorage } from "../utils/Storage";
import defaultImage from "../images/noImage.jpg";

function Post() {
  const { id } = useParams();

  const [updatedFormData, setUpdatedFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFormData({ ...updatedFormData, [name]: value });
  };

  useEffect(() => {
    const initialFormData = JSON.parse(localStorage.getItem("formData"));
    if (id) {
      const updatedItems = initialFormData.filter((obj) => obj.id === id)[0];
      setUpdatedFormData(updatedItems);
    }
  }, [id]);

  const handleImageUpload = (image) => {
    const updatedData = { ...updatedFormData, image };
    setUpdatedFormData(updatedData);
  };

  const handleImageRemove = () => {
    const updatedData = { ...updatedFormData, image: "" };
    setUpdatedFormData(updatedData);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const initialFormData = JSON.parse(localStorage.getItem("formData"));
    const dataIndex = initialFormData.findIndex(
      (item) => item.id === updatedFormData.id
    );
    if (dataIndex !== -1) {
      // Create a copy of the data array
      const newData = [...initialFormData];
      newData[dataIndex] = {
        ...newData[dataIndex],
        heading: updatedFormData.heading,
        paraDate: updatedFormData.paraDate,
        paraName: updatedFormData.paraName,
        content: updatedFormData.content,
        image: updatedFormData.image,
      };

      setLocalStorage("formData", newData);

      navigate("/dashboard");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

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
        <Box
          component="form"
          onSubmit={handleSave}
          sx={{ padding: 5 }}
          noValidate
        >
          <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }}>
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
                value={updatedFormData?.heading || ""}
                onChange={handleChange}
                name="heading"
                required
                fullWidth
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
                value={updatedFormData?.content || ""}
                onChange={handleChange}
                name="content"
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
                id="paraDate"
                name="paraDate"
                label="Date"
                value={updatedFormData?.paraDate || ""}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
                required
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
                id="paraName"
                name="paraName"
                label="Author"
                value={updatedFormData?.paraName || ""}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
                required
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
              {updatedFormData.image ? (
                <>
                  <img
                    src={updatedFormData.image}
                    alt="Selected Preview"
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleImageRemove}
                    sx={{ marginTop: "10px" }}
                  >
                    Remove Image
                  </Button>
                </>
              ) : (
                <>
                  <img
                    src={defaultImage}
                    alt="No Images Selected"
                    style={{ width: "70%", marginTop: "10px" }}
                  />
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const image = event.target.result;
                        handleImageUpload(image);
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </>
              )}
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                sx={{ color: "#e2f3fe" }}
                type="submit"
              >
                Save
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#e2f3fe",
                  backgroundColor: "red",
                  borderColor: "black",
                  marginLeft: 2,
                  ":hover": {
                    bgcolor: "#e2f3fe",
                    color: "red",
                    borderColor: "black",
                  },
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Post;
