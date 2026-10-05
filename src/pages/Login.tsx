import useLogin from "../hooks/useLogin";

function Login(){

const {    email, setEmail,
    senha, setSenha,
    mensagem, setMensagem,
    realizarLogin
} = useLogin();

    return(

<>
    <h1 className="destaque">
        Formulário de Login
    </h1>

    <main id="Conteudo Principal">
        <div id="divMensagem" role="alert">
            {mensagem}
        </div>
        <form id="formLogin" onSubmit={realizarLogin}>
            <div>
                <label htmlFor="txtEmail">
                    E-mail
                </label>
                <br/>
            <input type="email" id="txtEmail" required
             value={email}
             onChange={(evento)  => {setEmail(evento.target.value)}}/> 
            </div>
            <div>
                <label htmlFor="txtSenha">
                Senha 
                </label>
                <br/>
            <input type="password" id="txtSenha" required
 
 value={senha}
            onChange={(evento) => {setSenha(evento.target.value)}}/>
            </div>

 <div>
                <button type="submit">
                    Enviar
                </button>       
            </div>
        </form>

    </main>
    
    </>

    );
}

export default Login;