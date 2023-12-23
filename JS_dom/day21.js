//const h1 = document.getElementsByTagName("h1");
//const title_1 = document.getElementsByClassName("title-1");
//const title = document.getElementById("title");
const title = document.getElementById("title");

title.setAttribute("style", "color:red ; background-color:yellow");
// title.style.color = "blue";
// title.style.backgroundColor = "black";
title.title = "test baslik"; //üzerine gelince gelir.
title.className = "adana"; // bu şekilde html de olan classi ezer.
title.classList.add("eses"); // ekstra class olarak ekler.

title.textContent = " yeni isim"; // sadece yazi
title.innerHTML = "deneme isim  <u>test</u>"; // html girdileri de saglar.

document.querySelectorAll("h1").forEach((h1, index) => {
  if (index % 2 == 0) {
    h1.style.color = "green";
  } else {
    h1.style.color = "brown";
  }
});

//console.log(h1);

/* h1.forEach((element) => {
  console.log(element);
}); */

/*for (let i = 0; i < h1.length; i++) {
  console.log(h1[i]);
} */

/*[...h1].forEach((item) => {
  console.log(item);
}); */

//console.log(document.querySelectorAll(".title-1")); // All ile nodelist döner bu sayede array methodları kullanilabilir.
