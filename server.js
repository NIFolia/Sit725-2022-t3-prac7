var express = require("express")
var app = express()
var cors = require("cors")
let dbConnect = require("./dbConnect")
let projectRouters = require("./routes/projectRoutes")
//let projectCollection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRouters)

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to http://localhost:" + port)
})