const express = require('express')
const cors = require('cors')
const app = express()
const productoRoutes = require('./routes/productos')
const fabricanteRoutes = require('./routes/fabricantes')
const componenteRoutes = require('./routes/componentes')
const seed = require('./seeds/seed')

app.use(express.json())

app.use(cors())

// Configuración de rutas principales
app.use('/productos', productoRoutes)
app.use('/fabricantes', fabricanteRoutes)
app.use('/componentes', componenteRoutes)

const PORT = 5000

app.listen(PORT, async () => {
    await seed()
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})