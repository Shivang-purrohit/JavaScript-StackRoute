const a = fetch("https://www.omdbapi.com/?i=tt3896198&apikey=91f70234") 
.then(resp => resp.json()) 
.then(result=>
    {
        console.log(result);  
    })
    .catch(error=>{
        console.log(error)
    });

function addElement()
{
  
  var textbox = document.getElementById("txt");
    var ul = document.createElement("ul");
    // var ul=document.getElementById("ul")
    var li = document.createElement("li");
    
    var content = textbox.value;
    li.textContent=content;
     ul.appendChild(li);
    
   textbox.value ="";

   var mydiv=document.getElementById("d");
   mydiv.appendChild(ul);
   

}




