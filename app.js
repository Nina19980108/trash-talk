const express = require('express')
const exphbs = require('express-handlebars')
const generate_tarshTalk = require('./generate_trashTalk')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/trashTalk', (req, res) => {
  const target = req.query.target
  res.render('index', { trashTalk: generate_tarshTalk(target) })
})

app.listen(port, () => {
  console.log(`Trash-talk is listening on http://localhost:${port}`)
})