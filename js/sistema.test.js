const Sistema = require('./sistema');
let sistema;

beforeEach(() => {
  sistema = new Sistema(); // ✅ creás una nueva instancia en cada test
});

test('agrega una reserva a la lista de reservas', function(){
    sistema.AgregarReserva("Federico Fagúndez", "FedeFagundezcumbiero@yahoo.com", 201, 101, "2025-08-14", "09:00");
    expect(sistema.reservas.length).toBe(59);
});


test('agrega tres reservas a la lista de reservas', function(){
    sistema.AgregarReserva("Federico Fagúndez", "FedeFagundezo@yahoo.com", 201, 101, "2025-08-14", "09:00");
    sistema.AgregarReserva("Federico Fagúndez", "FedeFagundez@yahoo.com", 201, 101, "2025-08-14", "09:30");
    sistema.AgregarReserva("Federico Fagúndez", "FedeFagundez@yahoo.com", 201, 101, "2025-08-14", "10:00");

    expect(sistema.reservas.length).toBe(61);
});


test('devuelve el barbero con el id proporcionado', function(){
    let barbero = sistema.GetBarberoById(101);
    expect(barbero.id).toEqual(101);
    expect(barbero.nombreBarbero).toEqual("Carlos Gómez");
});


test('busca un id de barbero que no existe', function(){
    let barbero = sistema.GetBarberoById(151);
    expect(barbero).toBeFalsy();
})

describe("validaciones de email", function() {
    test('ingreso un mail con el formato correcto', function(){
        let email = "diego@mail.com";
        expect(sistema.ValidarMail(email)).toBeTruthy();
    });

    test("ingreso un email sin arroba", function(){
        let email = "leandroAtmail.com";
        expect(sistema.ValidarMail(email)).toBeFalsy();

    });

       test("ingreso un email sin punto", function(){
        let email = "federico@mailcom";
        expect(sistema.ValidarMail(email)).toBeFalsy();

    });
        test("ingreso un email con el último punto antes del arroba", function(){
        let email = "diego.mail@com";
        expect(sistema.ValidarMail(email)).toBeFalsy();

    });
});

describe("Validaciones de celular ingresado", function(){
    test('ingreso un celular con el formato correcto', function(){
        let celular = "095678901";
        expect(sistema.ValidarCelular(celular)).toBeTruthy();
    });

     test('celular con longitud incorrecta (menos de 9 dígitos)', function(){
        let celular = "09567890";
        expect(sistema.ValidarCelular(celular)).toBeFalsy();
    });

    test('celular con longitud incorrecta (más de 9 dígitos)', function(){
        let celular = "0956789011";
        expect(sistema.ValidarCelular(celular)).toBeFalsy();
    });

    test('celular que no comienza con 09', function(){
        let celular = "085678901";
        expect(sistema.ValidarCelular(celular)).toBeFalsy();
    });

    test('tercer dígito no válido', function(){
        let celular = "090678901";
        expect(sistema.ValidarCelular(celular)).toBeFalsy();
    });

    test('celular con letras en lugar de números', function(){
        let celular = "09a6789b1";
        expect(sistema.ValidarCelular(celular)).toBeFalsy();
    });

    test('celular con símbolos especiales', function(){
        let celular = "09$6789@1";
        expect(sistema.ValidarCelular(celular)).toBeFalsy();
    });
});

describe("Validaciones de nombre ingresado", function(){
    test('Nombre con formato correcto', function(){
        let nombre= "Leandro";
        expect(sistema.ValidarNombre(nombre)).toBeTruthy();
    });
    test('Nombre vacío', function(){
        let nombre= "";
        expect(sistema.ValidarNombre(nombre)).toBeFalsy();
    });

});


describe("validaciones de login administrador", function() {
    test('ingreso de credenciales correctas', function(){
        let nombreUsuario = "adminLea";
        let pass = "admin2";
        expect(sistema.ValidarLogin(nombreUsuario, pass)).toBeTruthy();
    });

    test('ingreso de nombre de nombre de usuario correcto, contraseña incorrecta', function(){
        let nombreUsuario = "adminLea";
        let pass = "admin";
        expect(sistema.ValidarLogin(nombreUsuario, pass)).toBeFalsy();
    });

    test('ingreso de nombre de usuario incorrecto, contraseña correcta', function(){
        let nombreUsuario = "adminLe";
        let pass = "admin2";
        expect(sistema.ValidarLogin(nombreUsuario, pass)).toBeFalsy();
    });

    test('ingreso de nombre de usuario y contraseña incorrectos', function(){
        let nombreUsuario = "administrador";
        let pass = "password";
        expect(sistema.ValidarLogin(nombreUsuario, pass)).toBeFalsy();
    });

    test('intento de login con los campos vacíos', function(){
        let nombreUsuario = "";
        let pass = "";
        expect(sistema.ValidarLogin(nombreUsuario, pass)).toBeFalsy();
    });
});
