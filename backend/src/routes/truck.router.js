const router = require('express').Router()
const { Truck } = require('../models')
const { get, post, put, del } = require('../controllers/http')

router.get('/', async (req, res) => await get.getResources(req, res, Truck, 404))
router.get('/:id', async (req, res) => await get.getResourceById(req, res, Truck, 404))
router.post('/', async (req, res) => await post.createResource(req, res, Truck, 400))
router.put('/:id')
router.delete('/:id')

module.exports = router