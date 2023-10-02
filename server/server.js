

                              // creating server



                            //   const fs=require('fs');
                            //   fs.writeFileSync('./server1.txt','request file of  the  server')


                            //using server running method  (we use only response bcoz request is a frontend work)

// const http=require('http')
// const fs=require('fs')
// const read=fs.readFileSync("./server.txt","Utf-8");  //for read the file  using this in the server
// const htp=http.createServer((req,res)=>{          //here we use only response bcoz req is the frontend work
//     res.end(read)                                   //we run here that stored read file 
//     console.log('http executed sucessfully');      //(for cheacking) after view the server it will print 
// })
// htp.listen(3001,"127.0.0.1",()=>{
//     console.log('server created');           //for chacking the server is created or not
// })



//example  



// const fs=require('fs')        // }  both are use  to importing the node module
// const http=require('http')    // }  
// // const file1=fs.readFileSync('./server.txt','Utf-8')   //it's is used to read the file 
// const file2=fs.readFileSync('./server1.txt','Utf-8')  
// const servercreating=http.createServer((req,res)=>{

//     // res.write(file1)         // it is not important 
//     res.end(file2)           //and this is must (we use this for viewing the file) and ==> run here that stored file 

//     console.log('server visit sucessfully')    //if the server view in the postman it will print on terminal
// })
//                     //    (port)
//                   //      ||
// servercreating.listen(3003,'127.0.0.1',()=>{    // this is port using this we can run on postman or website 
//     console.log('server created sucessfully = go to visit on postman');
// })





                                  //ROUTING


// const fs=require('fs');          //       node module  importing 
// const http=require('http');      //


// const read=fs.readFileSync('./server.txt','utf-8'); //1st stored a file for read on the website  
// const server=http.createServer((req,res)=>{         //create a server using this (createServer)

//   const urllink=req.url;           //(req.url)using this we get the user searching input  and
//                                   // we need to store this in the variable for give the condition 

//   // const urllink=req.url.toLocaleLowerCase();   //with or without lowercase what user both are working same  

//   if(urllink=='/' || urllink=='/home'){         //give condition using that url stored variable 
//     res.end(read);                              //if user search (/) or (/home) this file will be display
//   }
//   else if(urllink=='/about'){                  
//     res.end('about page')
//   }
//   else{
//     res.end('page not found');             //if user searched are not in condition it will display
//   } 
//   console.log('server view sucessfully'); 
// })
// server.listen(3005,'127.0.0.1',()=>{ 
//   console.log('server created sucessfully');
// })






const fs=require('fs');          //       node module  importing 
const http=require('http');      //


const file1=fs.readFileSync('./server.txt','utf-8');   //1st stored a file for read on the website
const file2=fs.readFileSync('./server1.txt','utf-8');  //2nd file for run the files
const server=http.createServer((req,res)=>{            //create a server using this (createServer)

  const urllink=req.url;           //(req.url)using this we get the user searching input  and
                                  // we need to store this in the variable for give the condition 

  // const urllink=req.url.toLocaleLowerCase();   //with or without lowercase what user both are working same  

  if(urllink=='/' || urllink=='/home'){         //give condition using that url stored variable 
    res.end(file1);                              //if user search (/) or (/home) this file will be display
  }
  else if(urllink=='/about'){                  
    res.end(file2);                      //about page (we can read many files like this way also)
  }
  else{
    res.end('page not found');             //if user searched are not in condition it will display
  } 
  console.log('server view sucessfully');
}) 
server.listen(3005,'127.0.0.1',()=>{ 
  console.log('server created sucessfully');
})
