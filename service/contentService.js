export class ContentService {

    constructor(){
        this.urlBase = `https://json-server-profile-view.vercel.app/content`;
    }

    async getContents() {
        const resposta = await fetch(this.urlBase);
        return resposta.json();
    }
}