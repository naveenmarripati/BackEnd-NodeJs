const http=require("http")
const data=[
    {
        "id":1,
        "username":"xyz"
    },
    {
        "id":2,
        "username":"abc"
    },
]
const server=http.createServer((req,res)=>{
   if(req.url==="/user"){
    console.log(req.url)
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(data))
   }
   else{
    res.writeHead(404,{"content-type":"text/html"})
    res.end("<h1>Not found </h1>")
   }
})
server.listen(3001,()=>console.log("server has started"))