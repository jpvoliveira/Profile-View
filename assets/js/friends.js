window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const item = urlParams.get('id');

    const itemTitle = document.getElementById('item-title');
    const itemDescription = document.getElementById('item-description');
    const itemDate = document.getElementById('item-date');
    const itemLang = document.getElementById('item-lang');
    const itemEstrelas = document.getElementById('item-estrelas');
    const itemPessoas = document.getElementById('item-pessoas');
    const itemLink = document.getElementById('item-link');
    const itemTopics = document.getElementById('item-topics');

    fetch('../db/dados.json')
        .then(response => response.json())
        .then(data => {
            const project = data.repositorios.filter(project => project.id === item)[0];
            itemTitle.innerText = project.name;
            itemDescription.innerText = project.descricao;
            itemDate.innerText = project.data;
            itemLang.innerText = project.linguagens;
            itemEstrelas.innerText = project.estrelas;
            itemPessoas.innerText = project.pessoas;
            itemLink.innerText = project.link;
            project.topicos.forEach(topico => {
                const divTopico = document.createElement('div');
                divTopico.classList.add('topicos_importantes', 'bg-primary', 'd-inline-block', 'py-1', 'px-3');
                divTopico.textContent = topico;
                itemTopics.appendChild(divTopico);
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON: ', error));
};