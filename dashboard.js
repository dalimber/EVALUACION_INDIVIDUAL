/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let estadoBoton=null;
let torneos = [];
let objetoFormulario=
{
    nombre:"",
    categoria:"",
    participantes:0,
    valorInscripcion:0,
    email:"",
    recaudacion:0
};

/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {
    // 13. Obtener los valores de todos los campos con document.getElementById()
    let nombreTorneo=recuperaraTexto("txtNombreTorneo");
    let categoriaTorneo=recuperaraTexto("cmpSeleccion");
    let participanteTorneo=recuperarInt("txtParticipantes");
    let valorInscripcionF=recuperarFloat("txtValorIncripcion");
    let emailF=recuperaraTexto("txtEmail");

    // 14. Validar que el nombre tenga al menos 4 caracteres
    /*if (nombreTorneo.lenght<=4) 
        {
        estadoBoton=true;
        document.getElementById("txtErrorNombre").innerHTML("El nombre del torneo no tiene al menos 4 caracteres");
        }
    else{document.getElementById("cmpBotonRegistrar").disabled=estadoBoton;
        objetoFormulario.nombre=nombreTorneo;
    }*/
    objetoFormulario.nombre=nombreTorneo;
    // 15. Validar que se haya seleccionado una categoría
    objetoFormulario.categoria=categoriaTorneo;
    // 16. Validar que los participantes sean un entero entre 1 y 100
    objetoFormulario.participantes=participanteTorneo;
    // 17. Validar que el valor de inscripción sea mayor que 0
    objetoFormulario.valorInscripcion=valorInscripcionF;
    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    objetoFormulario.email=emailF;
    // Si alguna validación falla, mostrar mensajes de error y detener la ejecución

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    let recaudacionEstimada=participanteTorneo*valorInscripcionF;
    objetoFormulario.recaudacion=recaudacionEstimada;

    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
let nuevoTorneo=objetoFormulario;
    // 21. Agregar el objeto al arreglo con push()


    // 22. Llamar a mostrarTorneos() y limpiarFormulario()

    // 23. Mostrar un mensaje de registro exitoso
    console.log(objetoFormulario)
    torneos.push(nuevoTorneo);
    console.log(torneos)
    mostrarTorneos();
    nuevoTorneo.length=0;
}

/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
function mostrarTorneos() {
    // 25. Crear una variable vacía para concatenar el HTML
    let codigoHtml="";
    let cuerpoTabla=document.getElementById("cuerpoTabla");

    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for
for (let index = 0; index < torneos.length; index++) 
    {
    let arregloRecorrido = torneos[index];
    codigoHtml+='<tr><td>'+arregloRecorrido.nombre+'</td><td>'+
    arregloRecorrido.categoria+'</td><td>'+
    arregloRecorrido.participantes+'</td><td>'+
    arregloRecorrido.valorInscripcion+'</td><td>'+
    arregloRecorrido.email+'</td><td>'+
    arregloRecorrido.recaudacion+'</td></tr></tbody>'
    }
    // 27. En cada vuelta, obtener el objeto actual y construir una fila de la tabla (<tr>...</tr>)

    // 28. Mostrar todos los datos y la recaudación calculada

    // 29. Insertar el HTML final en el cuerpo de la tabla sin duplicar filas (usando innerHTML)
    cuerpoTabla.innerHTML=codigoHtml;
}

/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */
function limpiarFormulario() {
    // 31. Vaciar los campos del formulario, restablecer la categoría y limpiar los mensajes de error
    document.getElementById("txtNombreTorneo").value="";
    document.getElementById("cmpSeleccion").value="";
    document.getElementById("txtParticipantes").value=0;
    document.getElementById("txtValorIncripcion").value=0;
    document.getElementById("txtEmail").value="";

}
