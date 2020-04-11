const sliders = document.querySelectorAll('.slide-in');

function scrl() {

    const nav = document.querySelector('#nbr');
    var test = document.querySelector('main');

    if (test.scrollTop <= 100 && nav.className === "navbar") {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
        nav.style.color = 'grey';
    } else {
        nav.style.backgroundColor = 'rgba(255,255,255,0.9)';
        nav.style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
        nav.style.color = 'black';
    }
}


function myFunction() {
    var x = document.querySelector('#nbr');

    if (x.className === "navbar") {
        x.className += " responsive";
        x.style.backgroundColor = 'white';
        x.style.color = 'black';
    } else {
        x.className = "navbar";
        scrl();
    }
}

console.log(sliders);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

const first = document.querySelector('.slide');
const slide = () => {
    const before = document.querySelector('.showing');
    if (before) {
        before
            .classList
            .remove('showing');
        const next = before.nextElementSibling;
        if (next) {
            next
                .classList
                .add('showing')
        } else {
            first
                .classList
                .add('showing');
        }
    } else {
        first
            .classList
            .add('showing');
    }
}
slide();
setInterval(slide, 3000);