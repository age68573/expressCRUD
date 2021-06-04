function fn (callback) {
  // var callback = function (data) { console.log(data)}

  setTimeout(() => {
    var data= 'hello'
    callback(data)
  }, 1000)
}

// 如果要獲取一個函數中異步操作的結果，需通通過回掉函數來獲取
fn(function(data) {
  console.log(data);
})