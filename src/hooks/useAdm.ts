import { useState } from "react";

export function useAdm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");


function cadastrarAdm(evento: React.SubmitEvent<HTMLFormElement>){
evento.preventDefault();
const administrador = {nome, email, senha};
const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
listaAdministradores.push(administrador);
localStorage.setItem("listaAdministradores", JSON.stringify(listaAdministradores));
setMensagem("Cadastro realizado com sucesso");
}

function buscarAdministradores(){
    const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores")|| "[]");
    return listaAdministradores
}

return({
    nome, setNome,
    email, setEmail,
    senha, setSenha,
 mensagem, setMensagem,
 cadastrarAdm, 
 buscarAdministradores
})
 }

