/* eslint-env jquery, browser */
$(document).ready(() => {
  // Place JavaScript code here...
  var testEl = document.getElementById("testEl");
  console.log(testEl);
  setInterval(function () {
    var para = document.createElement("div");
    var t = document.createTextNode("This is flooding text");
    para.appendChild(t);
    testEl.appendChild(para);
  }, 100);
});
