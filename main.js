//Login
// \
//variables

const admin = {
    nombreDeAdmin: 'admin',
    contraseniaDeAdmin: 'admin',
}

class UsuarioNormal {
    constructor(nombre, contrasenia) {
        this.nombreUsuario = nombre
        this.contraseniaUsuario = contrasenia
    }
}



// let usuarioCreado = new UsuarioNormal('Gonzalo', 'gonzalo123')
// let usuarioCreado2 = new UsuarioNormal('Pepe', 'Pepe123')



let usuarioCreado

function crearUsuario() {

    let nombre = prompt('Ingrese el nombre de su NUEVO usuario')
    let contrasenia = prompt('Ingrese la contraseña de su NUEVO usuario')

    usuarioCreado = new UsuarioNormal(nombre, contrasenia)

    return usuarioCreado
}
console.log(crearUsuario())




// crearUsuario(nombreDelUsuario, contraseniaDelUsuario)


let nombreDelUsuario = prompt('Ingrese el nombre de su usuario')
let contraseniaDelUsuario = prompt('Ingrese la contraseña de su usuario')
let total = 0

while (true) {
    if (nombreDelUsuario === admin.nombreDeAdmin && contraseniaDelUsuario === admin.contraseniaDeAdmin) {
        console.log('Bienvenido al perfil de administrador')
        break

    } else if (nombreDelUsuario === usuarioCreado.nombreUsuario && contraseniaDelUsuario === usuarioCreado.contraseniaUsuario
        && nombreDelUsuario !== ''
        || contraseniaDelUsuario !== '') {
        console.log('Bienvenido ' + nombreDelUsuario + ' al sitio de FrosTech ')


        let pedido = pedir_num('Que desea pedir?\n 1)Helados\n 2)Tortas y Café\n 3)Tortas Heladas\n4)Salir', 1, 4)

        class Helados {
            constructor(nombre, categoria, precio) {
                this.nombre = nombre
                this.categoria = categoria
                this.precio = precio
            }
        }

        let cucurucho = new Helados('Cucurucho', 'Helados', 500)
        let bombones = new Helados('Bombones', 'Helados', 1000)
        let cuartoKg = new Helados('1/4kg', 'Helados', 1500)
        let medioKg = new Helados('1/2kg', 'Helados', 2000)
        let unKg = new Helados('1kg', 'Helados', 3000)
        let dosKg = new Helados('2kg', 'Helados', 3500)
        /* let helados = [cucurucho, bombones, cuartoKg, medioKg, unKg, dosKg]
        console.log(helados[0].precio) */

        let tortasYCafe = new Helados('Torta y Cafe', 'TortasYCafe', 5000)

        let tortasHeladas = new Helados('Torta Heladas', 'TortasHeladas', 4000)


        if (pedido === 1) {
            //quiere un helado
            let tipoDeHelado = pedir_num('Que helado quiere?\n 1)Cucurucho $500 \n 2)Bombones $1000 \n 3)Familiar')

            // let saldo = pedir_num('Cuanta plata tenes?', 0, 10000)


            switch (tipoDeHelado) {
                case 1:
                    //eligio cucurucho
                    calcularTotal(cucurucho.precio);
                    alert('Se añadió un ' + cucurucho.nombre + ' a su pedido')

                    continue;
                case 2:
                    //eligio bombones

                    calcularTotal(bombones.precio);
                    alert('Se añadió un ' + bombones.nombre + ' a su pedido')
                    continue;
                case 3:
                    //quiere un helado familiar
                    let cantDeKilos = pedir_num('Cuantos kg?\n 1)1/4kg\n2)1/2kg\n3)1kg\n4)2kg', 1, 4)

                    switch (cantDeKilos) {
                        case 1:
                            //eligio 1/4

                            calcularTotal(cuartoKg.precio);
                            alert('Se añadió un ' + cuartoKg.nombre + ' a su pedido')
                            continue;
                        case 2:
                            //eligio 1/2kg

                            calcularTotal(medioKg.precio);
                            alert('Se añadió un ' + medioKg.nombre + ' a su pedido')
                            continue;
                        case 3:
                            //quiere un 1kg

                            calcularTotal(unKg.precio);
                            alert('Se añadió un ' + unKg.nombre + ' a su pedido')
                            continue;
                        case 4:
                            //quiere un 2kg

                            calcularTotal(dosKg.precio);
                            alert('Se añadió un ' + dosKg.nombre + ' a su pedido')
                            continue;
                        default:
                            alert('No tenemos lo que usted quiere')
                            break
                    }
                    continue;
                default:
                    alert('No tenemos lo que usted quiere')
                    break
            }
        } else if (pedido === 2) {
            //quiere tortas y cafe


            let tipoDeTortas = pedir_num('Que torta quiere?\n 1)Brownie Merengado\n2)Lemon Pie\n3)Torta de Coco', 1, 3)

            if (tipoDeTortas == 1) {
                calcularTotal(tortasYCafe.precio);
                alert('El brownie merengado fue incluido a su pedido')
                continue

            } else if (tipoDeTortas == 2) {
                calcularTotal(tortasYCafe.precio);
                alert('El Lemon Pie fue incluido a su pedido')
                continue
            } else if (tipoDeTortas == 3) {
                calcularTotal(tortasYCafe.precio);
                alert('La Torta de Coco fue incluido a su pedido')
                continue
            } else {
                alert('No tenemos lo que usted quiere')
            }


        } else if (pedido === 3) {
            //quiere tortas heladas
            let tipoDeTortasHeladas = pedir_num('Que torta quiere?\n 1)Cheseecake\n2)Selva Negra\n3)Chocotorta', 1, 3)



            if (tipoDeTortasHeladas == 1) {
                calcularTotal(tortasHeladas.precio);
                alert('El Cheseecake fue incluido a su pedido')
                continue
            } else if (tipoDeTortasHeladas == 2) {
                calcularTotal(tortasHeladas.precio);
                alert('La Selva Negra fue incluido a su pedido')
                continue
            } else if (tipoDeTortasHeladas == 3) {
                calcularTotal(tortasHeladas.precio);
                alert('La Chocotorta fue incluido a su pedido')
                continue
            } else {
                alert('No tenemos lo que usted quiere')
            }

        } else if (pedido === 4) {
            if (confirm('Desea pedir algo más??') != true) { // que no se vaya de la pagina

                alert('Su total es de: $' + total) // y si se va que pague

                alert('Nos vemos prontos')
                break
            } else {
                continue // si logramos que se arrepienta vuelve a pedir
            }

            break
        }
        alert('El total de su pedido es de: $' + total)
    }
    else {
        for (let i = 1; i <= 3; i++) {
            console.log('Debe ingresar un usuario válido')
            nombreDelUsuario = prompt('Ingrese el nombre de su usuario')
            contraseniaDelUsuario = prompt('Ingrese la contraseña de su usuario')

            if (nombreDelUsuario === usuarioCreado.nombreUsuario && contraseniaDelUsuario === usuarioCreado.contraseniaUsuario) {
                // alert('Por su seguridad vuelva a introducir el usuario')
                continue

            } else if (i < 3) {
                console.log('Intento n°:' + (i + 1))
            } else if (i == 3) {
                alert('Usuario bloqueado , vuelva a intentarlo más tarde')
                break
            }
        }
    }
}

function pedir_num(texto, min, max) {
    let num = Number(prompt(texto))

    while (isNaN(num) || num < min || num > max) {
        alert('Por favor ingrese una opcion válida')
        num = Number(prompt(texto))
    }

    return (num)
}

function calcularTotal(precio) {

    total = Number(total + precio)

    return total
}