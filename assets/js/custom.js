$(function () {
    const $nav = $(".navbar");

    $(document).on("scroll", function () {
        $nav.toggleClass("scrolled", window.scrollY > 50);
    });
});
