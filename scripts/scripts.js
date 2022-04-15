document.addEventListener("DOMContentLoaded", function () {
  const changeImage = () => {
    const allImagesArr = [
      "images/pool.avif", // 0
      "images/palms.avif", // 1
      "images/umbrellas.avif", // 2
    ];

    const leftArrow = document.getElementById("left");

    leftArrow.addEventListener("click", function () {
      // document.getElementById("imageId").src = allImagesArr[0];

      if (document.getElementById("imageId").src === "http://127.0.0.1:5555/images/pool.avif") {
        document.getElementById("imageId").src = allImagesArr[2];
      } else if (
        document.getElementById("imageId").src === "http://127.0.0.1:5555/images/umbrellas.avif"
      ) {
        document.getElementById("imageId").src = allImagesArr[1];
      } else if (
        document.getElementById("imageId").src === "http://127.0.0.1:5555/images/palms.avif"
      ) {
        document.getElementById("imageId").src = allImagesArr[0];
      } else{
        console.log("ERROR!!!!");
      }

      
      console.log(document.getElementById("imageId").src);
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
