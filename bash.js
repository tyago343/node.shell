var commands = require('./commands.js');
var exec = require('child_process');


process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    var command = cmd.split(' ');

    if (command[0] === 'pwd') {
        commands.pwd();
    } else if (command[0] === 'date') {
        commands.date();
    } else if (command[0] === 'ls') {
        commands.ls();
    } else if (cmd.includes('echo')) {
        commands.echo(cmd);
    } else if (command[0] === 'cat') {
        commands.cat(command[1]);
    } else if (command[0] === 'head') {
        commands.head(command[1]);
    } else if (command[0] === 'tail') {
        commands.tail(command[1]);
    }else if(command[0] === 'curl'){
        commands.curl(command[1], done);
    }
   
    

    process.stdout.write('\nprompt > ');
});
 var done = function(output){
        process.stdout.write(output);
        process.stdout.write('\nprompt > ');
    }