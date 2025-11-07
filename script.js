

// navbar

  // <!-- slider js -->
   
        // Current slide index
        let currentSlide = 1;

        function showSlide(slideNumber) {
            // Hide all slides
            document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
            // Show the selected slide
            document.getElementById('slide' + slideNumber).classList.add('active');
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide > 3) currentSlide = 1;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            if (currentSlide < 1) currentSlide = 3;
            showSlide(currentSlide);
        }

        // Initialize the first slide
        showSlide(currentSlide);

        // Optional: Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
    
  //  <!-- ------ -->

  // infinte loop images
  const scrollContainers = document.querySelectorAll("#infiniteScroll--left");

scrollContainers.forEach((container) => {
	const scrollWidth = container.scrollWidth;
	let isScrollingPaused = false;

	window.addEventListener("load", () => {
		self.setInterval(() => {
			if (isScrollingPaused) {
				return;
			}
			const first = container.querySelector("article");

			if (!isElementInViewport(first)) {
				container.appendChild(first);
				container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
			}
			if (container.scrollLeft !== scrollWidth) {
				container.scrollTo(container.scrollLeft + 1, 0);
			}
		}, 15);
	});

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return rect.right > 0;
	}

	function pauseScrolling() {
		isScrollingPaused = true;
	}

	function resumeScrolling() {
		isScrollingPaused = false;
	}
	const allArticles = container.querySelectorAll("article");
	for (let article of allArticles) {
		article.addEventListener("mouseenter", pauseScrolling);
		article.addEventListener("mouseleave", resumeScrolling);
	}
});
// contact
 
    const ownerNumber = '923218922817'; // Your WhatsApp number

    window.onload = function() {
      // Get product name from URL
      const urlParams = new URLSearchParams(window.location.search);
      const product = urlParams.get('product') || 'your product';

      // Show product name on page
      document.getElementById('productName').textContent = product;

      // WhatsApp message
      const message = `Hello, I am interested in "${product}". Please share details.`;
      const whatsappLink = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

      // Update link
      document.getElementById('whatsappLink').href = whatsappLink;
    }
  