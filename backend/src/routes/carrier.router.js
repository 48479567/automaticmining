const router = require('express').Router()
const { Carrier } = require('../models')
const { get, post, put, del } = require('../controllers/http')

router.get('/', async (req, res) => await get.getResources(req, res, Carrier, 404))
router.get('/:id', async (req, res) => await get.getResourceById(req, res, Carrier, 404))
router.post('/', async (req, res) => await post.createResource(req, res, Carrier, 400))
router.put('/:id')
router.delete('/:id')

module.exports = router