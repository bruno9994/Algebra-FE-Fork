import { dummyNalozi } from "./data.js";

const API_URL = "";

export function toggleNav(hamburgerEl, asideEl) {
  let asideDisplay = window.getComputedStyle(asideEl).display;

  if (asideDisplay === "block") {
    asideEl.classList.remove("open");
  } else {
    asideEl.classList.add("open");
  }

  hamburgerEl.classList.toggle("hamburger-change");
  hamburgerEl.classList.toggle("change");
}

export async function ucitajFirebase() {
  try {
    const tmpNalozi = [];
    const response = await fetch(API_URL);
    const data = await response.json();

    for (let key in data) {
      tmpNalozi.push(data[key]);
    }

    // Dohvat podataka
    return tmpNalozi[0];
  } catch (error) {
    alert(error);
  }
}

export function zapisiFirebase(nalozi) {
  // Obrisi trenutne naloge

  // Zapisi naloge

  console.log("Nalozi zapisani!");
}

function obrisiFirebase() {}
