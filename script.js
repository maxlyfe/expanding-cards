/* Seleccionando todos los elementos con el panel de clases. */
const panels = document.querySelectorAll('.panel')

/* Agregar un detector de eventos a cada panel. Cuando se hace clic en el panel, se eliminará la clase
activa de todos los paneles y se agregará la clase activa al panel en el que se hizo clic. */
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

/**
 * Elimina la clase activa de todos los paneles.
 */
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}