
    const argv= require('yargs')
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion:{
            alias:'d',
            demand:true,
            desc: 'Descripcion de la tarea por hacer'
                     }
    } )
    .command('borrar','Borra el estado completado de una tarea',{
        descripcion:{
            alias:'d',
            demand:true,
            desc: 'Borra  la tarea por hacer'
                     }
    } )
    .command('crear','Crear un elemento por hacer',{
        completado:{ 
            alias:'c',
            demand:true,
            desc: 'Marcar como completado',
            default:true
                  },
        descripcion:{
            alias:'d',
            demand:true,
            desc: 'Descripcion de la tarea por hacer'
                     }
            })
    .help()
    .argv;
    
    module.exports={
        argv
    };