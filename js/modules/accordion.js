export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);

    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.toggleClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion
  addAccordioEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // Ativar função
  init() {
    if (this.accordionList.length) {
      // Ativar função
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordioEvent();
    }
    return this;
  }
}
