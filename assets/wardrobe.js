// wardrobe.js now has some dependencies, a shirt and trousers
// module in the 'clothes' directory
define(["./clothes/shirt", "./clothes/trousers"], function (shirt, trousers) {
  // return an object to define the "clothes/shirt" module.
  return {
    color: "blue",
    size: "small",
    getContents: function () {
      console.log(shirt, trousers);
    }
  }
});