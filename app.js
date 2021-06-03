const express = require('express')
const fs = require('fs')

const app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
  // 讀取 JSON 文件 (第二個參數可以轉成 UTF-8 編碼 獲通過 .toString())
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Server Error.')
    }
    // console.log(JSON.parse(data));
    res.render('index.html', {
      colors: [
        'red',
        'yellow',
        'blue',
        'green'
      ],
      students: JSON.parse(data).students
    })
  })
  
})

app.listen(3000, () => {
  console.log('express app running...');
})