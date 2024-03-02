var percent = document.querySelector(".percent");
var count = 0;
var loading = setInterval(animate, 100);
function animate() {
  if (count == 100) {
    clearInterval(loading);
     // Redirige a index.html
     window.location.href = 'index.html';
  } else {
    count = count + 1;
    percent.textContent = count + "%";
  }
}