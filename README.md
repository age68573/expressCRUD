# Express CRUD

## 路由設計

| 請求方法 | 請求路徑         | GET 參數 | POST 參數                      | 備註             |
| -------- | ---------------- | -------- | ------------------------------ | ---------------- |
| GET      | /students        |          |                                | 渲染首頁         |
| GET      | /students/new    |          |                                | 渲染添加學生頁面 |
| POST     | /students        |          | name, age, gender, hobbies     | 處理添加學生請求 |
| GET      | /students/edit   | id       | name, age, gender, hobbies     | 渲染編輯頁面     |
| POST     | /students/edit   |          | id, name, age, gender, hobbies | 處理編輯頁面     |
| GET      | /students/delete | id       |                                | 處理刪除請求     |

