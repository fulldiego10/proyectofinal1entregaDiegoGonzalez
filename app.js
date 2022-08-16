do {
    var nombre1 = prompt("Ingresa tu nombre y apellido");
} while (nombre1 == "");

do {
    var correo1 = prompt("mail de cliente");
} while (correo1 == "");

class placaVideo {
    constructor(marca, modelo, memoriaRam, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoriaRam = memoriaRam;
        this.precio = precio;
        // this.disponible = false;
        this.disponible = true;
        this.eliminar = () => {
            this.disponible = false;
        };
    }
}

const Gtx = new placaVideo("Gtx", "1070", 8, 10000);

const Asus = new placaVideo("Asus", "1080", 9, 15000);

const Galax = new placaVideo("Galax", "3060", 10, 20000);

const Rx = new placaVideo("Rx", "6500", 11, 25000);

const Radeon = new placaVideo("Radeon", "6800XT", 12, 30000);

var placaStock = [Gtx, Asus, Galax, Rx, Radeon];

do {
    var placa = +prompt(
        "Seleccione la placa de video que desee. \n1. Gtx 1070 8GB Strix \n2. Asus 1080 9GB Strix \n3. Galax 3060 10GB \n4. Rx 6500 11GB \n5. Radeon 68000 12GB"
    );

    if (placa === 1) {
        var vga = Gtx;
    } else if (placa === 2) {
        vga = Asus;
    } else if (placa === 3) {
        vga = Galax;
    } else if (placa === 4) {
        vga = Rx;
    } else if (placa === 5) {
        vga = Radeon;
    } else alert("por favor selecciona un valor valido");
} while (placa > 5);

class Cliente {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.newVga = null;

        this.addVga = () => {
            if (vga.disponible) {
                this.newVga = vga;
                vga.eliminar();
                alert(
                    `Has comprado la placa de video ${
            this.newVga.marca
          } El precio final es: $ ${(this.newVga.precio =
            this.newVga.precio * 1.21)}`
                );
                console.log(
                    `INFORMACION VENTA\n\nDATOS CLIENTE.\nNombre: ${nombre1} \nCorreo electronico: ${correo1}\n\nDATOS DE LA PLACA DE VIDEO\nMarca: ${this.newVga.marca}\nModelo: ${this.newVga.modelo}\nMemoria Ram: ${this.newVga.memoriaRam}\nFecha de compra: ${fechaHoy}\nFecha fin de garantia: ${garantia}\n Precio Final con iva incluido: ${this.newVga.precio}`
                );
            } else {
                alert(`La vga no esta disponible`);
            }
        };
    }
}

const cliente1 = new Cliente(nombre1, correo1);

var fecha = new Date(Date.now());
var dd = fecha.getDate();
var mm = fecha.getMonth();
var yyyy = fecha.getFullYear();

var fechaHoy = dd + "/" + mm + "/" + yyyy;

var fechaGarantia = 52 * 7;
var targetDate = new Date();
targetDate.setDate(targetDate.getDate() + fechaGarantia);
var dd2 = targetDate.getDate();
var mm2 = targetDate.getMonth() + 1;
var yyyy2 = targetDate.getFullYear();

var garantia = dd2 + "/" + mm2 + "/" + yyyy2;

cliente1.addVga();