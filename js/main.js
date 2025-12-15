window.addEventListener("DOMContentLoaded", () => {
    const buttonShare = () => {
        const button = document.querySelector("#js-share")
        button.addEventListener("click", () => {
            if (navigator.share) {
                navigator.share({
                    title: "FlashLink",
                    text: "Все ваши продукты, контакты и ссылки — в одном стильном месте.",
                    url: "https://vladislav-jpg97.github.io/FlashLink/"
                })

            }
            else {
                alert("Ваш браузер не поддерживает функцию")
            }
        })
    }
    buttonShare()
});
