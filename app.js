
let archivo = require('./funcionesDeTareas');
let tareas = require ('./tareas');
let process = require ('process');
let accion = process.argv;


switch (accion[2]) {
    case 'listar':
        console.log('Listado de tareas\n-----------------');
        archivo.listarTareas();
        break;

        case 'crear':
            var titulo = accion[3]
            var estado = accion[4]
            console.log('Tu tareas fue creada con exito\n------------------------------');
            escribirJSON(titulo, estado);
            break;

        case 'filtrar':
                var estado = accion[3]
                console.log(`Las tareas con estado ${estado} son:\n------------------------------------`);
                filtrarPorEstado(estado);
                break;    

        case undefined :
        console.log(" \nAtención - Tienes que pasar una acción\nLas acciones disponibles son: listar\n--------------------------------------");
        break;

    default:
        console.log("------------------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: listar\n------------------------------------");
        break;
}
