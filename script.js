let accordian = document.querySelectorAll(".FAQ-accordian-title");
let accordianContent = document.querySelectorAll(".visible-content");
console.log(accordian);

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    for (let j = 0; j < accordian.length; j++) {
      if (j !== i) {
        accordianContent[j].classList.remove("active");
        accordian[j].childNodes[1].classList.remove("fa-times");
        accordian[j].childNodes[1].classList.add("fa-plus");
      }
    }
    if (this.childNodes[1].classList.contains("fa-plus")) {
      accordianContent[i].classList.add("active");
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else if (this.childNodes[1].classList.contains("fa-times")) {
      accordianContent[i].classList.remove("active");
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }
  });
}
