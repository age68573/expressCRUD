/*
 * 處理路由
 * 根據不同的方法請求設置不同的處理函數
*/
const fs = require('fs')

// express 提供了封裝路由的方式
const express = require('express')

// 1. 創建路由容器
const router = express.Router()

// 2.把路由都掛載到 router 路由容器中
router.get('/students', (req, res) => {
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
router.get('/students/new', (req, res) => {

})

// 3. 將 router 導出
module.exports = router





// module.exports = function (app) {
//   app.get('/students', (req, res) => {
//     // 讀取 JSON 文件 (第二個參數可以轉成 UTF-8 編碼 獲通過 .toString())
//     fs.readFile('./db.json', 'utf-8', (err, data) => {
//       if (err) {
//         return res.status(500).send('Server Error.')
//       }
//       // console.log(JSON.parse(data));
//       res.render('index.html', {
//         colors: [
//           'red',
//           'yellow',
//           'blue',
//           'green'
//         ],
//         students: JSON.parse(data).students
//       })
//     })
//   })
//   app.get('/students/new', (req, res) => {

//   })
// }

