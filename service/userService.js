export class UserService {

    constructor(){
        this.user = "jpvoliveira";
        this.urlBase = `https://api.github.com/users/${this.user}`;
    }

    async getUser() {
        const resposta = await fetch(this.urlBase);
        return resposta.json();
    }

    async getUserRepositories() {
        const resposta = await fetch(`${this.urlBase}/repos`);
        return resposta.json();
    }
}