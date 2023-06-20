let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".back-animation img"),
    max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("back-principal")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("back-principal")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)