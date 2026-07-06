(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const CONTACT_EMAIL = "hello@homeownerstrustfund.com";

  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const topic = String(fd.get("topic") || "").trim();
      const message = String(fd.get("message") || "").trim();

      if (!name || !email || !topic || !message) {
        if (status) status.textContent = "Please complete all fields.";
        return;
      }

      const subject = encodeURIComponent(`HTF Contact: ${topic}`);
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Topic: ${topic}`,
          "",
          message,
          "",
          "Sent from HomeOwnersTrustFund.com",
        ].join("\n")
      );

      const mailto = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${subject}&body=${body}`;
      window.location.href = mailto;

      if (status) status.textContent = "Opening your email client.";
      form.reset();
    });
  }
})();

