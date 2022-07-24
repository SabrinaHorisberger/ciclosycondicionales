

const divSaludo = document.getElementById ('saludo')
console.log(document.getElementById ('saludo').childNodes)


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
const restaurantesVegetarianos = [restaurante1,restaurante3,restaurante5,restaurante9]
const restaurantesCeliacos = [ restaurante4, restaurante8]
const restaurantesSinpref = [restaurante6, restaurante7]

const divRestaurantes = document.getElementById ('restaurantes')

restaurante.forEach(restauranteArray => {  
      divRestaurantes.innerHTML += `
      <div id= "restaurante ${restauranteArray.id}"class ="restaurante">
      <p> ${restauranteArray.nombre}  <p>
      </div>
      `
})

restaurante.forEach(restaurante => {
    console.log (restaurante.nombre)
})


const preferenciasElegir = document.getElementById('preferenciaselegir')

const preferencias = document.getElementById ('preferencias')

preferencias.addEventListener('input', () => {
    console.log (preferencias.value)
    
    if(preferencias.value == "vegetariana"){
        restaurantesVegetarianos.forEach(restaurantesVegetarianos => {
           // const restaurantesElegidos = document.getElementById( 'restauranteselegidos' + `${restaurantesVegetarianos.nombre}`)
            console.log ("Los mejores lugares para comer comida vegetaria en Buenos Aires son: " + `${restaurantesVegetarianos.nombre}`)
            
        })
      } else if(preferencias.value == "vegana") {
          restaurantesVeganos.forEach(restaurantesVeganos => {
              console.log ("Los mejores lugares para comer comida vegana en Buenos Aires son: " + `${restaurantesVeganos.nombre}`)
              
          })
      } else if(preferencias.value == "celiaca"){
        restaurantesCeliacos.forEach(restaurantesCeliacos => {
            console.log ("Los mejores lugares para comer comida celiaca en Buenos Aires son: " + `${restaurantesCeliacos.nombre}`)
            
        })

      } else if(preferencias.value == "ninguna"){
        restaurantesSinpref.forEach(restaurantesSinpref=> {
            console.log ("Los mejores lugares para comer cualquier tipo de comida en Buenos Aires son: " + `${restaurantesSinpref.nombre}`)
       
        })
      } 

      // else {
         // alert("Por favor, ingrese una opción válida:");
  // }  
})



restauranteprecio.innerHTML += "<p>Ahora veamos segun la billetera: Cuanto gastarías en comida? </p>"
console.log(document.getElementById('restauranteprecio'))

precio1.addEventListener('input', () =>{
    console.log (precio1.value)




/*restaurantepreciopostre.innerHTML += "<p> Y en el postre? </p>"
console.log(document.getElementById('restaurantepreciopostre'))

precio2.addEventListener('input', () =>{
    console.log (precio2.value)

})


function sumar( precio1= 0, precio2= 0){
    return precio1 + precio2.value

}

let resultado = sumar(precio1, precio2)

console.log("el resultado es" + resultado)*/

if( precio1.value <= 3000 && isNaN){

    const restoDebajoigual3000 = restaurante.filter (restaurante => restaurante.precio <= 3000)
    
     restoDebajoigual3000.forEach ( restaurante => {
         console.log( "Los mejores lugares para comer por debajo de los $3000 son:" + restaurante.nombre )
    })
     
 } else if(precio1.value <= 5000){

     const restoDebajoigual5000 = restaurante.filter (restaurante => restaurante.precio <= 5000)
    
     restoDebajoigual5000.forEach ( restaurante => {
         console.log( "Los mejores lugares para comer por debajo de los $5000 son:" + restaurante.nombre )
     })
     
 } else if(precio1.value >= 5000){
    ("Por este rango de precios podes disfrutar una rica comida en todos los restaurantes que participan en nuestra agenda culinaria");
 } 
 
})//else{
   //  alert(" Ingrese una opción válida")
 //} 


////const input1 = document.getElementById ('input1')
///input1.addEventListener('input', () => {
  //  console.log ("Hola")  
//})*/