import { closeModal, displayModal } from "/scripts/utils/utils.js";

function displayLightbox(index, mediasSorted, firstName) {
  const lightboxClose = document.querySelector(".lightbox-close");
  const rightArrow = document.querySelector("#right-arrow");
  const leftArrow = document.querySelector("#left-arrow");

  displayModal("lightbox");

  displayLightboxTemplate();

  rightArrow.addEventListener("click", () => {
    if (index === mediasSorted.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    displayLightboxTemplate();
  });

  leftArrow.addEventListener("click", () => {
    if (index === 0) {
      index = mediasSorted.length - 1;
    } else {
      index -= 1;
    }
    displayLightboxTemplate();
  });

  lightboxClose.addEventListener("click", () => {
    closeModal("lightbox");
  });

  lightboxClose.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      closeModal("lightbox");
    }
  })

  addEventListener("keydown", (event) => {
    if (event.key === "Escape" ) {
      closeModal("lightbox");
    }

    if (event.key === "ArrowRight") {
      if (index === mediasSorted.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      displayLightboxTemplate();
    }

    if (event.key === "ArrowLeft") {
      if (index === 0) {
        index = mediasSorted.length - 1;
      } else {
        index -= 1;
      }
      displayLightboxTemplate();
    }
  });

  function displayLightboxTemplate() {
    const mediaContent = document.querySelector(".media-content");

    const { image, video, title } = mediasSorted[index] ?? {};

    const mediaLink = `assets/photographers/${firstName}/${
      image ?? video ?? ""
    }`;

    const mediaElement = image
      ? `<img src="${mediaLink}" alt="${title}">`
      : `<video src="${mediaLink}" autoplay loop></video>`;

    mediaContent.innerHTML = `
          <div class="lightbox-picture">
            ${mediaElement}
            <div class="lightbox-infos">
              <h3>${title}</h3>
            </div>
          </div>
      `;
  }

  return {
    displayLightboxTemplate,
  };
}

export function lightBox(index, mediasSorted, firstName) {
  displayLightbox(index, mediasSorted, firstName);
}
