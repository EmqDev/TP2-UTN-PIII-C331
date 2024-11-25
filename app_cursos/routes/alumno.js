const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

// Rutas para los alumnos
router.get('/', alumnoController.getAllAlumnos);           // Obtener todos los alumnos
router.get('/:id', alumnoController.getAlumnoById);        // Obtener un alumno por ID
router.post('/', alumnoController.createAlumno);           // Crear un nuevo alumno
router.put('/:id', alumnoController.updateAlumno);         // Actualizar un alumno por ID
router.delete('/:id', alumnoController.deleteAlumno);      // Eliminar un alumno por ID

module.exports = router;
