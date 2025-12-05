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
document.getElementById("title").onclick = () => {
  window.location.href = "index.html";
};
document.getElementById("titlee").onclick = () => {
  window.location.href = "index.html";
};
document.getElementById("titleee").onclick = () => {
  window.location.href = "index.html";
};
document.getElementById("notfound").onclick = () => {
  window.location.href = "not-found.html";
};
document.querySelectorAll(".footer__left_title").forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = "not-found.html";
  });
});
