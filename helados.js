class Productos {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
    }
}

let cucurucho = new Productos('Cucurucho', 'Helados', 500)
let bombones = new Productos('Bombones', 'Helados', 1000)
let cuartoKg = new Productos('1/4kg', 'Helados', 1500)
let medioKg = new Productos('1/2kg', 'Helados', 2000)
let unKg = new Productos('1kg', 'Helados', 3000)
let dosKg = new Productos('2kg', 'Helados', 3500)

let tortasYCafe = new Productos('Torta y Cafe', 'TortasYCafe', 5000)

let tortasHeladas = new Productos('Torta Heladas', 'TortasHeladas', 4000)


// let helados = [cucurucho, bombones, cuartoKg, medioKg, unKg, dosKg]
// console.log(helados)

// console.log(helados[1].nombre)

// helados.forEach((elm) => console.log(elm.nombre, '$' + Number(elm.precio)))

let productos = [cucurucho, bombones, cuartoKg, medioKg, unKg, dosKg, tortasYCafe, tortasHeladas]


let helados = productos.filter((elm) => elm.categoria == 'Helados')

productos.forEach((elm) => console.log(elm.nombre, elm.precio, elm.categoria))





total = productos.reduce((acc, elm) => acc + elm.precio, 0)

console.log(total)



console.log(helados)
