// require(["clothes/shirt"], function (shirt) {
//   //This function is called when clothes/shirt.js is loaded.
//   //If shirt.js calls define(), then this function is not fired until
//   //shirt's dependencies have loaded, and the shirt argument will hold
//   //the module value for "clothes/shirt".
//   console.log(shirt);
// });

// require(['clothes/trousers'], function (trousers) {
//   console.log(trousers);
// });

require(['wardrobe'], function (wardrobe) {
  wardrobe.getContents();
});