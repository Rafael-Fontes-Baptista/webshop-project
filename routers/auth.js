const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const User = require("../models").user

const router = new Router()

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).send("Please supply a valid email and password")
    } else {
      // 1. look for the user by email
      const user = await User.findOne({
        where: { email },
      })
      if (!user) {
        res.status(400).send({
          message: "User with that email does not exist",
        })
      }
      // 2. use bcrypt.compareSync to check the password against the stored hash
      else if (bcrypt.compareSync(password, user.password)) {
        // 3. if the password is correct, return a JWT with the userId of the user (user.id)
        const jwt = toJWT({ userId: user.id })
        res.send({
          jwt,
        })
      } else {
        res.status(400).send({
          message: "Password was incorrect",
        })
      }
    }
  } catch (e) {
    next(e)
  }
})

router.get("/me", async (req, res, next) => {
  try {
    const auth =
      req.headers.authorization && req.headers.authorization.split(" ")
    if (auth && auth[0] === "Bearer" && auth[1]) {
      try {
        const data = toData(auth[1])
        const user = await User.findByPk(data.userId)
        if (!user) {
          res.status(404).send("No user found")
        } else {
          req.user = user
          next()
        }
      } catch (error) {
        res.status(400).send({
          message: `Error ${error.name}: ${error.message}`,
        })
      }
    } else {
      res.status(401).send({
        message: "Please supply some valid credentials",
      })
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
