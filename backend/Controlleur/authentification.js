const express = require('express');
const AuthRoute = express.Router();
const config = require('../ConfigureBd/db');
const sql = require('mssql');
const brypt = require('bcrypt');
var jwt = require("jsonwebtoken");
let jwt_secret = "hdhzfghzhgszghsbgshh5262626626JDHSG";
let code;
let token;



AuthRoute.route('/inscriptionCommercial').post(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        let salt = brypt.genSaltSync(10)
        let hash = brypt.hashSync(req.body.password, salt)
        const commercial = await sql.query("INSERT INTO Commercial VALUES('" + req.body.nom + "','" + req.body.prenom + "','" + req.body.codecommercial + "','" + hash + "')");
        res.json(commercial)
    } catch (error) {
        console.log('PLus')

    }
});


AuthRoute.route('/inscriptionClient').post(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        let salt = brypt.genSaltSync(10)
        let hash = brypt.hashSync(req.body.password, salt)
        const client = await sql.query("INSERT INTO Client VALUES('" + req.body.nom + "','" + req.body.prenom + "','" + req.body.codecommercial + "','" + req.body.codeclient + "','" + req.body.categorie + "','" + hash + "')");
        res.json(client)
    } catch {
        console.log('Erreur')

    }

});


AuthRoute.route('/login').post(async (req, res) => {

    try {
        const reponse = await sql.connect(config);
        const request = await sql.query("SELECT password From Client where nom='" + req.body.Username + "'");
        for (var i = 0; i < request.rowsAffected; i++) {
            code = brypt.compareSync(req.body.password, request.recordset[i].password);
            if (code===true) {
                code = true;
            }
            else {
                code = false;
            }
        }
        if (code===true) {
            const user = req.body.Username;
            token = await jwt.sign({
                user
            }, jwt_secret, {
                expiresIn: '2h'
            });
            res.json(token);
            console.log('Envoi token')
        }
        else {
            res.json(err)
            console.log('Erreurs', code)
        }

    } catch (error) {
        console.log('Erreur')

    }
})


AuthRoute.route('/authorisation').post(async (req, res) => {
    const header = res.header('x-token', token)
    console.log('bonjour',req.headers['authorization']);
    console.log(res.header('x-token'))
    jwt.verify(header, token, (err, token) => {
        if (err) {
            res.sendStatus(403)
            console.log('erreur authentification')
        }
        else {
            res.json(token)
            console.log('succès')
        }
    })


})
module.exports = AuthRoute;


