const express = require("express");
const jsonServer = require("json-server");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 5000);

//middlewares
app.use('/api', jsonServer.router('./database.json'));
app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');



//routers
app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(app.get('port'), () => {
    console.log("Server is running on port 5000");
});
