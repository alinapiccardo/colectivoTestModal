const openModal1 = document.getElementById('openModal1');
const modalContainer = document.getElementById('modalContainer');
const closeButton = document.getElementById('closeButton');
const sectionCards = document.getElementById('sectionCards');

openModal1.addEventListener('click', () => {
    modalContainer.classList.add('show');
    sectionCards.classList.add('hide');
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('show');
    sectionCards.classList.remove('hide');
});


