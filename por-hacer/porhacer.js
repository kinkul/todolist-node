const fs= require('fs');
let listadoPorHacer=[];
const guardarDB= ()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./por-hacer/db/data.json', data, (err)=>{
       if (err) console.log('No se pudo grabar',err);
     
    });
}

const cargarDB = ()=>{
try {
    listadoPorHacer = require('./db/data.json');
} catch (error) {
    listadoPorHacer=[];
}



}



const crear= (descripcion)=>{
    cargarDB();
    let PorHacer={
        descripcion,
        completado: false
    };
    listadoPorHacer.push(PorHacer);
    guardarDB();
    return PorHacer;

}
getListado=()=>{
    cargarDB();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion===descripcion;
    });
    if(index>=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true; 
        
    } else return false;
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports={crear, getListado, actualizar,borrar}