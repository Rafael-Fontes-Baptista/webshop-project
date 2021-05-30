const bcrypt = require("bcrypt")
const Router = require("express").Router
const User = require("../models").user

const router = new Router()

router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phone, address } = req.body
    if (!firstName || !lastName || !email || !password) {
      res.status(400).send("missing required parameters")
    } else {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
        phone,
        address,
      })
      res.json(newUser)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
