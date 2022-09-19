var fs = require('fs');

function date() {
    process.stdout.write(Date());
}

function pwd() {
    process.stdout.write(process.cwd())
}

function ls() {
    fs.readdir('.', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            process.stdout.write(`${file.toString()}\n`);
        })
        process.stdout.write("prompt > ");
    })
}

module.exports = {
    date,
    pwd,
    ls,
}