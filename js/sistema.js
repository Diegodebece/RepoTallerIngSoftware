// const { Barbero, Servicio, Reserva, Admin } = require('./clases');
// Para correr las pruebas descomentar esta primera línea ↑ y las del final del archivo, lo mismo con la linea del final de
// clases.js
class Sistema {
    constructor() {
        this.barberos = [
            new Barbero(101, "Carlos Gómez"),
            new Barbero(102, "Ana Martínez"),
            new Barbero(103, "Miguel Díaz")
        ];

        this.servicios = [
            new Servicio(201, "Corte de pelo"),
            new Servicio(202, "Corte de pelo personalizado"),
            new Servicio(203, "Afeitado y perfilado"),
            new Servicio(204, "Tinta de cabello"),

        ];


        this.admin = [
            new Admin("Diego de Brun", "adminDiego", "clave123"),
            new Admin("Federico", "adminFede", "admin"),
            new Admin("Leandro", "adminLea", "admin2")
        ];

        this.reservas = [
            new Reserva(1, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-15", "09:00", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(2, "María López", "maria.lopez@mail.com", "095837888", "2025-08-15", "09:30", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(3, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-15", "10:00", 101, "Carlos Gómez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(4, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-15", "10:30", 101, "Carlos Gómez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(5, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-15", "11:00", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(6, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-15", "11:30", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(7, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-15", "12:00", 101, "Carlos Gómez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(8, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-15", "12:30", 101, "Carlos Gómez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(9, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-15", "13:00", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(10, "María López", "maria.lopez@mail.com", "095837888", "2025-08-15", "13:30", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(11, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-15", "14:00", 101, "Carlos Gómez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(12, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-15", "14:30", 101, "Carlos Gómez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(13, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-15", "15:00", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(14, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-15", "15:30", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(15, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-15", "16:00", 101, "Carlos Gómez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(16, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-15", "16:30", 101, "Carlos Gómez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(17, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-15", "17:00", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(18, "María López", "maria.lopez@mail.com", "095837888", "2025-08-15", "17:30", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),

            // Ana Martínez - 15 turnos ocupados (3 libres)
            new Reserva(19, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-15", "09:00", 102, "Ana Martínez", 201, "Corte de pelo", "Reservado"),
            new Reserva(20, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-15", "09:30", 102, "Ana Martínez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(21, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-15", "10:00", 102, "Ana Martínez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(22, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-15", "10:30", 102, "Ana Martínez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(23, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-15", "11:00", 102, "Ana Martínez", 201, "Corte de pelo", "Reservado"),
            new Reserva(24, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-15", "11:30", 102, "Ana Martínez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(25, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-15", "12:00", 102, "Ana Martínez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(26, "María López", "maria.lopez@mail.com", "095837888", "2025-08-15", "12:30", 102, "Ana Martínez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(27, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-15", "13:00", 102, "Ana Martínez", 201, "Corte de pelo", "Reservado"),
            new Reserva(28, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-15", "13:30", 102, "Ana Martínez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(29, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-15", "14:00", 102, "Ana Martínez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(30, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-15", "14:30", 102, "Ana Martínez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(31, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-15", "15:00", 102, "Ana Martínez", 201, "Corte de pelo", "Reservado"),
            new Reserva(32, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-15", "15:30", 102, "Ana Martínez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(33, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-15", "16:00", 102, "Ana Martínez", 203, "Afeitado y perfilado", "Reservado"),

            // Miguel Díaz - solo 5 turnos ocupados
            new Reserva(34, "María López", "maria.lopez@mail.com", "095837888", "2025-08-15", "09:00", 103, "Miguel Díaz", 201, "Corte de pelo", "Reservado"),
            new Reserva(35, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-15", "11:00", 103, "Miguel Díaz", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(36, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-15", "12:00", 103, "Miguel Díaz", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(37, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-15", "14:30", 103, "Miguel Díaz", 204, "Tinta de cabello", "Reservado"),
            new Reserva(38, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-15", "16:00", 103, "Miguel Díaz", 201, "Corte de pelo", "Reservado"),
            // === 16 de agosto ===
            new Reserva(39, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-16", "09:00", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(40, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-16", "10:00", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(41, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-16", "11:00", 102, "Ana Martínez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(42, "María López", "maria.lopez@mail.com", "095837888", "2025-08-16", "12:00", 102, "Ana Martínez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(43, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-16", "13:00", 103, "Miguel Díaz", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(44, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-16", "14:00", 103, "Miguel Díaz", 201, "Corte de pelo", "Reservado"),
            new Reserva(45, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-16", "15:00", 101, "Carlos Gómez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(46, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-16", "16:00", 102, "Ana Martínez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(47, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-16", "17:00", 103, "Miguel Díaz", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(48, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-16", "17:30", 102, "Ana Martínez", 201, "Corte de pelo", "Reservado"),

            // === 17 de agosto ===
            new Reserva(49, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-17", "09:30", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado"),
            new Reserva(50, "María López", "maria.lopez@mail.com", "095837888", "2025-08-17", "10:30", 102, "Ana Martínez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(51, "Luis Fernández", "luis.fernandez@mail.com", "095837888", "2025-08-17", "11:30", 103, "Miguel Díaz", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(52, "Lucía Rodríguez", "lucia.rodriguez@mail.com", "095837888", "2025-08-17", "12:30", 101, "Carlos Gómez", 204, "Tinta de cabello", "Reservado"),
            new Reserva(53, "Pedro Gómez", "pedro.gomez@mail.com", "095837888", "2025-08-17", "13:30", 103, "Miguel Díaz", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(54, "Sofía Martínez", "sofia.martinez@mail.com", "095837888", "2025-08-17", "14:30", 102, "Ana Martínez", 201, "Corte de pelo", "Reservado"),
            new Reserva(55, "Daniel Castro", "daniel.castro@mail.com", "095837888", "2025-08-17", "15:30", 101, "Carlos Gómez", 202, "Corte de pelo personalizado", "Reservado"),
            new Reserva(56, "Fernanda Suárez", "fernanda.suarez@mail.com", "095837888", "2025-08-17", "16:30", 103, "Miguel Díaz", 204, "Tinta de cabello", "Reservado"),
            new Reserva(57, "Juan Pérez", "juan.perez@mail.com", "095837888", "2025-08-17", "17:00", 102, "Ana Martínez", 203, "Afeitado y perfilado", "Reservado"),
            new Reserva(58, "María López", "maria.lopez@mail.com", "095837888", "2025-08-17", "17:30", 101, "Carlos Gómez", 201, "Corte de pelo", "Reservado")

        ];
    }


    ValidarLogin(nombreUsuario, contrasena) {
        return this.admin.some(
            (usuario) => usuario.usuario === nombreUsuario && usuario.contrasena === contrasena
        );
    }

    DevolverArrayHorarios(fecha, idBarbero) {
        let turnos = [
            "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
            "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
            "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
        ];

        for (const reserva of this.reservas) {

            if (idBarbero != 0) {
                if (reserva.fecha === fecha && reserva.idBarbero === idBarbero) {
                    let index = turnos.indexOf(reserva.hora);
                    console.log(index);
                    turnos.splice(index, 1);
                }

            } else {
                return this.DevolverHorariosCualquierBarbero(fecha);
            }
        }
        return turnos;
    }

    DevolverHorariosCualquierBarbero(fecha) {
        let turnos = [
            "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
            "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
            "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
        ];

        let cantidadBarberos = this.barberos.length;

        // Inicializo contadores por horario
        let horarios = [];
        for (let i = 0; i < turnos.length; i++) {
            horarios.push({ hora: turnos[i], ocupados: 0 });
        }

        // Cuento ocupados por horario en esa fecha
        for (let i = 0; i < this.reservas.length; i++) {
            let r = this.reservas[i];
            if (r.fecha === fecha) {
                for (let j = 0; j < horarios.length; j++) {
                    if (r.hora === horarios[j].hora) {
                        horarios[j].ocupados++;
                        break;
                    }
                }
            }
        }

        // Devuelvo horarios con al menos 1 barbero libre
        let turnosDisponibles = [];
        for (let i = 0; i < horarios.length; i++) {
            if (horarios[i].ocupados < cantidadBarberos) {
                turnosDisponibles.push(horarios[i].hora);
            }
        }

        return turnosDisponibles;
    }

    ObtenerBarberoDisponible(fecha, hora) {
        // Recorro barberos en orden y busco el primero libre
        for (let i = 0; i < this.barberos.length; i++) {
            let barbero = this.barberos[i];
            let ocupado = false;

            // Reviso si este barbero tiene reserva a esa fecha/hora
            for (let j = 0; j < this.reservas.length; j++) {
                let r = this.reservas[j];
                if (r.fecha === fecha && r.hora === hora && r.idBarbero === barbero.id) {
                    ocupado = true;
                    break;
                }
            }

            if (!ocupado) {
                return barbero; // { id, nombre }
            }
        }

        // Si ninguno está libre
        return null;
    }

    EstaDisponible(idBarbero, fecha, hora) {
        for (let i = 0; i < this.reservas.length; i++) {
            let r = this.reservas[i];
            if (r.idBarbero === idBarbero && r.fecha === fecha && r.hora === hora) {
                return false; // ocupado
            }
        }
        return true; // libre
    }

    RealizarReserva(nombre, mail, idServicio, idBarbero, fecha, hora) {
        let fechaSeleccionada = document.getElementById('date').value;
        let barberoId = Number(document.getElementById("barberoSelect").value);
    }

    GetBarberoById(id) {
        for (const barb of this.barberos) {
            if (barb.id === id) {
                return barb;
            }
        }
    }

    GetServicioById(id) {
        for (const serv of this.servicios) {
            if (serv.id === id) {
                return serv;
            }
        }
    }


    ValidarMail(email) {
        // Verifica que incluya arroba y punto
        if (!email.includes("@") || !email.includes(".")) {
            return false;
        }

        const posArroba = email.indexOf("@");
        const posPunto = email.lastIndexOf(".");

        // Verifica que arroba y punto no estén al inicio ni al final
        if (posArroba === 0 || posPunto === 0 ||
            posArroba === email.length - 1 || posPunto === email.length - 1) {
            return false;
        }

        // Arroba debe venir antes que el último punto
        if (posArroba > posPunto) {
            return false;
        }

        // Debe haber al menos un carácter entre arroba y punto
        if (posPunto - posArroba < 2) {
            return false;
        }

        return true;
    }

    ValidarCelular(celular) {
        // Verifica que tenga exactamente 9 caracteres
        if (celular.length !== 9) {
            return false;
        }

        // Verifica que comience con "09"
        if (celular[0] !== '0' || celular[1] !== '9') {
            return false;
        }

        // Verifica que el tercer dígito sea válido
        const tercerDigito = celular[2];
        const digitosValidos = ['1', '3', '4', '5', '7', '8'];
        if (!digitosValidos.includes(tercerDigito)) {
            return false;
        }

        // Verifica que los demás caracteres sean dígitos (posición 3 a 8)
        for (let i = 3; i < 9; i++) {
            const caracter = celular[i];
            if (caracter < '0' || caracter > '9') {
                return false;
            }
        }

        // Si pasó todas las validaciones, es correcto
        return true;
    }

    ValidarNombre(nombre) {
        return nombre.length != 0;
    }

    AgregarReserva(reserva) {
        this.reservas.push(reserva);
    }

    renderReservations(reservationsToDisplay, tableBody, noMsg) {
        tableBody.innerHTML = '';

        if (!reservationsToDisplay || reservationsToDisplay.length === 0) {
            noMsg.style.display = 'block';
            return;
        } else {
            noMsg.style.display = 'none';
        }

        // Ordenar por fecha y hora
        reservationsToDisplay.sort((a, b) => {
            const da = new Date(`${a.fecha}T${a.hora}`);
            const db = new Date(`${b.fecha}T${b.hora}`);
            return da - db;
        });

        reservationsToDisplay.forEach(reservation => {
            const row = tableBody.insertRow();

            // ¿Atendida?
            const isAttended = reservation.estado
                ? reservation.estado.toLowerCase() === 'atendida'
                : !!reservation.attended;

            row.classList.add(isAttended ? 'attended' : 'pending');

            // Fecha y hora formateadas
            const dateTime = new Date(`${reservation.fecha}T${reservation.hora}`);
            const formattedDate = dateTime.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
            const formattedTime = dateTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

            // Columnas
            row.insertCell().textContent = reservation.nombreUsuario;
            row.insertCell().textContent = reservation.servicio;
            row.insertCell().textContent = reservation.nombreBarbero;
            row.insertCell().textContent = `${formattedDate} ${formattedTime}`;
            row.insertCell().textContent = reservation.celular ?? reservation.telefono ?? reservation.phone ?? '';
            row.insertCell().textContent = reservation.emailUsuario ?? reservation.email ?? '';

            // Estado
            const statusCell = row.insertCell();
            statusCell.textContent = isAttended ? 'Atendida' : (reservation.estado ?? 'Pendiente');
            statusCell.classList.add(isAttended ? 'status-attended' : 'status-pending');

            // Acciones
            const actionsCell = row.insertCell();
            const toggleAttendedBtn = document.createElement('button');
            toggleAttendedBtn.textContent = isAttended ? 'Marcar Pendiente' : 'Marcar Atendida';
            toggleAttendedBtn.classList.add('action-button');
            toggleAttendedBtn.addEventListener('click', () => {
                // Cambia el estado en la reserva
                reservation.estado = isAttended ? 'Pendiente' : 'Atendida';
                // Re-render
                this.renderReservations(this.reservas, tableBody, noMsg);
            });
            actionsCell.appendChild(toggleAttendedBtn);
        });
    }


}


function renderReservations(reservationsToDisplay) {
    reservationsTableBody.innerHTML = '';

    if (!reservationsToDisplay || reservationsToDisplay.length === 0) {
        noReservationsMessage.style.display = 'block';
        return;
    } else {
        noReservationsMessage.style.display = 'none';
    }

    // Ordenar por fecha y hora
    reservationsToDisplay.sort((a, b) => {
        const da = new Date(`${a.fecha}T${a.hora}`);
        const db = new Date(`${b.fecha}T${b.hora}`);
        return da - db;
    });

    reservationsToDisplay.forEach(reservation => {
        const row = reservationsTableBody.insertRow();

        // Determinar si está atendida
        const isAttended = reservation.estado
            ? reservation.estado.toLowerCase() === 'atendida'
            : !!reservation.attended;

        row.classList.add(isAttended ? 'attended' : 'pending');

        // Combinar fecha y hora para formatear
        const dateTime = new Date(`${reservation.fecha}T${reservation.hora}`);
        const formattedDate = dateTime.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        const formattedTime = dateTime.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Campos mapeados a tu clase Reserva
        row.insertCell().textContent = reservation.nombreUsuario;
        row.insertCell().textContent = reservation.servicio;
        row.insertCell().textContent = reservation.nombreBarbero;
        row.insertCell().textContent = `${formattedDate} ${formattedTime}`;

        const phone = reservation.celular ?? reservation.telefono ?? reservation.phone ?? '';
        row.insertCell().textContent = phone;

        row.insertCell().textContent = reservation.emailUsuario ?? reservation.email ?? '';

        // Estado
        const statusCell = row.insertCell();
        statusCell.textContent = isAttended ? 'Atendida' : (reservation.estado ?? 'Pendiente');
        statusCell.classList.add(isAttended ? 'status-attended' : 'status-pending');

        // Acciones
        const actionsCell = row.insertCell();
        const toggleAttendedBtn = document.createElement('button');
        toggleAttendedBtn.textContent = isAttended ? 'Marcar Pendiente' : 'Marcar Atendida';
        toggleAttendedBtn.classList.add('action-button');
        toggleAttendedBtn.addEventListener('click', () => toggleAttendedStatus(reservation.id));
        actionsCell.appendChild(toggleAttendedBtn);
    });
}

function poblarSelectBarberos() {
  
    for (var i = 0; i < sistema.barberos.length; i++) {
      var b = sistema.barberos[i];
      var opt = document.createElement("option");
      // podés filtrar por id o por nombre; acá dejo por nombre para que calce con tus filas
      opt.value = b.nombre; 
      opt.textContent = b.nombre;
      filterBarberSelect.appendChild(opt);
    }
    return;
  
}

//module.exports = Sistema;
// ↑ Descomentar para pruebas
