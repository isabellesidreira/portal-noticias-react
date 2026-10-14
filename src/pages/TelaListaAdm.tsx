import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";

export function TelaListaAdm(){
    const {buscarAdministradores} = useAdm()
    const listaAdministradores = buscarAdministradores();
    return(
        <>
        <MenuAdm/>
<h1 >
            Tela de listagem de ADM
        </h1>
        <main id="conteudoPrincipal">
<table>
            <thead>

    <tr>
        <th>
            Nome
        </th>
        <th>
            E-mail
        </th>
    </tr>
     </thead>
     <tbody>
        {
            listaAdministradores.map(
                (administrador: any) => (
<tr>
    <td>
        {administrador.nome}
    </td>
    <td>
        {administrador.email}
    </td>
</tr>
                )
            )
        }
     </tbody>
</table>
        </main>
        </>
    )
}