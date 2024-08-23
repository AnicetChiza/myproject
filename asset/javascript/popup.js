/*----------------------------------
#Popup
----------------------------------*/
const pop = document.querySelector('.popup');
const deleteBtn = document.querySelectorAll('.delete');
const cancelBtn = document.getElementById('cancelBtn');

deleteBtn.forEach(button => {
    button.addEventListener('click', () => {
        pop.style.display = 'flex';
    });
});

cancelBtn.addEventListener('click', () => {
    pop.style.display = 'none';
})