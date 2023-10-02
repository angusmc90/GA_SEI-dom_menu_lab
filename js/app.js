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

/*
FIRST ATTEMPT AT TASK 3
function createMenu (e) {
    const linkEl = document.createElement('a');
    const linkAddress = e.href;
    linkEl.setAttribute("href", e.href);
    const linkText = e.text;
    linkEl.innerText = linkText;
    topMenuEl.appendChild(linkEl);
    console.log(linkEl)
}

menuLinks.forEach(createMenu());
*/

menuLinks.forEach(
    function(e) {
        const linkEl = document.createElement('a');
        linkEl.setAttribute("href", e.href);
        // ANGUS - See questions below
        const linkText = e.text;
        linkEl.innerText = linkText;
        topMenuEl.appendChild(linkEl);
        console.log(linkEl)
    }   
);

/*

QUESTION ON TASK 3 - 

The code commented out in FIRST ATTEMPT returned the following error:

Uncaught TypeError: Cannot read properties of undefined (reading 'href')
    at createMenu (app.js:30:27)
    at app.js:38:19
    
Why did I get the error above but when I applied what I saw in the sol'n provided - calling the function inside of the forEach method - it worked as expected?
*/