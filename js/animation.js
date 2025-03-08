gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const timeLine = gsap.timeline();

// animation of the introduction
timeLine.fromTo('.introduction__avatar', {
    y: '30%'
}, 
{
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'sine.in',
});
timeLine.to('.introduction__greeting', {
    opacity: 1,
    ease: "power1.inOut",
});
timeLine.from('.decor-circle', {
    duration: 1,
    opacity: 0,
    top: 0,
    ease: "bounce.out"
});
timeLine.to('.introduction__description', {
    duration: 3,
    text: "Based in Ukraine, I'm a student passionate about building web pages that users love."
});
timeLine.to('.introduction .styled-link', {
  duration: 0.5,
  opacity: 1
});

//animation of sections
const sections = document.querySelectorAll("section:not(:first-child)");
sections.forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        ease: "sine.in",
        opacity: 1
    });
});
gsap.to("#contact", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    ease: "sine.in",
    opacity: 1
});

//animation to any object
function scrollToElement(id) {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -50;
    const targetY = element.getBoundingClientRect().top + window.scrollY + yOffset;

    let startY = window.scrollY;
    let distance = targetY - startY;
    let startTime = null;

    function animationScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / 1500, 1); 

        let easeInOut = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        let newY = startY + distance * easeInOut;
        window.scrollTo(0, newY);

        if (progress < 1) {
            requestAnimationFrame(animationScroll);
        } else {
            window.scrollTo(0, targetY); 
        }
    }

    requestAnimationFrame(animationScroll);
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            scrollToElement(targetId);
        });
    });
});

const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > pageHeight / 2 - viewportHeight / 2) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});