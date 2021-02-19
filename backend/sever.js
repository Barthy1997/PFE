const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./ConfigureBd/db');
const sql=require('mssql');
const session=require('express-session');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

(async()=>{
    try {
        let text="bonjour"
        let sel= bcrypt.genSalt(10)
        let hash= bcrypt.hash(text,sel)
        console.log(hash)
        console.log('jdjkdkj')
    }catch(error)
    {
  console.log('jjsjjs')
    }

})
   

sql.connect(config).then(()=>{
    var taff=sql.query('Select * From UserDepot');
    return taff
}).then(result => {
    //console.log(result)
})

const AuthRoute = require('./Controlleur/authentification');
app.use('/authentification', AuthRoute);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
module.exports=sql;

