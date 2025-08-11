class Reserva {
    constructor(id, nombreUsuario, emailUsuario, celular, fecha, hora, idBarbero, nombreBarbero, idServicio, servicio, estado) {
            this.id = id;
            this.nombreUsuario = nombreUsuario;
            this.emailUsuario = emailUsuario;
            this.celular = celular;
            this.fecha = fecha;             // "YYYY-MM-DD"
            this.hora = hora;               // "HH:MM"
            this.idBarbero = idBarbero;
            this.nombreBarbero = nombreBarbero;
            this.idServicio = idServicio;
            this.servicio = servicio;
            this.estado = estado;
    }
}



class Servicio {
    constructor(id, servicio){
        this.id = id;
        this.servicio = servicio;
    }
}

class Barbero {
     constructor(id, nombreBarbero){
        this.id= id;
        this.nombreBarbero = nombreBarbero;
     }
}

class Admin {

    constructor(nombreCompleto, usuario, contrasena) {
        this.nombreCompleto = nombreCompleto;
        this.usuario = usuario;
	    this.contrasena = contrasena;
    }
}


// module.exports = {
//   Barbero,
//   Servicio,
//   Reserva,
//   Admin
// };

// ↑ Descomentar para realizar pruebas 