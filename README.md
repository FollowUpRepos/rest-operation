# TASK

Create a function called `operation` which takes any number of arguments. The first argument will be a string: either `"add"` or `"average"`. The remaining arguments will all be numbers.

If the first argument is `"add"`, the function should return the sum of all the number arguments. If the first argument is `"average"`, it should return the average of all the number argument.


Example:

```
function operation() {
  // Your code goes here
}

let result = operation("add", 1,2,3,4,5)
console.log("add result:", result)
// 15

result = operation("average", 1,2,3,4,5)
console.log("add result:", result)
// 3
```

Hint: You can use the `reduce` array method to add all the numbers together.

Bonus: Can you solve this in two ways?
1. Using no parameters at all
2. Using two parameters, like this: `operation, ...rest`

Useful links:  
[Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)  
[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters{})