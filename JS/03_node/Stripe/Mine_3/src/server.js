if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = 4242
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const express = require('express')
const exphbs = require('express-handlebars')
const stripe = require('stripe')(stripeSecretKey)
const path = require('path')

// Initialization
const app = express()

// Settings
app.set('views', path.join(__dirname, 'views')) // creates path to views directory

// Layout engine (Frontend)
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

// Middleware: Data upload/save to server
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/index'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Start Server
app.listen(PORT, () => console.log(`Running on port ${PORT}`))