import toastr from "toastr";

import { openThanksModal } from "./modal";

const formBlock = () => {
  const formBlock = document.getElementById("formBlock") as HTMLFormElement;

  const { openModal } = openThanksModal();

  formBlock.onsubmit = (event: Event) => {
    event.preventDefault();

    const telValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "tel"
      ) as HTMLInputElement
    ).value;

    const messageValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "message"
      ) as HTMLInputElement
    ).value;

    const confValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "conf"
      ) as HTMLInputElement
    ).checked;

    if (telValue.length < 12) {
      toastr.error("Не правильный формат телефона!");
      return;
    }

    if (!confValue) {
        toastr.error(
          "Выдолжны согласиться с Политикой обработки персональных данных!"
        );
        return;
      }

    (event.target as HTMLFormElement).reset();
    openModal();
    console.log(telValue, messageValue);
  };
};
formBlock();

const formModal = () => {
  const orderForm = document.getElementById("orderForm") as HTMLFormElement;

  const { openModal } = openThanksModal();

  orderForm.onsubmit = (event: Event) => {
    event.preventDefault();

    const nameValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "name"
      ) as HTMLInputElement
    ).value;

    const telValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "tel"
      ) as HTMLInputElement
    ).value;

    const confValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "conf"
      ) as HTMLInputElement
    ).checked;

    if (nameValue.length < 2) {
      toastr.error("Заполните имя!");
      return;
    }

    if (telValue.length < 12) {
        toastr.error("Не правильный формат телефона!");
        return;
      }

    if (!confValue) {
      toastr.error(
        "Выдолжны согласиться с Политикой обработки персональных данных!"
      );
      return;
    }

    (event.target as HTMLFormElement).reset();
    openModal();
    console.log(telValue, nameValue);
  };
};
formModal();
