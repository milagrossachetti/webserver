const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Milagros Sachetti',
        title: 'Node course'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Milagros Sachetti',
        title: 'Node course'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Milagros Sachetti',
        title: 'Node course'
    });
});

app.get('*', (req, res) => {
    res.sendFile('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 