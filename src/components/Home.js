import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="UI Generator"
                  multiline
                  rows={4}
                />
              </div>
            </Box>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="success">
                Generate
              </Button>
              <Button variant="outlined" color="error">
                Back
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
