let menuIcon = document.querySelector("#menu-icon");
let navDisplay = document.querySelector(".nav-items");
let navSpan = document.querySelector(".nav-span");
let body = document.querySelector("body");

menuIcon.addEventListener("click",() => {
    if (navSpan.style.left === "0%") {
        navSpan.style.left = "-100%";
        menuIcon.classList. remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        body.style.overflow = "auto";
    }  
    else { 
        navSpan.style.left = "0%";
        menuIcon.classList. remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        body.style.overflow = "hidden";
    }
    if (navDisplay.style.left === "0%"){
        navDisplay.style.left = "-200%";
    } else {
        navDisplay.style.left = "0%";
    }
});

let navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navItem.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        navDisplay.style.left = "-200%";
        navSpan.style.left = "-100%";
        menuIcon.classList. remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        body.style.overflow = "auto";
    });
});

var linkTitles = document.querySelectorAll(".link-title");

linkTitles.forEach(title => {
    title.addEventListener('click', () => {
        linkTitles.forEach(link => link.classList.remove('about-active'));
title.classList.add('about-active');
    });
});

let circles = document.querySelectorAll('circle');

let animateProgress = (circle) => {
    let percentage = circle.getAttribute('data-percentage');
    let offset = (280 - (280 * percentage) / 100);
    circle.style.strokeDashoffset = offset;
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateProgress(entry.target);
          observer.unobserve(entry.target);
        }
    });
});

circles.forEach((circle) => observer.observe(circle));

document.querySelectorAll('.link-title').forEach((item) => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.link-title').forEach((link) => {
            link.classList.remove('about-active');
        });

e.target.classList.add('about-active');

        const targetId = e.target.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const scrollPosition = targetSection.offsetLeft;
            document.querySelector('.tabs').scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    });
});

let about = document.querySelector("#about");
let service = document.querySelector("#service");
let project = document.querySelector("#project");
let contact = document.querySelector("#contact");
let home = document.querySelector("#home");

about.addEventListener("click", () => {
    document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
});
service.addEventListener("click", () => {
    document.querySelector(".service-section").scrollIntoView({ behavior: "smooth" });
});
project.addEventListener("click", () => {
    document.querySelector(".project-section").scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", () => {
    document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
});
home.addEventListener("click", () => {
    document.querySelector(".main-section").scrollIntoView({ behavior: "smooth" });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwe2CUyqlvA58qgUL-x7O6O1LulBMInCUbzjObYHP3--omU-01wpxeHcVFEu19h-BDA/exec';
const form = document.forms['submit-to-google-sheet'];
let message = document.getElementById("message");

form.addEventListener('submit', e => {
    e.preventDefault();    
    message.style.display = "inline";
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
            setTimeout(() => {
                message.style.display = "none";
            }, 3000); 
        })
        .catch(() => {
            console.log("Error!")
        });
    form.reset();
});

const rightBtn = document.querySelector('.buttons button:nth-child(2)');
const leftBtn = document.querySelector('.buttons button:nth-child(1)');
const numberElements = document.querySelectorAll('.se-title span h2');
const heading = document.querySelector('.se-title span:nth-child(2) h2');
const paragraph = document.querySelector('.pro-title p');
const videoSource = document.querySelector('.web video source');

const projects = [
    {
        number: "1",
        title: "Restaurant website 🍽",
        description: "Developed a responsive restaurant website featuring online ordering, menu display, and reservation system using HTML, CSS, JavaScript, and React.",
        video: "video1.mp4"
    },
    {
        number: "2",
        title: "Car showroom website 🚗",
        description: "Created a responsive car showroom website with an interactive catalog, search filters, booking system, and galleries. Built with HTML, CSS, JavaScript, ensuring a user-friendly experience.",
        video: "video2.mp4"
    }
];

let currentIndex = 0;
function updateContent(index) {
    numberElements[0].textContent = "0"; 
    numberElements[1].textContent = projects[index].number;
    heading.textContent = projects[index].title;
    paragraph.textContent = projects[index].description;
    videoSource.src = projects[index].video;

    const videoElement = videoSource.parentElement;
    videoElement.load();
}

rightBtn.addEventListener('click',() => {
    currentIndex = (currentIndex + 1) % projects.length; 
    updateContent(currentIndex);
});

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length; 
    updateContent(currentIndex);
});
updateContent(currentIndex);

