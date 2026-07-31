const colorForm = document.getElementById("color-config-form");
const resetThemeButton = document.getElementById("reset-theme");
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
hydrateThemeInputs(savedTheme);

colorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(colorForm);
  const selectedTheme = {
    primary: String(formData.get("primary") || "").trim(),
    secondary: String(formData.get("secondary") || "").trim(),
    tertiary: String(formData.get("tertiary") || "").trim(),
    text: String(formData.get("text") || "").trim()
  };

  const normalizedTheme = {
    primary: normalizeHex(selectedTheme.primary, defaultTheme.primary),
    secondary: normalizeHex(selectedTheme.secondary, defaultTheme.secondary),
    tertiary: normalizeHex(selectedTheme.tertiary, defaultTheme.tertiary),
    text: normalizeHex(selectedTheme.text, defaultTheme.text)
  };

  persistTheme(normalizedTheme);
  window.location.href = "app.html";
});

resetThemeButton.addEventListener("click", () => {
  applyTheme(defaultTheme);
  persistTheme(defaultTheme);
  hydrateThemeInputs(defaultTheme);
});

function applyTheme(theme) {
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-tertiary", theme.tertiary);
  root.style.setProperty("--color-text", theme.text);
  root.style.setProperty("--shade", toRgba(theme.secondary, 0.18));
}

function hydrateThemeInputs(theme) {
  colorForm.elements.primary.value = theme.primary;
  colorForm.elements.secondary.value = theme.secondary;
  colorForm.elements.tertiary.value = theme.tertiary;
  colorForm.elements.text.value = theme.text;
}

function persistTheme(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
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
