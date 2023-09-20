const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    console.log("click");
    e.preventDefault(); // сброс стандартного поведения
    const blockID = anchor.getAttribute("href").slice(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth", // определяет плавность прокрутки
      block: "start", // выравнивание по вертикали
    });
  });
}
