<script>
    // Wait for the page to load
    document.addEventListener("DOMContentLoaded", function() {
        
        // Select the elements we want to move
        const headline = document.querySelector('.headline');
        const intro = document.querySelector('.hero-footer');
        const nav = document.querySelector('.nav-bar');

        // Listen for the scroll event
        window.addEventListener('scroll', function() {
            
            // Get the current scroll position
            let scrollPosition = window.pageYOffset;

            // Apply different speeds (The lower the number, the slower it moves)
            // 'translateY' moves the element down as you scroll
            
            // Headline moves at 40% speed of scroll (Heavy feel)
            if(headline) {
                headline.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                headline.style.opacity = 1 - (scrollPosition / 700); // Fades out slowly
            }

            // Intro text moves at 15% speed (Stays closer to original position)
            if(intro) {
                intro.style.transform = `translateY(${scrollPosition * 0.15}px)`;
            }

            // Nav bar stays pinned but gets a subtle blur/fade if you want
            // (Optional: currently just stays fixed by default CSS, 
            // but we can add a class here if needed later)
        });
    });
</script>