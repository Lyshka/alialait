import toastr from "toastr";

import { openThanksModal } from "./modal";
import axios from "axios";
import { Response } from "../types/response";

const formBlock = () => {
  const formBlock = document.getElementById("formBlock") as HTMLFormElement;

  const { openModal } = openThanksModal();

  formBlock.onsubmit = async (event: Event) => {
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

    const formData = new FormData();
    formData.append("tel", telValue);
    formData.append("message", messageValue);
    formData.append("formName", "formBlock");
    formData.append("action", "mail_to");

    try {
      const {
        data: { error, success },
      } = await axios.post<Response>(`/wp-admin/admin-ajax.php`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (success) {
        (event.target as HTMLFormElement).reset();
        openModal();
      } else {
        toastr.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
};
formBlock();

const formModal = () => {
  const orderForm = document.getElementById("orderForm") as HTMLFormElement;

  const { openModal } = openThanksModal();

  orderForm.onsubmit = async (event: Event) => {
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

    try {
      const formData = new FormData();
      formData.append("tel", telValue);
      formData.append("name", nameValue);
      formData.append("formName", "orderForm");
      formData.append("action", "mail_to");

      const {
        data: { error, success },
      } = await axios.post<Response>(`/wp-admin/admin-ajax.php`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (success) {
        (event.target as HTMLFormElement).reset();
        openModal();
      } else {
        toastr.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
};
formModal();
