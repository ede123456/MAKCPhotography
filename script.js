// ===== Header Scroll Effect =====
const header = document.getElementById("header")

function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

window.addEventListener("scroll", handleScroll)

// ===== Mobile Navigation =====
const menuToggle = document.getElementById("menuToggle")
const nav = document.getElementById("nav")
const navLinks = document.querySelectorAll(".nav-link")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  nav.classList.toggle("active")
  document.body.style.overflow = nav.classList.contains("active") ? "hidden" : ""
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    nav.classList.remove("active")
    document.body.style.overflow = ""
  })
})

// ===== Portfolio Filter =====
const filterButtons = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    const filter = button.dataset.filter

    // Filter items
    portfolioItems.forEach((item) => {
      if (filter === "todo" || item.dataset.category === filter) {
        item.classList.remove("hidden")
      } else {
        item.classList.add("hidden")
      }
    })
  })
})

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = header.offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Formulario enviado:", data)

  // Show success message
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.")

  // Reset form
  contactForm.reset()
})

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})
