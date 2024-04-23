import IMask, { InputMaskElement } from "imask";

const phoneInput = [
  ...document.querySelectorAll('input[type="tel"]'),
] as InputMaskElement[];

phoneInput.forEach((el) => {
  IMask(el, {
    mask: "+375 (00) 000-00-00",
  });
});
