// Exercise 3
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function that accepts an object (like above) and returns a new object with the data sorted
// and classified like so:

// {
//   'name of dessert': ['name1', 'name2']
// }

// Expected output for groupByValue(favoriteDessertsGroupB) is
// {
//   'pie': [ 'alice', 'glinda', 'khloe' ],
//   'deep-fried mars bar': [ 'betty' ],
//   'gummy bears': [ 'colin', 'fertrude' ],
//   'child tears': [ 'damien' ],
//   'panda express': [ 'ellicia' ],
//   'not applicable': [ 'hethel' ],
//   'rum cake': [ 'irsula' ],
//   'revenge (served cold)': [ 'judas' ],
//   'easter eggs': [ 'lyndon' ],
//   'dessert': [ 'minda' ]
// }

function groupByValue(obj) {
  let objArr = [];
  for (const dessert in obj) {
    objArr.push(obj[dessert]);
  }
  let alfaObjArr = objArr.sort();
  // return alfaObjArr;
  let newObj = {};
  let singleDesert = [];

  for (let i = 0; i < alfaObjArr.length; i++) {
    if (alfaObjArr[i] !== alfaObjArr[i + 1]) {
      singleDesert.push(alfaObjArr[i]);
    }
  }
  // return singleDesert;

  // let sumfing = Object.keys(obj).filter((key) => {
  //     return obj[key] === "dessert";
  // })
  // return sumfing
  let nameArr = Object.keys(obj);

  // return obj[nameArr[0]]

  singleDesert.forEach((el) => {
    let desert = el;
    let groupNameArr = nameArr.filter((name) => {
      if (obj[name] === desert) {
        return true;
      } else {
        return false;
      }
    });

    newObj[el] = groupNameArr;
  });

  return newObj;
}

// Verification via console.log()
console.log("Group A", groupByValue(favoriteDessertsGroupA));
console.log("Group B", groupByValue(favoriteDessertsGroupB));

// Test your code: "yarn test exercise-3"

module.exports = groupByValue;
