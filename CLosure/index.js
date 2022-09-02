

    // 1.    
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter()); //1
alert(counter()); //2 
alert(counter()); //3
alert(counter()); //4

// 2. 
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? 1
  }
  console.log(count); // What is logged? 0
})();

// 3 .
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? // 3 // 3
    }, 1000);
  }

// 4. 
function Area(){
    let x=5;
     function Area1(){
         let b=20;
         let area=x*b;
         console.log(area)
     }
         Area1()
     }
Area ();  

// 5 .
function func (Name) {
    alert('Hello World' + Name);
}
function func2 (callback) {
    var Name = prompt('please enter your name here.');
    callback(Name);
}
 func2(func);

// 6 .
var a = 12;
    (function () {
     alert(a);
    })();  // 12

// 7 .
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();    // 12

// 8 .
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" + // 123
        "innerArg = " + innerArg + "\n" + // 456
        "outerVar = " + outerVar + "\n" + // a
        "innerVar = " + innerVar + "\n" + // b 
        "globalVar = " + globalVar);      // xyz
    
    })(456);
})(123);
