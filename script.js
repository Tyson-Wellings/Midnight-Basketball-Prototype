
function openNav() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
  document.getElementById("nav").style.display = "none";
  if (window.screen.width < 800){
    document.getElementById("hamburger").style.display = "inline-block";
  }
  
}

function page2(){
  document.getElementById("page2").style.display = "block";
  document.getElementById("page1").style.display = "none";
  document.getElementById("questionnaire-preface").style.display = "none";
  document.getElementById("dot2").style.background ="#df6416"
  if (document.getElementById("court").checked == true){
    document.getElementById("court-jobs").style.display = "block";
  }
  
  if (document.getElementById("bus").checked == true){
    document.getElementById("bus-jobs").style.display = "block";
  }

  if (document.getElementById("canteen").checked == true){
    document.getElementById("canteen-jobs").style.display = "block";
  }

  if (document.getElementById("peace").checked == true){
    document.getElementById("peace-jobs").style.display = "block";
  }

  if (document.getElementById("mentoring").checked == true){
    document.getElementById("mentoring-jobs").style.display = "block";
  }

  if (document.getElementById("prep").checked == true){
    document.getElementById("prep-jobs").style.display = "block";
  }

  if (document.getElementById("committee").checked == true){
    document.getElementById("committee-jobs").style.display = "block";
  }
} 


function page1(){
  document.getElementById("page2").style.display = "none";
  document.getElementById("page1").style.display = "block";
  document.getElementById("questionnaire-preface").style.display = "block";
  document.getElementById("dot2").style.background ="white"
  document.getElementById("bus-jobs").style.display = "none";
  document.getElementById("court-jobs").style.display = "none";
  document.getElementById("canteen-jobs").style.display = "none";
  document.getElementById("peace-jobs").style.display = "none";
  document.getElementById("mentoring-jobs").style.display = "none";
  document.getElementById("prep-jobs").style.display = "none";
  document.getElementById("committee-jobs").style.display = "none";
}

function page3(){
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";
  document.getElementById("dot3").style.background ="#df6416"
  document.getElementById("progress-bar-shading").style.width ="100%"
}

function backPage2(){
  document.getElementById("page2").style.display = "block";
  document.getElementById("page3").style.display = "none";
  document.getElementById("dot3").style.background ="white"
  document.getElementById("progress-bar-shading").style.width ="50%"
}

function thankYou(){
  document.getElementById("page3").style.display = "none";
  document.getElementById("thank-you").style.display = "block";
  document.getElementById("progress-bar-container").style.display = "none";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  
}