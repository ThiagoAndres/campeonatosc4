const express = require("express")
const { usuarios } = require("./datos.js")
const cors = require("cors");

const app = express();
app.use(cors());

//API HOME: Rutas, endpoint y API
app.get("/", (req, res) =>{
    res.send("Hola al mundo dev");
});

//API CONSULTAR
app.get("/usuario/consultar/:name", (req, res) => {
    const nombre = req.params.name;
    const user = usuarios.find(p => p.title.toLowerCase() == nombre.toLowerCase());
    res.send(user);
    //res.send(`Consultando  ${nombre} ...`)
})

app.listen(8080,()=>{
    //collback, trabaja de manera sincrónica al proceso que termina
    console.log("Servidor corriendo en el puerto 8080...")
});


