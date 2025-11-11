// Auto-hide flash messages after 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  const flashMessages = document.querySelectorAll('[class*="animate-fade-in"]')
  flashMessages.forEach((message) => {
    setTimeout(() => {
      message.style.opacity = "0"
      message.style.transition = "opacity 0.3s ease-in-out"
      setTimeout(() => message.remove(), 300)
    }, 5000)
  })
})

// Mobile sidebar toggle
const sidebarToggle = document.getElementById("sidebar-toggle")
if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle("hidden")
  })
}
