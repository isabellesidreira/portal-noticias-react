import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";

export function TelaListaAdm(){
    const {buscarAdministradores} = useAdm()
    const listaAdministradores = buscarAdministradores();
    return(
        <>
        <h1 className="destaque">
            Tela de listagem de ADM
        </h1>
        <main id="conteudoPrincipal">
<MenuAdm/>
<p>
    Embreve
</p>
        </main>
        </>
    )
}