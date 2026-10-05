import { useState } from "react";
import { useNavigate } from "react-router";

function useLogin () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] =  useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();
    function realizarLogin (evento:any) {
        evento.preventDefault();
        
        if(email == "adm@gmail.com" && senha == "123456") {
setMensagem("Login realizado com sucesso!");
localStorage.setItem("usuarioLogado", "sim");
setTimeout(() => {
    navigate("/adm");
}, 1000);
        }

        else {
            setMensagem("E-mail ou Senha incorretos");
        }

    }

function realizarLogout() {
    localStorage.removeItem("usuarioLogado");
}

    return (
{
    email, setEmail,
    senha, setSenha,
    mensagem, setMensagem,
    realizarLogin,
    realizarLogout
} 
    )
}

export default useLogin;