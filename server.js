const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('/', function(req,res){
  res.send('index.html')
})

app.listen(3000, function(){
  console.log('catching a lift on port 3000')
})
