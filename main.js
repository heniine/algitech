
document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.textContent = "↑";
  scrollToTopBtn.id = "scrollToTop";
  scrollToTopBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px 15px;font-size:20px;display:none;background:#6366f1;color:#fff;border:none;border-radius:50%;cursor:pointer;z-index:9999;";
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Typing effect simulation (for .typing elements)
  const typingEl = document.querySelector('.typing');
  if (typingEl) {
    const text = typingEl.dataset.text || typingEl.textContent;
    typingEl.textContent = "";
    let i = 0;
    const type = () => {
      if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    type();
  }
});
