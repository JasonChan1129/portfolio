const welcome = document.querySelector("#welcome-section")
let navBar = document.getElementById("navbar")

const options = {threshold: 0.1};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
           navBar.style.display = 'flex'
        }
        else {
            navBar.style.display = 'none'
        }
    });
}, options);

observer.observe(welcome);