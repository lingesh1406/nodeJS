
const readline=require('readline');

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

input.question("what is your name",(name)=>{
    console.log(name)
    input.close();
})