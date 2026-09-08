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

  if (document.body.classList.contains("home")) {
    const links = [...document.querySelectorAll("[data-nav-section]")];
    const sections = [...new Set(links.map((link) => link.dataset.navSection))]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let anchor = null;
    let queued = false;
    const setCurrent = (id) => {
      links.forEach((link) => {
        if (link.dataset.navSection === id) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };
    const update = () => {
      queued = false;
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (anchor) {
        const target = Math.max(0, Math.min(maxScroll,
          anchor.section.getBoundingClientRect().top + window.scrollY - offset));
        const arrived = Math.abs(window.scrollY - target) <= 2;
        // Keep the clicked item selected during smooth scrolling, including
        // anchors near the page bottom that cannot reach the top of the viewport.
        if (!anchor.arrived || arrived) {
          anchor.arrived = arrived;
          setCurrent(anchor.section.id);
          return;
        }
        anchor = null;
      }
      let current = sections[0];
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset + 24) current = section;
      });
      if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
        current = sections[sections.length - 1];
      }
      if (current) setCurrent(current.id);
    };
    const schedule = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    const selectAnchor = (id) => {
      const section = sections.find((item) => item.id === id);
      anchor = section ? { section, arrived: false } : null;
      if (section) setCurrent(id);
      schedule();
    };
    const syncHash = () => selectAnchor(window.location.hash.slice(1) || "main-content");
    const resumeTracking = () => {
      anchor = null;
      schedule();
    };
    links.forEach((link) => link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      selectAnchor(link.dataset.navSection);
      if (link.dataset.navSection === "main-content") {
        event.preventDefault();
        if (window.location.hash) history.pushState(null, "", link.href);
        window.scrollTo({ top: 0 });
      }
    }));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    window.addEventListener("wheel", resumeTracking, { passive: true });
    window.addEventListener("touchstart", resumeTracking, { passive: true });
    window.addEventListener("pointerdown", resumeTracking, { passive: true });
    document.addEventListener("keydown", (event) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) resumeTracking();
    });
    // A restored page may have been scrolled away from its original hash.
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) resumeTracking();
      else if (window.location.hash) syncHash();
      else schedule();
    });
    if (window.location.hash) syncHash();
    else update();
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
