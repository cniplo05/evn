const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const { PORT, mongoURI } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = 3000

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

// mongoose
//     .connect(mongoUri, {
//         useNewUrlParser: true,
//         userCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => console.log('MongoDB database Connected...')).catch((err) => console.log(err))

app.use('/api/reports', reportsRoutes)
app.get('/', (req,res) => res.send(
    'Hello world'
))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
