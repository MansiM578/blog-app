import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";

function AddForm() {
  const userId = uuidv4();
  const [formData, setFormData] = useState({
    heading: "",
    paraName: "",
    paraDate: "",
    content: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    heading: "",
    paraName: "",
    paraDate: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // function to validate the form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.heading.trim() === "") {
      newErrors.heading = "Heading is required";
      isValid = false;
    }
    if (formData.paraName.trim() === "") {
      newErrors.paraName = "Name is required";
      isValid = false;
    }
    if (formData.content.trim() === "") {
      newErrors.content = "Content of the article is required";
      isValid = false;
    }

    if (formData.paraDate.trim() === "") {
      newErrors.paraDate = "Date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleImageUpload = (image) => {
    const updatedData = { ...formData, image };
    setFormData(updatedData);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingData = localStorage.getItem("formData");
      let formDataArray = [];

      if (existingData) {
        formDataArray = JSON.parse(existingData);
      }

      formDataArray.push({ ...formData, id: userId });

      localStorage.setItem("formData", JSON.stringify(formDataArray));

      setFormData({
        heading: "",
        paraName: "",
        paraDate: "",
        content: "",
        image: "",
      });

      navigate("/dashboard");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />
      <Paper
        elevation={3}
        sx={{ marginTop: "5%", marginRight: "15%", marginLeft: "15%" }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ padding: 5 }}
          noValidate
        >
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
                value={formData?.heading}
                onChange={handleChange}
                name="heading"
                required
                fullWidth
              />
              {errors.heading && (
                <p className="error danger">{errors.heading}</p>
              )}
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
                value={formData?.content}
                onChange={handleChange}
                name="content"
                required
                fullWidth
                rows={4}
              />
              {errors.content && (
                <p className="error danger">{errors.content}</p>
              )}
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
                value={formData?.paraDate}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
                required
              />
              {errors.paraDate && (
                <p className="error danger">{errors.paraDate}</p>
              )}
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
                value={formData?.paraName}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
                required
              />
              {errors.paraName && (
                <p className="error danger">{errors.paraName}</p>
              )}
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
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                sx={{ color: "#e2f3fe" }}
                type="submit"
              >
                Add Article
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
      {/* <div className="w-75 mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="form-control my-3 w-100"
            placeholder="Enter the Heading of the Topic"
          />
          {errors.heading && <p className="error danger">{errors.heading}</p>}
          <input
            type="text"
            id="paraName"
            name="paraName"
            value={formData.paraName}
            onChange={handleChange}
            className="form-control  w-100"
            placeholder="Enter your Name"
          />
          {errors.paraName && <p className="error danger">{errors.paraName}</p>}
          <input
            type="date"
            id="paraData"
            name="paraDate"
            value={formData.paraDate}
            onChange={handleChange}
            className="form-control my-3 w-100"
            placeholder="Enter the Current Date"
          />
          {errors.paraDate && <p className="error danger">{errors.paraDate}</p>}
          <textarea
            type="text"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="form-control border mb-3 w-100"
            rows="12"
            placeholder="Enter the details about the topic"
            style={{ resize: "none" }}
          />
          {errors.content && <p className="error danger">{errors.content}</p>}
          <input
            type="file"
            // name="image"
            // value={formData.image}
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
          <button type="submit" className="btn btn-primary">
            Add Article
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default AddForm;
