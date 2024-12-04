const loginBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const metaDatabase = document.querySelector(".databaselist");

loginBtn.addEventListener("click", () => {
  introScreen.classList.add("fadeOut");
  metaDatabase.classList.add("fadeIn");
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
        xmlDoc.getElementsByTagName("BASE")[i].childNodes[0].nodeValue;
      document.getElementById("subject3").innerHTML =
        xmlDoc.getElementsByTagName("POWER")[i].childNodes[0].nodeValue;
      document.getElementById("subject4").innerHTML =
        xmlDoc.getElementsByTagName("PROFILE")[i].childNodes[0].nodeValue;
    }
    if (subject.value == "BARKER, C") {
      adderClause();
      // show_image("assets/spade.jpg", 100, 100, "spade");
      document.getElementById("profile-img").style.backgroundImage = "url('assets/spade.jpg')";
    }
    if (subject.value == "BRIGGS, M") {
      i += 1;
      adderClause();
    }
    if (subject.value == "CANTU, D") {
      i += 2;
      adderClause();
    }
    if (subject.value == "DAVIS, C") {
      i += 3;
      adderClause();
    }
    if (subject.value == "HARRIS, M") {
      i += 4;
      adderClause();
    }
    if (subject.value == "JARAMILLO, I") {
      i += 5;
      adderClause();
    }
    if (subject.value == "RODRIGUEZ, D") {
      i += 6;
      adderClause();
    }
    if (subject.value == "ORTIZ, M") {
      i += 7;
      adderClause();
    }
    if (subject.value == "RICHARDS, F") {
      i += 8;
      adderClause();
    }
    if (subject.value == "RUBIO, A") {
      i += 9;
      adderClause();
    }
    if (subject.value == "SALINAS, A") {
      i += 10;
      adderClause();
    }
    if (subject.value == "SERRATT, C") {
      i += 11;
      adderClause();
    }
    if (subject.value == "SILVA, M") {
      i += 12;
      adderClause();
    }
    if (subject.value == "TAYLOR, M") {
      i += 13;
      adderClause();
    }
    if (subject.value == "TOBER, D") {
      i += 14;
      adderClause();
    }
  }
}
