function toggleDetails() {
  const extra = document.getElementById("extra");
  extra.classList.toggle("hidden");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const msg = document.getElementById("message");
  msg.textContent = `Thank you, ${name}! Your message has been sent.`;
  msg.classList.remove("hidden");
  this.reset();
});
