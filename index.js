// let nums = [2, 4, 6, 8];
// let squares = nums.map(num => num * num);
// console.log(squares);


// let nums2 = [5, 10, 15];
// let incremented = nums2.map(num => num + 3);
// console.log(incremented);


// let people = ["tako", "liza", "ana"];
// for(let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNums = nums3.filter(num => num % 2 === 0);
// console.log(evenNums);

// let nums4 = [12, 25, 30, 7, 18];
// let morethan15 = nums4.filter(num => num > 15);
// console.log(morethan15);


// let words = ["kiwi", "banana", "fig"];
// let longWords = words.filter(word => word.length > 5);
// console.log(longWords);


// let nums5 = [1, 2, 3, 4, 5];
// let sum = nums5.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// let nums6 = [ 2, 3, 4];
// let product = nums6.reduce((acc, num) => acc * num, 1);
// console.log(product);

// let nums7 = [10, 45, 2, 99, 6];
// let max = nums7.reduce((acc, num) => num > acc ? num : acc, nums7[0]);
// console.log(max);

// let nums8 = [3, 6, 9, 12, 15];
// let first = nums8.find(num => num % 3 === 0 && num % 2 === 0);
// console.log(first);

// let names = ["giorgi", "liza", "ana"];
// let firstWithA = names.find(name => name.startsWith("a"));
// console.log(firstWithA);

// let nums9 = [1, 3, 5, 8, 9];
// let anyeven = nums9.some(num => num % 2 === 0);
// console.log(anyeven);

// let nums10 = [10, 20, 30, 40];
// let anymorethan35 = nums10.some(num => num > 35);
// console.log(anymorethan35);

// let nums11 = [2, 4, 6, 8];
// let allEven = nums11.every(num => num % 2 === 0);
// console.log(allEven);

// let words3 = ["apple", "banana", "kiwi"];
// let allLong = words3.every(word => word.length > 4);
// console.log(allLong);

const input = document.getElementById("inputField");
const button = document.getElementById("addButton");
const output = document.getElementById("list");

button.addEventListener("click", () => {
    const value = input.value;
    if(value) {
        const doneButton = document.createElement("div");
        doneButton.classList.add("doneButton");
        doneButton.addEventListener("click", () => {
            listItem.classList.toggle("done");
        });

        const listItem = document.createElement("li");
        listItem.textContent = value;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            output.removeChild(listItem);
        });
        listItem.appendChild(doneButton);
        output.appendChild(listItem);
        listItem.appendChild(deleteButton);
        

        input.value = "";
    }
});



