import {UserService} from "../../service/userService.js";

const userService = new UserService();

async function setupUserPage() {
    const user = await userService.getUser();
    createProfileComponent(user)
    
    const repositories = await userService.getUserRepositories();
    repositories.forEach(repo => {
        if (repo.description){
            createRepositoryComponent(repo)
        }
    });
    
}

function createProfileComponent(user){
    const nome = document.getElementById('user_name');
    nome.innerText = user.name
    const imagem = document.getElementById('user_imagem');
    imagem.src = user.avatar_url;
    const informacoes = document.getElementById('user_informacoes');
    informacoes.innerText = user.bio;
    const localizacao = document.getElementById('user_localizacao');
    localizacao.innerText = user.location;
    const site = document.getElementById('user_site');
    site.innerText = user.html_url
    const conexoes = document.getElementById('user_conexoes');
    conexoes.innerText = user.followers
    const numero_repos = document.getElementById('user_numero_repos');
    numero_repos.innerText = user.public_repos;
}

function createRepositoryComponent(repo){
    const itemTopics = document.getElementById('repositorios_destaque');
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card_repo", "col-md-3", "col-sm-6");
    cardDiv.onclick = function() {
        window.location.href = 'repo.html?name='+repo.name;
    };

    var titleP = document.createElement("p");
    var titlePara = document.createElement("strong");
    var titleText = document.createTextNode(repo.name);
    titlePara.appendChild(titleText);
    titleP.appendChild(titlePara);
    cardDiv.appendChild(titleP);

    var descriptionPara = document.createElement("p");
    var descriptionText = document.createTextNode(repo.description);
    descriptionPara.appendChild(descriptionText);
    cardDiv.appendChild(descriptionPara);

    var statsSpan = document.createElement("span");
    statsSpan.classList.add("d-flex", "gap-4");
    statsSpan.style.fontSize = "28px";
    cardDiv.appendChild(statsSpan);

    var starSpan = document.createElement("span");
    var starText = document.createTextNode(repo.stargazers_count);
    var starIcon = document.createElement("i");
    starIcon.classList.add("bi", "bi-star-fill");
    starSpan.appendChild(starIcon);
    starSpan.appendChild(starText);
    statsSpan.appendChild(starSpan);

    var personSpan = document.createElement("span");
    var personText = document.createTextNode(repo.forks_count);
    var personIcon = document.createElement("i");
    personIcon.classList.add("bi", "bi-person-fill", "text-primary");
    personSpan.appendChild(personIcon);
    personSpan.appendChild(personText);
    statsSpan.appendChild(personSpan);

    itemTopics.appendChild(cardDiv);
}

window.addEventListener("load", setupUserPage);