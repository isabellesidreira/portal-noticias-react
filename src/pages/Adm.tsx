import { useEffect } from "react";
import { useNavigate } from "react-router";
import MenuAdm from "../components/MenuAdm";

function Adm () {
    const navigate = useNavigate();
    useEffect(() => {
const usuarioLogado = localStorage.getItem("usuarioLogado")
if(usuarioLogado != "sim") {
navigate("/login")
}
    }, []);
return(
    <>
    <main id="conteudoPrincipal">
        <MenuAdm/>
    </main>
    </>
)
}

export default Adm;