const yargs = require('yargs')
const notes = require('./student')

////////////////////////
// Add student
yargs.command({
command:'add',
describe:'Add Student',
builder:{
    id:{
        describe:'This Is Student Id',
        demandOption:true,
        type:'number'

    },
    name:{
        describe:'This Is Student Name',
        demandOption:true,
        type:'string'

    },

    grade:{
        describe:'This Is Student Grade',
        demandOption:true,
        type:'number'
    },

    comment:{
        describe:'This Is Student comment',
        type:'string'
    },
handler:(argv)=>{
    students.addStudent(argv.id,argv.name,argv.grade,argv.comment);
}

}
})


////////////////////////////////////
// Delete Student

yargs.command({
    command:'delete',
    describe:'Delete Student',
    builder:{
        id:{
            describe:'This Is Student Id',
            demandOption:true,
            type:'number'
    
        },
        
    handler:(argv)=>{
        students.removeStudent(argv.id);
    }
    
    }
    })



    /////////////////////////////////////
    // Read Student

    yargs.command({
        command:'read',
        describe:'Read Student',
        builder:{
            id:{
                describe:'This Is Student Id',
                demandOption:true,
                type:'number'
        
            },
            
        handler:(arve)=>{
            students.readStudent(argv.id);
        }
        
        }
        })



       ////////////////////////////////////////
       // List Student

       
    yargs.command({
        command:'list',
        describe:'List data',
            
        handler:(argv)=>{
            students.listStudent(argv.id);
        }
        })

        yargs.parse()