function generateBill() {
    const product = document.getElementById('productName').value;
    const customProduct = document.getElementById('customProduct').value;
    const imei = document.getElementById('imeiNumber').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const price = parseFloat(document.getElementById('price').value);
    const total = quantity * price;

    document.getElementById('productDisplay').textContent = 
        product === "Others" && customProduct ? customProduct : product;
    document.getElementById('imeiDisplay').textContent = imei || "N/A";
    document.getElementById('quantityDisplay').textContent = quantity || 0;
    document.getElementById('priceDisplay').textContent = price.toFixed(2) || "0.00";
    document.getElementById('totalDisplay').textContent = total.toFixed(2) || "0.00";
}
