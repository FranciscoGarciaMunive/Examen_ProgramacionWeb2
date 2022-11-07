import express from 'express';
import {paginaInicio, paginaVisitas,} from '../controller/paginaContralor.js';
import{paginaGerente, guardarGerente, cambiarGerente, eliminarGerente, paginaNuevoGerente} from '../controller/controladorGerente.js';
import{guardarHotel, paginaHotel, paginaNuevoHotel,cambiarHotel, eliminarHotel}from '../controller/controladorHotel.js';
//import{guardarHotel}from '../controller/controladorHotel.js';
const rutas = express.Router();
rutas.get("/",paginaInicio);

rutas.get("/visitas", paginaVisitas);

rutas.get("/gerentes", paginaGerente);
rutas.get("/guardarGerente", paginaNuevoGerente);
rutas.post("/nuevoGerente", guardarGerente);
rutas.get("/cambiarGerente", cambiarGerente);
rutas.get("/eliminarGerente", eliminarGerente);

rutas.get("/hoteles", paginaHotel);
rutas.get("/guardarHotel", paginaNuevoHotel);
rutas.post("/nuevoHotel", paginaNuevoHotel);
rutas.get("/cambiarHotel", cambiarHotel);
rutas.get("/eliminarHotel", eliminarHotel);

export default rutas;


