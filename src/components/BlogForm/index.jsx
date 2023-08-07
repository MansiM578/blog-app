import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import defaultImage from "assets/images/noImage.jpg";
import useUpdateForm from "components/BlogForm/useUpdateForm";

const Blogform = () => {
  const {
    inputData,
    errors,
    handleSubmitA,
    id,
    handleChange,
    handleImageUpload,
    handleImageRemove,
    handleSave,
    handleCancel,
  } = useUpdateForm();
  return (
    <Box
      component="form"
      onSubmit={id ? handleSave : handleSubmitA}
      sx={{ padding: 5 }}
      noValidate
    >
      <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }}>
        {id ? `Edit Form` : `Add Form`}
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
            value={inputData?.heading}
            onChange={handleChange}
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
            value={inputData?.content}
            onChange={handleChange}
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
            value={inputData?.paraDate}
            type="date"
            onChange={handleChange}
            fullWidth
            size="small"
            variant="outlined"
            required
          />
          {errors.paraDate && <p className="error danger">{errors.paraDate}</p>}
        </Grid>

        <Grid item xs={12} lg={2} md={2} sm={2}>
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
        <Grid item xs={12} lg={4} md={10} sm={10}>
          <TextField
            id="paraName"
            name="paraName"
            label="Author"
            value={inputData?.paraName}
            onChange={handleChange}
            fullWidth
            size="small"
            variant="outlined"
            required
          />
          {errors.paraName && <p className="error danger">{errors.paraName}</p>}
        </Grid>
        <Grid item xs={12} lg={2} md={2} sm={2}>
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
        <Grid item xs={12} lg={4} md={10} sm={10}>
          {inputData.image ? (
            <>
              <img
                src={inputData?.image}
                alt="Selected Preview"
                style={{ width: "60%", marginTop: "10px" }}
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

        <Grid item xs={12} md={12} sm={12}>
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
        {/* <Grid item xs={12} sm={5} /> */}
      </Grid>
    </Box>
  );
};

export default Blogform;
