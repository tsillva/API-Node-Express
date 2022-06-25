const express = require("express");

const app = express();

app.use(express.json());

let usuarios = [
    { nome: "José Silvia", idade: 34 },
    { nome: "João Souza", idade: 42 }
];



// query params
app.get("/usuarios", (request, response) => {
    response.json(usuarios);
});

app.get("/usuarios", (request, response) => {
    response.json(usuarios);
});

app.get("/usuarios/:id", (request, response) => {
    let id = request.params.id
    return response.json(usuarios[id])
});

app.post("/usuarios", (request, response) => {
    usuarios.push(request.body);
    response.json({ mensagem: "Funcionou a requisição Post" })
});

app.delete("/usuarios/:id",(request,response)=>{
    response.json({mensagem:"Funcionou a requisição Delete"})
    usuarios[id] = null
});

app.listen(3334, console.log("Servidor Rodando"));
