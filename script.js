document.querySelectorAll(".rating").forEach((rating) => {
  let stars = rating.querySelectorAll(".star");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      // avval hamma yulduzni o‘chir
      stars.forEach((s) => s.classList.remove("active"));

      // bosilgandan keyin shu rating ichidagi yulduzlarni yoq
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
      }
    });
  });
});
