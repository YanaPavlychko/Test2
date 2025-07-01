let section = document.getElementById("main-section")
section.addEventListener("click", function (e) {
    let element = e.target
    if (element.classList.contains("btn")) {
        let next = element.nextElementSibling
        next.classList.toggle("hide")
    }
})