import {ContentService} from "../../service/contentService.js";

const contentService = new ContentService();

async function setupContentSection() {
    const contents = await contentService.getContents();
    let contContent = 0;

    if (contents.length > 0) {
        contents.forEach(content => {
            createContentComponent(content, contContent)
            contContent++
        });
    }
}

function createContentComponent(content, contContent) {
    const carouselItem = document.createElement('div');

    carouselItem.classList.add('carousel-item');
    carouselItem.style.height = '400px';

    if (contContent === 0) {
        carouselItem.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = content.image_url;
    img.alt = content.title;
    img.style.height = '400px';
    img.style.width = '100%';

    const captionDiv = document.createElement('div');
    captionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');

    const link = document.createElement('a');
    link.href = content.content_url;
    link.target = '_blank';

    const title = document.createElement('h4');
    title.textContent = content.title;

    link.appendChild(title);
    captionDiv.appendChild(link);
    carouselItem.appendChild(img);
    carouselItem.appendChild(captionDiv);

    document.querySelector('.carousel-inner').appendChild(carouselItem);
}

window.addEventListener("load", setupContentSection);