

function saludar () {
    console.log("Hola! bienvenido a nuestra agenda culinaria, te ayudaremos a buscar los mejores lugares para comer. en base a tus preferencias y a lo que estes dispuesto a gastar.")
}
saludar()


let edad 

do{
    edad = parseInt (prompt("Primero ingrese su edad, por favor:"))
    
    if((edad<18)){
        alert("no cumples con los requisitos de ingreso")
    }
    
}while(isNaN(edad) || edad <=18){
    alert("Perfecto! vamos por el siguiente paso")
    
   
}

let PrefAlimenticias = prompt(" Primero veamos segun tu preferencia alimenticia, que comidas prefieres:vegetariana, vegana, celiaca o ninguna?").toLowerCase()

if(PrefAlimenticias == "vegetariana"){
    console.log ("Los mejores lugares para comer comida vegetariana en Buenos Aires son:");
} else if(PrefAlimenticias == "vegana") {
    console.log("Los mejores lugares para comer comida vegana en Buenos Aires son:");
} else if(PrefAlimenticias == " celiaca"){
    console.log("Los mejores lugares para comer comida celiaca en Buenos Aires son:");
} else if(PrefAlimenticias == "ninguna"){
    console.log("Los mejores lugares para comer en Buenos Aires son:");
} else {
    alert("Por favor, ingrese una opción válida:");

}
  
  /*let comid, postr 
  
  do{
    comid = parseInt(prompt ("Ahora veamos segun la billetera: Cuanto gastarías en comida?"))
    postr = parseInt(prompt ("Y en el postre?"))

    if (isNan(comid) || isNaN(postr)){
       alert(" Por favor ingresar numeros validos!")
    }
    
}while (isNaN(comid) || isNaN(postr)){
}   
console.log(postr + comid)*/


function sumar(comida = 0, postre = 0){
   
    return comida + postre
}
let comida = parseInt(prompt ("Ahora veamos segun la billetera: Cuanto gastarías en comida?"))
let postre = parseInt(prompt ("Y en el postre?"))

let resultado = sumar(comida, postre)

if( resultado <= 3000 && isNaN){
    console.log ("Los mejores lugares para comer por debajo de los $3000 son:");
} else if(resultado <= 5000){
    console.log("Los mejores lugares para comer por debajo de los $5000 son:");
} else if(resultado >= 5000){
    ("Por este rango de precios podes disfrutar una rica comida en:");
} else{
    alert(" Ingrese una opción válida")
} 