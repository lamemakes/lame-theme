
function initMegaHeader(){

    const megaHeader = document.getElementById("landing-header");
    const regNav = document.getElementById("nav")
    const scrollBtn = document.getElementById("to-content")

    // For those who don't want to use JS
    // Only use the big header to add a cool effect, 
    // don't even show it if HTML/CSS only.
    megaHeader.style.display = 'flex';
    regNav.classList.remove("show");

    if (megaHeader) {

        const navObserver = new IntersectionObserver(entries => {
            regNav.classList.toggle("show", !entries[0].isIntersecting)
        }, {
            threshold: 0.2
        })
        navObserver.observe(megaHeader);

        const scrollObserver = new IntersectionObserver(entries => {
            scrollBtn.classList.toggle("show", entries[0].isIntersecting)
        }, {
            threshold: 0.8
        })
        scrollObserver.observe(megaHeader);
    }
}

function scrollToContent() {
    const content = document.getElementById("content");
    
    if (content) {
        content.scrollIntoView({ behavior: "smooth" });

        const url = new URL(location);
        url.hash = "content";
        history.pushState({}, null, url);
    }
}

export {initMegaHeader, scrollToContent}