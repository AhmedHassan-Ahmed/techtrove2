let products = [];

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    products = JSON.parse(this.responseText);
    // filters code :
    const brandsClass = document.querySelector(".brand-class");
    const pricesClass = document.querySelector(".price-class");
    const categoriesClass = document.querySelector(".category-class");
    const brands = new Set();
    const categories = new Set();
    products.forEach((product) => {
      brands.add(product.brand);
      categories.add(product.category);
    });
    brands.forEach((brand) => {
      let div = document.createElement("div");
      div.classList.add("filter-property");
      div.innerHTML = `
        <p>${brand}</p>
        <p>${countMatching(products, "brand", brand)}</p>
      `;
      brandsClass.append(div);
    });
    categories.forEach((category) => {
      let div = document.createElement("div");
      div.classList.add("filter-property");
      div.innerHTML = `
        <p>${category}</p>
        <p>${countMatching(products, "category", category)}</p>
      `;
      categoriesClass.append(div);
    });
  }
};

function countMatching(products, key, value) {
  return products.filter((item) => item[key] === value).length;
}
