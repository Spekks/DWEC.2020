function calcularLetra(dni) {
    if (dni != null) {
        console.log(dni);
        let numeroDNI = dni.substr(0, 8);
        let letraDNI = dni.substr(-1);

        for (i=0; i<10; i++) {
            if (isNaN(numeroDNI[i])) {
                console.warn(numeroDNI[i] + " no es un número.");
            } else {
                console.log(numeroDNI[i] + " es un número.");
            }
        }
    } else {
        console.alert("No has introducido nada.");
    }
};
