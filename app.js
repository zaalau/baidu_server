const express = require('express')
const app = express()
const db = require('./db')

const cors = require('cors')
app.use(cors())

app.listen(3006, ()=>{
  console.log('api server running at http://127.0.0.1:3007')
})

app.post('',(req,res)=> {
  res.send('ok')
})
app.get('/resou',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from resoubiaoti where id >= ${req.query.firstId} and id <= ${req.query.lastId}`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/left',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from navigation where id < 11`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/right',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from navigation where id > 10`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/left/more',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from more`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/right/weather',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from everyday`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/right/pro',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from pro`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/right/city',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select ${req.query.a} from city`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/navigation/right/city/first',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from city`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/news/follow',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from follow`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/news/recommend/news',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from recommend_news where isDelete=1`
  db.query(sql,[],function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/news/recommend/news/delete',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `update recommend_news set isDelete = 0 where id=${req.query.b}`
  db.query(sql,[],function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})
app.get('/news/navigate',(req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const sql = `select * from dhlist`
  db.query(sql, function (err, results) {
    if (err) return res.send(err)
    if (results.length !== 1) return res.send({
      status: 0,
      message: '获取成功！',
      data: results,
    })
  })
})

app.use(express.urlencoded({extended: false}))



