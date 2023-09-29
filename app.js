function homeScroll() {
  document.getElementById('home').scrollIntoView({ 
    behavior: 'smooth'
  })};
  
function offerScroll() {
  document.getElementById('fra_offer').scrollIntoView({ 
  behavior: 'smooth'
})};

function memberScroll() {
  document.getElementById('member').scrollIntoView({ 
  behavior: 'smooth'
})};

function contactScroll() {
  document.getElementById('contact').scrollIntoView({ 
  behavior: 'smooth'
})};

function menFun() {
    var x = document.getElementsByClassName('men');
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "inline-block";
    }
    var x = document.getElementsByClassName('women');
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  };

 function bothFun() {
    var x = document.getElementsByClassName('men');
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "inline-block";
    }
    var x = document.getElementsByClassName('women');
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "inline-block";
    }
};

function womenFun() {
  var x = document.getElementsByClassName('men');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var x = document.getElementsByClassName('women');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "inline-block";
  }
};