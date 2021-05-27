const Router = require("express").Router
const authMiddleware = require("../auth/middleware")
const Product = require("../models").product
const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (e) {
    next(e)
  }
})

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const user_isAdmin = req.user.isAdmin

    if (!user_isAdmin) {
      res.status(400).send("The user has no authorization for this action")
    } else {
      const { name, description, price, imageUrl } = req.body

      if (!name || !description || !price || !imageUrl) {
        res.status(400).send("Missing parameters")
      } else {
        const newProduct = await Product.create({
          name,
          description,
          price,
          imageUrl,
        })
        res.json(newProduct)
      }
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
