const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client

const app = express()
const api = express.Router()

const config = {
  channelAccessToken: 'UmCX9fn/s2wC0tQCYHSkvNeSk2LhSJwPPeu0rt2b7K5PUhHoVOH6f/fRM3Y8smyz0MW6zf842sIUXheOh/TX0bfZXNtTI9OLqRenVgVotcaxKtiXFryPw0GGphvH9zRG6viBHVcnk50TdFPLonaEOAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '1545c8836bc3ad1e9d0bd973a95d4c3a'
}

api.post('/webhook', middleware(config), (req, res) => {
  client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'I cannot leave a 1-on-1 chat!',
  })
  res.json(req.body.events)
})

app.use('/api', api)

app.listen(65534)
