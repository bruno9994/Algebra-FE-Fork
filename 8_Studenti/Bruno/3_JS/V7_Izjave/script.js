// 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
var i = 3;

while (i <= 20) {
  if (i % 9 !== 0) {
    console.log(i);
  }
  i = i + 1;
}

// 2. Koja je vrijednost isprintana u konzoli?

var varOne = 0;

for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

// Bonus

var niz = ["a", "b", "c"];

for (var i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}

for (var element of niz) {
  console.log(element);
}

var obj = { ime: "Perica", prezime: "Horvat" };

for (var svojstvo in obj) {
  console.log(svojstvo + " : " + obj[svojstvo]);
}
