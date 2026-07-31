const app = document.getElementById("prototypeApp");
const eventsScreen = app.querySelector('[data-screen="events"]');
const detailScreen = app.querySelector('[data-screen="detail"]');
const root = document.documentElement;
const THEME_STORAGE_KEY = "prototype-theme";

const defaultTheme = {
  primary: "#2922ea",
  secondary: "#ce4d4b",
  tertiary: "#107474",
  text: "#c6e14d"
};

const savedTheme = loadTheme();
applyTheme(savedTheme);

for (const card of app.querySelectorAll("[data-open-event]")) {
  card.addEventListener("click", () => {
    eventsScreen.classList.add("is-hidden");
    detailScreen.classList.remove("is-hidden");
  });
}

for (const item of app.querySelectorAll(".menu-item")) {
  item.addEventListener("click", () => {
    app.querySelectorAll(".menu-item").forEach((node) => node.classList.remove("is-active"));
    item.classList.add("is-active");

    const tab = item.dataset.tab;
    const viewButtonMap = {
      guests: "list",
      badges: "badge",
      timeline: "empty",
      report: "empty",
      edit: "empty"
    };

    const targetView = viewButtonMap[tab] || "empty";
    activateView(targetView);
  });
}

for (const button of app.querySelectorAll("[data-view]")) {
  button.addEventListener("click", () => activateView(button.dataset.view));
}

function activateView(viewName) {
  app.querySelectorAll("[data-view]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.view === viewName);
  });

  app.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.viewPanel !== viewName);
  });
}

function applyTheme(theme) {
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-tertiary", theme.tertiary);
  root.style.setProperty("--color-text", theme.text);
  root.style.setProperty("--shade", toRgba(theme.secondary, 0.18));
}

function loadTheme() {
  const rawTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (!rawTheme) {
    return defaultTheme;
  }

  try {
    const parsed = JSON.parse(rawTheme);
    return {
      primary: normalizeHex(parsed.primary, defaultTheme.primary),
      secondary: normalizeHex(parsed.secondary, defaultTheme.secondary),
      tertiary: normalizeHex(parsed.tertiary, defaultTheme.tertiary),
      text: normalizeHex(parsed.text, defaultTheme.text)
    };
  } catch {
    return defaultTheme;
  }
}

function normalizeHex(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }

  const candidate = value.trim();
  const isHex = /^#[0-9a-fA-F]{6}$/.test(candidate);
  return isHex ? candidate : fallback;
}

function toRgba(hex, alpha) {
  const safeHex = normalizeHex(hex, "#000000");
  const red = parseInt(safeHex.slice(1, 3), 16);
  const green = parseInt(safeHex.slice(3, 5), 16);
  const blue = parseInt(safeHex.slice(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
