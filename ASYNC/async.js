

                                               //Asynchorously


                          //write a file using async


// const fs=require('fs');                  //==> module imported
// fs.writeFile('./async.txt',"hello lee",()=>{  //==> this callback is must when we write a file using asynchronously
//     console.log('create completed');       //==>if the file is created it will print or else it will not print 
// })



                 //read a file using async





// const fs=require('fs');                           //==>module importing
// fs.readFile('./async.txt','Utf-8',(err,data)=>{   
//     if(err){
//         console(err)
//     }
//     console.log(data);                    //it will print what are in that file 
// });
// console.log('read completed');          // using async console will print 1st 




                   //read and write a file using async


// const fs=require('fs');                          
// fs.readFile('./async.txt',"Utf-8",(err,data)=>{       
//     if(err){
//         console.log(err);
//     }
//     console.log(data)                        //what is in the file using this it will print 

// fs.writeFile('./readWrite.txt',data,()=>{     //(data) =>all content of the read file it will paste here in the creating file 
//     console.log('created sucessfully'); 
// })
// })



// const fs=require('fs');
// fs.readFile('./readWrite.txt',"Utf-8",(err,data)=>{  
//             if(err){
//             console.log(err)
//             }
//             console.log(data);
// })


