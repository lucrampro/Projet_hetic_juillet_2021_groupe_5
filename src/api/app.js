const express = require('express')
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config()
//const db = require('./config')
const influxRoutes = require('./routes/influx')
//const formationsFormsRoutes = require('./routes/formationForms')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
})

/*db.authenticate()
    .then(console.log('Connexion à la base de donnée réussie'))
    .catch(err => console.log(err + 'Echec de connexion à la base de donnée'))
    /*.then(() => usersModel.findAll()
    .then(data => console.log(data)))
    .catch(err => console.log('Echec de la connexion à la base de donnée'))*/

app.use(bodyParser.json())

app.use('/influx', influxRoutes)
//app.use('/formationForm', formationsFormsRoutes)

module.exports = app;