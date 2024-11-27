const Alumno = require('../models/Alumno');

// Obtener todos los alumnos
exports.getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.findAll();
        res.status(200).json(alumnos);
    } catch (error) {
        console.error('Error al obtener alumnos:', error);
        res.status(500).json({ error: 'Error al obtener los alumnos.' });
    }
};

// Obtener un alumno por ID
exports.getAlumnoById = async (req, res) => {
    try {
        const { id } = req.params;
        const alumno = await Alumno.findByPk(id);
        if (alumno) {
            res.status(200).json(alumno);
        } else {
            res.status(404).json({ error: 'Alumno no encontrado.' });
        }
    } catch (error) {
        console.error('Error al obtener el alumno:', error);
        res.status(500).json({ error: 'Error al obtener el alumno.' });
    }
};

// Crear un nuevo alumno
exports.createAlumno = async (req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;

        
        if (!nombre || !apellido || !email) {
            return res.status(400).send('Nombre, apellido y email son obligatorios.');
        }

        // Crear el nuevo alumno
        const nuevoAlumno = await Alumno.create({
            nombre,
            apellido,
            email,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.status(201).json(nuevoAlumno);
        console.log("Alumno creado con exito")
        res.render('signUp',{message:"Alumno creado con exito"})
    } catch (error) {
        console.error('Error al crear el alumno:', error);
        
        res.status(500).json({ error: 'Error al crear el alumno.' });
    }
};

// Actualizar un alumno por ID
exports.updateAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, password } = req.body;
        const alumno = await Alumno.findByPk(id);

        if (alumno) {
            await alumno.update({ nombre, apellido, email, password });
            res.status(200).json(alumno);
        } else {
            res.status(404).json({ error: 'Alumno no encontrado.' });
        }
    } catch (error) {
        console.error('Error al actualizar el alumno:', error);
        res.status(500).json({ error: 'Error al actualizar el alumno.' });
    }
};

// Eliminar un alumno por ID
exports.deleteAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        const alumno = await Alumno.findByPk(id);

        if (alumno) {
            await alumno.destroy();
            res.status(200).json({ message: 'Alumno eliminado exitosamente.' });
        } else {
            res.status(404).json({ error: 'Alumno no encontrado.' });
        }
    } catch (error) {
        console.error('Error al eliminar el alumno:', error);
        res.status(500).json({ error: 'Error al eliminar el alumno.' });
    }
};
