

const tiger = document.getElementById("how");

tiger.innerHTML = "hello world";
console.log(tiger.innerHTML);



function change(){
document.getElementById("one").style.flexDirection = "column";
}



let newElement = document.getElementsByClassName("heading1");

newElement[0].style.color = "red";
newElement[0].setAttribute("id", "heading");
console.log(newElement[0]);


function joker(){
    const lion = document.getElementsByClassName("op");
    lion[0].innerText = "Welcome to elevation academy";
    console.log(lion[0].innerText);
}


// function showrealtime(){
//         const date = new Date();  
//         const hours = date.getHours();
//         const mins = date.getMinutes();    // for time only 14:55:22
//         const secs = date.getSeconds();// console.log(hours-12 , mins ,secs);
//        console.log(hours , mins , secs);
//        setTimeout(() => {
//         showrealtime();
//       },1000);
//     }
//     showrealtime();


    function func1() {
        let one  = document.getElementById("year1");
        let two = one.options[one.selectedIndex].innerText;
        document.getElementById("umbrella").innerText = two;
    }
    



    
const input = document.getElementById('email');
const defaultEmail = '@prepbytes.com';
input.value = defaultEmail;