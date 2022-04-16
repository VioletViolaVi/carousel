document.addEventListener("DOMContentLoaded", function () {
  // captions & links for images
  const allImageInfo = [
    {
      id: 1,
      imgLink: "http://127.0.0.1:5555/images/pool.avif",
      caption: "Chill by the pool with orange cushions",
    },

    {
      id: 2,
      imgLink: "http://127.0.0.1:5555/images/umbrellas.avif",
      caption: "Home away from home",
    },

    {
      id: 3,
      imgLink: "http://127.0.0.1:5555/images/palms.avif",
      caption: "Tropical paradise with cloudy skies",
    },
  ];

  const changeLeftImage = () => {
    // get left arrow
    const leftArrow = document.getElementById("left");

    // click function for left arrow
    leftArrow.addEventListener("click", function () {
      // toggles images
      if (document.getElementById("imageId").src === allImageInfo[0].imgLink) {
        document.getElementById("imageId").src = allImageInfo[2].imgLink;
        document.getElementById("imgText").innerHTML = allImageInfo[2].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[2].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[1].imgLink;
        document.getElementById("imgText").innerHTML = allImageInfo[1].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[1].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[0].imgLink;
        document.getElementById("imgText").innerHTML = allImageInfo[0].caption;
      }
    });
  };
  changeLeftImage();

  const changeRightImage = () => {
    // get right arrow
    const rightArrow = document.getElementById("right");

    // click function for right arrow
    rightArrow.addEventListener("click", function () {
      // toggles images
      if (document.getElementById("imageId").src === allImageInfo[0].imgLink) {
        document.getElementById("imageId").src = allImageInfo[1].imgLink;
        document.getElementById("imgText").innerHTML = allImageInfo[1].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[1].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[2].imgLink;
        document.getElementById("imgText").innerHTML = allImageInfo[2].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[2].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[0].imgLink;
        document.getElementById("imgText").innerHTML = allImageInfo[0].caption;
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
