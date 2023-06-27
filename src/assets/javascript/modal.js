
export const setupModal = function () {

    const buttons = document.querySelectorAll(".apply_modal");
    const body = document.querySelector('body');
    const modal_container = document.getElementById("modal-container");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            try {
                modal_container.removeAttribute("class");
                modal_container.classList.add("button_cnt_modal");
                body.classList.add("modal-active");
            } catch (error) {
                console.warn("debugger modal.js, error has occured: ", error)
            }
        });
    });

    modal_container.addEventListener("click", function (event) {
        if (!event.target.classList.contains("modal-background")) {
            return
        }
        modal_container.classList.add("out");
        body.classList.remove("modal-active");
    });

}