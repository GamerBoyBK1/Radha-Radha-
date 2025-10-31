// Function to add class to navbar on scroll, optimized with requestAnimationFrame
$(function () {
    const $nav = $(".navbar");
    // Get the scroll threshold from the CSS logic
    const SCROLL_THRESHOLD = 50; 
    
    // State to track if an update is scheduled
    let ticking = false;
    
    // Function to perform the actual DOM change
    function updateNavbarClass() {
        // Check scroll position and apply the class
        const isScrolled = window.scrollY > SCROLL_THRESHOLD;
        
        // Use toggleClass for the most efficient DOM manipulation
        // The second argument forces the class to be added (true) or removed (false)
        $nav.toggleClass("scrolled", isScrolled);
        
        ticking = false; // Reset the flag
    }
    
    // Scroll event handler, throttled by requestAnimationFrame
    $(document).on("scroll", function () {
        // If an update is not already scheduled, schedule one
        if (!ticking) {
            window.requestAnimationFrame(updateNavbarClass);
            ticking = true; // Set the flag
        }
    });
    
    // Run once on load to ensure correct initial state if page is loaded mid-scroll
    updateNavbarClass();
});
