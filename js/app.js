console.log("DOM Lab Homework - Angus")

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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
        // console.log(linkEl)
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



const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%";
const subMenuColor = "var(--sub-menu-bg)"
subMenuEl.style.backgroundColor = subMenuColor;
subMenuEl.classList.add("flex-around");
subMenuEl.style.postion = "absolute";
subMenuEl.setAttribute("top", 0);

// console.log(document.querySelector('header'))

/*

Note that the progress check in the assignment for task 4 is confusing - screenshot makes it look like the sub menu bar should be showing when it doesbt???

*/

const topMenuLinks = document.querySelectorAll('#top-menu a')
let showingSubMenu = false;
topMenuEl.addEventListener('click', function(e){
    e.preventDefault();
    const navLink = e.target;

    //QUESTION NOTE - i dont think I understand why this part is doing? there is nothing in the submenu right now and the assignment doesn't look like it's adding anything else - would this be necessary code?
    if (navLink.tagName !== "A") {
        // This wasn't working unless I made the a capital here - why???
        return
    };
    console.log(navLink.textContent);

    //BEHAVIOR NOTE - Clicking on a link that you just clicked on will "unclick"/"unactivate" it
    if (navLink.classList.contains('active')) {
        navLink.classList.remove('active');
        let showingSubMenu = false;
        subMenuEl.setAttribute("top", 0);
        return;
    }
    
    //BEHAVIOR NOTE - Removing active class from each link
    //QUESTION NOTE - Why is this AND the above necessary? Cant just this be enough?
    topMenuLinks.forEach(
        function(navLink) {
            navLink.classList.remove('active')
        }
    )

    //BEHAVIOR NOTE - Add active class to clicked link
    navLink.classList.add('active')

    //BEHAVIOR NOTE = change showingSubMenu to true if that menuLinks obj has subLinks array
      // Task 5.6
      // ANGUS - I couldn't move onto the next item without this and couldnt figure out the solution
    const linkData = menuLinks.find(function(e) {
    return e.text === navLink.textContent;
    });
    showingSubMenu = 'subLinks' in linkData;

    if (showingSubMenu) {
        buildSubMenu(linkData.subLinks);
        subMenuEl.style.top = '100%';
      } else {
        subMenuEl.style.top = '0';
        mainEl.innerHTML = '<h1>about</h1>';
      }

});

function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
      const linkTag = document.createElement('a');
      linkTag.setAttribute('href', link.href);
      linkTag.textContent = link.text;
      subMenuEl.appendChild(linkTag);
    });
  }