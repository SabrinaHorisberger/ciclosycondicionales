






// Algoritmo con condicionales:

let PrefAlimenticias = prompt("Ingrese su preferencia Alimenticia:").toLowerCase()

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

let numero = parseInt(prompt( " Cuánto estas dispuesto a gastar?"))

if( numero <= 3000 && isNaN){
    console.log ("Los mejores lugares para comer por debajo de los $3000 son:");
} else if(numero <= 5000){
    console.log("Los mejores lugares para comer por debajo de los $5000 son:");
} else if(numero >= 5000){
    ("Por este rango de precios podes disfrutar una rica comida en:");
} else{
    alert(" Ingrese una opción válida")
}

//Algoritmo con ciclos

let edad 

do{
    edad = parseFloat (prompt("Ingrese su edad, por favor:"))


}while(isNaN(edad) || edad <=18){
    alert("Puede ingresar")
    
   
}