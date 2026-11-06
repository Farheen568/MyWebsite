var nameBox = document.getElementById("n");
var emailBox = document.getElementById("e");
var msgBox = document.getElementById("m");
var sendBtn = document.getElementById("sendBtn");
var form = document.getElementById("myForm");
var thanks = document.getElementById("thanks");

function checkForm() {
  var nameOk = nameBox.value.length >= 3;
  var emailOk = emailBox.value.indexOf("@") > 0 && emailBox.value.indexOf(".") > 0;
  var msgOk = msgBox.value.length >= 10;

  nameBox.className = nameOk ? "ok" : "bad";
  emailBox.className = emailOk ? "ok" : "bad";
  msgBox.className = msgOk ? "ok" : "bad";

  document.getElementById("nError").textContent = nameOk ? "" : "Name needs 3 letters.";
  document.getElementById("eError").textContent = emailOk ? "" : "Enter a valid email.";
  document.getElementById("mError").textContent = msgOk ? "" : "Message needs 10 letters.";

  sendBtn.disabled = !(nameOk && emailOk && msgOk);
}

nameBox.addEventListener("input", checkForm);
emailBox.addEventListener("input", checkForm);
msgBox.addEventListener("input", checkForm);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("hidden");
  thanks.classList.remove("hidden");
});

document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});