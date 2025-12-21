document.addEventListener("DOMContentLoaded", () => {
    const headline = document.querySelector(".headline");
    const footer = document.querySelector(".hero-footer");

    let latestScroll = 0;
    let ticking = false;

    function onScroll() {
        latestScroll = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    function update() {
        if (headline) {
            const y = latestScroll * 0.4;
            const opacity = Math.max(0, 1 - latestScroll / 700);
            headline.style.transform = `translateY(${y}px)`;
            headline.style.opacity = opacity;
        }

        if (footer) {
            footer.style.transform = `translateY(${latestScroll * 0.15}px)`;
        }

        ticking = false;
    }

    window.addEventListener("scroll", onScroll);
});
