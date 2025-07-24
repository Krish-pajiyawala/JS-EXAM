let currentSearch = "";
let priceRange = "";

document.querySelector("#ProductForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let productName = document.querySelector("#Product_name").value;
    let productImage = document.querySelector("#Product_image").value;
    let price = Number(document.querySelector("#Price").value);
    let category = document.querySelector("#Category").value;

    let formData = {
        Product_name: productName,
        Product_image: productImage,
        Price: price,
        Category: category
    };

    let products = JSON.parse(localStorage.getItem("Product")) || [];
    products.push(formData);

    localStorage.setItem("Product", JSON.stringify(products));
    document.querySelector("form").reset();

    addProductToList();
});

document.querySelector("#searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase();
    addProductToList();
});

document.querySelector("#priceRange").addEventListener("change", (e) => {
    priceRange = e.target.value;
    addProductToList();
});

function addProductToList() {
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    let filteredData = allData.filter(product => {

        let nameMatch = product.Product_name.toLowerCase().includes(currentSearch);

        let priceMatch = true;
        if (priceRange) {
            let [min, max] = priceRange.split("-").map(Number);
            priceMatch = product.Price >= min && product.Price <= max;
        }

        return nameMatch && priceMatch;
    });

    let result = "";
    filteredData.forEach((record, index) => {
        let row = `
            <div class="product-cards" data-index="${index}">
                <div class="product-card__image">
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${record.Product_name}</h2>
                    <p class="product-card__category">${record.Category}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price">₹${record.Price}</span>
                    </div>
                    <div class="product-card__btn">
                        <button class="product-card__Edit" data-index="${index}">Edit</button>
                        <button class="product-card__Delete" data-index="${index}">Delete</button>
                    </div>
                </div>
            </div>
        `;
        result += row;
    });

    document.querySelector(".cont").innerHTML = result;

    document.querySelectorAll(".product-card__Edit").forEach(button => {
        button.addEventListener("click", editProduct);
    });

    document.querySelectorAll(".product-card__Delete").forEach(button => {
        button.addEventListener("click", deleteProduct);
    });
}

function editProduct(e) {

    let filteredIndex = Number(e.target.dataset.index);
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    let filteredData = allData.filter(product => {
        let nameMatch = product.Product_name.toLowerCase().includes(currentSearch);
        let priceMatch = true;
        if (priceRange) {
            let [min, max] = priceRange.split("-").map(Number);
            priceMatch = product.Price >= min && product.Price <= max;
        }
        return nameMatch && priceMatch;
    });

    let productToEdit = filteredData[filteredIndex];

    let realIndex = allData.findIndex(p => p === productToEdit);

    if (realIndex === -1) return; 

    document.querySelector("#Product_name").value = productToEdit.Product_name;
    document.querySelector("#Product_image").value = productToEdit.Product_image;
    document.querySelector("#Price").value = productToEdit.Price;
    document.querySelector("#Category").value = productToEdit.Category;

    allData.splice(realIndex, 1);
    localStorage.setItem("Product", JSON.stringify(allData));

    addProductToList();
}

function deleteProduct(e) {
    let filteredIndex = Number(e.target.dataset.index);
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    let filteredData = allData.filter(product => {
        let nameMatch = product.Product_name.toLowerCase().includes(currentSearch);
        let priceMatch = true;
        if (priceRange) {
            let [min, max] = priceRange.split("-").map(Number);
            priceMatch = product.Price >= min && product.Price <= max;
        }
        return nameMatch && priceMatch;
    });

    let productToDelete = filteredData[filteredIndex];
    let realIndex = allData.findIndex(p => p === productToDelete);

    if (realIndex === -1) return;

    allData.splice(realIndex, 1);
    localStorage.setItem("Product", JSON.stringify(allData));

    addProductToList();
}

addProductToList();
