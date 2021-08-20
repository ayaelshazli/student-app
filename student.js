const fs = require('fs')

///////////////////////////////////
// Add Student
const addStudent= (id, name, grade, comment) =>{
    const students = loadStudents();
    const duplicateId = students.filter((student) =>{
        return student.id === id


    });
    console.log(duplicateId);

    if (duplicateId.length === 0){
        students.push({
            id:id,
            name:name,
            grade:grade,  
            comment:comment  
        }) 
        saveStudents(students);
        console.log("Saved Success");
    }
    else{
        console.log('Error Duplicate id');
    }
}

////////////////////////////////////////////////

// Delete 

const removeStudent = (id) =>{
    const students = loadStudents()
    const studentsToKeep = students.filter((student)=>{
        return student.id !== id
    })
    saveStudentData(studentsToKeep)
       consol.log(studentsToKeep)
}


////////////////////////////////

//read
const readStudent = (id)=>{
    const students = loadStudents()
    const student = students.find((student)=>{
        return student.id === id
    })
    if(student){
        consol.log(student)
        consol.log(student.id)
        consol.log(student.name)
        consol.log(student.comment)
    } 
}



/////////////////////////////////////////////////////

// list 

const listStudent= ()=>{
    const students = loadStudents()
    students.forEach((student) =>{
        console.log(student.id)
        console.log(student.name)
        console.log(student.grade)
    })
}

/////////////////////////////////
//load
const loadStudents = ()=>{
    try{
        const dataBuffer = fs.readFileSync('students.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return[]
    }
}


//////////////////////////////////////////////////
//save

const saveStudents = (students)=>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json', saveData)
}


module.export ={
    addStudent:addStudent,
    removeStudent:removeStudent,
    readStudent:readStudent,
    listStudent:listStudent
}