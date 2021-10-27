var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);
search(42)
search(52)
}

function draw() 
{
  background(30);
}

 function search(value){
   for(var i=0; i<marks.length; i++){
     if (marks[i]===value) {
       console.log("valuespresent")
     }
   }
 }

