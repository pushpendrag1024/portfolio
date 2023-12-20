// Header Toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('.auto-input', {
    strings: ['Freelancer!', 'Youtuber!', 'UI Designer!', 'Front End Web Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,

});

// Active Link State On Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
console.log(navLinks);
// Get All Sections
let sections = document.querySelectorAll('section')
console.log(sections);

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});