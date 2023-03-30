import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Change code below this line


const imageGallery = document.querySelector('.gallery');
imageGallery.style.listStyle = "none";
console.log(imageGallery);


const galleryElements = galleryItems.map((item) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
            src= "${item.preview}" 
            data-sourse= "${item.original}" 
            alt="${item.description}"/>
            </a>
            </li>`).join("");

imageGallery.insertAdjacentHTML("beforeend", galleryElements);


const lightbox = new SimpleLightbox('.gallery a', { 
        captionType: "alt",
        captionsData: "alt",
        captionDelay: 400,
        animationSpeed: 400,
    });
    
