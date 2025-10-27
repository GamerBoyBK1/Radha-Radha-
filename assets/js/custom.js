$(function () {
    let lastScroll = 0;
    const $nav = $(".fixed-top");

    $(document).on("scroll", function () {
        let currentScroll = $(this).scrollTop();

        // Navbar toggle
        $nav.toggleClass("scrolled", currentScroll > $nav.height());

        // Add smooth feel when scrolling down/up
        if (currentScroll > lastScroll) {
            $nav.addClass("scrolling-down").removeClass("scrolling-up");
        } else {
            $nav.addClass("scrolling-up").removeClass("scrolling-down");
        }

        lastScroll = currentScroll;
    });
});
