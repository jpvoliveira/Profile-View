fetch('../db/dados.json')
  .then(response => response.json())
  .then(data => {
    const nome = document.getElementById('user_name');
    nome.innerText = data.name
    const imagem = document.getElementById('user_imagem');
    imagem.src = data.imagem
    const informacoes = document.getElementById('user_informacoes');
    informacoes.innerText = data.informacoes
    const localizacao = document.getElementById('user_localizacao');
    localizacao.innerText = data.localizacao
    const site = document.getElementById('user_site');
    site.innerText = data.site
    const conexoes = document.getElementById('user_conexoes');
    conexoes.innerText = data.conexoes

    const itemTopics = document.getElementById('repositorios_destaque');

    let numberRepos = 0;
    data.repositorios.forEach(repo => {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card_repo", "col-md-3", "col-sm-6");
        cardDiv.onclick = function() {
            window.location.href = 'repo.html?id='+repo.id;
        };

        var titleP = document.createElement("p");
        var titlePara = document.createElement("strong");
        var titleText = document.createTextNode(repo.name);
        titlePara.appendChild(titleText);
        titleP.appendChild(titlePara);
        cardDiv.appendChild(titleP);

        var descriptionPara = document.createElement("p");
        var descriptionText = document.createTextNode(repo.sinopse);
        descriptionPara.appendChild(descriptionText);
        cardDiv.appendChild(descriptionPara);

        var statsSpan = document.createElement("span");
        statsSpan.classList.add("d-flex", "gap-4");
        statsSpan.style.fontSize = "28px";
        cardDiv.appendChild(statsSpan);

        var starSpan = document.createElement("span");
        var starText = document.createTextNode(repo.estrelas);
        var starIcon = document.createElement("i");
        starIcon.classList.add("bi", "bi-star-fill");
        starSpan.appendChild(starIcon);
        starSpan.appendChild(starText);
        statsSpan.appendChild(starSpan);

        var personSpan = document.createElement("span");
        var personText = document.createTextNode(repo.pessoas);
        var personIcon = document.createElement("i");
        personIcon.classList.add("bi", "bi-person-fill", "text-primary");
        personSpan.appendChild(personIcon);
        personSpan.appendChild(personText);
        statsSpan.appendChild(personSpan);

        itemTopics.appendChild(cardDiv);
        numberRepos++
    });
    const numero_repos = document.getElementById('user_numero_repos');
    numero_repos.innerText = numberRepos;
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON: ', error));