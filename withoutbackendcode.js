const studentArr=[{
    name:"akash",
    password:"akku"
}];

const renderStudents= () => {
const studentList= document.getElementById("student-list")       // get unordered list Html element
/* console.log(studentList); */
 if(studentArr.length<=1){
    studentList.classList.remove('visible');
    return;
} else {
    studentList.classList.add("visible");
}

studentList.textContent="";

studentArr.forEach( (student) =>{
    const studentListItemElement= document.createElement("li");     // create li Html element
    /* console.log(studentListItemElement); */
    /* displayListItemStructure= student.name + '('+student.password+')' */
    studentListItemElement.textContent= student.name + '('+student.password+')';
    /* console.log(studentListItemElement); */
    studentList.append(studentListItemElement);          // assign li Html element into Ul Html element
    /* console.log(studentList); */
})

}

const btnAddStudentHandler= () => {
    addStudent(renderStudents);
}

const addStudent= (callback) => {
    let studentName=document.getElementById("name").value;
    let studentPassword= document.getElementById("password").value;

    // now we storing the user input from form inside object called student
    // we are storing it in our temporary storage called student object
    let student= {
        name:studentName,
        password:studentPassword
    }

        studentArr.push(student);

    /* console.log(studentArr); */
   const studentForm= document.getElementById("student-form").reset()

  renderStudents();

};

const buttonAddStudent=document.getElementById("button");
 buttonAddStudent.addEventListener("click",btnAddStudentHandler)




 //Rough work for practise
 function add(){
    let a=5;
    let b=10;
    var sum=a+b;
    console.log(sum);
 }

 add();

