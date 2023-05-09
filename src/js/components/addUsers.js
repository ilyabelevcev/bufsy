import vars from "../_vars";
import UserService from "./getUsers.js";

export const addUsers = async (page, limit) => {
    vars.usersList.classList.remove("animation");
    const { data } = await UserService.getUsers(page, limit);

    for (let user of data) {
        const li = document.createElement("li");
        li.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12 winners__tbody-user";

        const divHead = document.createElement("div");
        const spanNameHead = document.createElement("span");
        const spanEmailHead = document.createElement("span");
        const spanPrizeHead = document.createElement("span");

        divHead.className = "col-xs-4"
        spanNameHead.className = "col-xs-12";
        spanEmailHead.className = "col-xs-12";
        spanPrizeHead.className = "col-xs-12";

        spanNameHead.innerHTML = 'Имя';
        spanEmailHead.innerHTML = 'Email';
        spanPrizeHead.innerHTML = 'Приз';

        const divBody = document.createElement("div");
        const spanNameBody = document.createElement("span");
        const spanEmailBody = document.createElement("span");
        const spanPrizeBody = document.createElement("span");

        divBody.className = "col-xs-8 col-sm-12 col-md-12 col-lg-12"
        spanNameBody.className = "col-xs-12 col-sm-2 col-md-2 col-lg-2";
        spanEmailBody.className = "col-xs-12 col-sm-4 col-md-3 col-lg-3";
        spanPrizeBody.className = "col-xs-12 col-sm-6 col-md-7 col-lg-7";


        spanNameBody.innerHTML = user.id;
        spanEmailBody.innerHTML = user.title.split(' ')[0];
        spanPrizeBody.innerHTML = user.body;


        vars.usersList.append(li);
        li.append(divHead, divBody);
        divHead.append(spanNameHead, spanEmailHead, spanPrizeHead)
        divBody.append(spanNameBody, spanEmailBody, spanPrizeBody);
    }

    vars.usersList.style.height = 'auto';
    vars.usersList.classList.add("animation");
};
addUsers();
