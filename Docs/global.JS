// Load Header
window.onload = () => {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('headerContent').innerHTML = data;
    })
    .catch(console.error);
};