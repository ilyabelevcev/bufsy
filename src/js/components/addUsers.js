import vars from "../_vars";
import UserService from "./getUsers.js";

export const addUsers = async (page, limit) => {
    vars.usersList.classList.remove("animation");
    const { data } = await UserService.getUsers(page, limit);

    for (let user of data) {
        const li = document.createElement("li");
        const spanName = document.createElement("span");
        const spanEmail = document.createElement("span");
        const spanPrize = document.createElement("span");

        li.className = "col-lg-12 winners__tbody-user";
        spanName.className = "col-lg-3";
        spanEmail.className = "col-lg-3";
        spanPrize.className = "col-lg-6";

        spanName.innerHTML = user.id;
        spanEmail.innerHTML = user.title;
        spanPrize.innerHTML = user.body;

        vars.usersList.append(li);
        li.append(spanName, spanEmail, spanPrize);
    }

    vars.usersList.style.height = null;
    vars.usersList.classList.add("animation");
};
addUsers();
