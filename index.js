const express = require("express")
const bp = require("body-parser")
const authMiddleware = require("./auth/middleware")
const authRouter = require("./routers/auth")
const userRouter = require("./routers/user")
const orderRouter = require("./routers/order")
const productRouter = require("./routers/product")
const categoryRouter = require("./routers/category")

const app = express()
const PORT = process.env.PORT || 4000

// Middlewares
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const cors = require("cors")
app.use(cors())

// Routers
app.use("/", authRouter)
app.use("/users", userRouter)
app.use("/orders", authMiddleware, orderRouter)
app.use("/products", productRouter)
app.use("/categories", categoryRouter)

// Start server
app.listen(PORT, () => console.log("App listening on port", PORT))
