let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
    // body...
});

let typed = new Typed('.auto-input', {
    strings: ['Full Stack Web Developer!!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
});
let typeds = new Typed('.auto-inputs', {
    strings: ['together!!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
});
