function Submit() {
  var errorEle = document.body.querySelector(".errorMess");
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  var x = document.getElementById("loginPage");
  var y = document.getElementById("menuPage");
  

  if (username === "cool" && password === "password") {
    x.style.display = "none";
    y.style.display = "block";
   
  } else {
    document.body.querySelector(".errorMess").innerHTML =
      "Wrong Password! Please try again!";
   
  }
};

function addGrade(){
  var x = document.getElementById("addGrade")
  var y = document.getElementById("gradeView")
  x.style.display="block";
  y.style.display="none";
}

function gradeView(){
  var x = document.getElementById("gradeView")
  var y= document.getElementById("addGrade")
  x.style.display="block";
  y.style.display="none";
  document.body.querySelector(".errorMess").innerHTML =
      "";
}

var grades = []


function submitgrade(){
  var studentname = document.body.querySelector(".studentname").value;
  var studentgrade = document.body.querySelector(".studentgrade").value;
if (studentname == "" || (studentgrade < 0) || (studentgrade > 100 || isNaN(studentgrade))){
     document.body.querySelector(".errorMess").innerHTML =
      "Make sure grade is between 0-100 & name is entered!";
  }
  else{
    var gradeView = document.getElementById("gradeView")
    grades.push("Student Name:" + studentname + " | " + "Student Grade:"+ studentgrade + "");
    gradeView.innerHTML=grades;
    gradeView.style.display="block";
    var addGrade= document.getElementById("addGrade")
    addGrade.style.display="none";
    document.body.querySelector(".errorMess").innerHTML =
      "";
  }
  }