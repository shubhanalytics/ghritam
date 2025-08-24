const product = JSON.parse(localStorage.getItem("selectedProduct"));
const container = document.getElementById("product-detail");

container.innerHTML = `
  <h2>${product.name}</h2>
  <p>Price: ₹${product.price}</p>
  <button onclick="addToCart()">Add to Cart</button>
`;

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
