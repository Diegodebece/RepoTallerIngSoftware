window.addEventListener("load", inicio);

let reservationsTableBody;
let noReservationsMessage;

let sistema;
let idProximaReserva = 60;

function inicio() {
  sistema = new Sistema();

  // Carga inicial
  cargarPagina('./secciones/inicio.html');
}

// -------------------------
// CARGA DE PÁGINAS
// -------------------------

function cargarReservas() {
  cargarPagina('./secciones/reserva-cliente.html', null, function () {
    inicializarReservas();
  });
}

function cargarPagina(pagina, ubicacionScript, callback) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;

      if (ubicacionScript) {
        const script = document.createElement('script');
        script.src = ubicacionScript;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      } else {
        // Si no hay script externo pero sí queremos lógica, llamamos según la página
        if (callback) {
          callback();
        } else if (pagina.includes("reserva-cliente.html")) {
          inicializarReservas();
        } else if (pagina.includes("panel-administracion.html")) {
          inicializarPanelAdministracion();
        }
      }
    });
}

// -------------------------
// RESERVAS
// -------------------------

function inicializarReservas() {
  console.log("🟢 inicializarReservas");

  const fecha = document.querySelector("#date");
  const barbero = document.querySelector("#slcBarbero");
  const boton = document.querySelector("#btnReservar");

  //Registra la fecha de hoy e impide seleccionar en el calendario fechas anteriores para reserva
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1; // Los meses en JS van de 0 a 11
  let anio = hoy.getFullYear();

  // Asegurar que día y mes tengan 2 dígitos
  if (dia < 10) dia = '0' + dia;
  if (mes < 10) mes = '0' + mes;

  // Formato final YYYY-MM-DD
  let fechaHoy = anio + '-' + mes + '-' + dia;

  // Fecha máxima = hoy + 60 días
  let max = new Date();
  max.setDate(max.getDate() + 60);
  let d2 = max.getDate();
  let m2 = max.getMonth() + 1;
  let y2 = max.getFullYear();
  if (d2 < 10) d2 = '0' + d2;
  if (m2 < 10) m2 = '0' + m2;
  let fechaMax = y2 + '-' + m2 + '-' + d2;

  // Asignar como mínimo al input
  fecha.setAttribute("min", fechaHoy);
  fecha.setAttribute("max", fechaMax);


  if (fecha) fecha.addEventListener("input", VerificarCupos);
  if (barbero) barbero.addEventListener("change", VerificarCupos);
  if (boton) boton.addEventListener("click", Reservar);
}

function VerificarCupos() {
  let fechaSeleccionada = document.getElementById('date').value;
  let barberoId = Number(document.getElementById("slcBarbero").value);
  let horariosDisponibles = sistema.DevolverArrayHorarios(fechaSeleccionada, barberoId);

  document.querySelector("#slcHorario").innerHTML = "";
  if (horariosDisponibles.length === 0) {
    document.querySelector("#msjHorarios").innerHTML =
      `<p>No hay horarios disponibles para este barbero en la fecha seleccionada</p>`;
  } else {
    document.querySelector("#msjHorarios").innerHTML = "";
    for (let hora of horariosDisponibles) {
      document.querySelector("#slcHorario").innerHTML += `<option value="${hora}">${hora}</option>`;
    }
  }
}

function Reservar() {
  console.log("✅ Reservar");
  document.getElementById("errorMail").innerHTML = "";
  document.getElementById("errorNombre").innerHTML = "";
  document.getElementById("errorCelular").innerHTML = "";
  let nombreCompleto = document.getElementById("txtNombre").value;
  let email = document.getElementById("txtMail").value;
  let celular = document.getElementById("txtCelular").value;
  let tipoServicio = Number(document.getElementById("slcTipoServicio").value);
  let barberoId = Number(document.getElementById("slcBarbero").value);
  let fechaSeleccionada = document.getElementById('date').value;
  let horaSeleccionada = document.getElementById("slcHorario").value;
  // Validaciones básicas

  if (!sistema.ValidarMail(email)) {
    document.getElementById("errorMail").innerHTML = "⚠️ El email no tiene un formato válido";
  }
  if (!sistema.ValidarCelular(celular)) {
    document.getElementById("errorCelular").innerHTML = "⚠️ El celular no tiene un formato válido";
  }
  if (!nombreCompleto) {
    document.getElementById("errorNombre").innerHTML = "⚠️ El nombre no puede estar vacío";
  }
  if (!nombreCompleto || !sistema.ValidarMail(email) || !sistema.ValidarCelular(celular) || !fechaSeleccionada ||
    !horaSeleccionada || !tipoServicio) {
    alert("⚠️ Completa correctamente todos los campos");
    return;
  }
  // Obtener barbero
  let barbero;
  if (barberoId === 0) {
    // Cualquier barbero
    barbero = buscarBarberoDisponible(fechaSeleccionada, horaSeleccionada);
    if (!barbero) {
      alert("⚠️ No hay barberos disponibles en ese horario.");
      return;
    }
    // Actualizo barberoId para guardar correctamente en la reserva
    barberoId = barbero.id;
  } else {
    // Barbero específico
    barbero = sistema.GetBarberoById(barberoId);
    if (!barbero) {
      alert("⚠️ Barbero no encontrado.");
      return;
    }
    // Verificar disponibilidad del barbero elegido
    if (!sistema.EstaDisponible(barberoId, fechaSeleccionada, horaSeleccionada)) {
      alert("⚠️ Ese barbero ya está ocupado en ese horario.");
      return;
    }
  }

  // Obtener servicio
  let servicio = sistema.GetServicioById(tipoServicio);
  if (!servicio) {
    alert("⚠️ Servicio inválido.");
    return;
  }

  // Crear y guardar la reserva (ajustá parámetros al orden de tu constructor)
  const nuevaReserva = new Reserva(
    idProximaReserva++,
    nombreCompleto,
    email,
    celular,            // <- según tu diseño, va luego del email
    fechaSeleccionada,
    horaSeleccionada,
    barberoId,
    barbero.nombreBarbero,     // <- propiedad correcta
    servicio.id,
    servicio.servicio,
    "Reservado"
  );

  sistema.AgregarReserva(nuevaReserva);
  VaciarCamposReserva();
  alert("✅ Reserva realizada con " + barbero.nombreBarbero + " a las " + horaSeleccionada);
  alert("Te llegará un correo electrónico con un recordatorio el día antes de la cita, ¡Te esperamos!");


}


function buscarBarberoDisponible(fecha, hora) {
  var barberoElegido = sistema.ObtenerBarberoDisponible(fecha, hora);
  return barberoElegido ? barberoElegido : null;
}

function VaciarCamposReserva() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtMail").value = "";
  document.getElementById("txtCelular").value = "";
  document.getElementById("slcTipoServicio").value = "";
  document.getElementById("slcBarbero").value = "0";
  document.getElementById("date").value = "";
  document.getElementById("slcHorario").innerHTML = "";
  document.getElementById("msjHorarios").innerHTML = "";

  document.getElementById("errorMail").innerHTML = "";
  document.getElementById("errorNombre").innerHTML = "";
  document.getElementById("errorCelular").innerHTML = "";
}

function ValidarMail(email) {
  return email.includes("@") && email.includes(".");
}

function ValidarCelular(celular) {
  return true; // Completá si querés validar formato uruguayo, etc.
}


/* Menú hamburguesa */
function mostrarMenu() {
  const nav = document.getElementById('nav');
  if (nav.classList.contains('nav-colapsado')) {
    nav.classList.remove('nav-colapsado');
    nav.classList.add('nav-expandido');
  } else {
    nav.classList.remove('nav-expandido');
    nav.classList.add('nav-colapsado');
  }
}

/* Cierra el menú al hacer click en una opción */
document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll("#nav a");
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
      const nav = document.getElementById('nav');
      // Solo colapsar si está expandido
      if (nav.classList.contains('nav-expandido')) {
        nav.classList.remove('nav-expandido');
        nav.classList.add('nav-colapsado');
      }
    });
  });
});

//Logica panel administracion

function inicializarPanelAdministracion() {
  const allReservations = sistema.reservas;
  reservationsTableBody = document.querySelector('#reservations-table tbody');
  noReservationsMessage = document.getElementById('no-reservations-message');
  const filterDateInput = document.getElementById('filter-date');
  const filterBarberSelect = document.getElementById('filter-barber');
  const applyFiltersBtn = document.getElementById('apply-filters');
  const clearFiltersBtn = document.getElementById('clear-filters');

  poblarSelectBarberos();
  applyFiltersBtn.addEventListener("click", applyFilters);
  clearFiltersBtn.addEventListener("click", clearFilters);
  // Render inicial
  sistema.renderReservations(sistema.reservas, reservationsTableBody, noReservationsMessage);
}

// Login administrador
function iniciarSesion() {
  const admin = document.getElementById('txtUsuario').value.trim();
  const contrasena = document.getElementById('txtContrasena').value;

  if (sistema.ValidarLogin(admin, contrasena)) {
    cargarPagina('./secciones/panel-administracion.html');
  } else {
    document.getElementById('errorModal').classList.remove('hidden');
  }
}

function cerrarModal() {
  document.getElementById('errorModal').classList.add('hidden');
}


// Panel de administración


function poblarSelectBarberos() {
  const filterBarberSelect = document.getElementById('filter-barber');

  for (var i = 0; i < sistema.barberos.length; i++) {
    var b = sistema.barberos[i];
    var opt = document.createElement("option");
    // podés filtrar por id o por nombre; acá dejo por nombre para que calce con tus filas
    opt.value = b.id;
    opt.textContent = b.nombreBarbero;
    filterBarberSelect.appendChild(opt);
  }
  return;

}

function applyFilters() {
  const filterDateInput = document.getElementById('filter-date');
  const filterBarberSelect = document.getElementById('filter-barber');
  var selectedDate = filterDateInput.value;          // "YYYY-MM-DD" o ""
  var selectedBarber = filterBarberSelect.value;     // nombre del barbero o ""
  console.log("barbero seleccionado: " + selectedBarber)
  var filtered = [];
  // selectedBarber: "" (todos) o "101"/"102"/"103"
  var selectedBarberId = selectedBarber ? Number(selectedBarber) : null;

  for (var i = 0; i < sistema.reservas.length; i++) {
    var r = sistema.reservas[i];

    // Fecha coincide si no elegiste fecha o si es la misma
    var pasaFecha = !selectedDate || r.fecha === selectedDate;

    // Barbero coincide si no elegiste barbero o si el id coincide
    // r.idBarbero debería ser Number; si no, castealo: Number(r.idBarbero)
    var pasaBarbero = (selectedBarberId === null) || (r.idBarbero === selectedBarberId);

    if (pasaFecha && pasaBarbero) {
      filtered.push(r);
    }
  }

  renderReservations(filtered);
}

function clearFilters() {

  const filterDateInput = document.getElementById('filter-date');
  const filterBarberSelect = document.getElementById('filter-barber');
  var selectedDate = filterDateInput.value;          // "YYYY-MM-DD" o ""
  var selectedBarber = filterBarberSelect.value;     // nombre del barbero o ""
  filterDateInput.value = "";
  filterBarberSelect.value = "";
  renderReservations(sistema.reservas);
}



function toggleAttendedStatus(reservationId) {
  var idx = -1;
  for (var i = 0; i < sistema.reservas.length; i++) {
    if (sistema.reservas[i].id === reservationId) { idx = i; break; }
  }
  if (idx === -1) return;

  var r = sistema.reservas[idx];

  // Si usás string 'Atendida'/'Pendiente'
  if (typeof r.estado === "string") {
    var val = (r.estado || "").toLowerCase();
    r.estado = (val === "atendida") ? "Pendiente" : "Atendida";
  } else {
    // Fallback boolean
    r.attended = !r.attended;
  }

  applyFilters(); // re-render según filtros actuales
}