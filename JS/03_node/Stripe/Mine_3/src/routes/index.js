const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    // console.log(res)
    res.render('index')
})

module.exports = router