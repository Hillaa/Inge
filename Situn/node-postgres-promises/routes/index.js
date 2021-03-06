var express = require('express');
var router = express.Router();

var db = require('../public/javascripts/server');

//----------- BUSQUEDA EN TABLAS -------------------------------------
//----------- DEVOLUCION DE TODO LOS DATOS DE UNA TABLA -------------------------------------
router.post('/api/TP/ALL',db.getAllTP);       // Busqueda todos lo TP
router.post('/api/TU/ALL',db.getAllTU);		// Busqueda todos lo TU
router.post('/api/TC/ALL',db.getAllTC);		// Busqueda todos lo TC

//----------- DEVOLUCION DE DATOS DE UNA TABLA SEGUN UNA CONDICION ----------
router.post('/api/TP/B', db.getSingleTP); // Busqueda TP especifico
router.post('/api/TU/B', db.getSingleTU); // Busqueda TU especifico
router.post('/api/TC/BO', db.getALLTC1); // Busqueda TC  oficio
router.post('/api/TC/BD', db.getALLTC2); // Busqueda TC  destinatario
router.post('/api/TC/BR', db.getALLTC3); // Busqueda TC  remitente
router.post('/api/TC/BA', db.getALLTC4); // Busqueda TC  asunto
router.post('/api/TD/ALL_ONE',db.getALLTD_ONE);	// Busqueda Todos los enlaces sobre un documento
router.post('/api/TA/ALL_FECHA',db.getALLTA_FECHA);	// Busqueda Todos las alarmas antes de la fecha

//----------- INSERTAR EN TABLAS ----------------------------------------
router.post('/api/TP/I', db.createTP);	// Insertando en TP
router.post('/api/TU/I', db.createTU);  // Insertando en TU
router.post('/api/TC/I', db.createTC);  // Insertando en TC
router.post('/api/TD/I', db.createTD);  // Insertando en TD
router.post('/api/TA/I', db.createTA);  // Insertando en TA

//----------- ACTUALIZACIONES EN TABLAS ---------------------------------
router.post('/api/TP/UD', db.updateTP); // Actualizar TP especifico
router.post('/api/TU/UD', db.updateTU); // Actualizar TU especifico
router.post('/api/TC/UD', db.updateTC); // Actualizar TC especifico
router.post('/api/TD/UD', db.updateTD); // Actualizar TD especifico
router.post('/api/TA/UD', db.updateTA); // Actualizar TA especifico

//----------- ELIMINACIONES EN TABLAS -----------------------------------
router.get('/api/TP/D', db.removeTP); // Eliminar un TP especifico
router.get('/api/TU/D', db.removeTU); // Eliminar un TP especifico
router.get('/api/TC/D', db.removeTC); // Eliminar un TC especifico
router.post('/api/TD/D',db.removeTD); // Eliminando un enlace especifico
router.post('/api/TA/D',db.removeTA); // Eliminando un TA especifico


module.exports = router;