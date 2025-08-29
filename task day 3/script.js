students = [
    { name: "Mahmmoud", age: 20, grade: "A", isGraduated: true },
    { name: "Sara", age: 22, grade: "B", isGraduated: false },
    { name: "Omar", age: 21, grade: "A", isGraduated: true },
    { name: "Mona", age: 23, grade: "C", isGraduated: false },
    { name: "Lina", age: 20, grade: "B", isGraduated: true },
]

// ---------------- 1 -----------------

var ages = 0;
for ( var i in students) {
    // console.log(i);
    ages += students[i].age  ;
    // console.log(ages);
}
var avg = ages / students.length;
console.log(avg);


// ---------------- 2 -----------------

var gratuatedStudents = students.filter(function(student) {
    return student.isGraduated;
});
console.log(gratuatedStudents);


// ---------------- 3 -----------------

var notGratuatedStudents = students.filter(function(student) {
    return !student.isGraduated;
});
console.log(notGratuatedStudents);


// ---------------- 4 -----------------

console.log(Object.keys(students));
console.log(Object.values(students));


// ---------------- 5 -----------------

newStudent = { name: "Ahmed", age: 24, grade: "A", isGraduated: false };
console.log(newStudent);

newStudent.email = 'mahmoud@gmail.com';
console.log(newStudent);
students.push(newStudent);
console.log(students);

// ---------------- 6 -----------------


students.forEach(stu => {
    // delete stu.isGraduated;
});
console.log(students);


