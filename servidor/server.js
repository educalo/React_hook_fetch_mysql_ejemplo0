const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

//conexion con la bd
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'', 
    database: 'test'
});

//req es un objeto que contiene información sobre la solicitud HTTP que generó el evento. En respuesta a req, utiliza respara enviar la respuesta HTTP deseada.
app.get('/', (re, res) => {
    return res.json("Lado servidor");
})

app.get('/books', (req, res) => {
    const sql ="select * from books";
    db.query(sql, (err, data) => {
        if(err) return req.json(err);
        return res.json(data);
    })
})

app.listen(3000, () =>{
    console.log("escuchando");
})