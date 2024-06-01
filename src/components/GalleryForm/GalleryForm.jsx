import { useState } from "react";
import axios from "axios";

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
      <form onSubmit={handleSubmit}>
        <input
          value={newUrl}
          onChange={(event) => setNewUrl(event.target.value)}
          placeholder="url"
        />
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder="Title"
        />
        <input
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
          placeholder="Description"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default GalleryForm;
