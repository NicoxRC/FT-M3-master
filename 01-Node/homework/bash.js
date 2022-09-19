//console.log(Object.keys(process))

const commands = require('./commands/index')

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    // if(cmd === 'date') process.stdout.write(Date())
    // if (cmd === 'pwd') process.stdout.write(process.cwd());
    if(commands[cmd]){
        commands[cmd]();
    }else{
        process.stdout.write('Command not found.')
    }
    process.stdout.write('\nprompt >');
});