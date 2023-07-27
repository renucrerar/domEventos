// traer un elemento con ID
const btnEnviar = document.getElementById('btnEnviar');


btnEnviar.addEventListener('click', function (event) { // genera una accion en la pag, como click en un boton
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
 
    
    const nombreApellido = document.getElementById('nombreApellido').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;

    // Luego puedes hacer lo que necesites con los valores ingresados
    console.log("Nombre y Apellido: " + nombreApellido);
    console.log("Edad: " + edad);
    console.log("DNI: " + dni);


});

// Función para calcular el plan anual
function calcularPlanAnual(planMensual) {
    return planMensual.map(item => ({
        dia: item.dia * 12,
        precio: `$${(parseFloat(item.precio.slice(1)) * 12 * 0.9).toFixed(2)}`
    }));
}

// Obtener elementos del DOM
const btnMensual = document.getElementById('btnMensual');
const btnAnual = document.getElementById('btnAnual');
const respuestaDiv = document.getElementById('respuesta');

// Agregar eventos a los botones
btnMensual.addEventListener('click', function () {
    const mensual = [
        { dia: 4, precio: "$6500" },
        { dia: 8, precio: "$9000" },
        { dia: 12, precio: "$10500" }
    ];

    // Crear elementos para mostrar la lista de planes mensuales
    const ul = document.createElement('ul');
    mensual.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Día: ${item.dia}, Precio: ${item.precio}`;
        ul.appendChild(li);
    });

    // Limpiar el contenido previo y agregar la lista al respuestaDiv
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

    // Crear elementos para mostrar la lista de planes anuales
    const ul = document.createElement('ul');
    anual.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Día: ${item.dia}, Precio: ${item.precio}`;
        ul.appendChild(li);
    });

    // Limpiar el contenido previo y agregar la lista al respuestaDiv
    respuestaDiv.innerHTML = '';
    respuestaDiv.appendChild(ul);
});




const formulario = document.getElementById("formularioConocerMas");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const actividadFisica = document.getElementById("respuestaActividad").value.toLowerCase();
    const objetivoGimnasio = document.getElementById("respuestaObjetivo").value;

    console.log("Respuestas del usuario:");
    console.log(`Actividad física: ${actividadFisica}`);
    console.log(`Objetivo en el gimnasio: ${objetivoGimnasio}`);

    // Aquí puedes realizar cualquier acción adicional con las respuestas del usuario.

    formulario.reset();
});
