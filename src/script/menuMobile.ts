const menuMobile = () => {
  const menuMobile = document.getElementById("menuMobile") as HTMLElement;
  const openMenuMobile = document.getElementById(
    "openMenuMobile"
  ) as HTMLButtonElement;
  const closeMenuMobile = document.getElementById(
    "closeMenuMobile"
  ) as HTMLButtonElement;
  const linkALL = menuMobile.querySelectorAll<HTMLLinkElement>(
    ".header-menu-mobile a"
  );

  closeMenuMobile.onclick = () => {
    closeMenuMobile.classList.toggle("active");
    openMenuMobile.classList.toggle("active");

    if (closeMenuMobile.classList.contains("active")) {
      menuMobile.classList.add("open");
    } else {
      menuMobile.classList.remove("open");
    }
  };

  linkALL.forEach((link) => {
    link.onclick = () => {
      menuMobile.classList.remove("open");
      closeMenuMobile.classList.toggle("active");
      openMenuMobile.classList.toggle("active");
    };
  });
};

menuMobile();
