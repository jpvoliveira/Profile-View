export class FriendService {

    constructor(){
        this.urlBase = `https://json-server-profile-view.vercel.app/friends`;
    }

    async getFriends() {
        const resposta = await fetch(this.urlBase);
        return resposta.json();
    }
}