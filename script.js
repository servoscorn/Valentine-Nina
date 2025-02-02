const messages = [
    "Sigurno?",
    "Sigurno sigurno??",
    "Da li si sto posto sigurna?",
    "Molim te ljubavii...",
    "MOLIM TEEE!",
    "Ako opet kazes ne bicu jako tuzan",
    "Jako jako tuzan",
    "Jako jako jako tuzan",
    "Oke prestacu da te smaram",
    "Salim se, reci da molim te ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
