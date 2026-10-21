import { useLocation } from "react-router";
import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";
import { useEffect } from "react";

function TelaCadastroAdm () {
    const {mensagem, nome,  email, senha, setNome, setEmail, setSenha, cadastrarAdm, alterarAdministrador}  = useAdm();

const location = useLocation();

const administrador = location.state?.administrador;

useEffect(() => {
if(administrador ){
setNome(administrador.nome);
setEmail(administrador.email);
setSenha(administrador.senha);
}    
else{
    setNome("");
    setEmail("");
    setSenha("");
}
}, [administrador] );

return (
    <>
    <MenuAdm/>
    <h1 >
        {
            administrador?"Tela Alteração de Administrador ": "Tela de Cadastro de Administrador"

        }
    </h1>
<main className="conteudoPrincipal">
</main>
<div id="divMensagem" role="alert">
       {mensagem} 
        </div>
        <form id="forCadAdm"  
        onSubmit={(evento)=> {
            administrador?alterarAdministrador(evento, administrador.email): cadastrarAdm(evento)
        }}>
 
 <div>
                <label htmlFor="txtNome">
                    Nome
                </label>
<br/>
                <input type="text" id="txtNome" required value={nome} onChange={(evento) => {setNome(evento.target.value)}}/>
            </div>
            <div>
                <label htmlFor="txtEmail">
                    E-mail
                </label>
                <br/>
            <input type="email" id="txtEmail" required
             value={email} onChange={(evento) => {setEmail(evento.target.value)}}/>
            </div>
            <div>
                <label htmlFor="txtSenha">
                Senha 
                </label>
                <br/>
            <input type="password" id="txtSenha" required 
            value={senha} onChange={(evento) => {setSenha(evento.target.value)}}/>
 </div>

 <div>
                <button type="submit">
                    {administrador?"Alterar":"Cadastrar"}
                </button>       
            </div>
        </form>

    </>
);
}

export default TelaCadastroAdm;
