let numeroElegido = parseInt(prompt("elige un numero entre 1 y 20"));

for (let i = 1; i <= numeroElegido; i++) {
    if (numeroElegido >= 1 && numeroElegido <= 20) {
        console.log(`${numeroElegido} x ${i} = ${numeroElegido * i}`);   
    }
}


let factorialNumero = (numeroElegido) => {
    for (let i = 1; i <= numeroElegido; i++) {
        let respuesta = 1;
        for (let j = 1; j <= i; j++) {
            respuesta = respuesta * j;
        }
        console.log("factorial de " + i + " es: " + respuesta);
    }
}

let validarRango = (numeroElegido) => {
    if (numeroElegido >= 1 && numeroElegido <= 20) {
        factorialNumero(numeroElegido);
    } else {
        alert("numero fuera de rango");
    }
}
validarRango(numeroElegido);