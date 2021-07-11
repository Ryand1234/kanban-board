
const express = require('express')
var path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()

const queryToDatabase = require('./src/util/db')

let app = express()

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/query', async(req, res)=>{
    const data = await queryToDatabase(req.body.data, req.body.op)
    res.status(200).json(data)
})

//For All routes
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});

app.listen(process.env.PORT||3000, async()=>{
    console.log(`Server listening at: ${process.env.PORT||3000}`);
});