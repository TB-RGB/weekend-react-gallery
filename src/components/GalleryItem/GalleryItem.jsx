import { useState } from "react";

const GalleryItem = ({ pic, likePic, removePic }) => {
  const [beenClicked, setBeenClicked] = useState(true);

  const itsClicked = () => {
    setBeenClicked(!beenClicked);
    console.log(beenClicked);
  };

  return (
    <div data-testid="galleryItem">
        <div>
            Title: {pic.title}
        </div>
      <div data-testid="toggle" onClick={() => itsClicked()}>
        {beenClicked ? (
          <img src={pic.url} alt={pic.title} />
        ) : (
          <span>{pic.description}</span>
        )}
      </div>
      <button data-testid="like" onClick={() => likePic(pic.id)}>
        Like ❤️
      </button>
      <button onClick={()=> removePic(pic.id)}>Remove</button>
      <p>{pic.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;
