import inView from "./in-view"

export default function () {
    inView(".part")
    .on("enter", e => {
    e.classList.add("in-viewport")
    })

    const partTag = document.querySelectorAll(".part")

    partTag.forEach((tag, index) => {
    const delay = index * 100
    tag.style.transitionDelay = delay + "ms"
    })


    inView(".f-part")
    .on("enter", e => {
    e.classList.add("in-viewport")
    })

    // setting the class to add only once scrolled 0.2 of the section into viewport
    inView.threshold(0.15)

    const fPartTag = document.querySelectorAll(".f-part")

    fPartTag.forEach((tag, index) => {
    const delay = index * 150
    tag.style.transitionDelay = delay + "ms"
    })
}