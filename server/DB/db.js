const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Login',
  password: 'QuzorCube',
  port: 5432,
})
client.connect(function(err) {
  if (err) {
    console.log("Not Connected");
  }
  else
  console.log("Connected!");
})



const getUsers = (req, res) => {
  client.query('SELECT * FROM login_details', (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
} 

const createUser = (req, res) => {
  const { email, password } = req.body

   client.query('INSERT INTO login_details (email, password) VALUES ($1,$2) RETURNING *', [email,password], (err, results) => {
    if (err) {
      throw err
    }
    res.status(201).send(alert(`Succesfully inserted user`))
  })
}

module.exports = {
  getUsers, 
  createUser
}