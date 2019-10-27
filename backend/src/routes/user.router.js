const router = require('express').Router()
const { User } = require('../models')
const { get, post, put, del } = require('../controllers/http')

router.get('/', async (req, res) => await get.getResources(req, res, User, 404))
router.get('/:id', async (req, res) => await get.getResourceById(req, res, User, 404))
router.post('/', async (req, res) => await post.createResource(req, res, User, 400))
router.put('/:id')
router.delete('/:id')

module.exports = router