import { galleryItems } from "./gallery-items.js";

const refs = {
    galleryParent: document.querySelector(".gallery"),
};

refs.galleryParent.addEventListener("click", onModalOpen);

makeGalleryMarkup(galleryItems, refs.galleryParent);

function makeGalleryMarkup(gallery, parent) {
    const galleryMarkup = gallery
        .map((img) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href='${img.original}'>
            <img
                class="gallery__image"
                src='${img.preview}'
                data-source='${img.original}'
                alt='${img.description}'
            />
        </a></div>`;
        })
    .join("");

    parent.innerHTML = galleryMarkup;
}

function onModalOpen(e) {
    e.preventDefault();

    let libraryImgMarkup = null;

    if (e.target.classList.contains("gallery__image")) {
        e.target.src = e.target.dataset.source;
        libraryImgMarkup = e.target.parentNode.innerHTML;
    } else if (e.target.classList.contains("gallery__link")) {
        e.target.src = e.target.dataset.source;
        libraryImgMarkup = e.target.innerHTML;
    }

    if (libraryImgMarkup) {
        const instance = basicLightbox.create(libraryImgMarkup);

        instance.show();

    const onEscBtnModalClose = function (e) {
        if (e.code === "Escape") {
            document.removeEventListener("keydown", onEscBtnModalClose);
            instance.close();
        }
    };

        document.addEventListener("keydown", onEscBtnModalClose);
    }
}