"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select');
    const photographer = document.getElementById("photographer");
    const description = document.getElementById("description");
    const image = document.getElementById("displayImage");
    const score = document.getElementById("score");
    const btnUp = document.getElementById("increaseScore");
    const btnDown = document.getElementById("decreaseScore");

    if (select) {
        Object.entries(itemData).forEach(([key, item]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = item.name;
            select.appendChild(option);
        });
    }
    function mostrarDatosItem(key) {
        const item = itemData[key];
        if (!item) return;
        if (photographer) photographer.value = item.photographer;
        if (description) description.value = item.description;
        if (image) image.src = item.image;
        if (score) score.value = item.score;
    }
    const firstKey = Object.keys(itemData)[0];
    mostrarDatosItem(firstKey);
    if (select) select.value = firstKey;
    if (select) {
        select.addEventListener('change', (e) => {
            mostrarDatosItem(e.target.value);
        });
    }
    function cambiarPuntaje(numero) {
        const key = select.value;
        if (!itemData[key]) return;
        itemData[key].score += numero;
        if (score) score.value = itemData[key].score;
    }
    if (btnUp) btnUp.addEventListener('click', () => cambiarPuntaje(1));
    if (btnDown) btnDown.addEventListener('click', () => cambiarPuntaje(-1));
});