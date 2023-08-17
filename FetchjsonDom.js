function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((output) => output.json())
      .then((data) => {
        // console.log(data);
        // var text=document.getElementById("outText")
        // text.value=data;
        createList(data)
    
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    
    function createList(data){
        const mainUL=document.createElement("ol");
        const ul=document.createElement("ul")
        
        for(let i of data){
        var  albumTitle=document.createElement("li");
        const out="ID : "+i.id+", TITLE : "+i.title+", USERID : "+i.userId
            albumTitle.innerHTML=out
        ul.appendChild(albumTitle)   
    } 
        mainUL.appendChild(ul);
        document.body.appendChild(mainUL);
    
    }
    
    