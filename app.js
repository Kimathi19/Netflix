document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    item.addEventListener("toggle", function () {
      if (this.open) {
        accordionItems.forEach((el) => {
          if (el !== this) {
            el.removeAttribute("open");
          }
        });
      }
    });
  });
});
