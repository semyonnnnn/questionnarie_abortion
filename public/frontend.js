// public/frontend.js
window.onload = () => {
  fetch("/api/message")
    .then((res) => res.text())
    .then((text) => {
      document.getElementById("message").textContent = text;
    })
    .catch((err) => {
      document.getElementById("message").textContent = "Error fetching message";
      console.error(err);
    });
};
