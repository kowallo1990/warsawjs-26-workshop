export class Image {
  constructor(imagePath, getImage) {
    this.imagePath = imagePath;
    this.getImage = getImage;
    this.newImage = document.createElement("img");
    this.newImage.setAttribute('src', this.imagePath);
    this.newImage.addEventListener('click', () => {
      if (this.newImage.classList[0] === 'image--favourite') {
        this.unmarkAsFavorite();
      } else {
        this.markAsFavorite();
      }
    })
  }
  show () {
    document.querySelector('#images').appendChild(this.newImage);
  }
  markAsFavorite () {
    this.newImage.classList.add('image--favourite');
  }
  unmarkAsFavorite () {
    this.newImage.classList.remove('image--favourite');
  }
  isFavorite () {
    if (this.newImage.classList.contains("image--favourite")) {
      return true;
    }
  }
  hide() {
    console.log(this.newImage);
    this.newImage.style.display = "none";
  }
}
