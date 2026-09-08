(() => {
  "use strict";

  const menu = document.querySelector(".mobile-nav");
  if (menu) {
    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        menu.open = false;
      }),
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary").focus();
      }
    });
  }

  const list = document.querySelector("[data-publication-list]");
  if (list) {
    const tools = document.querySelector("[data-publication-tools]");
    const input = document.querySelector("[data-publication-search]");
    const buttons = [...tools.querySelectorAll("[data-filter]")];
    const status = document.querySelector("[data-publication-status]");
    const empty = document.querySelector("[data-publication-empty]");
    const papers = [...list.querySelectorAll("[data-paper]")];
    const normalize = (value) =>
      value
        .normalize("NFKD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "");
    const searchable = new Map(
      papers.map((paper) => [paper, normalize(paper.textContent)]),
    );
    let filter = "all";
    const update = () => {
      const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
      let count = 0;
      papers.forEach((paper) => {
        const match =
          (filter === "all" || paper.dataset.type === filter) &&
          terms.every((term) => searchable.get(paper).includes(term));
        paper.hidden = !match;
        if (match) count += 1;
      });
      buttons.forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.filter === filter),
        ),
      );
      status.textContent = `${count} of ${papers.length} publications`;
      empty.hidden = count !== 0;
    };
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        filter = button.dataset.filter;
        update();
      }),
    );
    input.addEventListener("input", update);
    document
      .querySelector("[data-publication-reset]")
      .addEventListener("click", () => {
        input.value = "";
        filter = "all";
        update();
        input.focus();
      });
    tools.hidden = false;
    update();
  }

  const printButton = document.querySelector("[data-print-cv]");
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener("click", () => window.print());
  }
})();
