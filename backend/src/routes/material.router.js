const router = require('express').Router()
const { Material } = require('../models')
const { get, post, put, del } = require('../controllers/http')

router.get('/', async (req, res) => await get.getResources(req, res, Material, 404))
router.get('/:id', async (req, res) => await get.getResourceById(req, res, Material, 404))
router.post('/', async (req, res) => await post.createResource(req, res, Material, 400))
router.put('/:id')
router.delete('/:id')

module.exports = router