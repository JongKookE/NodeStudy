const express = require('express')
const app = express()
const port = 3000
// HTTP 메소드, 라우팅, 콜백함수
app.get('/', function (req, res) {
  res.send('Hello World')
})  

app.get("/:animal", function(req, res){
    // params는 변수 이름으로 받는 방법
    // const q = req.params;
    // console.log(q.animal)
    // res.send({'userId': q.animal})


    // query는 params뒤의 ?를 붙여서 사용가능
    // localhost:3000/animal?name=jong&age=24....
    const q = req.query;
    console.log(q);
})

app.post("/:id", (req, res) => {
    const q = id.body
})

app.get("/sound/:name", (req, res) => {
    const {name} = req.params;
    if(name == 'dog') res.json({"강아지":"멍멍"})
    else if(name == 'cat') res.json({'고양이':'야옹'})
})



// 3000번 포트에서 실행하겠다.
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

setTimeout(()=> console.log("3초 지남"), 3000)