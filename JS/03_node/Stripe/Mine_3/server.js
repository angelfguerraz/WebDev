if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = 4242
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const express = require('express')
const app = express()
const stripe = ('stripe')(stripeSecretKey)


app.listen(PORT, () => console.log(`Running on port ${PORT}`))