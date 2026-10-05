import "../styles/menuAcessibilidade.css";
import useAcessibilidade from "../hooks/useAcessibilidade";

function MenuAcessibilidade(){

const {
    menuAberto,
    abrirMenu,
    aumentarFonte,
    diminuirFonte,
alterarContraste
}=useAcessibilidade()

    return(
        <>
<div>

<span aria-label="inicioDaPagina"> &nbsp;</span>

        <a href="#conteudoPrincipal" className="skipLink">
Ir para o conteúdo principal
</a>

<button id="btnAcessibilidade" aria-expanded={menuAberto} onClick={abrirMenu}>
<img src="./Símbolo acessibilidade.png" width="25" alt="Ícone de acessibilidade com uma figura humana estilizada formada por círculos azuis e linhas pretas."/>
</button>
<div id="menuAcessibilidade" hidden={!menuAberto}>
<button id="btnAumentarFonte" aria-label="Aumentar fonte" onClick={aumentarFonte}>
Aumentar Fonte
</button>
<button id="btnDiminuirFonte" aria-label="Diminuir fonte" onClick={diminuirFonte}>
Diminuir Fonte
</button>
<button id="btnAlterarContraste" aria-label="Auterar contraste" onClick={alterarContraste}>
Alterar Contraste
</button>
</div>
    </div>
    
        </>
    );
}

export default MenuAcessibilidade