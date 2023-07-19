const yargs = require ('yargs');
const fs = require('fs');

yargs.command({
    command:'new',
    describe:'Crear tarea',
    builder:{
        titulo:{
            describe: 'Titulo de la nota',
            demandOption: true,
            type:'string'
        },
    descripcion:{
        describe:'descripcion de la tarea',
        demandOption: true,
        type:'string'
    }
    },
    handler(argv){
       const titulo = argv.titulo;
       const descripcion = argv.descripcion;

       const tarea = {
        titulo,
        descripcion
       };

       fs.writeFileSync(`${titulo}.txt`,JSON.stringify(tarea));
       console.log('tarea creada: ',titulo);
        
    }
});

yargs.parse();
