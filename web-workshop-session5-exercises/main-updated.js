console.log("testing...");
console.log(new Date());

//the below variable is not defined on the html page
//if we want to display the output of the below variable we will use the DOM, using get element by ID
var sum = 1 + 1;
console.log(sum);

document.write("Hello from JavaScript");

// Body for the function
function sayHello() {
    alert("Hello!");

    //var name = "";

    name = {"name" : ""}

    // Store within a variable
    name = prompt("What's your name?")

    //Define a variable, then set to getElementById
    var dynamicSection = document.getElementById("dynamicSection")

    var breakLine = document.createElement("br");

    //Append it to the DOM
    dynamicSection.appendChild(breakLine);

    //Append it to the DOM
    dynamicSection.append("Hello again! " + name);


    /// Instead of using the below statements, I will define variables like the statements above
    /// document.writeln("Hello again");
    /// document.write("Hello again and again");      
}

function paint () {
    var dynamicSection = document.getElementById("dynamicSection");

    //Instaed of 'background-color: red' assign it through JavaScript
    var color = document.getElementById("colorValue");

    dynamicSection.style.backgroundColor = color.value;
    //document.bgColor = "yellow";
}

//function toggleHighlight() {
    //var textSection = document.getElementById("textSection");

    //textSection.className = "highlight";

    //textSection.classList.add("highlight");
    
//}

function toggleHighlight() {
    var textSection  = document.getElementById("textSection");
    
    textSection.classList.toggle("highlight");
    
    //if(textSection.classList.contains("highlight")) 
    //{
      //  textSection.classList.remove("highlight");
  //  } 
   // else 
   // {
  //      textSection.classList.add("highlight");
 //   }
}
    

