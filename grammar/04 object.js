const cathy = {
    name : "cathy",
    // 속성 이름은 따옴표 처리 안 해도 가능함
    "age" : 19,
    skills : ["자바스크립트", "파이썬", "코볼"]
}

console.log(cathy)
console.log(cathy.name)
console.log(cathy["name"])

// 속성 추가
cathy["취미"] = "독서"
console.log(cathy)

// 속성 제거
delete cathy.취미
console.log(cathy)