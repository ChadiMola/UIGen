import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Container } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ImgSlider from "./ImgSlider";
import Loader from "./Loader";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function GeImg() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data;
    console.log(response.data.data);
    setData(urlData);
    setLoading(false);
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{marginY:'50px'}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid md={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <TextField
                id="outlined-multiline-static"
                label="Prompts"
                multiline
                rows={2}
                defaultValue=""
                onChange={(e) => setUserPrompt(`icon of ${e.target.value}`)}
              />
            </FormControl>
          </Grid>
          <Grid md={3}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Resloution</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Resloution"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <MenuItem value="256x256">256x256</MenuItem>
                <MenuItem value="512x512">512x512</MenuItem>
                <MenuItem value="1024x1024">1024x1024</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Variations</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Variations"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid md={2} >
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => generateImage()}
            >
              Generate
            </Button>
          </Grid>
          
          {loading ? <Grid md={4} sx={{marginTop:'70px'}}><Loader /> </Grid>: data && <ImgSlider data={data} />}
          
        </Grid>
      </Container>
    </div>
  );
}
export default GeImg;
