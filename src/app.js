const express = require('express')
const port = process.env.PORT
const userRouter = require('./routers/user')
const paymentRouter = require('./routers/payment')
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(paymentRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})