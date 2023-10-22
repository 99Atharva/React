const express = require('express')
const app = express()
const cors = require('cors')
const port = 5050
const db = require('../DB/db.js')

app.use(express.json());
app.use(cors())

app.get('/users',cors(),db.getUsers)
app.post('/add',cors(),db.createUser)
app.get('/u',()=>{console.log("opening link")})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})