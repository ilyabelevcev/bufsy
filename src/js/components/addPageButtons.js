import vars from "../_vars";
import UserService from "./getUsers.js";
import { addUsers } from "./addUsers.js";

export const addPageButtons = async () => {
    const { countPages } = await UserService.getUsers();

    for (let i = 0; i < countPages; i++) {
        const button = document.createElement("button");

        button.id = i + 1;
        button.className = "page-button";
        button.innerHTML = `${i + 1} Неделя`;

        vars.pageButtonsList.append(button);

        document.querySelector(".page-button").classList.add("active");

        addActive(button);

        if (i >= 3) {
            break;
        }
    }
};
addPageButtons();

const addActive = (btn) => {
    btn.addEventListener("click", () => {
        vars.usersList.innerHTML = "";
        vars.usersList.style.height = "100vh";
        const pageButtons = document.querySelectorAll(".page-button");
        for (let pageButton of pageButtons) {
            pageButton.classList.remove("active");
        }
        addUsers(btn.id);
        btn.classList.add("active");
    });
};
