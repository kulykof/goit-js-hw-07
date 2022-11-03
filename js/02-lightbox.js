import { galleryItems } from "./gallery-items.js";

const refs = {
    galleryParent: document.querySelector(".gallery"),
};

makeGalleryMarkup(galleryItems, refs.galleryParent);

function makeGalleryMarkup(gallery, parent) {
    parent.innerHTML = gallery
        .map((img) => {
            return `<a class="gallery__item" href='${img.original}'>
                    <img class="gallery__image" src='${img.preview}' alt='${img.description}' />
                    </a>`;
        })
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionType: "alt",
    captionsData: "alt",
    captionDelay: 250,
});