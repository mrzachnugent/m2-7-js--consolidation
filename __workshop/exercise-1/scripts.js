// 😋
const body = document.getElementsByTagName("body")[0];
const head = document.getElementsByTagName("head")[0];
const style = document.createElement("style");
head.appendChild(style);
// style.innerHTML = ".hide {display:none;}";

const header = document.createElement("header");
body.appendChild(header);
header.classList.add("dddd");

const yearBg = document.createElement("h1");
yearBg.innerHTML = "2018";
header.appendChild(yearBg);
yearBg.classList.add("believe");

const grubhubTitle = document.createElement("h2");
grubhubTitle.innerHTML = "Grubhub";
header.appendChild(grubhubTitle);
grubhubTitle.classList.add("cccc");

const nav = document.createElement("form");
body.appendChild(nav);
nav.classList.add("bacon");

const label2018 = document.createElement("label");
label2018.innerText = "2018";
label2018.classList.add("bivrip");
label2018.classList.add("boom");
nav.appendChild(label2018);
const checkbox2018 = document.createElement("input");
checkbox2018.type = "radio";
checkbox2018.setAttribute("value", "2018");
checkbox2018.checked = "true";
// console.log(checkbox2018.checked);
label2018.appendChild(checkbox2018);
checkbox2018.style.display = "none";
label2018.classList.add("twenty18");
label2018.style.cssText = "background: #5b2a86; color: #fff !important;";
let currentTopTenList = topTenList[2018];
checkbox2018.addEventListener("click", () => {
  if (checkbox2018.value === "2018") {
    label2018.style.cssText = "background: #5b2a86; color: #fff !important;";
    label2019.style.cssText =
      "{background: transparent; color: #5b2a86 !important;} .boom:hover {background:#5b2a86 }";
    yearBg.innerHTML = "2018";
    currentTopTenList = topTenList[2018];
  }
});

const label2019 = document.createElement("label");
label2019.innerText = "2019";
label2019.classList.add("bivrip");
label2019.classList.add("boom");
nav.appendChild(label2019);
const checkbox2019 = document.createElement("input");
checkbox2019.type = "radio";
checkbox2019.setAttribute("value", "2019");
// console.log(checkbox2019.checked);
label2019.appendChild(checkbox2019);
checkbox2019.style.display = "none";
label2019.classList.add("twenty19");
checkbox2019.addEventListener("click", () => {
  if (checkbox2019.value === "2019") {
    yearBg.innerHTML = "2019";
    label2019.style.cssText = "background: #5b2a86; color: #fff !important;";
    label2018.style.cssText =
      "{background: transparent; color: #5b2a86 !important;} .boom:hover {background:#5b2a86 }";
    currentTopTenList = topTenList[2019];
  }
});

const numDiv = document.createElement("div");
body.appendChild(numDiv);
numDiv.classList.add("what-now");

//NUMBERS
for (let i = 1; i < 11; i++) {
  const numAs = document.createElement("a");
  numAs.innerText = `${i}`;
  numAs.setAttribute("id", `${i}`);
  numDiv.appendChild(numAs);
  numAs.classList.add("that");
  numAs.addEventListener("mouseover", () => {
    hoverMeText.style.display = "none";
    bigNum.innerText = `${i}`;
    bigNum.classList.add("aaaa");
    listFoodItem.innerText = currentTopTenList[i - 1].name;
    listFoodItem.classList.add("bbbb");
  });
  numAs.addEventListener("mouseout", () => {
    hoverMeText.style.display = "block";
    bigNum.innerText = ``;
    bigNum.classList.remove("aaaa");
    listFoodItem.innerText = "";
    listFoodItem.classList.remove("bbbb");
  });
}

const main = document.createElement("div");
body.appendChild(main);
main.classList.add("other-stuff");

const hoverMeText = document.createElement("p");
hoverMeText.innerText = "hover over a #!";
hoverMeText.setAttribute("id", "hover-me");
main.appendChild(hoverMeText);
hoverMeText.classList.add("eeee");

const bigNum = document.createElement("p");
main.appendChild(bigNum);

const listFoodItem = document.createElement("p");

main.appendChild(listFoodItem);
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");
// const ten = document.getElementById("10");

// one.addEventListener("mouseover", () => {
//   if (checkbox2018.checked == "true") {
//     console.log("2018 checked");
//     console.log("2019 not checked");
//   } else if (checkbox2019.checked == "true") {
//     console.log("2019 checked");
//     console.log("2018 not checked");
//   }
// });
// one.addEventListener("mouseout", () => {
//   hoverMeText.style.display = "block";
// });
console.log(currentTopTenList[0].name);
