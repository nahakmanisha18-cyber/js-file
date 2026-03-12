let Addproduct = document.querySelector("#Addproduct");
let formcontainer = document.querySelector("#formContainer")
let showproduct = document.querySelector("#showproduct");
const search = document.querySelector("#search");
const searchbtn = document.querySelector("#searchbtn");
const clearbtn = document.querySelector("#clearbtn");

// =================  local storage functions =================
const getProductData = () => JSON.parse(localStorage.getItem("products")) || [];
const setProductData = (data) => localStorage.setItem("products", JSON.stringify(data));

// ================= Add Products function =================
Addproduct.addEventListener("click", () => {

    formcontainer.innerHTML = `
    <div class="container mt-5">
        <div class="row justify-content-center">
           <div class="col-md-6">
                <div class="card shadow p-4">
                    <h3 class="text-center mb-4">Add Product</h3>
                    <form id="addform">
                       <div class="mb-3">
                          <label class="form-label">Product Name</label>
                          <input type="text" id="pname" class="form-control" placeholder="Enter product name">
                          <span id="pnameError" class="text-danger"></span>
                       </div>
                       <div class="mb-3">
                           <label class="form-label">Price</label>
                           <input type="number" id="price" class="form-control" placeholder="Enter price">
                           <span id="priceError" class="text-danger"></span>
                       </div>
                       <div class="mb-3"> 
                           <label class="form-label">Category</label> 
                           <input type="text" id="category" class="form-control" placeholder="Enter product category">
                           <span id="categoryError" class="text-danger"></span>
                       </div>
                       <div class="mb-3">
                           <label class="form-label">Image URL</label>
                           <input type="text" id="image" class="form-control" placeholder="Enter image URL">
                           <span id="imageError" class="text-danger"></span>
                       </div>
                       <button type="submit" class="btn btn-primary w-100">Add Product</button>
                    </form>
               </div>
           </div>
       </div>
    </div>`;

    let addform = document.querySelector("#addform");

    addform.addEventListener("submit", (e) => {
        e.preventDefault();

        let isvalid = true;
        let pname = document.querySelector("#pname").value.trim();
        let price = document.querySelector("#price").value.trim();
        let category = document.querySelector("#category").value.trim();
        let image = document.querySelector("#image").value.trim();

        // validation
        if (pname === "") { document.querySelector("#pnameError").innerHTML = "Product name is required"; isvalid = false; } else { document.querySelector("#pnameError").innerHTML = ""; }
        if (price === "") { document.querySelector("#priceError").innerHTML = "Price is required"; isvalid = false; } else if (price <= 0) { document.querySelector("#priceError").innerHTML = "Enter valid price"; isvalid = false; } else { document.querySelector("#priceError").innerHTML = ""; }
        if (category === "") { document.querySelector("#categoryError").innerHTML = "Category is required"; isvalid = false; } else { document.querySelector("#categoryError").innerHTML = ""; }
        if (image === "") { document.querySelector("#imageError").innerHTML = "Image URL is required"; isvalid = false; } else { document.querySelector("#imageError").innerHTML = ""; }

        if (!isvalid) return;

        let product = { pname, price: Number(price), category, image };
        let products = getProductData();
        products.push(product);
        setProductData(products);
        addform.reset();
    });
});

// ================= Display Products =================
const populateCategoryFilter = () => {
    let products = getProductData();
    let categories = [...new Set(products.map(p => p.category))];
    let select = document.querySelector("#categoryFilter");
    if (!select) return;
    select.innerHTML = `<option value="all">All Categories</option>`;
    categories.forEach(cat => select.innerHTML += `<option value="${cat}">${cat}</option>`);
};

const renderProducts = (products) => {
    if (products.length === 0) {
        formcontainer.innerHTML = "<h4 class='text-center mt-4'>No Products Found</h4>";
        return;
    }

    let html = `
    <div class="container mt-4">
        <h3 class="text-center mb-3">Products</h3>
        <div class="mb-3 d-flex justify-content-between align-items-center p-2 bg-light rounded shadow-sm">
    <!-- Left: Sort Buttons -->
    <div class="d-flex gap-2">
        <button class="sort btn-sm" id="lowToHigh">
            Low → High
        </button>
        <button class="sort btn-sm" id="highToLow">
            High → Low
        </button>
    </div>

    <!-- Right: Category Filter -->
    <div class="d-flex align-items-center gap-2">
        <label for="categoryFilter" class="form-label mb-0 fw-bold">Category:</label>
        <select id="categoryFilter" class="form-select form-select-sm">
            <option value="all">All Categories</option>
        </select>
    </div>
    
</div>
        <div class="row g-4">`;

    products.forEach((p, i) => {
        html += `
        <div class="col-md-3 mb-4">
            <div class="card product-card shadow-sm h-100">
                <div class="card-image-wrapper text-center p-3">
                    <img src="${p.image}" class="card-img-top product-img">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${p.pname}</h5>
                    <p class="mb-2 text-success fw-bold">₹${p.price}</p>
                </div>
                <div class="card-footer bg-white border-0 text-center pb-3">
                    <button class="btn btn-sm btn-warning me-2" onclick="editProduct(${i})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct(${i})">Delete</button>
                </div>
            </div>
        </div>`;
    });

    html += `</div></div>`;
    formcontainer.innerHTML = html;
    populateCategoryFilter();
};

const displayProducts = () => {
    let products = getProductData();
    renderProducts(products);
};

// ================= Show Product =================
showproduct.addEventListener("click", displayProducts);

// ================= Delete Product =================
const deleteProduct = (index) => {
    let products = getProductData();
    products.splice(index, 1);
    setProductData(products);
    displayProducts();
};

// ================= Edit Product =================
const editProduct = (index) => {
    let products = getProductData();
    let p = products[index];

    formcontainer.innerHTML = `
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow p-4">
                    <h3 class="text-center mb-4">Edit Product</h3>
                    <form id="editform">
                        <div class="mb-3">
                            <label class="form-label">Product Name</label>
                            <input type="text" id="pname" class="form-control" value="${p.pname}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price</label>
                            <input type="number" id="price" class="form-control" value="${p.price}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Category</label>
                            <input type="text" id="category" class="form-control" value="${p.category}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Image URL</label>
                            <input type="text" id="image" class="form-control" value="${p.image}">
                        </div>
                        <button type="submit" class="btn btn-success w-100">Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`;

    document.querySelector("#editform").addEventListener("submit", (e) => {
        e.preventDefault();
        let pname = document.querySelector("#pname").value.trim();
        let price = Number(document.querySelector("#price").value.trim());
        let category = document.querySelector("#category").value.trim();
        let image = document.querySelector("#image").value.trim();

        products[index] = { pname, price, category, image };
        setProductData(products);
        displayProducts();
    });
};

// ================= Sort Products =================
document.addEventListener("click", (e) => {
    if (e.target.id === "lowToHigh") {
        let products = getProductData();
        products.sort((a, b) => a.price - b.price);
        setProductData(products);
        displayProducts();
    }

    if (e.target.id === "highToLow") {
        let products = getProductData();
        products.sort((a, b) => b.price - a.price);
        setProductData(products);
        displayProducts();
    }
});

// ================= Filter by Category =================
document.addEventListener("change", (e) => {
    if (e.target.id === "categoryFilter") {
        let selected = e.target.value;
        let products = getProductData();
        if (selected !== "all") products = products.filter(p => p.category === selected);
        renderProducts(products);
    }
});

// ================= Search =================
searchbtn.addEventListener("click", () => {
    let keyword = search.value.trim().toLowerCase();
    let products = getProductData();
    if (keyword === "") {
        displayProducts();
        return;
    }

    let filtered = products
        .map((p, index) => ({ ...p, index }))
        .filter(p =>
            p.pname.toLowerCase().includes(keyword) ||
            p.category.toLowerCase().includes(keyword) ||
            p.price.toString().includes(keyword)
        );

    if (filtered.length === 0) {
        formcontainer.innerHTML = `<h4 class="text-center text-danger mt-4">No product found</h4>`;
        return;
    }

    renderProducts(filtered);
});

// ================= Clear Search =================
clearbtn.addEventListener("click", () => {
    search.value = "";
    displayProducts();
});