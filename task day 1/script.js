var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDiscrption");
var productsList = document.getElementById("products");

function addProduct() {
    var name = productName.value;
    var price = productPrice.value;
    var descriptions = productDescription.value;

    var product = {
        name: name,
        price: price,
        description: descriptions,
    };

    console.log(product);
    productsList.innerHTML += `
    <div class="product">
        <h2>Name: ${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Description: ${product.description}</p>
    </div>`;
    alert(`Product ${product.name} and price ${product.price} and description ${product.description} `);
    productName.value = '';
    productPrice.value = '';
    productDescription.value = '';

}