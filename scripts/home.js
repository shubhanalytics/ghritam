const user = localStorage.getItem("user");
document.getElementById("userName").textContent = user || "Guest";

const products = [
  { id: 1, name: "A2 Ghee", price: 499 },
  { id: 2, name: "Paneer", price: 299 },
  { id: 3, name: "Curd", price: 199 }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="viewProduct(${product.id})">View</button>
  `;
  container.appendChild(card);
});

function viewProduct(id) {
  localStorage.setItem("selectedProduct", JSON.stringify(products.find(p => p.id === id)));
  window.location.href = "product.html";
}
