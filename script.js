// Add your custom JavaScript interactions here

// Show project images on click
document.addEventListener("DOMContentLoaded", function() {
  const projectContent = document.querySelectorAll(".content");
  
  projectContent.forEach(content => {
    const image = content.querySelector(".project-image");
    if (image) {
      content.addEventListener("click", function() {
        image.classList.add("show-image", "animate-fade");
      });
    }
  });
});

