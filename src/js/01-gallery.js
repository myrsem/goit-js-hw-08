// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function createGallery(array) {
    return array.reduce(
        (acc, item) =>
            acc +
            `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
          </a>`,
        '',
    );
}

const result = createGallery(galleryItems);

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', result);

new SimpleLightbox('.gallery a', {captionsData: "alt",
captionDelay: 250,});

console.log(galleryItems);
