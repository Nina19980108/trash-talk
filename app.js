const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Trash-talk is listening on http://localhost:${port}`)
})