const Router = require("express").Router
const Product = require("../models").product
const router = new Router()

router.get("/:categoryId/products", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId)
    if (!categoryId) {
      res.status(400).send("Any category selected")
    } else {
      const categoryProducts = await Product.findAll({
        where: { categoryId: categoryId },
      })
      res.json(categoryProducts)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
