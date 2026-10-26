const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");
const title = document.querySelector("#modal-title");
const meta = document.querySelector("[data-modal-meta]");
const role = document.querySelector("[data-modal-role]");
const work = document.querySelector("[data-modal-work]");
const interfaceSection = document.querySelector("[data-modal-interface]");
const caseStudies = {
  order: {
    title: "Order & Production Management System",
    meta: "Academic project · October–December 2025",
    role: "Led the UI/UX design and collaborated with the development team to implement design specifications.",
    work: "• Created wireframes and screen layouts for order and production management features.\n• Planned user-friendly interfaces and workflows.\n• Worked with teammates during implementation.",
    hasInterface: true,
  },
  enrollment: {
    title: "Enrollment System",
    meta: "Academic project · April–May 2025",
    role: "Designed and implemented the enrollment system using HTML, CSS, and C#.",
    work: "• Supported student enrollment and class schedule viewing.\n• Included administrator functions for accepting applications and updating class schedules.",
  },
  appointment: {
    title: "Appointment, Sales & Inventory Management System",
    meta: "Academic project · April–May 2025",
    role: "Led interface design and development and collaborated with teammates during implementation.",
    work: "• Designed system workflows and screen prototypes.\n• Focused on usability and efficiency in the interface.",
  },
};

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-case-study]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = caseStudies[button.dataset.caseStudy];
    title.textContent = project.title;
    meta.textContent = project.meta;
    role.textContent = project.role;
    work.textContent = project.work;
    interfaceSection.hidden = !project.hasInterface;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
  });
});

closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});
