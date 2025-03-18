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
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.text);
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);
});
//PART 2
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


const topMenuLinks = document.querySelectorAll("a");


topMenuEl.addEventListener("click", (event)=> {
  event.preventDefault()
  console.log(event.target.tagName)
  if (event.target.tagName !== "A"){
    return
  } 
  console.log(event.target.textContent)
  event.target.classList.toggle("active")})
  
  //loop through the top menu link (variable)
  topMenuLinks.forEach((link) => {
    const anchor = document.createElement("a");
      anchor.setAttribute("href", link.text);
      anchor.textContent = link.text;
      subMenuEl.appendChild(anchor);
      if (link.subLinks) {
            link.subLinks.forEach((link) => {
              anchor.setAttribute("href", link.href);
              anchor.textContent = link.text;
              subMenuEl.appendChild(anchor);
    });}

  })

// Build the submenu
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  });
}


// Toggle submenu functionality
let activeLink = null;
topMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  const clickedLink = e.target;
  if (clickedLink.tagName !== 'A') return;

  const linkText = clickedLink.textContent.toLowerCase();
  const linkObj = menuLinks.find(link => link.text === linkText);

  if (!linkObj) return;

  if (activeLink !== clickedLink) {
    activeLink?.classList.remove('active');
    clickedLink.classList.add('active');
    activeLink = clickedLink;

    if (linkObj.subLinks) {
      buildSubmenu(linkObj.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
    }
  } else {
    clickedLink.classList.remove('active');
    subMenuEl.style.top = '0';
    activeLink = null;
  }
});
// Handle submenu clicks
subMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  const clickedLink = e.target;
  if (clickedLink.tagName !== 'A') return;

  console.log(clickedLink.textContent); // Log to verify

  // Hide submenu
  subMenuEl.style.top = '0';

  // Remove active class from all top menu links
  document.querySelectorAll('#top-menu a').forEach(link => link.classList.remove('active'));

  // Update main content
  mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;

  activeLink = null;
});