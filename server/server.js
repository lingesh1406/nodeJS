

                              // creating server



                            //   const fs=require('fs');
                            //   fs.writeFileSync('./server1.txt','request file of  the  server')


                            //only one file running method

// const http=require('http')
// const fs=require('fs')
// const read=fs.readFileSync("./server.txt","Utf-8");  //for read the file  using this in the server
// const htp=http.createServer((req,res)=>{
//     res.end(read)                                   //we run the stored read file 
//     console.log('http executed sucessfully');      //for cheack after view the server it will print 
// })
// htp.listen(3001,"127.0.0.1",()=>{
//     console.log('server created');           //for chacking the server is created or not
// })



                          //two file running method  



const fs=require('fs')
const http=require('http')
const file1=fs.readFileSync('./server.txt','Utf-8')
const file2=fs.readFileSync('./server1.txt','Utf-8')
const servercreating=http.createServer((req,res)=>{

    res.write(file1)
    res.end(file2)    
    console.log('server visit sucessfully')

})

servercreating.listen(3003,'127.0.0.1',()=>{
    console.log('server created sucessfully = go to visit on postman')
})