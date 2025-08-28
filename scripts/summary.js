document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const summaryDiv = document.getElementById('summary-details');

  if (cart.length === 0) {
    summaryDiv.innerHTML = `<p>Your cart is empty.</p>`;
    return;
  }

  let total = 0;
  let html = `<ul>`;
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    html += `
      <li>
        <strong>${item.name}</strong><br>
        Price: ₹${item.price} × ${item.qty} = ₹${itemTotal}
      </li>
    `;
  });
  html += `</ul><p><strong>Total Amount: ₹${total}</strong></p>`;
  summaryDiv.innerHTML = html;

  document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const method = document.querySelector('input[name="payment"]:checked').value;
    alert(`Payment method selected: ${method}\nProceeding with ₹${total}`);
    window.location.href = 'thankyou.html';
  });
});
