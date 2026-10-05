import MenuAdm from "../components/MenuAdm";

function TelaCadastroAdm () {
return (
    <>
    <MenuAdm/>
    <h1 >
Tela de Cadastro de Administrador
    </h1>
<main className="conteudoPrincipal">
</main>
<div id="divMensagem" role="alert">
        </div>
        <form id="formLogin">
            <div>
                <label htmlFor="txtNome">
                    Nome
                </label>
<br/>
                <input type="text" id="txtNome" required/>
            </div>
            <div>
                <label htmlFor="txtEmail">
                    E-mail
                </label>
                <br/>
            <input type="email" id="txtEmail" required/>
            </div>
            <div>
                <label htmlFor="txtSenha">
                Senha 
                </label>
                <br/>
            <input type="password" id="txtSenha" required/>
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
