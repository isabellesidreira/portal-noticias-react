import { useState } from "react";

function useAcessibilidade(){
    const [menuAberto, setMenuAberto] = useState(false);
const [zoom, setZoom] = useState(100);
const [contraste, setContraste] = useState(false);

function abrirMenu(){
 setMenuAberto(!menuAberto);   
}

function aumentarFonte(){
const novoZoom = zoom + 10;
setZoom(novoZoom);
document.body.style.zoom = novoZoom +"%";
}

function diminuirFonte(){
const novoZoom = zoom - 10;
setZoom(novoZoom);
document.body.style.zoom = novoZoom +"%";
}


function alterarContraste(){
setContraste(!contraste);
document.body.classList.toggle("contraste");
}

return{
menuAberto,
abrirMenu,
aumentarFonte,
diminuirFonte,
alterarContraste

};

} 
export default useAcessibilidade;