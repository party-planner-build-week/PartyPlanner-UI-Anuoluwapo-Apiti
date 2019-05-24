const siteContent = {
  nav: {
    "nav-item-1": "Home",
    "nav-item-2": "About",
    "nav-item-3": "How It Works",
    "nav-item-4": "Features",
    "nav-item-6": " Call (+234) 703-009-950-0",
  },
  secHeader: {
    "img-src": "img/celebration2.jpg"
  },
  logo: {
      "nav-item": "Party Planner"
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (777) 808-8888",
    email: "sales@partyplanner.io"
  },
  footer: {
    copyright: "Copyright Party Planner! 2019"
  }
};

// navigation bar
let anchorLinks = document.getElementsByTagName('a');
const textValue = Object.values(siteContent.nav);
for (let i = 0; i < anchorLinks.length; i++) {
  anchorLinks[i].textContent = textValue[i];
}

// logo
let logo = document.querySelector('.logo').innerHTML = `<h2>PartyPlanner</h2>`

//banner
let bgImg = document.getElementById('bg-img');
bgImg.setAttribute("src", siteContent.secHeader["img-src"]);

//const btnLink = document.querySelectorAll('.button')

function visitPage(){
  window.location='https://party-tas.netlify.com/';
}
//btnLink.addEventListener('click', visitPage());





//AOS
AOS.init({
  duration: 1200,
})