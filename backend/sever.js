const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./ConfigureBd/db');
const sql = require('mssql');
const path=require('path');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname +'../dist/Eddokena'))
app.use(cors());

sql.connect(config).then(() => {
    var taff = sql.query('Select * From UserDepot');
    return taff
}).then(result => {
    
})



const AuthRoute = require('./Controlleur/authentification');
app.use('/authentification', AuthRoute);

const Compte = require('./Controlleur/GestionCompte');
app.use('/Compte', Compte);
app.get('*/',function(req,res){
    res.sendFile(path.join(__dirname +'../dist/Eddokena/index.html'))

})
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

module.exports = sql;