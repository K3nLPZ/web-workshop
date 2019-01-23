//var students = ["john", "larry", "joseph"]; //this is to make a list

var students = [
    {name: "John", score: 90 }, 
    {name: "Larry", score: 60 }, 
    {name: "Joseph", score: 50 }, 
];

//document.writeln(students.length);
document.write("<pre>");
document.write(JSON.stringify(students, undefined, 2)); //stringify toma un objeto, da formato json//el 2 es espaciado
document.write("</pre>");

var names = [];

students.forEach(student => {
    names.push(student.name);
});

document.writeln(names);

document.writeln("Average: {calculateAverage()}");
document.writeln("Average")
//document.write(students.length);//this adds data to the document / the lenght will show the lenght of words of the list


function calculateAverage(){
    var average = 0;

    return average;
}
//this function is linked to the button in the working with data sheet
function loadData(){
    var i = 0; //counter initiating on 0
    let dataList = document.getElementById("dataList"); //the id was set as dataList in the linked sheet, from the DOM

    while (i < students.length)
    
    {
        var listItem = document.createElement("li");
        console.log(students[i]); //the brackets will avoid to print the same thing over and over 
        listItem.innerText = students[i].name; //esta parte hace que la lista se muestre vertical cuando se toca el boton

         //the append child will allow to add items to a list 
        dataList.appendChild(listItem); //
        
        i = i + 1; //in this case the i will initialize in 0 and everytime is run again, will add a new item secualtially, another option would be to use i++ which is the same syntaxis,  it works as an increment

         //other ways to add items:
        //i += 2 esto agrega de 2 en 2
        //i += 3 esta parte agregaria de 3 en 3  
        
       
    }
    
}