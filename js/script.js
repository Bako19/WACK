try {
    const animationDiv = document.querySelectorAll(".animationDiv")
    const imgs = document.querySelectorAll(".animated")
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            let ind = Array.from(animationDiv).indexOf(entry.target)
            if (entry.isIntersecting) {
                if (imgs[ind].classList[0] == "animation1") {
                    imgs[ind].classList.add("fadeInUp")
                }
                if (imgs[ind].classList[0] == "animation2") {
                    imgs[ind].classList.add("fadeInRight")
                }
                if (imgs[ind].classList[0] == "animation3") {
                    imgs[ind].classList.add("fadeInLeft")
                }
                if (imgs[ind].classList[0] == "animation4") {
                    imgs[ind].classList.add("fadeIn")
                }
            } else {
                if (entry.boundingClientRect.y > 0) {
                    imgs[ind].classList.remove("fadeInUp")
                    imgs[ind].classList.remove("fadeInRight")
                    imgs[ind].classList.remove("fadeInLeft")
                    imgs[ind].classList.remove("fadeIn")
                }
            }
        })
    }, {
        threshold: 0,
    })
    animationDiv.forEach(fadeInUpDiv => {
        observer.observe(fadeInUpDiv)
    })
} catch (error) {}

function display() {
    document.getElementById("sold").classList.add("dis")
}

function disdisplay() {
    document.getElementById("sold").classList.remove("dis")
}








addEventListener('load', (event) => {
    document.getElementById("loader").classList.add("invisible")
    document.getElementById("content").classList.remove("invisible")
});