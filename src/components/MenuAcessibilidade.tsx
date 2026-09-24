import "../styles/menuAcessibilidade.css";

function MenuAcessibilidade() {
    return(
<>
    <div >

 <span aria-label="início da página">&nbsp;</span>

<a href="#conteudoPrincipal" className="skipLink" >
    Ir para conteúdo principal
</a>
<button id="btnAcessibilidade" aria-expanded="false">
    <img src="./acessibilidade.png" alt="Símbolo universal de acessibilidade, representado por uma figura humana estilizada dentro de um círculo." width="24"/>
    </button>
<div id="menuAcessibilidade" hidden>
<button id="btnAumentarFonte" aria-label="Aumentar Fonte">Aumentar Fonte</button>
<button id="btnDiminuirFonte" aria-label="diminuir fonte">Diminuir Fonte</button>
<button id="btnAlterarContraste" aria-label="alterar contraste">Alterar  Contraste</button>
</div>
    </div>
</>
    );
}

export default MenuAcessibilidade;