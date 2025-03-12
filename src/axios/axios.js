import axios from 'axios'

const api = axios.create({
    baseURL:"http://10.89.240.96:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("login", user),
    postCadastro:(user)=>api.post("user", user),
    postOrganizador:(user)=>api.post("organizador", user),
    postEvento:(user)=>api.post("evento", user),
    postIngresso:(user)=>api.post("ingresso", user)
}

export default sheets;