import React, { useState } from "react";
import Masonry from "react-masonry-css";

function ImageGallery({ result }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Check if result is empty, null, or undefined
  if (!result || result.length === 0) {
    return <p>No results found.</p>;
  }

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="image-gallery">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {result.map((image) => (
          <div
            key={image.id}
            className="masonry-item"
            onClick={() => openModal(image)}
          >
            <img src={image.largeImageURL} alt={image.tags} />
            <div className="overlay">
              <div className="tags">{image.tags}</div>
            </div>
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            closeModal();
          }}
        >
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
              <div className="image-details">
                <p>Tags: {selectedImage.tags}</p>
                <p>Views: {selectedImage.views}</p>
                <p>Downloads: {selectedImage.downloads}</p>
                <p>Likes: {selectedImage.likes}</p>
                <p>Comments: {selectedImage.comments}</p>
                <p>User ID: {selectedImage.user_id}</p>
                <p>User: {selectedImage.user}</p>
                <img
                  src={selectedImage.userImageURL}
                  alt={selectedImage.user}
                />
                {/* Add more details as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
