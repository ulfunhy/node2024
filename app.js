const express = require('express')
const app = express()
const port = 3000

// get method 요청에 대한 라우팅
app.get('/', (req, res) => {
    res.send('Hello World!')
})  // localhost:3000

app.get('/cute', (req, res) => {
    res.send('cute')
})  // localhost:3000/cute - cute 출력

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
