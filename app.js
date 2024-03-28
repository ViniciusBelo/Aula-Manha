const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Hello Geeks!');
    res.send('<br>');
	res.sen('Nova Linha');
    res.send('<br>');
	res.send('enviando');
});
app.listen(3000, function () {
    console.log('Servidor na porta 3000!');
});
