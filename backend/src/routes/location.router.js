const router = require('express').Router()
const { Location } = require('../models')
const { get, post, put, del } = require('../controllers/http')

router.get('/', async (req, res) => await get.getResources(req, res, Location, 404))
router.get('/:id', async (req, res) => await get.getResourceById(req, res, Location, 404))
router.post('/', async (req, res) => await post.createResource(req, res, Location, 400))
router.put('/:id', async (req, res) => await put.updateResource(req, res, Location, 400))
router.delete('/:id')

module.exports = router