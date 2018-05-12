console.log("Starting the app");
const fs=require('fs');
const os=require('os');
const yargs=require('yargs').argv;
//const loadash =require('loadash');

var command=yargs._[0];

//var user=os.userInfo();

var note=require('./note');

//console.log(process.argv[3]);
console.log(yargs.title);
console.log(command);

if(command==='add')
{
    note.addNote(yargs.title,yargs.note);
}

else if(command==='remove') {
     
   var notes= note.removeNote(yargs.title);

        var message=notes ?"Notes not found":"Notes found and deleted";
        console.log(message);
                        }
     else if(command==='fetchAll')
     { 
     var allNote=note.fetchNote();
    
     allNote.forEach(element => {

        console.log(`Title is ${element.title} Note Is ${element.note}`);
         
     });


     }
 else if(command==='fetchonenote')
     {
        var note= note.fetchOneNote(yargs.title);
        if(note)
        {
            console.log(`note is found where title is ${note.title} and note is ${note.note}`)
        }
        else {
            console.log(`Note is not found`);
        }
     }       




// var array=['Indrajeet',1,'Indrajeet',2,3,3,4,4,5];

// console.log(loadash.uniq(array));

// fs.appendFile('greeting.text','Hello World in append file',(err)=>{

//     if(err)
//     {
//         console.log("Error while appending the text");
//     }
//     else{
//         console.log("file created successfully");
//     }

// });


//fs.appendFileSync('greeting.text','Hello'+' '+ user.username+' '+'!');

//fs.appendFileSync('greeting.text','Hello ${user.username} !');