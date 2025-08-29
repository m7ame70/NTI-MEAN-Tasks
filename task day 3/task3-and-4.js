let users = [
    { name: "Ali", age: 22 },
    { name: "Sara", age: 28 },
    { name: "Mona", age: 35 },
    { name: "Ahmed", age: 45 }
];

var obj = {}

obj.Young = [];
obj.Median = [];
obj.Old = [];

for (var objj of users) {
    if (objj.age < 25) {
        obj.Young.push(objj);
    } else if (objj.age >= 25 && objj.age <= 40) {
        obj.Median.push(objj);
    } else if (objj.age > 40) {
        obj.Old.push(objj);
    }
}
console.log(obj);





// task 4 ------------------------- ----------------- -----------------

let categories = [
    { category: "Fruits", products: ["Apple", "Banana", "Apple"] },
    { category: "Vegetables", products: ["Carrot", "Apple"] },
    { category: "Dairy", products: ["Milk", "Cheese"] }
];

let productCount = {};




for (var category of categories) {
    for (let product of category.products) {
        if (productCount[product]) {
            productCount[product]++;
        } else {
            productCount[product] = 1;
        }
    }
}

console.log(productCount);