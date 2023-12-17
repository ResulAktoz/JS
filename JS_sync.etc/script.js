/*const func1 = () => {
  console.log("Func 1 Console log 1");

  console.log("Fuc1 Console log 2");

  alert("Alarm mesaji"); //sync calisiyor, buraya onay almadan 2ye gecmez
};

const func2 = () => {
  console.log("Func2 ConsoleLog1");

  console.log("Func2 ConsoleLog2");
};

func1();
func2();*/

/*let x = 10;

console.log(x);

setTimeout(() => {
  x += 5;
}, 5000); // calismiyor, sync olunca veri gelmesinde gecikme oldugu icin eksik veri gelebiliyor.
//Ayni anda birden fazla islem yapiyor olmak icin.


console.log(x); */

//Call Stack

/*function func1() {
  console.log("First func");
  func2();
  console.log("First funct still working.");
}

function func2() {
  console.log("func2");
  console.log("JS always following the lines");
  func3();
  console.log("Second func still working");
}

function func3() {
  console.log("func3");
}

func1(); */

/*function sum(x, y) {
  return x + y;
}

function average(x, y) {
  return sum(x, y) / 2;
}

let x = average(10, 6);
console.log(x);

let a = 3;
let b = 5;
console.log("Ortalama = ", +" " + average(a, b)); */

/*function task(message) {
  let n = 10000000000;
  while (n > 0) {
    n--;
  }

  console.log(message);
}

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
console.log("4");

task("islem tamamlandi"); // calisma sirasinda öncelik callstack

setTimeout(() => {
  console.log("5");
}, 1000);

task("islem tamamlandi 2"); */

/* const myName = () => {
  console.log("Benim adim Resul");
};

// setTimeout(() => {
    //   myName();
    // }, 5000);

setTimeout(myName, 1000); */

/*setTimeout(() => {
  console.log("Benim adim Resul"); // anonim funct ile callback tanimladik
}, 3000);*/

/*const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  //alert("You clicked me!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});

let h1Elem = document.createElement("h1");
h1Elem.textContent = "THİS İS A NEWLY-ADDED HEADER.";
document.body.appendChild(h1Elem); // without event listener its gonna be work as first func */

const books = [
  { name: "Kitap1", author: "Ra" },
  { name: "Kitap2", author: "Sk" },
  { name: "Kitap3", author: "Rs" },
];
const listOfBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

listOfBooks();
console.log("Yeni Kitap ekleniyor..");
const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook({ name: "Kitap4", author: "RSA" }, listOfBooks);
