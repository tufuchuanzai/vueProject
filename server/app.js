const express = require('express') // 引入 express
const app = express() // 实例一个 express 对象
app.use(require('cors')()) // 解决跨域
app.use(express.json()) // express处理json数据

const mysql = require('mysql'); //调用 MySQL模块

// 创建连接
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 用户名
  password: 'root', // 密码
  database: 'vuedata',// 数据库名
  port: 3306   // 端口号
})
db.connect((err) => {
  if (err) throw err;
  console.log('连接成功');
})


app.get('/', (req, res) => {
  res.send('index')
})


app.get('/api/insert', (req, res) => {

  console.log('插入数据执行');

  let name = req.query.name;
  let room = req.query.room;
  let classe = req.query.class;
  let age = req.query.age;
  let phone = req.query.phone;
  let sex = req.query.sex;
  let sql = 'INSERT INTO tabledata(name,class,phone,room,age,sex) VALUES (?,?,?,?,?,?)'
  db.query(sql, [name, classe, phone, room, age, sex], (err, result) => {
    if (err) {
      res.send(err);
      console.log("这里出错了")
    } else {
      res.send(result);
      console.log("执行成功")
    }
  })

})

// 获取数据
app.get('/api/data', (req, res) => {
  console.log('获取数据执行');
  let sql = "SELECT * FROM tabledata order by room";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {

      res.json(result);
    }
  })
})
// 获取管理员信息
app.get('/api/root', (req, res) => {
  console.log('获取管理员信息执行');
  let sql = "SELECT * FROM user";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
})


// 删除数据
app.get('/api/delete', (req, res) => {
  let name = req.query.name;
  let sql = `DELETE FROM tabledata WHERE name= (?)`;
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);


    }
  })
})
// 登录
app.get('/api/login', (req, res) => {
  let name = req.query.name;
  let password = req.query.password;
  console.log(name + password);
  let sql = `SELECT * FROM user where name=(?) and password =(?)`;
  db.query(sql, [name, password], (err, result) => {
    if (result.length == 0) {
      console.log('返回错误');
      err = new Error("账号或密码错误");
      res.status(404);
      res.send(err);
    } else {
      console.log('返回成功');
      console.log(result);
      res.send(result);


    }
  })
})





//修改数据
app.get('/api/change', (req, res) => {
  console.log('执行修改');
  let oldName = req.query.oldName;
  let newName = req.query.newName;
  let room = req.query.room;
  let classe = req.query.class;
  let age = req.query.age;
  let phone = req.query.phone;
  let sex = req.query.sex;



  let sql = `UPDATE tabledata SET name=(?),class=(?),phone=(?),room=(?),age=(?),sex=(?) WHERE name =(?)`
  db.query(sql, [newName, classe, phone, room, age, sex, oldName], (err, result) => {
    if (err) {
      console.log("修改失败");
      res.send(err);
    } else {
      console.log('修改成功')
      res.send(result);
    }
  })
})
//请求时间方法
app.get('/api/time', (req, res) => {
  console.log('获取时间执行');
  let newtime = req.query.newtime;
  let result1;
  let sql = "SELECT * FROM  time ";
  let sql2 = "UPDATE time SET time = (?) WHERE id = '1'";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      result1 = result;
    }
  })
  db.query(sql2, [newtime], (err, result) => {
    if (err) {
      console.log(err);
    } else {


      res.json(result1);

    }
  })




})


// 监听端口3000
app.listen(3000, () => {
  console.log('http://localhost:3000/')
})

