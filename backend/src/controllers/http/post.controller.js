const createResource = async (req, res, model, statusNumber) => {
  try {
    const { body } = req
    const source = new model(body)
    const saveSource = await source.save()

    return res.json(saveSource)

  } catch (error) {

    return res.status(statusNumber).json({
      ok: false,
      error
    })
  }
}

module.exports = {
  createResource
}
