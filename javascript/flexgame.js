function flexStart() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.justifyContent = "flex-start";
}
function flexEnd() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.justifyContent = "flex-end";
}
function flexCenter() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.justifyContent = "center";
}
function flexAround() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.justifyContent = "space-around";
}
function flexBetween() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.justifyContent = "space-between";
}
function flexNone() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.justifyContent = "";
}
function flexItemStart() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.alignItems = "flex-start";
}
function flexItemEnd() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.alignItems = "flex-end";
}
function flexItemCenter() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.alignItems = "center";
}
function flexItemsNone() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.alignItems = "";
}
function flexDirectionRow() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.flexDirection = "row";
}
function flexDirectionCol() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.flexDirection = "column";
}
function flexDirectionRowRev() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.flexDirection = "row-reverse";
}
function flexDirectionColRev() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.flexDirection = "column-reverse";
}
function flexDirectionNone() {
  const toMove = document.querySelector(".flexGame__box");
  toMove.style.flexDirection = "";
}
function flexItemsSelfStart() {
  const toMove = document.querySelector(".bule_cartoon");
  toMove.style.alignSelf = "flex-start";
}
function flexItemsSelfEnd() {
  const toMove = document.querySelector(".bule_cartoon");
  toMove.style.alignSelf = "flex-end";
}
function flexItemsSelfCenter() {
  const toMove = document.querySelector(".bule_cartoon");
  toMove.style.alignSelf = "center";
}
function flexItemsSelfNone() {
  const toMove = document.querySelector(".bule_cartoon");
  toMove.style.alignSelf = "";
}

   const accessKey = "U780EmX-2BQRpKNA7mAonlN2lW-1TQCdqo13NVBHEbM";
   const input = document.getElementById("inputt");
   const unsplashImages = document.getElementById("unsplashImages");

   function funSearch(){
    document.getElementsByClassName("placeholder_ty")[0].style.display = "none"; 
      fetch(
        `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&client_id=${accessKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          unsplashImages.innerHTML = ""; // Clear old images
          data.results.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo.urls.small;
            img.alt = photo.alt_description || "Unsplash Image";
            unsplashImages.appendChild(img);
          });
        });
   }
   input.addEventListener("change", function (e) {
    document.getElementsByClassName("placeholder_ty")[0].style.display="none"; 
    fetch(
       `https://api.unsplash.com/search/photos?query=${e.target.value}&per_page=30&client_id=${accessKey}`
     )
       .then((res) => res.json())
       .then((data) => {
         unsplashImages.innerHTML = ""; // Clear old images
         data.results.forEach((photo) => {
           const img = document.createElement("img");
           img.src = photo.urls.small;
           img.alt = photo.alt_description || "Unsplash Image";
           unsplashImages.appendChild(img);
         });
       });
   });

  //  grid game js start's

      const grid = document.getElementById("grid");
      let toggled = false;

      function changeGrid() {
        if (!toggled) {
          grid.style.gridTemplateColumns = "repeat(2, 1fr)";
          grid.style.gridTemplateRows = "repeat(4, 1fr)";
        } else {
          grid.style.gridTemplateColumns = "repeat(4, 1fr)";
          grid.style.gridTemplateRows = "repeat(2, 1fr)";
        }
        toggled = !toggled;
      }

      function setGap() {
        grid.style.gap = "20px";
      }

      function resetGrid() {
        grid.style.gridTemplateColumns = "repeat(4, 1fr)";
        grid.style.gridTemplateRows = "repeat(2, 1fr)";
        grid.style.justifyItems = "";
        grid.style.alignItems = "";
        grid.style.gap = "10px";
        toggled = false;
      }

      function changeJustifyItems(value) {
        grid.style.justifyItems = value;
      }

      function changeAlignItems(value) {
        grid.style.alignItems = value;
      }
  //  grid game js end's

  // calculator js start's
  function appendValue(val) {
    document.getElementById("display").value += val;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }

  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (err) {
      document.getElementById("display").value = "Error";
    }
  }

  // calculator js end's