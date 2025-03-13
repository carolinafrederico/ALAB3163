// PART 1
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.innerHTML = "<h1>DOM MANIPULATION</h1>";
mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.text);
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);
});
//PART 2
const subMenuEl = document.getElementById ("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";