let numArray = [1, "Two", 3, 4, "hello", 6];

for (let i = 0; i < numArray.length; i++) {
  console.log("index: " + i);
  console.log("item: " + numArray[i]);
  console.log("********************");
}

numArray.forEach(function (item, index) {
  console.log("index: " + index);
  console.log("item: " + item);
  console.log("****************");
});

// higher order functions - array methods-  es6 - map,reduce,forEach,
