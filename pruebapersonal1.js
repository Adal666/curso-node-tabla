const yargs = require ('yargs');
const fs = require('fs');

yargs.command({
    command:'crear',
    describe:'Crear nota',
    builder:{
        titulo:{
            describe: 'Titulo de la nota',
            demandOption: true,
            type:'string'
        },
    contenido:{
        describe:'Contenido de la nota',
        demandOption: true,
        type:'string'
    }
    },
    handler(argv){
       const titulo = argv.titulo;
       const contenido = argv.contenido;

       const nota = {
        titulo,
        contenido
       };

       fs.writeFileSync(`${titulo}.txt`,JSON.stringify(nota));
       console.log('Nota creada: ',titulo);
        
    }
});

yargs.parse();
