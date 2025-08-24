const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");

cart.forEach(item => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
  container.appendChild(div);
});

function checkout() {
  window.location.href = "summary.html";
}
