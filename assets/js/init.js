// Used to initalize things that only have functionality when JS is enabled
// ie. Search shouldn't be shown unless JS is being used

function initSearch() {
    console.log(document.getElementById("site-search"))
    // By default the search display is set to none
    if (document.getElementById("site-search")) {
        let classes = document.getElementById("site-search").classList.toggle("hidden");

    }
}

export default function init() {
    initSearch();
}