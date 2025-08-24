const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("summary");
let total = 0;

cart.forEach(item => {
  total += item.price;
  const div = document.createElement("div");
  div.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
  container.appendChild(div);
});

const totalDiv = document.createElement("div");
totalDiv.innerHTML = `<h3>Total: ₹${total}</h3>`;
container.appendChild(totalDiv);
