export class RepositoryService {

    constructor(){
        this.user = "jpvoliveira";
        this.urlBase = `https://api.github.com/repos/${this.user}`;
    }

    async getRepository(repoName) {
        const resposta = await fetch(`${this.urlBase}/${repoName}`);
        return resposta.json();
    }

    async getRepositoryLanguages(repoName) {
        const resposta = await fetch(`${this.urlBase}/${repoName}/languages`);
        return resposta.json();
    }

}