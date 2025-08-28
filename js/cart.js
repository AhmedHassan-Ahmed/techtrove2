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
let sub = document.querySelector(".fle span");
let sh;
let s = JSON.parse(
  JSON.parse(localStorage.getItem(localStorage.getItem("Signed")))
);
let z = Array.from(new Set(s[localStorage.getItem("Signed")]["id"]));
let z2 = s[localStorage.getItem("Signed")]["id"];
let input;
let fh;
let total = 0;
var subp;
let fs;

function start(res) {
  z.forEach(function (e) {
    let f = document.createElement("div");

    total += +`${res[e - 1]["price"]}`;
    f.innerHTML = `<br>
      <div class="con">
        <div class="flex5 cart  co"><img src="${res[e - 1]["image"]}" alt="">
      <div class="Item">${res[e - 1]["name"]}, ${res[e - 1]["brand"]}, ${
      res[e - 1]["description"]
    }, ${res[e - 1]["specs"]["cpu"]}</div>
      <div class="Price" style="font-weight: 600;"> $${
        res[e - 1]["price"]
      }</div>
      
      <input type="number" min="1"   class="number" value="1" oninput= "refresh()">
      
      <div class="Subtotal" style="font-weight: 600;">$${Math.round(
        total
      )}</div><i class=" fa-solid fa-circle-xmark" onclick="del(${
      res[e - 1]["id"]
    })"></i>

    </div>
    </div>`;
    sh = document.querySelector(".flex5");
    sh.insertAdjacentElement("afterend", f);

    let p = 0;

    Array.from(s[localStorage.getItem("Signed")]["id"]).map((arr) => {
      if (arr == +e) {
        p++;
      }
    }, 0);

    input = document.querySelectorAll(".number");

    input[0].setAttribute("value", p);

    total += (p - 1) * +Math.round(`${res[e - 1]["price"]}`);

    input2 = document.querySelectorAll(".number");
    input[0].setAttribute("id", `${e}`);

    // input2.forEach(function (eo) {
    //   eo.addEventListener("input", function () {
    //     // console.log("####f", eo.value);
    //     // console.log(e);
    //     fs = z;

    //     fs.push(e);
    //     console.log(fs);

    //     // s[localStorage.getItem("Signed")]["id"] = fs;
    //     // localStorage.setItem(
    //     //   localStorage.getItem("Signed"),
    //     //   JSON.stringify(JSON.stringify(s))
    //     // );
    //     // location.reload();
    //   });
    // });
  });

  // function add(e) {
  //   let f = z.filter(function (el) {
  //     return el != e;
  //   });
  //   for (let y = 0; y < e; y++) {
  //     f.push(e);
  //   }
  //   s[localStorage.getItem("Signed")]["id"] = f;

  //   localStorage.setItem(
  //     localStorage.getItem("Signed"),
  //     JSON.stringify(JSON.stringify(s))
  //   );
  //   location.reload();
  // }

  sub.innerHTML += total;
  subp = total;
}

function del(e) {
  let f = z2.filter(function (el) {
    return el != e;
  });
  console.log(f);
  s[localStorage.getItem("Signed")]["id"] = f;

  localStorage.setItem(
    localStorage.getItem("Signed"),
    JSON.stringify(JSON.stringify(s))
  );
  location.reload();
  console.log(s[localStorage.getItem("Signed")]["id"]);
}

let tax = document.querySelector(".tax span");
let taxp = 1.55;
tax.innerHTML += taxp;
let shipping = document.querySelector(".shipping span");
let shippingp = 2.5;
shipping.innerHTML += shippingp;
let GST = document.querySelector(".GST span");
let GSTp = 3.5;
GST.innerHTML += GSTp;
let Order = document.querySelector(".Order span");

window.addEventListener("DOMContentLoaded", function () {
  this.setTimeout(function () {
    Order.innerHTML += Math.round(GSTp + shippingp + taxp + subp);
  }, 100);
});

let clear = document.querySelector(".clear");
clear.onclick = function () {
  let fr = JSON.parse(
    JSON.parse(localStorage.getItem(localStorage.getItem("Signed")))
  );
  fr[localStorage.getItem("Signed")]["id"] = [];
  localStorage.setItem(
    localStorage.getItem("Signed"),
    JSON.stringify(JSON.stringify(fr))
  );
  location.reload();
};
