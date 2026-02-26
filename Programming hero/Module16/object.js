const student ={
    name: 'disha',
    id:45,
    section:'A'

}
console.log(student);

//nested
const subject ={
    studentName:[{name:'puja',id:1,section:'A'},{name:'disha',id:1,section:'B'}],
    SubName:'biology',
    teacher:['Amena parvin','dristy bose'],
    examDates:{
        firstPaper:'30th jan',
        marks:100
    }
}
console.log(subject);

//access only one property
console.log(subject.examDates);//just print exam parts
console.log(subject.studentName[0]);

//value update
student.id=50;
console.log(student);