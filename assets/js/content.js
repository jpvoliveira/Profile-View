import {ContentService} from "../../service/contentService.js";

const contentService = new ContentService();

async function setupContentSection() {
    const contents = await contentService.getContents();

    contents.forEach(content => {
        createContentComponent(content)
    });
}

function createContentComponent(content) {
}

window.addEventListener("load", setupContentSection);