const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite = 10) => {

    console.log('========================'.yellow);
    console.log(`=======Tabla de ${base}=======`.yellow);
    console.log('========================'.yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.red);;
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor introdicido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) rejects(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}