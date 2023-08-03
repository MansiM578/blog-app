import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import defaultImage from "assets/images/noImage.jpg";
import useUpdateForm from "./useUpdateForm";

const Blogform = () => {
  const {
    formData,
    errors,
    handleChangeA,

    handleSubmitA,
    id,
    handleChange,
    handleImageUpload,
    handleImageRemove,
    handleSave,
    handleCancel,
    updatedFormData,
  } = useUpdateForm();
  return (
    <Box
      component="form"
      onSubmit={id ? handleSave : handleSubmitA}
      sx={{ padding: 5 }}
      noValidate
    >
      {id ? (
        <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }}>
          Edit Form
        </Typography>
      ) : (
        <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }}>
          Add Form
        </Typography>
      )}

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
            value={id ? updatedFormData?.heading || "" : formData?.heading}
            onChange={id ? handleChange : handleChangeA}
            name="heading"
            required
            fullWidth
          />
          {errors.heading && <p className="error danger">{errors.heading}</p>}
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
            value={id ? updatedFormData?.content || "" : formData.content}
            onChange={id ? handleChange : handleChangeA}
            name="content"
            required
            fullWidth
            rows={4}
          />
          {errors.content && <p className="error danger">{errors.content}</p>}
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
            value={id ? updatedFormData?.paraDate || "" : formData?.paraDate}
            type="date"
            onChange={id ? handleChange : handleChangeA}
            fullWidth
            size="small"
            variant="outlined"
            required
            // inputProps={{
            //   max: formatDateForInput(new Date()), // Optional: Set the max date to prevent future dates selection
            //   min: formatDateForInput("1900-01-01"), // Optional: Set the min date to restrict past dates
            // }}
          />
          {errors.paraDate && <p className="error danger">{errors.paraDate}</p>}
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
            value={id ? updatedFormData?.paraName || "" : formData.paraName}
            onChange={id ? handleChange : handleChangeA}
            fullWidth
            size="small"
            variant="outlined"
            required
          />
          {errors.paraName && <p className="error danger">{errors.paraName}</p>}
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
          <Button variant="contained" sx={{ color: "#e2f3fe" }} type="submit">
            {id ? `Save` : `Add Article`}
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
  );
};

export default Blogform;
