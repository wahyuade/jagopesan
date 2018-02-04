const express = require('express')
const https = require('https')

const app = express()
const api = express.Router()

api.post('/webhook', (req, res) => {
  res.json({})
})

app.get('/', (req, res) => {
  res.json({message:'mantab'})
})

app.use('/api', api)

app.listen(65534)
