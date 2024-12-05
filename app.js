const starProceed = document.getElementById("star");
const loginScreen = document.querySelector(".login-screen");
const loginForm = document.getElementById("login-form");
const metaDatabase = document.querySelector(".databaselist");

starProceed.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username == "1" && password == "2") {
    loginScreen.classList.add("fadeOut");
  metaDatabase.classList.add("fadeIn");
  console.log("Help");
    // alert("Login successful.");
  } else {
    alert("Login incorrect.");
  }
});


// SEPARATOR-----------------------------------

function profile(subject) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "info.xml", true);
  xhttp.send();
  function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    let i = 0;

    // function show_image(src, width, height, alt) {
    //   let img = document.createElement("img");
    //   img.src = src;
    //   img.width = width;
    //   img.height = height;
    //   img.alt = alt;
    //   document.querySelector("#profile-img").replaceWith(img);
    // }

    function adderClause() {
      document.getElementById("subject1").innerHTML =
        xmlDoc.getElementsByTagName("NAME")[i].childNodes[0].nodeValue;
      document.getElementById("subject2").innerHTML =
        xmlDoc.getElementsByTagName("AFFILIATION")[i].childNodes[0].nodeValue;
      document.getElementById("subject3").innerHTML =
        xmlDoc.getElementsByTagName("POWER")[i].childNodes[0].nodeValue;
      document.getElementById("subject4").innerHTML =
        xmlDoc.getElementsByTagName("PROFILE")[i].childNodes[0].nodeValue;
    }
    if (subject.value == "BARKER, C") {
      adderClause();
      // show_image("assets/spade.jpg", 100, 100, "spade");
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/barker-icon.png')";
    }
    if (subject.value == "BRIGGS, M") {
      i += 1;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/briggs-icon.png')";
    }
    if (subject.value == "CANTU, D") {
      i += 2;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/cantu-icon.png')";
    }
    if (subject.value == "DAVIS, C") {
      i += 3;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/davis-icon.png')";
    }
    if (subject.value == "HARRIS, M") {
      i += 4;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/harris-icon.png')";
    }
    if (subject.value == "JARAMILLO, I") {
      i += 5;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/jaramillo-icon.png')";
    }
    if (subject.value == "RODRIGUEZ, D") {
      i += 6;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/rodriguez-icon.png')";
    }
    if (subject.value == "ORTIZ, M") {
      i += 7;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/ortiz-icon.png')";
    }
    if (subject.value == "RICHARDS, F") {
      i += 8;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/richards-icon.png')";
    }
    if (subject.value == "RUBIO, A") {
      i += 9;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/rubio-icon.png')";
    }
    if (subject.value == "SALINAS, A") {
      i += 10;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/salinas-icon.png')";
    }
    if (subject.value == "SERRATT, C") {
      i += 11;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/serratt-icon.png')";
    }
    if (subject.value == "SILVA, M") {
      i += 12;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/silva-icon.png')";
    }
    if (subject.value == "TAYLOR, M") {
      i += 13;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/taylor-icon.png')";
    }
    if (subject.value == "TOBER, D") {
      i += 14;
      adderClause();
      document.getElementById("profile-img").style.backgroundImage =
        "url('assets/tober-icon.png')";
    }
  }
}
