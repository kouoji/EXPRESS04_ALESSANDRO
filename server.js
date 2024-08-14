//vcomo carregar do mysql através do arquivo externo

const express = require('express')
const mysql = require*('mysql2')

const mysq_config = require('./mysql.config')

const app = express
app.listen(3000,()=>{
    console.log('servidor no ar')
})

const connection = mysql.createConnection(mysq_config)

