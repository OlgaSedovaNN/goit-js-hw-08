import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery')


function createImagesFromGallery(array) {
    return array
        .map(({ preview, original, description }) => { 
            return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
            `
        }).join('')
    
}
const images = createImagesFromGallery(galleryItems)
galleryConteiner.insertAdjacentHTML('beforeend', images)

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
  
});
gallery.on('show.simplelightbox', function (evt) {
  evt.preventDefault()
  
});
