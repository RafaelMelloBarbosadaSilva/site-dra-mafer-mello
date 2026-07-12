const SITE_CONFIG = {
  instagramUrl: "https://www.instagram.com/dra.mafermello/",
  whatsappNumber: "+55 35 99715-6033",
};

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const contactLinks = document.querySelectorAll("[data-contact-link]");
const filterButtons = document.querySelectorAll("[data-filter]");
const procedureCards = document.querySelectorAll(".procedure-card");
const leadForm = document.querySelector("#lead-form");

function buildContactUrl(message = "") {
  const cleanWhatsappNumber = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");

  if (cleanWhatsappNumber) {
    const baseUrl = `https://wa.me/${cleanWhatsappNumber}`;
    return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
  }

  return SITE_CONFIG.instagramUrl;
}

function defaultMessage() {
  return "Olá! Vim pelo site e gostaria de agendar uma avaliação com a Dra. Maria Fernanda Mello.";
}

contactLinks.forEach((link) => {
  link.href = buildContactUrl(link.dataset.whatsappMessage || defaultMessage());
  link.target = "_blank";
  link.rel = "noreferrer";
});

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    procedureCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const name = formData.get("nome")?.toString().trim();
  const phone = formData.get("telefone")?.toString().trim();
  const interest = formData.get("interesse")?.toString().trim();
  const message = formData.get("mensagem")?.toString().trim();

  const contactMessage = [
    `Olá! Vim pelo site e gostaria de agendar uma avaliação com a Dra. Maria Fernanda Mello.`,
    name ? `Nome: ${name}` : "",
    phone ? `Meu WhatsApp: ${phone}` : "",
    interest ? `Tenho Interesse em ${interest}` : "",
    message ? `Mensagem: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(buildContactUrl(contactMessage), "_blank", "noopener,noreferrer");
});

let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    header?.classList.toggle("is-compact", currentScrollY > 40);
    lastScrollY = currentScrollY;
  },
  { passive: true }
);
