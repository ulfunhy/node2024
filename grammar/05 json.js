const fs = require('fs')
const path = require('path')

// json 파일 읽어오기
fs.readFile(path.join(__dirname, 'external_data.json')
    , (err, data) => {
        if (err) {
            console.error('파일 읽는 중 오류 발생')
            return
        }
        // 읽은 파일의 텍스트를 data로 넘겨받는다.
        console.log(data)   // 받은 데이터의 아스키코드 출력\
        
        // JSON 텍스트를 object로 변환
        const jsonObject = JSON.parse(data) 
        console.log(jsonObject) 

        // object를 JSON형태의 텍스트로
        const jsonString = JSON.stringify(jsonObject)
        console.log(jsonString)
    })