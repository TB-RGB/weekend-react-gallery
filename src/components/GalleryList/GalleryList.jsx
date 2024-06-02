import { useState, useEffect } from "react";
import axios from "axios";
import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryItem from "../GalleryItem/GalleryItem";
import { ImageList, ImageListItem, ListSubheader } from "@mui/material";

const GalleryList = () => {
  const [picGallery, setPicGallery] = useState([]);

  useEffect(() => {
    fetchPics();
  }, []);

  const fetchPics = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        setPicGallery(response.data);
        console.log(picGallery);
      })
      .catch((err) => {
        console.error("Error in GET for gallery", err);
      });
  };

  const likePic = (picId) => {
    axios
      .put(`/api/gallery/like/${picId}`)
      .then((response) => {
        fetchPics();
      })
      .catch((err) => {
        console.error("Error in PUT for likes", err);
      });
  };

  const removePic = (picId) => {
    axios
      .delete(`/api/gallery/remove/${picId}`)
      .then((response) => {
        fetchPics();
      })
      .catch((err) => {
        console.err("Error in removing pic", err);
      });
  };

  return (
    <>
      <GalleryForm get={fetchPics} />
      <ImageList data-testid="galleryList"  sx={{ maxWidth: 'md', margin: 'auto'}}>
        {/* <ImageListItem key="Subheader" cols={2} sx={{backgroundColor: "black"}}>
            <ListSubheader component="div">Gallery</ListSubheader>
        </ImageListItem> */}
        {picGallery.map((pic) => (
          <div key={pic.id}>
            <GalleryItem pic={pic} likePic={likePic} removePic={removePic} />
          </div>
        ))}
      </ImageList>
    </>
  );
};

export default GalleryList;
