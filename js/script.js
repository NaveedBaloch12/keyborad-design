const buttons = document.querySelectorAll('.btn');
const showKeyboard = document.getElementById('keyborad__show');
const Keyboard = document.getElementById('Keyboard');
const arrow = document.getElementById('arrow');
arrow.innerHTML = "⇧"

buttons.forEach(button => button.addEventListener("mousedown", addClass));
buttons.forEach(button => button.addEventListener("mouseup", removeClass));

function addClass() {
    this.classList.add('active');
}

function removeClass(e) {
    this.classList.remove('active');
}
Keyboard.style.display = 'none';

showKeyboard.addEventListener('click', () => {
    setTimeout(toggleKeyBoard, 400)
})

function toggleKeyBoard() {
    if (Keyboard.style.display === "block") {
        Keyboard.style.display = 'none';
        arrow.innerHTML = "⇧"
    }
    else {
        Keyboard.style.display = 'block';
        arrow.innerHTML = "⇩"
    }
}