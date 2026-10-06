import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";

function TelaCadastroAdm () {
    const {mensagem, nome,  email, senha, setNome, setEmail, setSenha, cadastrarAdm}  = useAdm();
return (
    <>
    <MenuAdm/>
    <h1 >
Tela de Cadastro de Administrador
    </h1>
<main className="conteudoPrincipal">
</main>
<div id="divMensagem" role="alert">
       {mensagem} 
        </div>
        <form id="forCadAdm" onSubmit={cadastrarAdm}>
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
                    Enviar
                </button>       
            </div>
        </form>

    </>
);
}

export default TelaCadastroAdm;
