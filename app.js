/*
  創建服務
  服務相關配置
    模板引擎
    body-parser 解析 POST 請求
    提供靜態服務資源
  掛載路由
  監聽端口
*/

const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')

const app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

// 配置板模引擎及 body-parser 一定要在 app.use(router) 掛載路由之前
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

// 把路由容器掛載到 app 服務中
app.use(router)

app.listen(3000, () => {
  console.log('express app running...');
})