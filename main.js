//Login
// \
//variables

const admin = {
    nombreDeAdmin: 'admin',
    contraniaDeAdmin: 'admin',
}

class UsuarioNormal {
    constructor(nombre, contrasenia, mail) {
        this.nombreUsuario = nombre
        this.contraseniaUsuario = contrasenia
    }
}



// let usuarioCreado = new UsuarioNormal('Gonzalo', 'gonzalo123')
// let usuarioCreado2 = new UsuarioNormal('Pepe', 'Pepe123')



let usuarioCreado

function crearUsuario() {

    nombre = prompt('Ingrese el nombre de su NUEVO usuario')
    contrasenia = prompt('Ingrese la contraseña de su NUEVO usuario')
    mail = prompt('Ingrese el mail de su NUEVO usuario')

    usuarioCreado = new UsuarioNormal(nombre, contrasenia, mail)

    return usuarioCreado
}
console.log(crearUsuario())




// crearUsuario(nombreDelUsuario, contraseniaDelUsuario)


let nombreDelUsuario = prompt('Ingrese el nombre de su usuario')
let contraseniaDelUsuario = prompt('Ingrese la contraseña de su usuario')
let total = 0

while (true) {
    if (nombreDelUsuario === admin.contraniaDeAdmin && contraseniaDelUsuario === admin.contraniaDeAdmin) {
        console.log('Bienvenido al perfil de administrador')
    } else if ((nombreDelUsuario === usuarioCreado.nombreUsuario && contraseniaDelUsuario === usuarioCreado.contraseniaUsuario)
        && nombreDelUsuario !== '' || contraseniaDelUsuario !== '') {
        console.log('Bienvenido ' + nombreDelUsuario + ' al sitio de FrosTech ')


        let pedido = pedir_num('Que desea pedir?\n 1)Helados\n 2)Tortas y Café\n 3)Tortas Heladas\n4)Salir', 1, 4)
        let precioCucurucho = 500
        let precioBombones = 1000
        let precioFamiliar1 = 1500
        let precioFamiliar2 = 2000
        let precioFamiliar3 = 2500
        let precioFamiliar4 = 3000
        let precioFamiliar5 = 3500
        let precioTortasYCafe = 5000
        let precioTortasHeladas = 4000

        if (pedido === 1) {
            //quiere un helado
            let gustoDeHelado = pedir_num('Que helado quiere?\n 1)Cucurucho $500 \n 2)Bombones $1000 \n 3)Familiar')

            // let saldo = pedir_num('Cuanta plata tenes?', 0, 10000)


            switch (gustoDeHelado) {
                case 1:
                    //eligio cucurucho
                    calcularTotal(precioCucurucho);
                    alert('Se añadió un cucurucho a su pedido')

                    continue;
                case 2:
                    //eligio bombones

                    calcularTotal(precioBombones);
                    alert('Se añadió un bombon a su pedido')
                    continue;
                case 3:
                    //quiere un helado familiar
                    let cantDeKilos = pedir_num('Cuantos kg?\n 1)1/4kg\n2)1/2kg\n3)1kg\n4)1 1/2kg\n5)2kg', 1, 5)

                    switch (cantDeKilos) {
                        case 1:
                            //eligio 1/4

                            calcularTotal(precioFamiliar1);
                            alert('Se añadió un 1/4 kg a su pedido')
                            continue;
                        case 2:
                            //eligio 1/2kg

                            calcularTotal(precioFamiliar2);
                            alert('Se añadió un 1/2 kg a su pedido')
                            continue;
                        case 3:
                            //quiere un 1kg

                            calcularTotal(precioFamiliar3);
                            alert('Se añadió un 1 kg a su pedido')
                            continue;
                        case 4:
                            //quiere un 1 1/2 kg

                            calcularTotal(precioFamiliar4);
                            alert('Se añadió un 1 1/2 kg a su pedido')
                            continue;
                        case 5:
                            //quiere un 2kg

                            calcularTotal(precioFamiliar5);
                            alert('Se añadió un 2kg a su pedido')
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


            let tortasYCafe = pedir_num('Que torta quiere?\n 1)Brownie Merengado\n2)Lemon Pie\n3)Torta de Coco', 1, 3)

            if (tortasYCafe == 1) {
                calcularTotal(precioTortasYCafe);
                alert('El brownie merengado fue incluido a su pedido')
                continue

            } else if (tortasYCafe == 2) {
                calcularTotal(precioTortasYCafe);
                alert('El Lemon Pie fue incluido a su pedido')
                continue
            } else if (tortasYCafe == 3) {
                calcularTotal(precioTortasYCafe);
                alert('La Torta de Coco fue incluido a su pedido')
                continue
            } else {
                alert('No tenemos lo que usted quiere')
            }


        } else if (pedido === 3) {
            //quiere tortas heladas
            let tortasHeladas = pedir_num('Que torta quiere?\n 1)Cheseecake\n2)Selva Negra\n3)Chocotorta', 1, 3)



            if (tortasHeladas == 1) {
                calcularTotal(precioTortasHeladas);
                alert('El Cheseecake fue incluido a su pedido')
                continue
            } else if (tortasHeladas == 2) {
                calcularTotal(precioTortasHeladas);
                alert('La Selva Negra fue incluido a su pedido')
                continue
            } else if (tortasHeladas == 3) {
                calcularTotal(precioTortasHeladas);
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

    total = total + precio

    return total
}