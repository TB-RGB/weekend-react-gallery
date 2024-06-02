import GalleryList from "../GalleryList/GalleryList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <div data-testid="app">
      <Box>
        <Typography variant="h2" align="center" sx={{color: 'white'}}>
          React Photo Gallery
        </Typography>
      </Box>

      <GalleryList />
    </div>
  );
}

export default App;
