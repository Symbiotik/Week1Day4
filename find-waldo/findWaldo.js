// The second argument/parameter is expected to be a function
// WALDO INDEX
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);
    }
  }
}
function actionWhenFound(index) {
  console.log("Found him!");
  console.log("Found him at index: " + index)
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//WALDO FOR LOOP
function findWaldo(arr, found) {
  var counter = 0;
  arr.forEach(function(word) {
    counter++ //counter = counter + 1
    if (word === “Waldo”) {
      found(counter);
      //need an index in forEach loop   // execute callback
    }
  })
}

function actionWhenFound(index) {
  //var position = arr.indexOf(“Waldo”)
  console.log(“Found him at position ” + index);
}

findWaldo([“Alice”, “Bob”, “Waldo”, “Winston”], actionWhenFound);