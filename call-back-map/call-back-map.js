var words = ["ground", "control", "to", "major", "tom"];

function map(words, changeElement){
  var empty = []
for(i = 0; i < words.length; i++){
  empty.push(changeElement(words[i]));
  }
  console.log(empty)
}

map(words, function(element) {
  return element.length;
});