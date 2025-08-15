let productsData = [];

const myRequest = new XMLHttpRequest();
myRequest.open("GET", "./assets/products.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    productsData = JSON.parse(this.responseText);
    renderElements(productsData, "laptop", "new-laptops", 10);
    renderElements(productsData, "PC", "new-pcs", 10);
    setupNavHoverMenu(productsData);

    const navSearch = document.getElementById("main-search-bar");
    const navSearchBtn = document.getElementById("nav-search-btn");
    const navSearchIcon = navSearchBtn.getElementsByTagName("i")[0];
    const navLinksContainer = document.getElementsByClassName("nav-links")[0];
    const pageContainer = document.getElementsByClassName("container")[0];
    const pageContainerOriginal = pageContainer.innerHTML;

    navSearchBtn.addEventListener("click", () => {
      if (navSearchIcon.classList.value === "fa-solid fa-magnifying-glass") {
        navSearch.style.setProperty("display", "block", "important");
        navLinksContainer.style.setProperty("display", "none", "important");
        navSearchIcon.classList.value = "fa-solid fa-xmark";
        pageContainer.innerHTML = "";
        pageContainer.style.cssText =
          "display:flex; flex-wrap:wrap; gap:30px; justify-content:center; margin-top:50px;";
        renderAllElements(productsData, "container", productsData.length);

        const products = document.querySelectorAll(".product");
        navSearch.addEventListener("input", () => {
          const query = navSearch.value.toLowerCase();
          products.forEach((product) => {
            const text = product.textContent.toLowerCase();
            if (text.includes(query)) {
              product.style.display = "block";
            } else {
              product.style.display = "none";
            }
          });
        });
      } else if (navSearchIcon.classList.value === "fa-solid fa-xmark") {
        navSearch.style.setProperty("display", "none", "important");
        navLinksContainer.style.setProperty("display", "flex", "important");
        navSearchIcon.classList.value = "fa-solid fa-magnifying-glass";
        pageContainer.innerHTML = "";
        pageContainer.style.cssText = "";
        pageContainer.innerHTML = pageContainerOriginal;
      }
    });
  }
};

function renderElements(
  products,
  category,
  containerDivClass,
  numberOfElements
) {
  const container = document.getElementsByClassName(containerDivClass)[0];
  let count = 0;
  for (let i = products.length - 1; i >= 0 && count < numberOfElements; i--) {
    const product = products[i];
    if (product.category === category) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <div class="product-img-container">
          <img src="${product.image}" alt="an image of the ${product.name} ${
        product.category
      }" />
          ${
            product.stock
              ? `<p class="availability" style="color: #78a962;">
                  <i class="fa-solid fa-circle-check"></i> ${product.stock} in Stock
                 </p>`
              : `<p class="availability" style="color: #C94D3F;">
                  <i class="fa-solid fa-circle-xmark"></i> Out Of Stock
                 </p>`
          }
          <button class="add-to-cart-button">Add To Cart</button>
        </div>
        <a href="product-details.html?id=${product.id}" class="product-name">${
        product.name
      }</a>
        <h5 class="price">$${product.price}</h5>
      `;
      container.append(productDiv);
      count++;
    }
  }
}

function renderElementsWithABrandSelector(
  products,
  category,
  containerDivClass,
  numberOfElements,
  brand
) {
  const container = document.getElementsByClassName(containerDivClass)[0];
  container.innerHTML = "";
  let count = 0;

  for (let i = products.length - 1; i >= 0 && count < numberOfElements; i--) {
    const product = products[i];
    if (product.category === category && product.brand === brand) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <div class="product-img-container">
          <img src="${product.image}" alt="an image of the ${product.name} ${
        product.category
      }" />
          ${
            product.stock
              ? `<p class="availability" style="color: #78a962;">
                  <i class="fa-solid fa-circle-check"></i> ${product.stock} in Stock
                 </p>`
              : `<p class="availability" style="color: #C94D3F;">
                  <i class="fa-solid fa-circle-xmark"></i> Out Of Stock
                 </p>`
          }
          <button class="add-to-cart-button">Add To Cart</button>
        </div>
        <a href="product-details.html?id=${product.id}" class="product-name">${
        product.name
      }</a>
        <h5 class="price">$${product.price}</h5>
      `;
      container.append(productDiv);
      count++;
    }
  }
}

function renderAllElements(products, containerDivClass, numberOfElements) {
  const container = document.getElementsByClassName(containerDivClass)[0];
  let count = 0;
  for (let i = products.length - 1; i >= 0 && count < numberOfElements; i--) {
    const product = products[i];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <div class="product-img-container">
        <img src="${product.image}" alt="an image of the ${product.name} ${
      product.category
    }" />
        ${
          product.stock
            ? `<p class="availability" style="color: #78a962;">
                <i class="fa-solid fa-circle-check"></i> ${product.stock} in Stock
               </p>`
            : `<p class="availability" style="color: #C94D3F;">
                <i class="fa-solid fa-circle-xmark"></i> Out Of Stock
               </p>`
        }
        <button class="add-to-cart-button">Add To Cart</button>
      </div>
      <a href="product-details.html?id=${product.id}" class="product-name">${
      product.name
    }</a>
      <h5 class="price">$${product.price}</h5>
    `;
    container.append(productDiv);
    count++;
  }
}

function setupNavHoverMenu(products) {
  const navLinksContainer = document.getElementsByClassName("nav-links")[0];
  const hoverMenu = document.getElementsByClassName("nav-hover-menu")[0];
  const categoriesContainer =
    document.getElementsByClassName("nav-categories")[0];
  const navSample = document.querySelector(".nav-sample");

  function navHoverMenuShow(products, type) {
    hoverMenu.style.setProperty("display", "block", "important");
    categoriesContainer.innerHTML = "";

    const brands = new Set();
    products.forEach((product) => {
      if (product.category === type) {
        brands.add(product.brand);
      }
    });

    brands.forEach((brand) => {
      const div = document.createElement("div");
      div.classList.add("nav-category");
      div.innerHTML = `
        ${brand} <i class="fa-solid fa-arrow-right"></i>
      `;
      categoriesContainer.append(div);
    });

    const categories = document.querySelectorAll(".nav-category");
    categories.forEach((category) => {
      category.addEventListener("mouseenter", () => {
        navSample.innerHTML = "";
        renderElementsWithABrandSelector(
          products,
          type,
          "nav-sample",
          3,
          category.textContent.trim()
        );
      });
    });
  }

  navLinksContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (link.textContent.trim() === "Laptops") {
        navHoverMenuShow(products, "laptop");
      } else if (link.textContent.trim() === "Desktop PCs") {
        navHoverMenuShow(products, "PC");
      }
    });
  });

  function hideHoverMenu() {
    hoverMenu.style.display = "none";
    if (navSample) {
      navSample.innerHTML = "";
    }
  }

  let isHoveringNavLinks = false;
  let isHoveringHoverMenu = false;

  navLinksContainer.addEventListener("mouseenter", () => {
    isHoveringNavLinks = true;
  });
  navLinksContainer.addEventListener("mouseleave", () => {
    isHoveringNavLinks = false;
    setTimeout(() => {
      if (!isHoveringHoverMenu && !isHoveringNavLinks) {
        hideHoverMenu();
      }
    }, 50);
  });

  hoverMenu.addEventListener("mouseenter", () => {
    isHoveringHoverMenu = true;
  });
  hoverMenu.addEventListener("mouseleave", () => {
    isHoveringHoverMenu = false;
    setTimeout(() => {
      if (!isHoveringHoverMenu && !isHoveringNavLinks) {
        hideHoverMenu();
      }
    }, 50);
  });
}

function controlledSlider(
  buttonsSelector,
  trackSelector,
  slidesSelector,
  slideWidth
) {
  let btns = document.querySelectorAll(buttonsSelector);
  let sliderIndex = 0;

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const offset = parseInt(e.currentTarget.getAttribute("offset"));
      const slider = document.querySelector(trackSelector);
      const totalSlides = slider.querySelectorAll(slidesSelector).length;

      sliderIndex += offset;

      if (sliderIndex < 0) sliderIndex = 0;
      if (sliderIndex > totalSlides - 1) sliderIndex = totalSlides - 1;

      const moveX = -sliderIndex * slideWidth;

      slider.style.transform = `translateX(${moveX}px)`;
    });
  });
}

controlledSlider(".images-slider-buttons", ".images-slides-track", "img", 1400);
controlledSlider(".reviews-slider-buttons", ".reviews-track", ".review", 1160);

const profileControls = document.querySelector(".profile-controls");
const hoverMenu = document.querySelector(".profile-controls-hover-menu");

let hideTimeout;

function showMenu() {
  clearTimeout(hideTimeout);
  hoverMenu.style.display = "block";
}

function scheduleHideMenu() {
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    if (!profileControls.matches(":hover") && !hoverMenu.matches(":hover")) {
      hoverMenu.style.display = "none";
    }
  }, 500);
}

profileControls.addEventListener("mouseenter", showMenu);
profileControls.addEventListener("mouseleave", scheduleHideMenu);

hoverMenu.addEventListener("mouseenter", showMenu);
hoverMenu.addEventListener("mouseleave", scheduleHideMenu);
