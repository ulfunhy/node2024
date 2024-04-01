const express = require('express')
const path = require('path')    // node에서 기본으로 제공하는 패키지
const app = express()
const port = 3000

app.use('/html', express.static(path.join(__dirname, 'html')))

// get method 요청에 대한 라우팅
app.get('/', (req, res) => {
    res.send('Test')
})  // localhost:3000 - Test 출력

// localhost:3000/test/LHJ?lang=ko
app.get('/test/:name', (req, res) => {
    console.log('path', req.path)       // '/test/LHJ'
    console.log('params', req.params)   // {name: 'LHJ'}
    console.log('query', req.query)     // {lang: 'ko'}
    res.send('콘솔 보세요')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
    console.log(express.static(path.join(__dirname, 'html')))
})
