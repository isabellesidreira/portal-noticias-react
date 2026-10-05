import { Outlet } from "react-router"
import Menu from "./components/Menu"
import MenuAcessibilidade from "./components/MenuAcessibilidade"
import Rodape from "./components/Rodape"

function App(){
  return(

    <>
    <MenuAcessibilidade/>
    <Menu/>
<Outlet/>
<Rodape/>
    </>
  )
}

export default App