(function () {
  const grid = document.getElementById("grid");
  const stats = document.getElementById("stats");
  const filtersEl = document.getElementById("filters");
  const searchEl = document.getElementById("search");
  const orderedEl = document.getElementById("ordered");

  orderedEl.textContent = new Date().toISOString().slice(0, 10);

  // ---- stats ----
  const counts = { live: 0, wip: 0, sleeping: 0, planning: 0 };
  PROJECTS.forEach(p => { counts[p.status] = (counts[p.status] || 0) + 1; });

  const total = PROJECTS.length;
  const statBlocks = [
    { tone: "total", num: total, label: "Total" },
    { tone: "live", num: counts.live, label: "Live" },
    { tone: "wip", num: counts.wip, label: "In Forge" },
    { tone: "sleeping", num: counts.sleeping, label: "Sleeping" },
    { tone: "planning", num: counts.planning, label: "Planned" }
  ];
  stats.innerHTML = statBlocks.map(s =>
    `<div class="stat" data-tone="${s.tone}"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`
  ).join("");

  // ---- escape helper ----
  const esc = s => String(s || "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  }[c]));

  // ---- render ----
  function render(filter, query) {
    const q = (query || "").trim().toLowerCase();
    let html = "";

    const sectionMeta = [
      { status: "live", title: "Live & Deployed", glyph: "◉" },
      { status: "wip", title: "In the Forge", glyph: "◐" },
      { status: "planning", title: "On the Blueprint", glyph: "◇" },
      { status: "sleeping", title: "Sleeping Giants", glyph: "◌" }
    ];

    sectionMeta.forEach(meta => {
      if (filter !== "all" && filter !== meta.status) return;
      let items = PROJECTS.filter(p => p.status === meta.status);
      if (q) {
        items = items.filter(p => {
          const hay = [
            p.name, p.tagline, p.desc, p.path,
            ...(p.stack || [])
          ].join(" ").toLowerCase();
          return hay.includes(q);
        });
      }
      items.sort((a, b) => a.tier - b.tier);
      if (!items.length) return;

      html += `
        <div class="section-head">
          <span class="glyph">${meta.glyph}</span>
          <h2>${meta.title}</h2>
          <span class="count">${items.length}</span>
          <span class="line"></span>
        </div>`;

      items.forEach(p => {
        const stackHtml = (p.stack || [])
          .slice(0, 7)
          .map(t => `<span class="tag">${esc(t)}</span>`)
          .join("");
        const overflow = (p.stack || []).length > 7
          ? `<span class="tag">+${p.stack.length - 7}</span>` : "";

        const links = [];
        if (p.url) links.push(`<a href="${esc(p.url)}" target="_blank" rel="noopener" class="link-live">live ↗</a>`);
        if (p.repo) links.push(`<a href="${esc(p.repo)}" target="_blank" rel="noopener" class="link-repo" title="Source on GitHub">gh ↗</a>`);
        links.push(`<span class="where" title="${esc(p.path)}">${esc(p.path)}</span>`);

        html += `
          <article class="card" data-status="${esc(p.status)}">
            <div class="card-head">
              <div>
                <h3 class="card-title">${esc(p.name)}</h3>
                <p class="card-sub">${esc(p.tagline)}</p>
              </div>
              <span class="badge" data-status="${esc(p.status)}">${esc(STATUS_LABEL[p.status] || p.status)}</span>
            </div>
            ${p.desc ? `<p class="desc">${esc(p.desc)}</p>` : ""}
            <div class="stack">${stackHtml}${overflow}</div>
            ${p.notes ? `<p class="desc mono" style="font-size:11px;color:var(--ink-mute);">${esc(p.notes)}</p>` : ""}
            <div class="card-foot">
              <div class="links">${links.join("")}</div>
            </div>
          </article>`;
      });
    });

    if (!html) {
      html = `<div class="empty">No giants match that filter. Try another status or clear the search.</div>`;
    }
    grid.innerHTML = html;
  }

  // ---- wire up ----
  let activeFilter = "all";
  filtersEl.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filtersEl.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render(activeFilter, searchEl.value);
  });
  searchEl.addEventListener("input", () => render(activeFilter, searchEl.value));

  render(activeFilter, "");
})();