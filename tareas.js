const fs = require("fs");
let tareas = require('./tareas.json')
let guardar = (dato) => fs.writeFileSync('./tareas.json',JSON.stringify(dato,null,4),'utf-8')


module.exports = escribirJSON = (titulo, estado) => {
    let tarea = {
        titulo,
        estado: "pendiente"
    }
        tareas.push(tarea)
        guardar(tareas)
        return console.log (`- ${tarea.estado} - ${tarea.titulo}`);
    
};

module.exports = filtrarPorEstado = (estado) =>{
    let tareasFiltradas = tareas.filter((tarea) => tarea.estado.toLowerCase() === estado.toLowerCase())
    tareasFiltradas.forEach((tarea,i) => {
        return console.log(`${i+1}. ${tarea.titulo} - ${tarea.estado}`);
    })
    };

