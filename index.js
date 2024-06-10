const $d = document;
const selector = (tag) => $d.querySelector(`${tag}`);
const selectorAll = (tag) => $d.querySelectorAll(`${tag}`);
let response = 0;
selectorAll("INPUT[type='checkbox']").forEach((input) => {
    input.addEventListener("input", () => {
        console.log(input.value);
        response = input.value;
        selectorAll(".option").forEach((option) => {
            if (option.getAttribute("data-value") === input.value) {
                option.classList.add("active");
            } else {
                option.classList.remove("active");
            }
        });
    });
});
const form = selector("FORM");
const msg = selector(".msg");
form.addEventListener("submit", async (e) => {
    selectorAll("INPUT[type='checkbox']").forEach((input) => {
        if (!input.checked) {
            console.log("necesitas seleccionar una opcion para poder continuar");
            msg.classList.remove("hide");
            setTimeout(() => {
                msg.style.opacity = 1;
                setTimeout(() => {
                    msg.style.opacity = 0;
                    setTimeout(() => {
                        msg.classList.add("hide");
                    }, 1000);
                }, 2000);
            }, 200);
            e.preventDefault();
        } else {
            selector(".selected").textContent = response;
            selectorAll(".section").forEach((section) => {
                section.classList.toggle("section_active");
            });

            e.preventDefault();
        }
    });
});
