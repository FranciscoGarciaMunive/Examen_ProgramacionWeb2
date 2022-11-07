import { response } from "express"


const paginaInicio = (req,res) => {
    res.render("inicio",{
        pagina:"SISTEMA DE HOTELES",
        pagina2: "hola"
    });
}
const paginaVisitas = (req,res)=>{
    res.render("visitas",{
        pagina :"visitas",
    });
}


export {
    paginaInicio,
    paginaVisitas,
    
}