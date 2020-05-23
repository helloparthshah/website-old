var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1a6mqHzX8MpPBKrJs6-XSQKOc9odK8iRQbxM15rZ2tSk/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    })
}

function showInfo(data, tabletop) {
    data.forEach(d => {
        var iDiv = document.createElement('div');

        /* iDiv.innerHTML = `<div class="card">
                    <div class="card__side card__side--front card__side--front-1 ">
                        <div class="card__description">
                            <img class="memb" src="${d['Pictures']}" onerror="this.onerror=''; this.src='https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317.png;'"></img>
                            <div>
                                <h1>${d['First Name']} ${d['Last Name']}</h1>
                                <p>${d['Post']}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card__side card__side--back">
                        <div class="card__description">
                        <p>
                            <a href='mailto:${d['Email']}' style="color: inherit; text-decoration: inherit;">${d['Email']}</a>
                            </p>
                        </div>
                    </div>
                    </div>`; */

        iDiv.innerHTML =
            `<div class="card">
            <div>
                <img class="memb" src="${d['Pictures']}" onerror="this.onerror=''; this.src='https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317.png;'"></img>
                </div>
                <div>
                    <h1>${d['First Name']} ${d['Last Name']}</h1>
                </div>
                <div>
                    <p>
                        <a href='mailto:${d[' Email ']}' style="color: inherit; text-decoration: inherit;">${d['Email']}</a>
                    </p>
                </div>
            </div>`;

        var dDiv = document.createElement('div');
        dDiv.id = d['Post'].split(/[ ,]+/)[0];

        dDiv.className = 'cards';

        if (!document.querySelector(`#${d['Post'].split(/[ ,]+/)[0]}`)) {
            document.getElementById('test').innerHTML += `<div id="post" class="title post"><h2>${d['Post']}</h2></div>`
            document.getElementById('test').appendChild(dDiv);
        }

        document.querySelector(`#${d['Post'].split(/[ ,]+/)[0]}`).appendChild(iDiv);
    })

    Posts = document.querySelectorAll('#post');

    var arr = ['#EB4235', '#4285F6', '#109E57', '#FBBD03', '#EB4235', '#4285F6', '#109E57', '#FBBD03'];

    var k = 0;

    Posts.forEach(p => {
        p.style.backgroundColor = arr[k];

        var style1 = p.style;
        style1.setProperty('--background', arr[k++]);
        // p.pseudoStyle("after", "background", arr[k++]);
    })

}

window.addEventListener('DOMContentLoaded', init)

const sliders = document.querySelectorAll('.slide-in');

function scrl1() {
    const nav = document.querySelector('#nbr');
    var test = document.querySelector('html');

    if (test.scrollTop <= 100 && nav.className === "navbar") {
        nav.style.backgroundColor = 'rgba(255,255,255,0)';
        nav.style.boxShadow = 'none';
    } else {
        nav.style.backgroundColor = 'rgba(255,255,255,0.9)';
        nav.style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
    }
}

function scrl() {

    const nav = document.querySelector('#nbr');
    var test = document.querySelector('html');
    var test1 = document.getElementById("a");
    var test2 = document.getElementById("wksp");
    var test3 = document.getElementById("slideshow");
    // var test4 = document.getElementById("team");
    var test4 = document.getElementById("footer");
    var index = 1;

    if (test.scrollTop < test1.offsetTop)
        index = 1;
    else if (test.scrollTop >= test1.offsetTop && test.scrollTop < test2.offsetTop)
        index = 2;
    else if (test.scrollTop >= test2.offsetTop && test.scrollTop < test3.offsetTop)
        index = 3;
    else if (test.scrollTop >= test3.offsetTop && test.scrollTop < test4.offsetTop)
        index = 4;
    // else if (test.scrollTop >= test4.offsetTop && test.scrollTop < test5.offsetTop)
    //     index = 5;
    else
        index = 1;

    if (test.scrollTop <= 100 && nav.className === "navbar") {
        nav.style.backgroundColor = 'rgba(255,255,255,0)';
        nav.style.boxShadow = 'none';
    } else {
        nav.style.backgroundColor = 'rgba(255,255,255,0.9)';
        nav.style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
    }
    for (var i = 0; i < nav.children.length; i++)
        nav.children.item(i).style.color = 'inherit';
    nav.children.item(index).style.color = 'red';
}


function myFunction() {
    var x = document.querySelector('#nbr');

    if (x.className === "navbar") {
        x.className += " responsive";
        x.style.backgroundColor = 'rgba(255,255,255,0.9)';
        x.style.color = 'black';
    } else {
        x.className = "navbar";
        scrl();
    }
}

function test() {
    var x = document.querySelector('#nbr');
    x.className = "navbar";
    scrl();
}

// console.log(sliders);

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

var myVar;

function Load() {
    if (!readCookie("adSeen")) {
        myVar = setTimeout(showPage, 3000);
        createCookie("adSeen", "1", 10);
    } else {
        showPage();
    }
}

function showPage() {

    particlesJS.load("particles-js", 'assets/config.json');
    setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 0);

    document.getElementById("artboard").style.display = "none";
    document.getElementById("page").style.display = "block";
    document.getElementById("nbr").style.display = "flex";
    scrl();
}

/* $(document).ready(function() {
    if (!readCookie("adSeen")) {
        $(".referralProgram").fadeIn("slow");
        createCookie("adSeen", "1", 10);
    }
}); */

function createCookie(name, value, mins) {
    if (mins) {
        var date = new Date();
        date.setTime(date.getTime() + (mins * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



$(function() {
    var sliding = (startClientX = startPixelOffset = pixelOffset = currentSlide = 0);
    slideCount = $(".slide").length;

    $("html").on("mousedown touchstart", slideStart);
    $("html").on("mouseup touchend", slideEnd);
    $("html").on("mousemove touchmove", slide);

    /**
    / Triggers when slide event started
    */
    function slideStart(event) {
        // If it is mobile device redefine event to first touch point
        if (event.originalEvent.touches) event = event.originalEvent.touches[0];
        // If sliding not started yet store current touch position to calculate distance in future.
        if (sliding == 0) {
            sliding = 1; // Status 1 = slide started.
            startClientX = event.clientX;
        }
    }

    /** Occurs when image is being slid.
     */
    function slide(event) {
        event.preventDefault();
        if (event.originalEvent.touches) event = event.originalEvent.touches[0];
        // Distance of slide.
        var deltaSlide = event.clientX - startClientX;
        // If sliding started first time and there was a distance.
        if (sliding == 1 && deltaSlide != 0) {
            sliding = 2; // Set status to 'actually moving'
            startPixelOffset = pixelOffset; // Store current offset
        }

        //  When user move image
        if (sliding == 2) {
            // Means that user slide 1 pixel for every 1 pixel of mouse movement.
            var touchPixelRatio = 1;
            // Check for user doesn't slide out of boundaries
            if (
                (currentSlide == 0 && event.clientX > startClientX) ||
                (currentSlide == slideCount - 1 && event.clientX < startClientX)
            )
            // Set ratio to 3 means image will be moving by 3 pixels each time user moves it's pointer by 1 pixel. (Rubber-band effect)
                touchPixelRatio = 3;
            // Calculate move distance.
            pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
            // Apply moving and remove animation class
            $("#slides")
                .css("transform", "translateX(" + pixelOffset + "px")
                .removeClass();
        }
    }

    /** When user release pointer finish slide moving.
     */
    function slideEnd(event) {
        if (sliding == 2) {
            // Reset sliding.
            sliding = 0;
            // Calculate which slide need to be in view.
            currentSlide =
                pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;
            // Make sure that unexisting slides weren't selected.
            currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
            // Since in this example slide is full viewport width offset can be calculated according to it.
            pixelOffset = currentSlide * -$("body").width();
            // Remove style from DOM (look below)
            $("#temp").remove();
            // Add a translate rule dynamically and asign id to it
            $(
                '<style id="temp">#slides.animate{transform:translateX(' +
                pixelOffset +
                "px)}</style>"
            ).appendTo("head");
            // Add animate class to slider and reset transform prop of this class.
            $("#slides").addClass("animate").css("transform", "");
        }
    }
});