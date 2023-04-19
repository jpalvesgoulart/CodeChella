const accordionButton = document.querySelectorAll(".caixa__seta")


accordionButton.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle('active');

        const accordionId = button.dataset.content;

        const accordionContent = document.querySelector(`#${accordionId}`)

        accordionContent.classList.toggle('active');
    })
})