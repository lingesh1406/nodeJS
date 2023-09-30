

const http=require('http')
const fs=require('fs')
const read=  fs.readFileSync("./server.txt","Utf-8");
const htp=http.createServer((req,res)=>{
    res.end(read)
    console.log('http executed sucessfully');      //for cheack after view the server it will print 
})
htp.listen(3001,"127.0.0.1",()=>{
    console.log('server created');           //for chacking the server is created or not
})