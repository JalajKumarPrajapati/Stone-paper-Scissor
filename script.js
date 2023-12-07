/////////////////////////////////////////////////////////////////////////////////
var audioElement = document.getElementById("myAudio");
var audioElement2 = document.getElementById("myAudio2");
let stone = document.getElementById("stoneimg");
let time=1500;
stone.addEventListener('click',function(){
  let k=Math.floor(Math.random()*10/4)+1
  let pcrimg=document.getElementById("pcrimg");
  let res=document.getElementById("result");
   let res2=document.getElementById("result2");
  if(k==1)
  {
    pcrimg.src="stone-removebg-preview.png";
    pcrimg.alt="404";
    res.innerHTML="DRAW ";
    res2.innerHTML="DRAW ";
  }
  else if(k==2)
  {
    pcrimg.src="paper-removebg-preview.png";
    pcrimg.alt="404";
    res.innerHTML="LOSE";
     res2.innerHTML="LOSE ";
     audioElement2.play();
  }
  else
  {
    pcrimg.src="scissor-removebg-preview.png";
    pcrimg.alt="404";
    res.innerHTML="WIN";
     res2.innerHTML="WIN";
     audioElement.play();
    time=4000;
  }
 
  setTimeout(function() {
    // Code to be executed after 2 seconds
    window.location.reload();
  }, time);
  
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
let paperimg = document.getElementById("paperimg");
paperimg.addEventListener('click',function(){
  let k=Math.floor(Math.random()*10/4)+1
    let pcrimg=document.getElementById("pcrimg");
    let res=document.getElementById("result");
     let res2=document.getElementById("result2");
    if(k==1)
    {
      pcrimg.src="stone-removebg-preview.png";
      pcrimg.alt="404";
      res.innerHTML="WIN";
      res2.innerHTML="WIN";
      audioElement.play();
      time=4000;
    }
    else if(k==2)
    {
      pcrimg.src="paper-removebg-preview.png";
      pcrimg.alt="404";
      res.innerHTML="DRAW";
       res2.innerHTML="DRAW";
    }
    else
    {
      pcrimg.src="scissor-removebg-preview.png";
      pcrimg.alt="404";
      res.innerHTML="LOSE";
       res2.innerHTML="LOSE";
      audioElement2.play();
    }
  setTimeout(function() {
    // Code to be executed after 2 seconds
    window.location.reload();
  }, time);

  })
 
/////////////////////////////////////////////////////////////////////////////
let scissorimg = document.getElementById("scissorimg");
scissorimg.addEventListener('click',function(){
  let k=Math.floor(Math.random()*10/4)+1
    let pcrimg=document.getElementById("pcrimg");
    let res=document.getElementById("result");
     let res2=document.getElementById("result2");
    if(k==1)
    {
      pcrimg.src="stone-removebg-preview.png";
      pcrimg.alt="404";
      res.innerHTML="LOSE";
      res2.innerHTML="LOSE";
      audioElement2.play();
    }
    else if(k==2)
    {
      pcrimg.src="paper-removebg-preview.png";
      pcrimg.alt="404";
      res.innerHTML="WIN";
       res2.innerHTML="WIN";
      audioElement.play();
      time=4000;
    }
    else
    {
      pcrimg.src="scissor-removebg-preview.png";
      pcrimg.alt="404";
      res.innerHTML="DRAW";
       res2.innerHTML="DRAW";
    }
  
  setTimeout(function() {
    // Code to be executed after 2 seconds
    window.location.reload();
  }, time);

  })
// setTimeout(function() {
//   // Code to be executed after 2 seconds
//   window.location.reload();
// }, 3000);
// var imageElement = document.getElementById("myImage");

// // Add a click event listener
// imageElement.addEventListener('click', function() {
//   // Function to be executed when the image is clicked
//   alert("Hello");
// });