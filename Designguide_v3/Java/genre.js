let button = document.querySelectorAll('.genre__option')

//buttonSelect.addEventlistener('click', () => {
//  buttonSelect.classlist.toggle('.--active')
//})
console.log(button);

button.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        buttons.classList.toggle('--active')
    })
})








/*let addAllButton = document.querySelector('.addAll__btn')

function changeAllButtons() {
    document.body.style.background = "red";*/