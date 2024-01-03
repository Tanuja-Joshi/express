const express = require('express')
const path=require('path')
const app = express()
const port = 3000

// const tanumiddleware=(req,res,next)=>{
//     console.log(req)
//     next()
// }

app.use(express.static(path.join(__dirname,'public')))
// app.use(tanumiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+ req.params.name)
})
app.get('/about', (req, res) => {
    //res.send('This is about page!!')
    res.json({"Name":"Tanuja"})
  })
  app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})