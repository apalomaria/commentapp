//upon click of the button the user name and comments are stored here in console

function getInfo() {
  var username = document.getElementById("username").value;
  var comments=document.getElementById("area").value;

  var userNameText= document.createTextNode("username: " + username)
  var commentText=document.createTextNode("Comment: " + comments)

  var newH1=document.createElement("H1");
  // var text=document.createTextNode(username.value);
  newH1.appendChild(userNameText)
  var right =document.getElementById("right");
  var newArea=document.createElement("p");
  newArea.appendChild(commentText)
//  newArea=document.getElementById("area")
  var newContatiner=document.createElement("div");
  newContatiner.id=("addOn")
  // newH1.appendChild(text)
  newContatiner.appendChild(newH1);
  newContatiner.appendChild(newArea);
  right.appendChild(newContatiner);
  }
