
//     Reading files(text) 

// const fs=require('fs');                           //   => it will importing the file module
// const read=fs.readFileSync("./sep27.txt",'Utf-8'); //  =>readFileSync is a predifined funcition in that modeule 
// console.log(read);                                 //    ||> using this it will run the txt file ('Utf-8 => is must')



//     //  Writing (text) files

// const fs=require('fs');                   //=>it will import the  module    
// const write = fs.writeFileSync('./write.txt',"hey lingesh welcome to nodeJS"); //  ==>(writeFileSync)using this it will create the txt file   
// console.log(write);                            //      ||> this will add to the text file







//                    SYNCHORONOUS    




// const fs=require('fs');                              // ==> used to import the file module 
// const read1=fs.readFileSync('./write.txt','Utf-8'); // ==>using this read the created txt file 
// console.log(read1);                      //    ||>(it is must!)
                                 



// const fs=require('fs');
// const write=fs.writeFileSync('./write.html','<h1>the lingesh</h1>');
// console.log(write);

const fs=require('fs');
const abc=fs.readFileSync('./write.html','Utf-8');
console.log(abc);