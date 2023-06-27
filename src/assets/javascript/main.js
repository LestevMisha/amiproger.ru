import { useEffect } from "react"

export const main = function () {

    // Copy Telegram link -->
    const tg_btns = document.querySelectorAll(".telegram_btn_js");
    tg_btns.forEach(tg => {
        tg.addEventListener("click", () => {
            var string_to_copy = "https://t.me/MishaLestev";
            window.location.href = string_to_copy;
            try {
                navigator.clipboard.writeText(string_to_copy);
            } catch (error) {
                console.log(error);
            }
            tg.textContent = "Copied ✔"
            tg.classList.add("copied");
            window.setTimeout(() => {
                tg.textContent = "Get My Telegram"
                tg.classList.remove("copied");
            }, 2000);
        });
    });

    // Copy Telegram link <END>

    // Grid hover the current pointer -->
    const grid = document.getElementById("grid_js");
    var grid_items = Array.from(grid.children);
    var array = Array.from([]);
    grid_items.forEach((item, index) => {
        item.addEventListener("mouseenter", function () {
            grid_items.forEach((item, innerIndex) => {
                item.style.borderBottom = "0.1em solid #000000ff";
                if (item !== this) {
                    setTimeout(() => {
                        item.querySelector(".overlay").style.opacity = 0.8;
                    }, 20 * innerIndex); // Adjust the delay time as needed
                } else {
                    array.push(this);
                    item.style.borderBottom = "0.1em solid #18c37d";
                }
            });
        });
        item.addEventListener("mouseleave", function () {
            grid_items.forEach((item, innerIndex) => {

                item.style.borderBottom = "0.1em solid #ae8eff";
                if (item !== this) {
                    setTimeout(() => {
                        item.querySelector(".overlay").style.opacity = 0;
                    }, 20 * innerIndex); // Adjust the delay time as needed
                }
            });
            array.forEach(item_ => {
                item_.style.borderBottom = "0.1em solid #353535";
            });
        });
    });
    // Grid hover the current pointer <END>

};