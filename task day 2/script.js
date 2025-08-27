var arr = [10, 20, 10, 2, -10, -12, -6, 33, -4, -56];
var sum = 0;
var sum2 = 0;
for (var i of arr) {
    if (i <= 0) {
        sum2 += i
        continue;
    }
    sum += i;
    sum2 += i
}
console.log(sum);
console.log(sum2);

// ----------------------------- task 2 -----------------------------



var object = {
    name: 'mahmoud',
    age: 21,
    grade: "A+",
    isGraduated: true,
}
console.log(object);
console.log(`Name is : ${object.name} and age : ${object.age}`);

object.grade = 'A';
console.log(object.grade);

Object.keys(object);
Object.values(object);

object.email = 'mahmoud@gmail.com'
console.log(object.email);
delete object.isGraduated;
console.log(object);
