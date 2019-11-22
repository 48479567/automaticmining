const { getResourceById, getResources } = require('./get.controller')
const { createResource } = require('./post.controller')
const { updateResource } = require('./put.controller')

const HttpRequest = {
  get: {
    getResourceById,
    getResources
  },
  post: {
    createResource
  },
  put: {
    updateResource
  },
  del: {

  }
}

module.exports = HttpRequest