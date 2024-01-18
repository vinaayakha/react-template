import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroller";
import Modal from "./modal";

function ImageGallery({ result, reachedEnd }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [endOfComponent, setEndOfComponent] = useState(false);

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
    default: 4,
    1200: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="image-gallery">
      <InfiniteScroll
        pageStart={0}
        loadMore={(e) => {
          console.log(e);
          // if(!this.state.isLoading) {
          //     reachedEnd(true);
          //   }
        }}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
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
      </InfiniteScroll>

      <Modal
        open={selectedImage !== null}
        setOpen={closeModal}
        title={
          selectedImage !== null ? `Preview ID: ${selectedImage.id}` : "Preview"
        }
      >
        {selectedImage && (
          <div className="image-parent flex overflow-scroll lg:overflow-hidden flex-col justify-center align-middle lg:flex-row">
            <div className="w-1/2 h-full object-contain p-1 m-1">
              <img
                src={selectedImage.largeImageURL}
                alt={selectedImage.tags}
                className="w-full h-full object-contain bg-indigo-50 rounded-lg"
              />
            </div>
            <div className="image-details w-2/5">
              <p className="py-2">
                Tags:{" "}
                <span className="flex flex-wrap">
                  {selectedImage.tags.split(",").map((item) => (
                    <>
                      <span className="px-3 mx-1 py-1 my-1 text-primaryColor rounded-lg bg-alert-info-bg cursor-pointer">
                        {item}
                      </span>
                    </>
                  ))}
                </span>
              </p>
              <p className="py-2">Views: {selectedImage.views}</p>
              <p className="py-2">Downloads: {selectedImage.downloads}</p>
              <p className="py-2">Likes: {selectedImage.likes}</p>
              <p className="py-2">Comments: {selectedImage.comments}</p>
              <div className="flex bg-gray-100 w-max p-1 m-1 rounded-lg">
                <div className="flex justify-center align-start flex-col text-black">
                  <p className="py-2">User: {selectedImage.user}</p>
                  <p className="py-2">User ID: {selectedImage.user_id}</p>
                </div>
                <img
                  src={selectedImage.userImageURL}
                  alt={selectedImage.user}
                  className="rounded-full w-16 h-16"
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
      {/* {selectedImage && (
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
              <div className="image-parent">
                <img
                  src={selectedImage.largeImageURL}
                  alt={selectedImage.tags}
                  className="fullImage"
                />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ImageGallery;
