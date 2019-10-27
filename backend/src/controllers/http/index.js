const { getResourceById, getResources } = require('./get.controller')
const { createResource } = require('./post.controller')

const HttpRequest = {
  get: {
    getResourceById,
    getResources
  },
  post: {
    createResource
  },
  put: {

  },
  del: {

  }
}

module.exports = HttpRequest