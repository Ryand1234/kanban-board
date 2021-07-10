
var express = require('express')
var path = require('path')

app.use(express.static(__dirname + '/dist'));
app.use(session({secret:'ChatApp', resave:true, saveUninitialized: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

let app = express()

//For All routes
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});

app.listen(process.env.PORT||3000, ()=>{
    console.log(`Server listening at ${process.env.HOST}:${process.env.PORT||3000}`);
});