const mongoose = require("mongoose")

mongoose
.connect("mongodb://localhost")
.then(() => console.log("Base de datos conectada"))
.catch((err) => console.log("No se pudo conectar al servidor"))

