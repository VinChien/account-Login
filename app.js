// modules
const express = require('express');
const handlebars = require('express-handlebars');
const Router = require('./routers');

// connect to mongoose
require('./config/mongoose')

// app
const app = express()
const port = process.env.PORT || 3000

// view engine
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// app use
app.use(express.urlencoded({ extended: true }))
app.use(Router)

// start server
app.listen(port, () => {
  console.log(`server live on http://localhost:${port}`)
})