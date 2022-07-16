

function saludar () {
    alert("Hola! bienvenido a nuestra agenda culinaria, te ayudaremos a buscar los mejores lugares para comer  en base a tus preferencias y a lo que estes dispuesto a gastar.")
}
saludar()


let edad 

do{
    edad = parseInt (prompt("Primero ingrese su edad, por favor:"))
    
    if((edad<18)){
        alert("no cumples con los requisitos de ingreso")
    }
    
}while(isNaN(edad) || edad <=18){
    alert("Bienvenido!")
    
   
}

alert ("Los restaurantes que participan de nuestra agenda son:")

class Restaurante{
    constructor(id, tipo, nombre, precio){
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio 
    }
}
const restaurante1 = new Restaurante (1, "vegetariana", "La Lucila Restaurant", 6000)
const restaurante2 = new Restaurante (2, "vegana", "Radicheta", 8000)
const restaurante3 = new Restaurante (3, "vegetariana", "Restaurante Pepe", 2000)
const restaurante4 = new Restaurante (4, "celiaca", "Lopez Cocina", 3500)
const restaurante5 = new Restaurante (5, "vegetariano", "Tomates locos", 2500)
const restaurante6 = new Restaurante (6, "sin preferencias", "Parrilla Don Carlos", 5000)
const restaurante7 = new Restaurante (7, "sin preferencias", "Suki", 3800)
const restaurante8 = new Restaurante (8, "celiaca", "Rosita", 4600)
const restaurante9 = new Restaurante (9, "vegetariana", "All green", 2000)
const restaurante10 = new Restaurante (10, "vegana", "Panda Restaurante", 3000)

const restaurante = [restaurante1, restaurante2, restaurante3, restaurante4, restaurante5, restaurante6, restaurante7, restaurante8, restaurante9, restaurante10]
const restaurantesVeganos = [restaurante2, restaurante10]

restaurante.forEach(restaurante => {
    console.log (restaurante.nombre)
})

let PrefAlimenticias = prompt(" Ahora veamos segun tu preferencia alimenticia, que comidas prefieres:vegetariana, vegana, celiaca o ninguna?").toLowerCase()

if(PrefAlimenticias == "vegetariana"){
  console.log ("Los mejores lugares para comer comida vegetariana en Buenos Aires son:" + restaurante[0].nombre + ", "  + restaurante[2].nombre + ", " + restaurante[4].nombre + " y " + restaurante[8].nombre);
} else if(PrefAlimenticias == "vegana") {
    restaurantesVeganos.forEach(restaurantesVeganos => {
        console.log("Los mejores lugares para comer comida vegana en Buenos Aires son: " + restaurantesVeganos.nombre);
    })
} else if(PrefAlimenticias == "celiaca"){
    console.log("Los mejores lugares para comer comida celiaca en Buenos Aires son:" + restaurante[4].nombre + " y " + restaurante[7].nombre);
} else if(PrefAlimenticias == "ninguna"){
    console.log("Los mejores lugares para comer en Buenos Aires son:" + restaurante[5].nombre + " y  " + restaurante[6].nombre );
} else {
    alert("Por favor, ingrese una opción válida:");

}
  
function sumar(comida = 0, postre = 0){
   
    return comida + postre
}
let comida = parseInt(prompt ("Ahora veamos segun la billetera: Cuanto gastarías en comida?"))
let postre = parseInt(prompt ("Y en el postre?"))

let resultado = sumar(comida, postre)

if( resultado <= 3000 && isNaN){

    const restoDebajoigual3000 = restaurante.filter (restaurante => restaurante.precio <= 3000)
    
    restoDebajoigual3000.forEach ( restaurante => {
        console.log( "Los mejores lugares para comer por debajo de los $3000 son:" + restaurante.nombre )
    })
     
} else if(resultado <= 5000){

    const restoDebajoigual5000 = restaurante.filter (restaurante => restaurante.precio <= 5000)
    
    restoDebajoigual5000.forEach ( restaurante => {
        console.log( "Los mejores lugares para comer por debajo de los $5000 son:" + restaurante.nombre )
    })
     
} else if(resultado >= 5000){
    ("Por este rango de precios podes disfrutar una rica comida en todos los restaurantes que participan en nuestra agenda culinaria");
} else{
    alert(" Ingrese una opción válida")
} 

