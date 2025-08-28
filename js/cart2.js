let parent = document.querySelector(".Es");
let hide = document.querySelector(".hide");
let u = document.querySelector(".Es span i");
let su = document.querySelector(".summary");
parent.onclick = function () {
  if (window.getComputedStyle(hide).display === "none") {
    u.classList.remove("fa-chevron-up");
    u.classList.add("fa-chevron-down");
    hide.style.display = "block";
    su.style.height = "1100px";
  } else {
    u.classList.remove("fa-chevron-down");
    u.classList.add("fa-chevron-up");
    hide.style.display = "none";su.style.height = "1000px";
      if (window.getComputedStyle(hide2).display === "none") {su.style.height = "718px";}
    
  }
};
let parent2 = document.querySelector(".app");
let hide2 = document.querySelector(".hide2");
let u2 = document.querySelector(".app i");
let su2 = document.querySelector(".summary");
parent2.onclick = function () {
  if (window.getComputedStyle(hide2).display === "none") {
    u2.classList.remove("fa-chevron-up");
    u2.classList.add("fa-chevron-down");
    hide2.style.display = "block";
    su2.style.height = "1100px";
  } else {
    u2.classList.remove("fa-chevron-down");
    u2.classList.add("fa-chevron-up");
    hide2.style.display = "none";
    su2.style.height = "1000px";
    if (window.getComputedStyle(hide).display === "none"){
        su2.style.height = "718px";
    }
  }
};

function refresh() {
  setTimeout(function () {
    input2 = document.querySelectorAll(".number");
    let fr = JSON.parse(
      JSON.parse(localStorage.getItem(localStorage.getItem("Signed")))
    );
    fr[localStorage.getItem("Signed")]["id"] = [];

    input2.forEach((e) => {
      for (let x = 0; x < e.value; x++) {
        fr[localStorage.getItem("Signed")]["id"].unshift(e.id);
      }
      localStorage.setItem(
        localStorage.getItem("Signed"),
        JSON.stringify(JSON.stringify(fr))
      );
      console.log(e.id);
    });
    location.reload();
  }, 50);
}

let update = document.querySelectorAll(".up");
update.onclick = function () {
  location.reload();
};
