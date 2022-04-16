document.addEventListener("DOMContentLoaded", function () {
  // captions & links for images
  const allImageInfo = [
    {
      id: 0,
      imgLink: "http://127.0.0.1:5555/images/pool.avif",
      caption: "Chill by the pool with orange cushions",
      altText: "Hotel with pool & orange cushions.",
    },

    {
      id: 1,
      imgLink: "http://127.0.0.1:5555/images/night.avif",
      caption: "Home away from home at night",
      altText: "Hotel at night",
    },

    {
      id: 2,
      imgLink: "http://127.0.0.1:5555/images/palms.avif",
      caption: "Tropical paradise with cloudy skies",
      altText: "Hotel tropical paradise with cloudy skies",
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
        document.getElementById("imageId").alt = allImageInfo[2].altText;
        document.getElementById("imgText").innerHTML = allImageInfo[2].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[2].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[1].imgLink;
        document.getElementById("imageId").alt = allImageInfo[1].altText;
        document.getElementById("imgText").innerHTML = allImageInfo[1].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[1].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[0].imgLink;
        document.getElementById("imageId").alt = allImageInfo[0].altText;
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
        document.getElementById("imageId").alt = allImageInfo[1].altText;
        document.getElementById("imgText").innerHTML = allImageInfo[1].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[1].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[2].imgLink;
        document.getElementById("imageId").alt = allImageInfo[2].altText;
        document.getElementById("imgText").innerHTML = allImageInfo[2].caption;
      } else if (
        document.getElementById("imageId").src === allImageInfo[2].imgLink
      ) {
        document.getElementById("imageId").src = allImageInfo[0].imgLink;
        document.getElementById("imageId").alt = allImageInfo[0].altText;
        document.getElementById("imgText").innerHTML = allImageInfo[0].caption;
      }
    });
  };
  changeRightImage();

  /* 
    TO DO LIST:
    - make responsive
  */
});
