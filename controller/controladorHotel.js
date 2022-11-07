import {Hotel} from '../models/Hotel.js'


const paginaHotel= async(req,res)=>{
    //obtener registros
    const hoteles = await Hotel.findAll({
        attributes : ['id_htl','nombre' , 'direccion' ,'correo' , 'telefono', 'imagen','id_grt']
    });

    res.render("hoteles" , {
        pagina:"Hoteles",
        hoteles:hoteles
    });
}
const guardarHotel = async (req, res) => {
    const { id_htl,nombre,direccion,correo,telefono,imagen,id_grt} = req.body;
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (direccion.trim() === "") {
        errores.push({ mensaje: "La direccion no debe ser vacio" });
    }
    if (correo.trim() === "") {
        errores.push({ mensaje: "El correo no debe ser vacio" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "El telefono no debe ser vacio" });
    }
    if (imagen.trim() === "") {
        errores.push({ mensaje: "La imagen no debe ser vacio" });
    }
    if (id_grt.trim() === "") {
        errores.push({ mensaje: "La imagen no debe ser vacio" });
    }

    if (errores.length > 0) {
        res.render("nuevoHotel", {
            pagina: "NuevoHotel",
            errores,
            nombre,
            direccion,
            correo,
            telefono,
            imagen,
            id_grt
        });

    } else {
        console.log(id_htl);
        if (id_htl > 0) {
            //Actualizar
            console.log("actualizar");
            try {
                await Hotel.update({
                    nombre,
                    direccion,
                    correo,
                    telefono,
                    imagen,
                    id_grt
                }, { where: { id_htl: id_htl } });
                res.redirect('/hoteles');
            } catch (error) {
                console.log(error);
            }
        } else {
            //almacenar en la base de datos
            try {
                await Hotel.create({
                    nombre,
                    direccion,
                    correo,
                    telefono,
                    imagen,
                    id_grt
                });
                res.redirect('/hoteles');
            } catch (error) {
                console.log(error);
            }
        }
    }
};


const paginaNuevoHotel=(req,res)=>{
    res.render("nuevoHotel",{
        pagina:"NuevoHotel",
    });
}



const cambiarHotel = async (req, res) => {
    console.log('listo ' + req.query.id_htl)
    try {
        const com = await Hotel.findByPk(req.query.id_htl)
        console.log(com);
        const errores = [];

        res.render("nuevoHotel", {
            pagina: "NuevoHotel",
            errores,
            id_htl: com.id_htl,
            direccion: com.direccion,
            correo: com.correo,
            telefono: com.telefono,
            imagen: com.imagen,
            id_grt:com.id_grt
            
            
        });


    } catch (error) {
        console.log(error);
    }
};

const eliminarHotel = async (req, res) => {
    console.log('listo borrar' + req.query.id_grt)
    try {
        await Hotel.destroy({
            where: { id_htl: req.query.id_htl }
        });
        res.redirect("/hoteles");

    } catch (error) {
        console.log(error);
    }

}


export {
    paginaHotel,
    guardarHotel,
    paginaNuevoHotel,
    cambiarHotel,
    eliminarHotel
}