// WhatsApp Order Button Logic
const whatsappNumber = "233256111515"; //  WhatsApp number

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const message = `Hello FARM2PACK FOODS, I would like to order ${product}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});

// Scroll Animation for Products and Why Section
const products = document.querySelectorAll(".product");
const whyItems = document.querySelectorAll(".why");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  products.forEach(product => {
    const boxTop = product.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      product.classList.add("show");
    }
  });

  whyItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("show");
    }
  });
});

// 2. Smooth Scrolling Logic
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 3. Navigation logic
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById('menu-icon');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (menuIcon && mainNav) {
        menuIcon.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the menu
            mainNav.classList.toggle('active');
        });

        // Close the menu when a link is clicked (important for UX)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});