/*const books = [
  { name: "Kitap1", author: "Ra" },
  { name: "Kitap2", author: "Sk" },
];

const listOfBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNewBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addNewBook({ name: "Kitap3", author: "Rs" }, listOfBooks); //bu denemenin üzerinde promise yapalim. */

/*const promise1 = new Promise(function (resolve, reject) {
  resolve("data");
});*/
//console.log(promise1); //Promise basariliysa then yapisiyla yakalariz.
/*promise1.then(function (value) {
  console.log(value);
});*/

/*promise1.then((value) => {
  console.log(value); //resolve dönerse thenle yakalariz.
}); 
promise1.catch((reason) => {
  console.log(reason);
});

promise1.then((value) => console.log(value)); */

/*const promise2 = new Promise((resolve, reject) => {
  resolve();
});
//promise2.then(() => console.log("veriler alindi"));
// reject durumunda
// promise2.catch(() => console.log('veriler alinmadi'))

/*promise2
  .then(() => {
    console.log("veriler alindi");
  })
  .catch(() => {
    console.log("veriler alinamadi");
  })
  .finally(() => {
    console.log("hep calisir");
  }); */

/*promise2.then(() => {
  console.log("veriler alindi");
});*/

/*const books = [
  { name: "Kitap1", author: "Ra" },
  { name: "Kitap2", author: "Sk" },
];

const listOfBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNewBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
  });
  return promise1;
};
addNewBook({ name: "Kitap3", author: "Rs" })
  .then(() => {
    console.log("yeni kitap eklendi.");
    listOfBooks();
  })
  .catch((reason) => {
    console.log("kitap eklenemedi!!", reason);
  }); */

const addTwoNumbers = (num1, num2) => {
  const promise3 = new Promise((resolve, reject) => {
    const sum = num1 + num2;
    typeof num1 !== "number" || typeof num2 !== "number"
      ? reject("Hata!2 Sayi giriniz!!")
      : resolve(sum);
  });
  return promise3;
};
addTwoNumbers(4, "bes")
  .then((value) => console.log("toplam = " + " " + value))
  .catch((reason) => console.log("Hata: " + " " + reason));
