// Ensure this script is run after jQuery is loaded
$(function () {
    // 1. Navbar Scroll Optimization
    const $nav = $(".navbar");
    // Get the scroll threshold from the CSS logic (50px is the standard default)
    const SCROLL_THRESHOLD = 50; 
    
    // State flag to prevent multiple updates per frame
    let ticking = false;
    
    // Function to perform the actual visual update (DOM manipulation)
    function updateNavbarClass() {
        // Check if the scroll position is past the threshold
        const isScrolled = window.scrollY > SCROLL_THRESHOLD;
        
        // Use toggleClass which is efficient
        $nav.toggleClass("scrolled", isScrolled);
        
        // Reset the flag to allow the next frame update
        ticking = false; 
    }
    
    // Scroll event handler, throttled by requestAnimationFrame
    $(document).on("scroll", function () {
        // Only schedule an update if one is not already scheduled
        if (!ticking) {
            // Use requestAnimationFrame for the smoothest, most performant visual updates
            window.requestAnimationFrame(updateNavbarClass);
            ticking = true; // Set the flag
        }
    });
    
    // Run once on load to ensure the correct state if the page is loaded mid-scroll
    updateNavbarClass();
    
    // 2. OWL Carousel Initialization (Retained from index.html)
    // Your HTML already has this logic in the <script> block, 
    // but it's good practice to keep all custom JS here.
    jQuery("#reviews").owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 20,
        mouseDrag: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 2 },
            1024: { items: 2 },
            1366: { items: 2 }
        }
    });
});
