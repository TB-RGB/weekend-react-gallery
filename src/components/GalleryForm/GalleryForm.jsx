import { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const GalleryForm = ({ get }) => {
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const sendPic = () => {
    axios
      .post("/api/gallery", {
        url: newUrl,
        title: newTitle,
        description: newDescription,
      })
      .then((response) => {
        get();
      })
      .catch((err) => {
        console.error("Error in POST for new pic", err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendPic();
    setNewUrl("");
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: "md", margin: "auto", py: 1 }}
      >
        <TextField
          required
          id="filled-required"
          value={newUrl}
          onChange={(event) => setNewUrl(event.target.value)}
          placeholder="url"
          sx={{px : 6, py: 1}}
          color="primary"
          variant="filled"
        />
        <TextField
          required
          id="outlined-required"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder="Title"
          sx={{px : 6, py: 1}}
          variant="filled"
        />
        <TextField
          required
          id="outlined-required"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
          placeholder="Description"
          sx={{px : 6, py: 1}}
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<CameraAltRoundedIcon />}
          sx={{ margin: "auto" }}
          fullWidth= {true}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default GalleryForm;
