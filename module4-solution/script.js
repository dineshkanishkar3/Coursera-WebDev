// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
(function (){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0;i < names.length;i++) {

  if (names[i].charAt(0).toLowerCase()=='j') {
       byeSpeaker.speak(names[i])
  } else {
       helloSpeaker.speak(names[i])
  }
}
})();