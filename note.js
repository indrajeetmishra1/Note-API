console.log("Note.js file started");
var fs=require('fs');

var fetchNotes=()=>{

    return fs.readFileSync('content.json');

}

var writrToTheFile=(notes)=>{

    fs.writeFileSync('content.json',JSON.stringify(notes)); 

}


//console.log(module);

var addNote=(title,note)=>{

    console.log("Title is"+ ' '+ title +'and notes is'+' '+note);
    var notes=[];
    var obj={
        title,
        note
          }
    console.log(obj);
    try{
   var NotesString=fetchNotes();
    console.log(NotesString);
    notes=JSON.parse(NotesString);
    console.log(notes);
       }
    catch(err){}
    console.log(notes);
    var duplicateNote=notes.filter(obj=>obj.title===title);
    console.log(duplicateNote);
    
    if (duplicateNote.length===0)
    {
        console.log('going to write file');
        notes.push(obj);
        writrToTheFile(notes);
    }

   
}

var removeNote=(title)=>{

    var allNotes=JSON.parse(fetchNotes());
   // var copiedNotes=[];

   filterdNotes=allNotes.filter(obj=>obj.title!==title);

    // allNotes.forEach(element=>{

    //     if(element.title===title)
    //     {

    //     }
    //     else{
    //          copiedNotes.push(element);
    //     }
    
    // });
var notes =allNotes.length===filterdNotes.length;
console.log(notes);
    console.log(filterdNotes);

    writrToTheFile(filterdNotes);
   return notes;

   // console.log(copiedNotes);
   
}

var fetchNote=()=>{
                    return JSON.parse(fetchNotes());
                    // allNotes.forEach(element => {
                    // console.log('Title is'+' '+element.title +' '+'and note is'+' '+element.note);
                        //});

}

var fetchOneNote=(title)=>{
                       var allNotes=JSON.parse(fetchNotes());
                       filterdNotes=allNotes.filter((obj)=>obj.title===title);
                       console.log(filterdNotes);
                       console.log('filtered notes are'+' '+ filterdNotes);
                       return filterdNotes[0];
                       }



module.exports={

    addNote,
    removeNote,
    fetchNote,
    fetchOneNote
}