const Router = require("express").Router
const Order = require("../models").order
const Order_item = require("../models").order_item
const router = new Router()

router.post("/", async (req, res, next) => {
  try {
    const userId = req.user.id

    if (!userId) {
      res.status(400).json("Missing parameters")
    } else {
      const newOrder = await Order.create({
        userId: userId,
      })
      res.send(newOrder)
    }
  } catch (e) {
    next(e)
  }
})

router.post("/:orderId", async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.orderId)
    const { productId, quantity } = req.body

    if (!orderId || !productId || !quantity) {
      res.status(400).json("Missing parameters")
    } else {
      const newOrderItem = await Order_item.create({
        orderId: orderId,
        productId: productId,
        quantity: quantity,
      })
      res.json(newOrderItem)
    }
  } catch (e) {
    next(e)
  }
})

router.get("/:orderId/products", async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.orderId)

    if (!orderId) {
      res.status(400).json("Missing parameters")
    } else {
      const OrderItems = await Order_item.findAll({
        where: { orderId: orderId },
        include: [product],
      })
      console.log(OrderItems.products[0])
      res.json(OrderItems)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
