import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

//Middleware que convierte los datos a json
app.use(express.json())

app.use('/api/',employeesRoutes)
app.use('/api/',indexRoutes)

app.use((req,res) => {
    res.status(404).json({
        message: "endpoint not found"
    })
})

export default app;