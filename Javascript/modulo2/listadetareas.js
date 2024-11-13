
/*3. Crea un programa orientado a objetos que sea un gestor
de tareas.

El programa debe de tener las siguientes clases: ./ listo
  - Tarea
  - Propiedades: nombre, descripcion, fecha, completada

- ListaTareas
  - Propiedades: tareas (array de tareas)
  - Metodos: Agregar tarea(tarea), Completar tarea(tarea), Eliminar tarea(tarea), 
  ver tareas()

El programa debe de permitir al usuario agregar tareas,
completar tareas y eliminar tareas. Ademas debe de permitir
al usuario ver todas las tareas. 

El programa debe de tener un menu que permita al usuario
seleccionar una opcion.

El programa debe de terminar cuando el usuario seleccione
salir.

debes usar alert() y prompt() para interactuar con el usuario.*/

let tareas = [];

function gestionarTareas() {
    let opcion;
    do {
      opcion = prompt("Seleccione una opción: 1. Agregar tarea 2. Completar tarea 3. Eliminar tarea 4. Ver tareas 5. Salir");
        switch (opcion) {
          case '1':
            const nombre = prompt("Pon el nombre de la tarea:");
            const descripcion = prompt("Pon la descripción de la tarea:");
            const fecha = prompt("Pon la fecha de la tarea:");
            tareas.push({ nombre, descripcion, fecha, completada: false });
            alert(`Tarea "${nombre}" agregada.`);
            break;
          case '2':
            const nombreCompletar = prompt("Ingrese el nombre de la tarea a completar:");
            const tareaCompletar = tareas.find(t => t.nombre === nombreCompletar);
            if (tareaCompletar) {
                tareaCompletar.completada = true;
                alert(`Tarea "${nombreCompletar}" completada.`);
              } else {
                  alert(`Tarea "${nombreCompletar}" no encontrada.`);
                }
              break;
          case '3':
            const nombreEliminar = prompt("Ingrese el nombre de la tarea a eliminar:");
            const index = tareas.findIndex(t => t.nombre === nombreEliminar);
            if (index !== -1) {
            tareas.splice(index, 1);
            alert(`Tarea "${nombreEliminar}" eliminada.`);
              } else {
                alert(`Tarea "${nombreEliminar}" no encontrada.`);
              }
              break;
          case '4':
            if (tareas.length === 0) {
              alert("No hay tareas en la lista");
              } else {
                let lista = "Lista de Tareas:";
                tareas.forEach(t => {
                lista += `${t.nombre} - ${t.descripcion} - Fecha: ${t.fecha} - Completada: ${t.completada ? "Sí" : "No"}\n`;
                });
              alert(lista);
              }
            break;
          case '5':
            alert("Saliendo del gestor de tareas.");
            break;
          default:
            alert("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
        }
    } while (opcion !== '5');
}
gestionarTareas();

//disculpe la tardansa tengo fiebre y gripe.