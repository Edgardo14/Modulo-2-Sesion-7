let opcion = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"));

//FUNCIONES

while (isNaN(opcion)) {
    alert("Debe ingresar un valor numerico");
    opcion = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"));
}

switch (opcion) {
    case 1:
        boletasPagos();
        break;
    case 2:
        señalLlamadas();
        break;
    case 3:
        ofertaComercial();
        break;
    case 4:
        consultas();
        break;
    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
        break;
}

function boletasPagos(){
    let opcion = parseInt(prompt("Seleccione una opción:\n1.- Ver Boleta\n2.-Pagar cuenta"));
    while (isNaN(opcion)) {
        alert("Debe ingresar un valor numerico");
        opcion = parseInt(prompt("Seleccione una opción:\n1.- Ver Boleta\n2.-Pagar cuenta"));
    }
    switch (opcion) {
        case 1:
            alert("Haga clic aquí para descargar su boleta");
            break;
        case 2:
            alert("Usted está siendo transferido. Espere por favor...");
            break;
        default:
            alert("Opción ingresada no encontrada. Gracias por preferir nuestros servicios");
            break;
    }
}

function señalLlamadas(){
    let opcion = parseInt(prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.-Problemas con las llamadas"));
    while (isNaN(opcion)) {
        alert("Debe ingresar un valor numerico");
        opcion = parseInt(prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.-Problemas con las llamadas"));
    }
    while (opcion != 1 && opcion != 2) {
        alert("La ópcion ingresada no es valida, por favor intente nuevamente");
        opcion = parseInt(prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.-Problemas con las llamadas"));
    }
    let solicitud = prompt("A continuación escriba su solicitud: ");
    alert('Estimado usuario, su solicitud: "' + solicitud + '" Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.');

}

function ofertaComercial() {
    let opcion = prompt("¡Mentel tiene un oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'");
    while (opcion!="NO" && opcion!="SI") {
        alert("La ópcion ingresada no es valida, por favor intente nuevamente");
        opcion = prompt("¡Mentel tiene un oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'");
    }
    if (opcion == "SI") {
        alert("Un ejecutivo contactará con usted");
    }
    else
        alert("Gracias por preferir nuestros servicios");
}

function consultas() {
    let consulta = prompt("A continuación escriba su consulta: ");
    alert('Estimado usuario, su consulta: "' + consulta + '" Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos');
}