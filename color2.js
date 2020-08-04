//!.Generate the random random rgb colors;
var colors =[];
var GameMode = 6;
function generateRandomrgb(numberOfRgbs, array){
  for (var i = 0; i < numberOfRgbs; i++) {
    var num1 = Math.floor((Math.random() * 255) + 0);
    var num2 = Math.floor((Math.random() * 255) + 0);
    var num3 = Math.floor((Math.random() * 255) + 0);
    array.push("rgb("+num1+", "+num2+", "+num3+")");
  }
  return array;
}

var rgb = generateRandomrgb(6, colors);
console.log(rgb);
//get the random right rgb, which means create a function for it
function winningRgb(numberOfArrayElements, array){
  for (var i = 0; i < numberOfArrayElements; i++) {
     var randomNumber = Math.floor((Math.random() * numberOfArrayElements) + 0);
     for (var i = 0; i < array.length; i++) {
       var randomrgb = array[randomNumber];
     }
  }
  return randomrgb;
}
var winningColor = winningRgb(6, colors);
console.log(winningColor);
var span1 = document.querySelector('#display');
span1.innerHTML = winningColor;
var h1 = document.querySelector("h1");
var button1 = document.getElementsByTagName('button')[0];
button1.addEventListener("click", function(){
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'block';
  }
  colors = [];
  console.log(colors);
  rgb = generateRandomrgb(6, colors);
  console.log(rgb);
  winningColor = winningRgb(6, colors);
  console.log(winningColor);
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = rgb[i];
  }
  messageText.innerHTML = '';
  button1.innerHTML = "New Colors"
  span1.innerHTML = winningColor;
  h1.style.backgroundColor = 'steelblue';
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click",function(){
      if(this.style.backgroundColor != winningColor){
        messageText.innerHTML = 'incorrect';
        this.style.backgroundColor = "#232323";
      } else if(this.style.backgroundColor == winningColor){
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.backgroundColor = winningColor;
          h1.style.backgroundColor = winningColor;
          button1.innerHTML = "Try Again?"
          messageText.innerHTML = 'correct';
        }
      }
    })
  }
})
//get all the neccessary divs
//and color them
var divs = document.querySelectorAll('.square');
var messageText = document.querySelector('.message');
for (var i = 0; i < divs.length; i++) {
   divs[i].style.backgroundColor = rgb[i];
  }
//Make the last piece of the function
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click",function(){
    if(this.style.backgroundColor != winningColor){
      messageText.innerHTML = 'incorrect';
      this.style.backgroundColor = "#232323";
    } else if(this.style.backgroundColor == winningColor){
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = winningColor;
        h1.style.backgroundColor = winningColor;
        button1.innerHTML = "Try Again?"
        messageText.innerHTML = 'correct';
      }
    }
  })
}

var button2 = document.getElementsByTagName('button')[1];
button2.addEventListener("click", function(){
  colors = [];
  rgb = 0;
  rgb = generateRandomrgb(3, colors);
  winningColor = winningRgb(3, colors);
  console.log(winningColor);
  for (var i = 0; i < divs.length; i++) {
    if(rgb[i]){
    divs[i].style.backgroundColor = rgb[i];
  } else {
    divs[i].style.display = 'none';
  }
  }
  messageText.innerHTML = '';
  button1.innerHTML = "New Colors"
  span1.innerHTML = winningColor;
  h1.style.backgroundColor = 'steelblue';
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click",function(){
      if(rgb[i]){
      if(this.style.backgroundColor != winningColor){
        messageText.innerHTML = 'incorrect';
        this.style.backgroundColor = "#232323";
      } else if(this.style.backgroundColor == winningColor){
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.backgroundColor = winningColor;
          h1.style.backgroundColor = winningColor;
          button1.innerHTML = "Try Again?"
          messageText.innerHTML = 'correct';
        }
      }
    }
    })
  }
})
var button3 = document.getElementsByTagName('button')[2];
button3.addEventListener("click", function(){
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'block';
  }
  console.log("yes");
  rgb =0;
  colors = [];
  console.log(colors);
  rgb = generateRandomrgb(6, colors);
  console.log(rgb);
  winningColor = winningRgb(6, colors);
  console.log(winningColor);
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = rgb[i];
  }
  messageText.innerHTML = '';
  button1.innerHTML = "New Colors"
  span1.innerHTML = winningColor;
  h1.style.backgroundColor = 'steelblue';
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click",function(){
      if(rgb[i]){
      if(this.style.backgroundColor != winningColor){
        messageText.innerHTML = 'incorrect';
        this.style.backgroundColor = "#232323";
      } else if(this.style.backgroundColor == winningColor){
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.backgroundColor = winningColor;
          h1.style.backgroundColor = winningColor;
          button1.innerHTML = "Try Again?"
          messageText.innerHTML = 'correct';
        }
      }
    }
    })
  }
})
//implement the easy mode
//Logic behind it:
//If we press the easy button a couple of things need to happen
//firstly the colors array should fill our array with only three different
//rgb colors, if the colors.length exceeds 3 then an erro will be thrown
//if however colors.length does equal 3 then we proceed with disabling the
//last three block with dipslay:none; as well as implementing the same
//functionality as in the normal/hard mode.
