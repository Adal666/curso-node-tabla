const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    
    }

    if (listar) {
      console.log('==========================='.green);
      console.log('   Tabla del:', colors.blue(base));
      console.log('==========================='.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt creado`);
  });
};

module.exports = {
  crearArchivo,
};
