document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  document.getElementById("successMsg").innerText = "✅ Thank you for contacting HAPPY RIDES! We'll get back to you soon.";
  this.reset();
});

function callNow() {
  alert("📞 Call us now at 7894561235 and start your HAPPY RIDE!");
}