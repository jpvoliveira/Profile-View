import {RepositoryService} from "../../service/repositoryService.js";

const repositoryService = new RepositoryService();

async function setupRepositoryPage() {
    const repoName = getNameRepository();
    const repo = await repositoryService.getRepository(repoName);
    
    createRepositoryDetailComponent(repo)
}

function createRepositoryDetailComponent(repo) {
    const itemTitle = document.getElementById('item-title');
    itemTitle.innerText = repo.name;
    const itemDescription = document.getElementById('item-description');
    itemDescription.innerText = repo.description;
    const itemDate = document.getElementById('item-date');
    itemDate.innerText = dataFormater(repo.created_at);
    const itemLang = document.getElementById('item-lang');
    itemLang.innerText = repo.language;
    const itemEstrelas = document.getElementById('item-estrelas');
    itemEstrelas.innerText = repo.stargazers_count;
    const itemPessoas = document.getElementById('item-pessoas');
    itemPessoas.innerText = repo.network_count;
    const itemLink = document.getElementById('item-link');
    itemLink.innerText = repo.html_url;
    const itemTopics = document.getElementById('item-topics');
    repo.topics.forEach(topico => {
        const divTopico = document.createElement('div');
        divTopico.classList.add('topicos_importantes', 'bg-primary', 'd-inline-block', 'py-1', 'px-3');
        divTopico.textContent = topico;
        itemTopics.appendChild(divTopico);
    });
}

function getNameRepository() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('name');
}

function dataFormater(dataISO) {
    const data = new Date(dataISO);

    const dia = String(data.getUTCDate()).padStart(2, '0');
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = data.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
}

window.addEventListener("load", setupRepositoryPage);