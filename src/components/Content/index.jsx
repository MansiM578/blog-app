import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Title from "pages/Title";
import useContent from "components/Content/useContent";

function Content() {
  const [storedData, handleDelete, handleEdit] = useContent();
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
