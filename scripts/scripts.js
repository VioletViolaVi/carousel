document.addEventListener("DOMContentLoaded", function () {

  const changeImage = () => {

    const allImagesArr = [
      "images/pool.avif", // 0
      "images/palms.avif", // 1
      "images/umbrellas.avif", // 2
    ];

    const leftArrow = document.getElementById("left");

    leftArrow.addEventListener("click", function () {
      let imgSrc = document.getElementById("imageId").src;
      imgSrc = allImagesArr[0];

      if (imgSrc === "images/pool.avif") {
        imgSrc = allImagesArr[0+2];
        console.log("same");
      } else if (imgSrc === "images/palms.avif") {
        imgSrc = "images/umbrellas.avif";
      } else if (imgSrc === "images/umbrellas.avif") {
        imgSrc = "images/pool.avif";
      }

      console.log("imgSrc: ", imgSrc);
    });

  };
  changeImage();
});

/* 
  - change index (allImagesArr[0]) using this order:  [1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2 ]
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
*/
