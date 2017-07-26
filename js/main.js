//upon click of the button the user name and comments are stored here in console

function getInfo() {
  var username = document.getElementById("username");
  var comments=document.getElementById("area");
  console.log("username: " + username.value + " area: " + area.value);

  var newH1=document.createElement("H1");
  // var text=document.createTextNode(username.value);
  var right =document.getElementById("right");
  var newArea=document.createElement("H2");
//  newArea=document.getElementById("area")
  var newContatiner=document.createElement("div");
  newContatiner.id=("addOn")
  // newH1.appendChild(text)
  newContatiner.appendChild(newH1);
  newContatiner.appendChild(newArea);
  right.appendChild(newContatiner);
  }
