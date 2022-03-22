const express = require('express')
const app = express()

const PORT = 3636

app.listen(PORT, () => {
    console.log('App running on port ', PORT)
})

app.get('/', (req, res, next) => {
    res.send("welcome")
})
