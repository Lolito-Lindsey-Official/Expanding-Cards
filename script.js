/* Selects all elements that contain the class: ".panel" */
const panels = document.querySelectorAll(".panel")

/* Detects click when cursor is hovered over the photo */
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

/* Used to remove active class from one photo to the next */
function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}