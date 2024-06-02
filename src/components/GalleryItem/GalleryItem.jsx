import { useState } from "react";
import { ImageListItem, Tooltip } from "@mui/material";
import { ImageListItemBar } from "@mui/material";
import {IconButton} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InfoIcon from '@mui/icons-material/Info';

const GalleryItem = ({ pic, likePic, removePic }) => {
  const [beenClicked, setBeenClicked] = useState(true);

  const itsClicked = () => {
    setBeenClicked(!beenClicked);
    console.log(beenClicked);
  };

  return (
    // <div data-testid="galleryItem">
    //     <div>
    //         Title: {pic.title}
    //     </div>
    //   <div data-testid="toggle" onClick={() => itsClicked()}>
    //     {beenClicked ? (
    //       <img src={pic.url} alt={pic.title} />
    //     ) : (
    //       <span>{pic.description}</span>
    //     )}
    //   </div>
    //   <button data-testid="like" onClick={() => likePic(pic.id)}>
    //     Like ❤️
    //   </button>
    //   <button onClick={()=> removePic(pic.id)}>Remove</button>
    //   <p>{pic.likes} people love this!</p>
    // </div>

    <ImageListItem key={pic.id} >
      <img src={pic.url} alt={pic.title} />
      <ImageListItemBar
        title={pic.title}
        subtitle={<span>Likes: {pic.likes}</span>}
        // position="below"
        actionIcon={<>
            <IconButton
                sx={{color: 'rgba(214, 188, 32, 1)'}}
                onClick={()=> likePic(pic.id)}
            >
                <ThumbUpIcon />
            </IconButton>
            <Tooltip title={pic.description} >
            <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            >
                <InfoIcon />
            </IconButton>
            </Tooltip>
            </>
        }
      />
    </ImageListItem>
  );
};

export default GalleryItem;
