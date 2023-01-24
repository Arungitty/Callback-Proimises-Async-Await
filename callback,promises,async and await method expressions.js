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

    // callback
    /* addStudent(renderStudents); */

    //promises
    /* addStudent().then(renderStudents) */    // when our add student function will give promise object then it will call renderStudents function

    //aync and await
    createAndDisplayStudents();
}

//async and await
async function createAndDisplayStudents(){
    await addStudent();   // Here first it will wait to complete addstudent method then it will call renderStudents method
    renderStudents();

}

//callback
/* const addStudent= (callback) => {
    let studentName=document.getElementById("name").value;
    let studentPassword= document.getElementById("password").value;

    // now we storing the user input from form inside object called student
    // we are storing it in our temporary storage called student object
    let student= {
        name:studentName,
        password:studentPassword
    }

     setTimeout( () =>{
        studentArr.push(student);     // backend call
        callback();    // call back is a varible which has arrow function thats why call back is called as function expression and also its called as method.
    }, 2000)

    /* console.log(studentArr); */
   /* const studentForm= document.getElementById("student-form").reset() */

   /* renderStudents(); 

} */

//promises

function addStudent(){

    return new Promise( (resolve,reject) => {

        let studentName= document.getElementById("name").value;
        let studentPassword= document.getElementById("password").value;

        student= {
            name:studentName,
            password:studentPassword
        }

        setTimeout( () => {
            studentArr.push(student);    // backend call

            let error= false;
            if(!error){
                resolve();
            } else {
                reject("Error: Internal server error");
            }

        }, 2000)

    })

}

const buttonAddStudent=document.getElementById("button");
 buttonAddStudent.addEventListener("click",btnAddStudentHandler)

 //Rough work for practise
 const ss= function add(){
    let a=5;
    let b=10;
    var sum=a+b;
    console.log(sum);
 }

 ss();

