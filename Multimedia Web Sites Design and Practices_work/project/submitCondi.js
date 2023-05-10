window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
  document.getElementById("Know_cYes").onclick = turnOnExp;
  document.getElementById("Play_cYes").onclick = turnOnWhich;
}

function turnOnExp() {
   document.getElementById("Play_cYes").disabled=false;
   document.getElementById("Play_cNo").disabled=false;
   

}

function turnOnWhich() {
document.getElementById("WhichAns").disabled=false;
}