const xhttp = new XMLHttpRequest();

xhttp.open("GET", "assets/products.json", true);
xhttp.send();
var res;
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    res = JSON.parse(xhttp.responseText);
    start(res);
  }
};
let s = JSON.parse(
  JSON.parse(localStorage.getItem(localStorage.getItem("Signed")))
);
let z = Array.from(new Set(s[localStorage.getItem("Signed")]["id"]));

function start(res) {
  z.forEach(function (e) {
    let f = document.createElement("div");

    
    f.innerHTML = `<div class="fl">
      <img src="${res[e - 1]["image"]}" alt="">
      <div>
      <div>${res[e - 1]["name"]} , ${res[e - 1]["description"]}...</div>
      
     <div class="price2"> $${res[e - 1]["price"]} </div></div></div>
    
    
    
    `;
    sh = document.querySelector(".order hr");
    sh.insertAdjacentElement("afterend", f);
  });
}

let div = document.createElement("div");
div.innerHTML = ``;
