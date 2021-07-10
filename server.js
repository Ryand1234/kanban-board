
var express = require('express')
var path = require('path')

let app = express()

app.use(express.static(__dirname + '/dist'));

//For All routes
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});

app.listen(process.env.PORT||3000, ()=>{
    console.log(`Server listening at: ${process.env.PORT||3000}`);
});