// Módulo de terceros express
const express = require('express');

// El módulo path nos permite obtener/rutas en el sistema de ficheros del servidor
const path = require('path')
//console.log(__dirname);
//console.log(__filename);


const app = express();

app.get("/", (req, res) => {
    res.send("<h1>¡Bievenido a la home de MeteoMoon! ¡Que emoción! </h1>")
});

app.get("/about-us", (req, res) => {
    // __dirname es la ruta absoluta a la carpeta donde se encuentra el script que estamos ejecutando
    // about-us.html es el fichero que queremos enviar al cliente
    // path.join nos permite construir rutas (es más seguro que hacero manualmente concatenado string);
    res.sendFile(path.join(__dirname, 'about-us.html'));
});

app.get("/convert", (req, res) => {
    const typeOfConvertion = req.query.type;
    const value = req.query.value;

    if (!typeOfConvertion || isNaN(value)) {
        return res.status(500).send("Lo siento no te he entendido, prueba convert?type=celsiusToFarhenheit&value=0 o bien convert?type=fahrenheitToCelsius&value=32");
    }

    //res.send(`Tu me has pasado ${celsius} ºC, y su valor en Farenheit es ${celsius * 1.8 + 32} F`);

    if (typeOfConvertion == "celsiusToFarhenheit") {
        res.send(`Has solicitado ${typeOfConvertion} y el valor ${value}, pero aún tengo que hacer la función`);
    } else if (typeOfConvertion == "fahrenheitToCelsius") {
        res.send(`Has solicitado ${typeOfConvertion} y el valor ${value}, pero aún tengo que hacer la función`);

    }

});

app.listen(5000);