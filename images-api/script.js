apiUrl = "https://picsum.photos/v2/list";
const body = document.body;

async function getImagesList() {
  let fetchImages = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  let images = await fetchImages.json();
  console.log(images);
  return images;
}

async function displayImages() {
  const imageList = await getImagesList();
  imageList.slice(1, 10).forEach((image) => {
    let img = document.createElement("img");
    img.src = image.download_url;
    img.addEventListener("mouseover", () => {
      img.style.boxShadow = "inset 0 0 100px " + getRandomColor();
    });
    img.addEventListener("mouseout", () => {
      img.style.boxShadow = "none";
    });
    console.log(image.download_url);
    body.appendChild(img);
  });
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, ${Math.random() * 100}%, 50%`;
}

displayImages();
