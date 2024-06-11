import {FriendService} from "../../service/friendService.js";

const friendService = new FriendService();

async function setupFriendSection() {
    const friends = await friendService.getFriends();

    friends.forEach(friend => {
        createFriendComponent(friend)
    });
}

function createFriendComponent(friend) {
    const friendsSection = document.getElementById('friends_section');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('text-center', 'col-md-3', 'col-sm-6');

    const link = document.createElement('a');
    link.href = friend.linkedin_url;
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = friend.image_url;

    img.classList.add('rounded');
    img.alt = friend.name;
    img.style.height = '200px';
    img.style.width = '200px';

    link.appendChild(img);

    const paragraph = document.createElement('p');
    paragraph.classList.add('text-primary');

    const strongText = document.createElement('strong');
    strongText.textContent = friend.name;

    paragraph.appendChild(strongText);

    containerDiv.appendChild(link);
    containerDiv.appendChild(paragraph);

    friendsSection.appendChild(containerDiv);
}

window.addEventListener("load", setupFriendSection);