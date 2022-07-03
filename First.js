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

const filterArr = arr.filter((item) => item.id === 1);
console.log(filterArr);
