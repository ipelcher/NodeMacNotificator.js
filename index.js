var express = require('express');
const { exec } = require("child_process");

var app = express();

app.get('/', function(req, res) {
    res.send('Noitification sended!');
    //Вывод уведомления (запуск файла noitification.py): 
    exec("python3 noitification.py", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    console.log('Noitification sended!');
})

app.listen(3000);