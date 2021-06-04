/*
 * 處理路由
 * 根據不同的方法請求設置不同的處理函數
*/
const fs = require('fs')
const Student = require('./student')
// express 提供了封裝路由的方式
const express = require('express')

// 1. 創建路由容器
const router = express.Router()

// 2.把路由都掛載到 router 路由容器中
router.get('/students', (req, res) => {
  // 讀取 JSON 文件 (第二個參數可以轉成 UTF-8 編碼 獲通過 .toString())
  // fs.readFile('./db.json', 'utf-8', (err, data) => {
  //   if (err) {
  //     return res.status(500).send('Server Error.')
  //   }
  //   // console.log(JSON.parse(data));
  //   res.render('index.html', {
  //     colors: [
  //       'red',
  //       'yellow',
  //       'blue',
  //       'green'
  //     ],
  //     students: JSON.parse(data).students
  //   })
  // })

  // 使用回掉函數

  // Student.find(function (err, students) {
  //   if (err) {
  //     return res.status(500).send('Server Error')
  //   }
  //   res.render('index.html', {
  //     colors: [
  //       'red',
  //       'yellow',
  //       'blue',
  //       'green'
  //     ],
  //     students: students
  //   })
  // })

  // 使用 Promise

  Student.find().then(students => {
    res.render('index.html', {
      colors: [
        'red',
        'yellow',
        'blue',
        'green'
      ],
      students: students
    })
  }).catch(err => {
    if (err) {
      // console.log(res.send(err));
      return res.status(500).send('Server Error')
    }
  })
})
router.get('/students/new', (req, res) => {
  res.render('new.html')
})
router.post('/students/new', (req, res) => {
  // 1. 獲取表單數據
  // 2. 處理: 數據保存到 db.json
  // 3. 發送響應
  // console.log(req.body)
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Server Error.')
    }
    console.log(res.send(data));
    var students = JSON.parse(data).students
    console.log(students);
  })

})
router.get('/students/edit', (req, res) => {

})
router.post('/students/edit', (req, res) => {

})
router.get('/students/delete', (req, res) => {

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

