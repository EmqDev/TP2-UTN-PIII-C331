
const getCurse = (req, res)=>{

    const cursos =[
        {
            IMG: '../public/images/curso_analisis_datos_ia.jpeg',
            name: 'Analisis de datos',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus dolores facere quam magnam?',
        },
        {
            IMG: '../public/images/curso_diseño_ia.jpeg',
            name: 'Diseño Grafico',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus dolores facere quam magnam?',
        },
        {
            IMG: '../public/images/curso_diseño_web_ia.jpeg',
            name: 'Diseño web',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus dolores facere quam magnam?',
        },
        {
            IMG: '../public/images/curso_machine_l_ia.jpeg',
            name: 'Machine learning',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus dolores facere quam magnam?',
        },
        {
            IMG: '../public/images/curso_programacion_inicial_ia.jpeg',
            name:'Programacion inicial',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus dolores facere quam magnam?',
        },
        {
            IMG: '../public/images/curso_videos_juegos_ia.jpeg',
            name: 'Programación de videos juegos',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus dolores facere quam magnam?',
        }
    ]

    res.render('index', {cursos});
}

module.exports = {getCurse};