import { useState } from "react";
import type Administrador from "../interfaces/Administrador";
import { useNavigate } from "react-router";

export function useAdm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

const navigate = useNavigate();
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

function alterarAdministrador(
    evento: React.SubmitEvent<HTMLFormElement>, 
emailOriginal: string) {
evento.preventDefault();

const listaAdministradores = buscarAdministradores();

const novaLista = listaAdministradores.map(
    (administrador) => {
if(administrador.email == emailOriginal                         ){
return {
    nome, email, senha
};
}
return(administrador)
}
);
localStorage.setItem("listaAdministradores", JSON.stringify(novaLista));

setMensagem("Administrador Alterado com sucesso");
setTimeout(() => {
navigate("/telaListaAdm"); 
}, 1000);
}

return({
    nome, setNome,
    email, setEmail,
    senha, setSenha,
 mensagem, setMensagem,
 cadastrarAdm, 
 buscarAdministradores,
 excluirAdministrador,
 alterarAdministrador
})
 }

