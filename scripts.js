// Callback function, é uma função passada para outra função como argumento.

function execute(taskName, Callback) {
    console.log(`Executando tarefa: ${taskName}`);

    Callback();
}

function Callback() {
    console.log('Tarefa completada.');
}

// Example of using the execute function with a callback
execute('Download file', Callback);

// Callback function with parameters
execute('Upload file', function() {
    console.log('Task completed with parameters!');
}
);

// Utilizando uma arrow function como callback
execute('Excluindo arquivo', () => {
    console.log('Arquivo excluído com sucesso');
});

execute('Salvando arquivo', () => console.log('Arquivo salvo com sucesso'));