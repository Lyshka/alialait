const modalForm = () => {
  const modalForm = document.getElementById("modalForm") as HTMLElement;
  const openModalFormElements =
    document.querySelectorAll<HTMLButtonElement>(".openModalForm");
  const closeButtonElemets =
    document.querySelectorAll<HTMLButtonElement>(".closeModal");

  const allModalElements = document.querySelectorAll<HTMLElement>(".modal");

  closeButtonElemets.forEach((closeModal) => {
    closeModal.onclick = () => {
      allModalElements.forEach((modal) => {
        modal.classList.remove("open");
      });
    };
  });

  openModalFormElements.forEach((openModalForm) => {
    openModalForm.onclick = () => {
      modalForm.classList.add("open");
    };
  });
};

modalForm();

export const openThanksModal = () => {
  const modalThanks = document.getElementById("modalThanks") as HTMLElement;

  const openModal = () => {
    modalThanks.classList.add("open");
  };

  return {openModal};
};
openThanksModal();
