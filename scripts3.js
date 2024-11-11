// Función para alternar la visibilidad de la experiencia
function toggleExperience(id) {
    const selectedContent = document.getElementById(id);
    const allContents = document.querySelectorAll('.experience-content');
    const allTitles = document.querySelectorAll('.experience-title');

    // Ocultar todas las demás secciones
    allContents.forEach(content => {
        if (content !== selectedContent) {
            content.style.display = 'none';
        }
    });
    // Remover rotación de las otras flechas
    allTitles.forEach(title => {
        if (title.nextElementSibling !== selectedContent) {
            title.classList.remove('active');
        }
    });

    // Mostrar u ocultar la sección seleccionada
    selectedContent.style.display = selectedContent.style.display === 'none' || selectedContent.style.display === '' ? 'block' : 'none';
    document.querySelector(`[onclick="toggleExperience('${id}')"]`).classList.toggle('active');
}
