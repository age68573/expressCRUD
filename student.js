/** 
 * 數據操作文件模塊
 * 操作文件中的數據，只處理數據
 * 
 * 
 */
const fs = require('fs')
const dbPath = './ddb.json'
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
 * 添加保存學生
 */

 exports.save = function () {
  
}

/**
 * 更新學生
 */

 exports.update = function () {
  
}
/**
 * 刪除學生
 */

 exports.delete = function () {
  
}