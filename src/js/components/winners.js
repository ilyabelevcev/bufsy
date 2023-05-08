export const winnersToggle = () => {
    $(document).ready(function () {
        //прикрепляем клик по заголовкам acc-head
        $("#winners .winners__heading").on("click", toggleBlock);
    });

    function toggleBlock() {
        //скрываем все кроме того, что должны открыть
        $("#winners .winners__content").not($(this).next()).slideUp(1000);
        // открываем или скрываем блок под заголовком, по которому кликнули
        $(this).toggleClass("active").next().slideToggle(500);
    }
};
winnersToggle();
