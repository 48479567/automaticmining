const router = require('express').Router()
const { Company } = require('../models')
const { get, post, put, del } = require('../controllers/http')

router.get('/', async (req, res) => await get.getResources(req, res, Company, 404))
router.get('/:id', async (req, res) => await get.getResourceById(req, res, Company, 404))
router.post('/', async (req, res) => await post.createResource(req, res, Company, 400))
router.put('/:id', async (req, res) => await put.updateResource(req, res, Company, 400))
router.delete('/:id')

module.exports = router