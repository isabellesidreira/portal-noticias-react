import { useState } from "react";
import type Administrador from "../interfaces/Administrador";

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
setTimeout(() => {
    limparCampos();

}, 1000);
}

function limparCampos () {
    setNome("");
    setEmail("");
    setSenha("");
    setMensagem("");
    }

function buscarAdministradores(): Administrador[] {
    const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores")|| "[]");
    return listaAdministradores
}

function excluirAdministrador(email: string){
const listaAdministradores = buscarAdministradores();
const novaLista = listaAdministradores.filter(
    (administrador) => 
administrador.email != email
    
);
localStorage.setItem("listaAdministradores", JSON.stringify(novaLista));
}

return({
    nome, setNome,
    email, setEmail,
    senha, setSenha,
 mensagem, setMensagem,
 cadastrarAdm, 
 buscarAdministradores,
 excluirAdministrador
})
 }

