let tareas = require('./tareas.json')

let archivoTareas = {
    leerJSON: tareas,
    listarTareas: function () {
        tareas.forEach(function(a, i){
            console.log(i + 1 + ". " + a.estado + " - " + a.titulo);
           });    
       }
};

module.exports = archivoTareas;