const getResourceById = async (req, res, model, statusNumber) => {
  try {
    const { id } = req.params
    const resource = await model.findById(id)

    return res.json(resource)

  } catch (error) {
    
    return res.status(statusNumber).json({
      ok: false,
      error
    })
  }
}

const getResources = async (req, res, model, statusNumber) => {
  try {
    const resources = await model.find()
    return res.json(resources)
  } catch (error) {
    return res.status(statusNumber).json({
      ok: false,
      error
    })
  }
}

module.exports = {
  getResourceById,
  getResources
}