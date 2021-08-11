if (process.nextTick.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = 4242
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const express = require('express')
const app = express()
const stripe = require('stripe')(stripeSecretKey)

app.post('/create-checkout-session', async (req, res) => {
    const domainURL = process.env.DOMAIN
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domainURL}/cancel.html`
    })
    res.redirect(303, session.url)
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))

