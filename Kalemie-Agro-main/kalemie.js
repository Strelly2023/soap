// Kalemie.js
document.addEventListener("DOMContentLoaded", () => {
  // === Mobile Navbar Toggle ===
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-navigation");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", (!expanded).toString());
      nav.classList.toggle("open");
    });
  }

  // === Rotating Banner Slideshow ===
  let bannerIndex = 0;
  function showBannerSlides() {
    const slides = document.querySelectorAll(".banner-slide");
    if (!slides.length) return;

    slides.forEach(slide => (slide.style.display = "none"));
    bannerIndex++;
    if (bannerIndex > slides.length) bannerIndex = 1;

    slides[bannerIndex - 1].style.display = "block";
    setTimeout(showBannerSlides, 4000); // rotate every 4s
  }
  showBannerSlides();

  // === Scroll-triggered Fade-in with Stagger ===
  const fadeEls = document.querySelectorAll(
    ".fade-in, .service-card, .product-card, .work-item, .impact-item, .about-card"
  );
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(fadeEls).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 150}ms`;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeEls.forEach((el) => observer.observe(el));

  // === Smooth Scroll for Internal Links ===
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // === Dynamic Year in Footer ===
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Contact Form & Fields Animation ===
  const contactForm = document.querySelector(".contact-form");
  const contactFields = contactForm
    ? Array.from(contactForm.querySelectorAll("input, select, textarea, button"))
    : [];
  const contactDropdown = document.querySelector("#requestType");

  // Make contact-grid visible immediately
  const contactGrid = document.querySelector(".contact-grid.fade-in");
  if (contactGrid) contactGrid.classList.add("show");

  function animateForm(value) {
    if (!contactForm) return;

    // Scroll to form
    contactForm.scrollIntoView({ behavior: "smooth", block: "start" });

    // Reset all fields for entrance animation
    contactFields.forEach((f) => {
      f.style.opacity = 0;
      f.style.transform = "translateY(20px)";
    });

    // Animate fields sequentially
    contactFields.forEach((field, i) => {
      setTimeout(() => {
        field.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        field.style.opacity = 1;
        field.style.transform = "translateY(0)";
      }, i * 120);
    });

    // Dropdown subtle fade + highlight
    if (contactDropdown && value) {
      setTimeout(() => {
        contactDropdown.classList.add("fade");
        setTimeout(() => {
          contactDropdown.value = value;
          contactDropdown.classList.add("highlight");
          contactDropdown.classList.remove("fade");
          setTimeout(() => contactDropdown.classList.remove("highlight"), 600);
        }, 100);
      }, contactFields.length * 120);
    }
  }

  // === Hero CTA buttons (Order / Quote) ===
  const heroOrderBtn = document.querySelector(".order-btn");
  const heroQuoteBtn = document.querySelector(".quote-btn");

  if (heroOrderBtn) heroOrderBtn.addEventListener("click", e => {
    e.preventDefault();
    animateForm("order");
  });

  if (heroQuoteBtn) heroQuoteBtn.addEventListener("click", e => {
    e.preventDefault();
    animateForm("quote");
  });

  // === Form Submission ===
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }

  // === Dropdown subtle fade-in on change ===
  if (contactDropdown) {
    contactDropdown.addEventListener("change", () => {
      contactDropdown.classList.remove("dropdown-fade");
      void contactDropdown.offsetWidth; // force reflow
      contactDropdown.classList.add("dropdown-fade");
    });
  }

  // === FAQ Accordion with toggle icons ===
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      const icon = button.querySelector(".faq-icon");

      faqItem.classList.toggle("active");

      // Optional: close others for true accordion
      document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });

      // Update icons
      document.querySelectorAll(".faq-item .faq-icon").forEach(ic => {
        ic.textContent = ic.parentElement.parentElement.classList.contains("active") ? "➖" : "➕";
      });
    });
  });

  // === Back to Top Button ===
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
