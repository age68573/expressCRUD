const express = require('express')
const router = require('./router')

const app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

router(app)

app.listen(3000, () => {
  console.log('express app running...');
})