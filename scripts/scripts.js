document.addEventListener("DOMContentLoaded", function () {
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
    - make separate files for each portion & import
    - make responsive
  */
});
