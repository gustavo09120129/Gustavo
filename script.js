function scrollToElement(elementSelector, instance = 0) {
    // Selecciona todos los elementos que coincidan con el selector dado
    const elements = document.querySelectorAll(elementSelector);
    // Verifica si hay elementos coincidentes y si la instancia solicitada existe
    if (elements.length > instance) {
        // Desplázate hasta la instancia especificada del elemento
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Verifica que los elementos existan antes de agregar eventos
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

if (link1) {
    link1.addEventListener('click', () => {
        scrollToElement('.header');
    });
}

if (link2) {
    link2.addEventListener('click', () => {
        // Desplázate al segundo elemento con la clase "header"
        scrollToElement('.header', 1);
    });
}

if (link3) {
    link3.addEventListener('click', () => {
        scrollToElement('.column');
    });
}
