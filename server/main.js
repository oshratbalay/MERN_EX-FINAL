const express = require('express')
const app = express()

const cors = require('cors')


require('./config/database')
require('./BLL/studentsBLL')
app.use(cors())
app.use(express.json())

const studentRouter = require("./Router/studentRouter")
app.use('/students',studentRouter)

app.listen(8000,()=> console.log("listen to port 8000"))