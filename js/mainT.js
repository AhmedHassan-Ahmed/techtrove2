const xhttp = new XMLHttpRequest();

xhttp.open("GET", "assets/products.json", true);
xhttp.send();
var res;
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    res = JSON.parse(xhttp.responseText);
  }
};
let el;
let ob = document.querySelectorAll("button");
console.log(ob);

ob.forEach(function (e) {
  e.onclick = function (el) {
    let t = JSON.parse(
      JSON.parse(localStorage.getItem(localStorage.getItem("Signed")))
    );
    console.log(res[el.target.id - 1]);
    console.log(Object.keys(res[el.target.id - 1]));
    if (localStorage.getItem("Signed")) {
      t[localStorage.getItem("Signed")]["id"].push(`${el.target.id}`);
      localStorage.setItem(
        localStorage.getItem("Signed"),
        JSON.stringify(JSON.stringify(t))
      );
    } else {
      window.alert("sign in first");
    }
  };
});
