document.addEventListener("DOMContentLoaded", function () {
  // changes images
  const changeImage = () => {
    // left arrow
    const leftArrow = document.getElementById("left");

    // clicking left arrow
    leftArrow.addEventListener("click", function () {

      // image src
      const srcImg = document.getElementById("image").src;

      // arr of images
      const allImagesSrc = [
        "images/pool.avif",
        "images/palms.avif",
        "images/umbrellas.avif",
      ];

      console.log("srcImg: ", srcImg);
      console.log("allImagesSrc[0]: ", allImagesSrc[0]);
      console.log("allImagesSrc[1]: ", allImagesSrc[1]);
      console.log("allImagesSrc[2]: ", allImagesSrc[2]);

      // loop through img arr
      for (let i = 0; i < allImagesSrc.length; i++) {
        if(srcImg === allImagesSrc[i]) {
          console.log("SAME!!!");
        }
      }
    });
  };
  changeImage();
});
