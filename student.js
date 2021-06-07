/** 
 * 數據操作文件模塊
 * 操作文件中的數據，只處理數據
 * 
 * 
 */
const fs = require('fs')
const dbPath = './db.json'
/**
 * 獲取所有學生列表
 * callback 中的參數
 *  第一個是 err
 *    成功是 null
 *    錯誤是 錯誤對象
 *  第二個是結果
 *    成功是 數組
 *    錯誤是 undifind
 */

// exports.find = function (callback) {
//   // var callback = function (err, students) {}
//   fs.readFile(dbPath, 'utf8', (err, data) => {
//     if (err) {
//       return callback(err)
//     }
//     callback(null, JSON.parse(data).students)
//   })
// }

exports.find = function () {
  return new Promise ((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(JSON.parse(data).students)
    })
  })
}

/**
 * 根據 id 獲取學生信息對象
 * @param {Number} id 學生id
 * @param {Function} callback  回調函數
 */
exports.findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var res = students.find(item => {
      return item.id === parseInt(id)
    })
    callback(null, res)
  })
}

/**
 * 添加保存學生
 */

exports.save = function (student) {
  return new Promise((resolve, reject) => {
    console.log(student);
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      var students = JSON.parse(data).students
      student.id = students[students.length - 1].id + 1 // 處理 id 
      // 把用戶傳遞的對象保存到陣列中
      students.push(student)
      // 把對象轉成字串
      var fileData = JSON.stringify({
        students: students
      })
      // 把字串寫入文件中
      fs.writeFile(dbPath, fileData, err => {
        if (err) {
          return reject(err)
        }
        resolve(fileData)
      })
    })
  })
  
}

/**
 * 更新學生
 */

 exports.updateById = function (student, callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    // 要修改誰，就需要把誰找出來 (根據 id)
    student.id = parseInt(student.id)
    var stu = students.find(item => {
      return item.id === student.id
    })
    // 遍例拷貝對象
    for (var key in student) {
      stu[key] = student[key]
    }
    
    var fileData = JSON.stringify({
      students: students
    })

    fs.writeFile(dbPath, fileData, (err) => {
      if (err) {
        // 錯誤就是把錯誤對象傳遞給她
        return callback(err)
      }
      callback(null)
    })
  })
}
/**
 * 刪除學生
 */

 exports.deleteById = function (id, callback) {
  // 1. 獲取要刪除的 id
  // 2. 根據 id 執行刪除操作
  // 3. 根據操作結果發送響應數據
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var deleteId = students.findIndex(item => {
      return item.id === parseInt(id)
    })
    students.splice(deleteId, 1)
    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dbPath, fileData, err => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}