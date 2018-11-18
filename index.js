import image1 from '/images/IMG_9833.jpg';
import image2 from '/images/IMG_9845.jpg';
import image3 from '/images/IMG_9850.jpg';
import image4 from '/images/IMG_9898.jpg';
import {Image} from '/image.js';

(function(){

  const imagesContainer = document.querySelector('#images');
  imagesContainer.innerHTML = "";
  const myPictures = [image1, image2, image3, image4];

  const images = myPictures.map(image => new Image(image));
  images.forEach(image => {
    image.show();
  });

 const showFavorite = document.querySelector('#show-favourites');

 showFavorite.addEventListener('click', () => {
  images
    .filter(image => !image.isFavorite())
    .forEach(image => image.hide())
 });

const fileInput = document.querySelector('#file-input');

fileInput.onchange = () => {
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {

            const image = new Image(e.target.result);
            images.push(image);
            image.show();
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
};
})();
