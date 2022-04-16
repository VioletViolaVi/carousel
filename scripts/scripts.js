document.addEventListener("DOMContentLoaded", function () {
  // images in array
  const allImagesArr = [
    "http://127.0.0.1:5555/images/pool.avif", // index 0
    "http://127.0.0.1:5555/images/umbrellas.avif", // index 1
    "http://127.0.0.1:5555/images/palms.avif", // index 2
  ];

  const changeLeftImage = () => {
    // get left arrow id
    const leftArrow = document.getElementById("left");

    // click function for left arrow
    leftArrow.addEventListener("click", function () {
      // toggles among images
      if (document.getElementById("imageId").src === allImagesArr[0]) {
        document.getElementById("imageId").src = allImagesArr[2];
      } else if (document.getElementById("imageId").src === allImagesArr[2]) {
        document.getElementById("imageId").src = allImagesArr[1];
      } else if (document.getElementById("imageId").src === allImagesArr[1]) {
        document.getElementById("imageId").src = allImagesArr[0];
      }
    });
  };
  changeLeftImage();

  const changeRightImage = () => {
    // get right arrow id
    const rightArrow = document.getElementById("right");

    // click function for right arrow
    rightArrow.addEventListener("click", function () {
      // toggles among images
      if (document.getElementById("imageId").src === allImagesArr[0]) {
        document.getElementById("imageId").src = allImagesArr[1];
      } else if (document.getElementById("imageId").src === allImagesArr[1]) {
        document.getElementById("imageId").src = allImagesArr[2];
      } else if (document.getElementById("imageId").src === allImagesArr[2]) {
        document.getElementById("imageId").src = allImagesArr[0];
      }
    });
  };
  changeRightImage();

  /* 
    TO DO LIST:
    - toggle index (allImagesArr[0]) using this order:  [1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2 ]
    - from zero (LEFT arrow):
      - add 2
      - subtract 1
      - subtract 1
      - and so on....
    - from zero (RIGHT arrow):
      - add 1
      - add 1
      - subtract 2
      - and so on....
    - toggle alt:
      - alt="Hotel front with palm trees and a pool." (palms)
      - alt="Hotel in background with umbrellas and decks in front." (umbrella)
    - toggle text:
      - <figcaption>Peaceful green spaces</figcaption> (palms)
      - <figcaption>Relax under the shade</figcaption> (umbrella)
    - repeat function for right arrow
    - make responsive
  */
});
