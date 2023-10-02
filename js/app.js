console.log("DOM Lab Homework - Angus")

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main')
// console.log(mainEl)

const mainBg = 'var(--main-bg)'
// console.log(mainBg)
mainEl.style.backgroundColor = mainBg
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
//ANGUS: Would this be acceptable? or should we be using a combo of innerHTML and innerText here
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = "100%";
const topBg = 'var(--top-menu-bg)'
topMenuEl.style.backgroundColor = topBg
topMenuEl.classList.add('flex-around');
// console.log(topMenuEl)

function createMenu (e) {
    const linkEl = document.createElement('a');
    const linkAddress = e.href;
    linkEl.classList.add(linkAddress);
    const linkText = e.text;
    linkEl.innerText = linkText;
    topMenuEl.appendChild(linkEl);
    console.log(linkEl)
}

menuLinks.forEach(createMenu());