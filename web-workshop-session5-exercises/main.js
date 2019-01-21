console.log("Hidden message");
console.log(100);
console.log("standard message");
console.log(new Date());

document.writeln("Hello from JavaScript");
document.writeln(new Date());

document.writeln("<h2>This is H2 </h2>");
document.writeln("<h3 style='background-color:red;'>This is H3</h3>");

function paint() {
    document.getElementById("dynamicSection"); // this get element by ID gets the section called dynamic section on js-examples-2 html document

    var section = document.getElementById("dynamicSection");

    var color = document.getElementById("colorValue");

    section.style.backgroundColor = color.value;

    // alert(color.value);
    console.log(color.value);

    // Create text, then set, then append
    var text = document.createElement("h4"); // p, h1, h2, h3, ...

    text.innerHTML = "You selected:" + color.value;

    section.appendChild(text);
    
    // Instead, of append, reset text
    // section.innerText = "You selected:" + color.value;
}

function sayHello() {
    alert("hello, world!");
    alert("how are you?");

    // 1) Ask the name
    var input = prompt("What's your name?");
    
    // 2) Say: "Hello, <NAME>" (Concatenate means joining strings)
    alert("Hello, " + input);

    var section = document.getElementById("dynamicSection");

    // 3) Show it (append)
    section.append(input);
}

function toggleHighlight(){
    var textSection = document.getElementById("textSection");

    textSection.className = "highlight";
}










