const fs = require('fs');
fs.writeFile('example.txt','Hello Everyone I am Akshara, an engineering student',(err) => {
    if(err) throw err;
    console.log('File created!!');

    fs.readFile('example.txt','utf8',(err,data) => {
        console.log('File content: ',data);
    });
});

fs.appendFile('example.txt','\nThis line was added',(err)=>{
    if(err) throw err;
    console.log('File updated (appended)!');
});
fs.unlink('example.txt',(err) => {
    if(err) throw err;
    console.log('File deleted!!');
});

 