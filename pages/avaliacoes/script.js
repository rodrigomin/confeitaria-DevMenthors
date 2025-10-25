window.onload = () => {
    const closeSpeechBtn = document.querySelectorAll('#close-feedback')
    const openSpeechBtn = document.querySelectorAll('#view-feedback')
    const pinkLine = document.querySelectorAll('#pink-line')
    const feedback = document.querySelectorAll('#feedback')

    openSpeechBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
            closeSpeechBtn[index].classList.toggle("invisible")
            openSpeechBtn[index].classList.toggle("invisible")
            pinkLine[index].classList.toggle("invisible")
            feedback[index].classList.toggle("invisible")
        })
    });
    closeSpeechBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
                closeSpeechBtn[index].classList.toggle("invisible")
                openSpeechBtn[index].classList.toggle("invisible")
                pinkLine[index].classList.toggle("invisible")
                feedback[index].classList.toggle("invisible")
            })
        });
}