// function to add two numbers together

const add = function (a, b) {
  return a + b;
};

let arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 1,
    name: "John",
  },
];

//filter arr with id 1
const filterArr = arr.filter((item) => item.id === 1);
console.log("filterArr", filterArr);
