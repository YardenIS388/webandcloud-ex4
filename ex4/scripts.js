


let keyboard = false;
let radar    = false;
let clocksRiddle = false; 
let red = false;
let white =false;
let green = false;
let finishedRadar = false;
let first = false;
let second = false;
let third = false;
let last = false;


//game over checks
function slidersComplete(){
  console.log("sliders check")
  if( red && white && green){
if(!finishedRadar){
    radar = true;
    let audio2 = new Audio("assets/[YT2mp3.info] - Level Up Sound Effect (320kbps).mp3");
     audio2.play();
     finishedRadar = true;
     readyToSend();
    }
   
   }
}

function clocksComplete(){
  if( first && second && third && last){
    if(!clocksRiddle){
      clocksRiddle =true;
      let audio3 = new Audio("assets/[YT2mp3.info] - Western Game Level Complete - Sound Effect (HD) (320kbps).mp3");
      audio3.play();
      console.log("finished clocks");
      readyToSend();
    }
    
  }
}

function readyToSend(){
  
  if( radar && clocksRiddle && keyboard){
    document.getElementById("submit-button").style.display = "inline";
    document.getElementsByTagName("h3")[0].style.display ="none";
    console.log("finished game");

  }

}

document.getElementById("left").addEventListener("mouseup", ()=>{
  console.log(document.getElementById("left").value);
  if(document.getElementById("left").value < 3){
    red = true;
    console.log("red");
    slidersComplete();
  }
});
document.getElementById("middle").addEventListener("mouseup", ()=>{
  console.log(document.getElementById("left").value);
  if(document.getElementById("middle").value > 97){
    green = true;
    console.log("green");
    slidersComplete();
  }
});

document.getElementById("right").addEventListener("mouseup", ()=>{
  console.log(document.getElementById("left").value);
  if(document.getElementById("left").value < 3){
    white = true;
    console.log("white");
    slidersComplete();
  }
});

//turning arrows on clocks
let counter1 = 0;
let degrees = 45;


document.getElementById("triangle1").onclick = (()=>{

  if(counter1 ==0){

             document.getElementById("triangle1").style.transform = "rotate(45deg)";
             counter1++;
  }else{
          let angle = degrees*counter1;
          if(angle == 90){
            document.getElementById("triangle1").style.backgroundColor = "green";
            first = true;
            clocksComplete();
          }else{
            document.getElementById("triangle1").style.backgroundColor = "white";
            first = false;
          }
          document.getElementById("triangle1").style.transform = "rotate("+angle+"deg)";
          counter1++;
  }
  
   if(counter1 ==9){
     counter1 = 0;
   }
  
  
});
let counter2=0;
document.getElementById("triangle2").onclick = (()=>{

  if(counter2 ==0){

             document.getElementById("triangle2").style.transform = "rotate(45deg)";
             counter2++;
             document.getElementById("triangle2").style.backgroundColor = "green";
             second = true;
            clocksComplete();
  }else{
          let angle = degrees*counter2;
          if(angle == 45){
            document.getElementById("triangle2").style.backgroundColor = "green";
            second = true;
            clocksComplete();
          }else{
            document.getElementById("triangle2").style.backgroundColor = "white";
            second = false;
          }
          document.getElementById("triangle2").style.transform = "rotate("+angle+"deg)";
          counter2++;
  }
  
   if(counter2 ==9){
     counter2 = 0;
   }
  
  
});
let counter3 =0;
document.getElementById("triangle3").onclick = (()=>{

  if(counter3 ==0){

             document.getElementById("triangle3").style.transform = "rotate(45deg)";
             counter3++;
  }else{
          let angle = degrees*counter3;
          if(angle == 135){
            document.getElementById("triangle3").style.backgroundColor = "green";
            third = true;
            clocksComplete();
          }else{
            document.getElementById("triangle3").style.backgroundColor = "white";
            third = false;
          }
          document.getElementById("triangle3").style.transform = "rotate("+angle+"deg)";
          counter3++;
  }
  
   if(counter3 ==9){
     counter3 = 0;
   }
  
  
});
let counter4=0;
document.getElementById("triangle4").onclick = (()=>{

  if(counter4 ==0){

             document.getElementById("triangle4").style.transform = "rotate(45deg)";
             counter4++;
  }else{
          let angle = degrees*counter4;
          if(angle == 180){
            document.getElementById("triangle4").style.backgroundColor = "green";
            last = true;
            clocksComplete();
          }else{
            document.getElementById("triangle4").style.backgroundColor = "white";
            last = false;
          }
          document.getElementById("triangle4").style.transform = "rotate("+angle+"deg)";
          counter4++;
  }
   if(counter4 ==9){
     counter4 = 0;
   }
  
  
});
//moving sliders


const password = ["","","","","",""];

document.getElementById("S").onclick = (()=>{
  let passwordInput = document.getElementById("passwordInput");
  let tap= new Audio('assets/[YT2mp3.info] - Keyboard press - Sound Effect (320kbps).mp3');
                            tap.play();
    password[0] = "S"; 
    passwordInput.innerHTML =password.join("");
    console.log(password);
         document.getElementById("E").onclick = (()=>{
          tap.play();
         password[1]= "E";
         passwordInput.innerHTML =password.join("");
         console.log(password);
            document.getElementById("C").onclick =(()=>{
              tap.play();
            password[2]= "C";
            passwordInput.innerHTML =password.join("");
            console.log(password);
                document.getElementById("R").onclick = (()=>{
                  tap.play();
                password[3]= "R";
                passwordInput.innerHTML =password.join("");
                console.log(password);
                });
                    document.getElementById("E").onclick = (()=>{
                    tap.play();
                    password[4]= "E";
                    passwordInput.innerHTML =password.join("");
                    console.log(password);
                     });
                        document.getElementById("T").onclick =(()=>{
                          tap.play();
                        password[5]= "T";
                        passwordInput.innerHTML =password.join("");
                        console.log(password);
                            keyboard = true;
                            console.log("keyboard " + keyboard);
                            document.getElementsByTagName("form")[0].style.display = "flex"
                            document.getElementById("enter-password").style.display = "none"
                            let audio = new Audio('assets/Approved Sound Effect.mp3');
                            audio.play();
                            readyToSend();
                        });

    });
  });


});




document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<1){document.getElementById('timer').style.color = "red"};
  if(m<0){
    //game over - you lose
    document.getElementById("top-wrapper").style.display ="none";
    document.getElementById("bottom-wrapper").style.display="none";
    let gameOver = new Audio("assets/[YT2mp3.info] - Lose sound effects (320kbps).mp3");
      gameOver.play();
    document.getElementsByTagName("body")[0].innerHTML ="<h1>GAME OVER</h1>"

    return;
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
 
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function allLetter(inputtxt)
      { 
        console.log("letters");
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
        console.log("ok");
      alert('ok');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }