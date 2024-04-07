let students = ["jini","mama","papa","santoo","Avee"]

//Technique -1
students =[];


//Technique -2
students.length=0;


//Technique -3
while(students.length>0)
{
    students.pop();
}


//Technique -4
students.splice(0, students.length)
console.log(students);

