//this triggers the CSS transition animation when arrow key pressed
//simiulates hover state, makes arrow jump
function transform1(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 1050;
  //zin = rate

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform1("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform1("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }

}

function transform2(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform2("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform2("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

function transform3(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform3("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform3("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

function transform4(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform4("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform4("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

function transform5(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform5("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform5("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

function transform6(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform6("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform6("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

function transform7(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform7("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform7("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

function transform8(xin, myClass, rate){
  var element1 = document.getElementsByClassName(myClass)[0];
  //var rate = 2000;

  if(xin == "1"){
    element1.style.transform = "rotate(-90deg)";
    //console.log("2 called", element1);
    setTimeout(function(){transform8("recursion", myClass, rate);}, rate);
  } else

  if(xin == "recursion"){
    element1.style.transform = "rotate(0deg)";
    setTimeout(function(){transform8("1", myClass, rate);}, rate);
    //console.log("recursion called", currentClasses);
  }
}

//var refreshRate = 2000;
//var myInterval = setInterval(function(){transform1("1"); }, refreshRate);

window.onload =  function(){
  transform1("1", "mySpot-transition1", 1050);
  transform2("1", "mySpot-transition2", 1150);
  transform3("1", "mySpot-transition3", 1250);
  transform4("1", "mySpot-transition4", 1350);
  transform5("1", "mySpot-transition5", 1450);
  transform6("1", "mySpot-transition6", 1550);
  transform7("1", "mySpot-transition7", 1650);
  transform8("1", "mySpot-transition8", 1750);
}
