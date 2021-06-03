module.exports = function (app) {
  const fs = require('fs')
  app.get('/students', (req, res) => {
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
  app.get('/students/new', (req, res) => {

  })
}

