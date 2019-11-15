const express = require('express')
const router = express.Router()

router.use('/carrier', require('./carrier.router'))
router.use('/chequer', require('./chequer.router'))
router.use('/company', require('./company.router'))
router.use('/distance', require('./distance.router'))
router.use('/location', require('./location.router'))
router.use('/material', require('./material.router'))
router.use('/price', require('./price.router'))
router.use('/provider', require('./provider.router'))
router.use('/travel', require('./travel.router'))
router.use('/truck', require('./truck.router'))
router.use('/user', require('./user.router'))
router.use('/work', require('./work.router'))

module.exports = router