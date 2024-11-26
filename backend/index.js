const express = require('express')
const app = express()
const mysql =require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sudentdb'
})
const port = 8080



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))