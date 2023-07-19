const yargs = require ('yargs');
const fs = require('fs');

yargs.command({
    command:'nuevo',
    describe:'Crear tarea',
    builder:{
        nombre:{
            describe: 'nombre de la persona',
            demandOption: true,
            type:'string'
        },
    edad:{
        describe:'edad de la tarea',
        demandOption: true,
        type:'int'
    }
    },
    handler(argv){
       const nombre = argv.nombre;
       const edad = argv.edad;

       const tarea = {
        nombre,
        edad
       };

       //fs.writeFileSync(`${nombre}.txt`,JSON.stringify(edad));
       console.log('nombre y edad (en el 2030) creada: ',nombre, edad+7);
        
    }
});

yargs.parse();
