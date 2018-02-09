const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client
const request = require('request')

const config = {
  channelAccessToken: 'UmCX9fn/s2wC0tQCYHSkvNeSk2LhSJwPPeu0rt2b7K5PUhHoVOH6f/fRM3Y8smyz0MW6zf842sIUXheOh/TX0bfZXNtTI9OLqRenVgVotcaxKtiXFryPw0GGphvH9zRG6viBHVcnk50TdFPLonaEOAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '1545c8836bc3ad1e9d0bd973a95d4c3a'
}

const app = express()
const api = express.Router()

const client = new Client(config)

api.post('/webhook', middleware(config), (req, res) => {
  var event = req.body.events[0]
    client.replyMessage(event.replyToken, {
      type: 'text',
      text: 'I cannot leave a 1-on-1 chat!',
    })
    res.json(event)
})

request.get('https://api-sandbox.tiket.com/apiv1/payexpress?method=getToken&secretkey=8d28737635e60d98c4730d12aea7826f&output=json', {
  headers:{
    'User-Agent':'twh:27553439;Jago Pesan;'
  }}, (error, respo, body) =>{
  console.log(body)   
})

app.use('/api', api)

app.listen(65534)
