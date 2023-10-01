// Inintialize AOS
AOS.init();

const pageTransLinks = document.querySelectorAll('a.page-trans-fade-out');
pageTransLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        console.log(link.id);
    })
});

const sections = document.querySelectorAll('section');          
const navLinks = document.querySelectorAll('.nav-link');

function NavLinkTransitions () {
    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener('click', () => {
            let currentBtn = document.querySelector('.active-link');
            currentBtn.classList.remove('active-link');
            navLinks[i].classList.add('active-link');
        });
    };
};

NavLinkTransitions();

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(nav => {
                nav.classList.remove('active-link');
                document.querySelector('nav div a[href*=' + id + ']').classList.add('active-link');
            });
        };
    });
};


const linkFields = document.querySelectorAll('.link-src-con');
const copyBtns = document.querySelectorAll('.copy-link-btn');

copyBtns.forEach ((copyBtn) => {
    copyBtn.addEventListener('click', () => {
        let id = copyBtn.dataset.id;
        // console.log(id);

        if(id) {
            linkFields.forEach((link) => {
                if (link.id === id) {
                    const copiedValue = link.value;
                    navigator.clipboard.writeText(copiedValue);
                }
            });
        };

        copyBtn.classList.add('active');
        setTimeout(() => {
            copyBtn.classList.remove('active');
        },1500);
    })
});

linkFields.forEach((link) => {
    link.addEventListener("focus", () => link.select());
});