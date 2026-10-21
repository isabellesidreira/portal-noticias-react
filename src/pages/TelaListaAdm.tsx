import { useState } from "react";
import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";
import { useNavigate } from "react-router";

export function TelaListaAdm(){
    const {buscarAdministradores, excluirAdministrador} = useAdm()
    const [listaAdministradores, setListaAdministradores] = useState(buscarAdministradores());
const navigate = useNavigate();
    
    return(
        <>
        <MenuAdm/>
        <main id="conteudoPrincipal">
            <h1 >
            Tela de listagem de ADM
        </h1>
<table>
            <thead>

    <tr>
        <th>
            Nome
        </th>
        <th>
            E-mail
        </th>
        <th colSpan={2}>
            Ações
        </th>
    </tr>
     </thead>
     <tbody>
        {
            listaAdministradores.map(
                (administrador ) => (
<tr key={administrador.email}>
    <td>
        {administrador.nome}
    </td>
    <td>
        {administrador.email}
    </td>
    <td>
        <button onClick={() => {
            navigate("/telaCadastroAdm", {
state: { administrador}
            });
        }}>
            Alterar
        </button>
    </td>
    <td>
        <button
        onClick={() => {
            const confirmar = window.confirm("Deseja excluir o administrador " + administrador.nome + "?");
            if(confirmar){
excluirAdministrador(administrador.email);
setListaAdministradores(buscarAdministradores());
            }
        }}>
            Excluir
        </button>
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