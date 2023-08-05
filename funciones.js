btnEnviar.addEventListener('click', function (event) {
    event.preventDefault(); 

    // Obtener los datos del cliente
    const nombreApellido = document.getElementById('nombreApellido').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;

    // Guardar los datos en el almacenamiento local
    localStorage.setItem('nombreApellido', nombreApellido);
    localStorage.setItem('edad', edad);
    localStorage.setItem('dni', dni);
 
    // Resetea el formulario para borrar los datos ingresados
    document.getElementById('formularioIngreso').reset();
});



// Función para calcular el plan anual, con map recorro el arreglo planMensual para modificar uno por uno
function calcularPlanAnual(planMensual) {
    return planMensual.map(item => ({
        dia: item.dia * 12,
        precio: `$${(parseFloat(item.precio.slice(1)) * 12 * 0.9).toFixed(2)}`  /*esa linea de codigo la saque de internet, cumple
        la funcion de cada "plan" multiplicarlo por 12 y restarle el %10, todavia hay cosas que estoy viendo como funcionan. */

    }));
}

// Llamamos con el ID "botones" u "opciones" del html
const btnMensual = document.getElementById('btnMensual');
const btnAnual = document.getElementById('btnAnual');
const respuestaDiv = document.getElementById('respuesta');

// Agregar eventos a los botones
btnMensual.addEventListener('click', function () { //agrego la funcion de hacer click
    const mensual = [
        { dia: 4, precio: "$6500" },
        { dia: 8, precio: "$9000" },
        { dia: 12, precio: "$10500" } //Pongo lo que quiero que muestre mi boton
    ];


    // Crear elementos para mostrar la lista de planes mensuales
    const ul = document.createElement('ul');
    mensual.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Día: ${item.dia}, Precio: ${item.precio}`;
        ul.appendChild(li);
    });
 // Limpiar el contenido previo y mostrar la lista anterior
 respuestaDiv.innerHTML = '';
 respuestaDiv.appendChild(ul);

});

btnAnual.addEventListener('click', function () {
    const mensual = [
        { dia: 4, precio: "$6500" },
        { dia: 8, precio: "$9000" },
        { dia: 12, precio: "$10500" }
    ];

    const anual = calcularPlanAnual(mensual);

   
    const ul = document.createElement('ul');
    anual.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Día: ${item.dia}, Precio: ${item.precio}`;
        ul.appendChild(li);
    });

   
    respuestaDiv.innerHTML = '';
    respuestaDiv.appendChild(ul);
});

const formulario = document.getElementById("formularioConocerMas");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const actividadFisica = document.getElementById("respuestaActividad").value.toLowerCase(); //llama a html para poder guardar la respuesta
    const objetivoGimnasio = document.getElementById("respuestaObjetivo").value.toLowerCase();

    console.log("Respuestas del usuario:");
    console.log(`Actividad física: ${actividadFisica}`);
    console.log(`Objetivo en el gimnasio: ${objetivoGimnasio}`); //las imprime en consola

    formulario.reset(); //se elimina de pantanlla los datos ingresados cuando apretas enviar
});
